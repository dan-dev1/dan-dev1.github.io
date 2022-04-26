var socket = io();

const constraints = { audio: false, video: true };
const configuration = { iceServers: [{ urls: 'stun:stun1.l.google.com:19302' }] };
const pc = new RTCPeerConnection(configuration);

const selfView = document.getElementById("vid1");
const remoteView = document.getElementById("vid2");

async function start () {
	try {
		// Get local stream, show it in self-view, and add it to be sent.
		const stream = await navigator.mediaDevices.getUserMedia(constraints);
		stream.getTracks().forEach((track) =>
		pc.addTrack(track, stream));
		selfView.srcObject = stream;
	} catch (err) {
		console.error(err);
	}
}
start();

pc.onnegotiationneeded = async () => {
	try {
		await pc.setLocalDescription(await pc.createOffer());
		// Send the offer to the other peer.
		socket.emit("signal_server", { desc: pc.localDescription });
	} catch (err) {
		console.error(err);
	}
};

socket.on("signal_client", async ({desc, candidate}) => {
	try {
		if (desc) {
			console.log(desc);
			// If you get an offer, you need to reply with an answer.
			if (desc.type == 'offer') {
				pc.setRemoteDescription(desc);
				const stream =
					await navigator.mediaDevices.getUserMedia(constraints);
				stream.getTracks().forEach((track) =>
					pc.addTrack(track, stream));
				pc.setLocalDescription(pc.createAnswer());
				socket.emit("signal_server", { desc: pc.localDescription });
			} else if (desc.type === 'answer') {
				pc.setRemoteDescription(desc);
			} else {
				console.log('Unsupported SDP type.');
			}
		} else if (candidate) {
			pc.addIceCandidate(candidate);
		}
	} catch (err) {
		console.error(err);
	}
});

// Send any ice candidates to the other peer.
pc.onicecandidate = ({ candidate }) => socket.emit("signal_server", { candidate });

// Once remote track media arrives, show it in remote video element.
pc.ontrack = (event) => {
	// Don't set srcObject again if it is already set.
	if (remoteView.srcObject) return;
	remoteView.srcObject = event.streams[0];
};


/*
// handles JSON.stringify/parse
const constraints = { audio: true, video: true };
const configuration = { iceServers: [{ urls: 'stun:stun1.l.google.com:19302' }] };
const pc = new RTCPeerConnection(configuration);

const selfView = document.getElementById("vid1");
const remoteView = document.getElementById("vid2");

// Once remote track media arrives, show it in remote video element.
pc.ontrack = (event) => {
	// Don't set srcObject again if it is already set.
	if (remoteView.srcObject) return;
	remoteView.srcObject = event.streams[0];
};

*/