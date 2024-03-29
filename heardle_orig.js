var n_guesses = 6;
var guess_secs = [1, 2, 4, 8, 16, 30];
var current_guess = 0;

var song_list = [{ url: "https://soundcloud.com/thexxofficial/intro", answer: "The xx - Intro" }, { url: "https://soundcloud.com/dualipa/levitating", answer: "Dua Lipa - Levitating" }, { url: "https://soundcloud.com/adelemusic/set-fire-to-the-rain-1", answer: "Adele - Set Fire to the Rain" }, { url: "https://soundcloud.com/coldplay/the-scientist", answer: "Coldplay - The Scientist" }, { url: "https://soundcloud.com/bennyblanco/eastside", answer: "Benny Blanco - Eastside (feat. Halsey and Khalid)" }, { url: "https://soundcloud.com/nirvana/smells-like-teen-spirit-1", answer: "Nirvana - Smells Like Teen Spirit" }, { url: "https://soundcloud.com/amalaofficial/streets", answer: "Doja cat - Streets" }, { url: "https://soundcloud.com/beyonce/halo", answer: "Beyoncé - Halo" }, { url: "https://soundcloud.com/fleetwoodmacofficial/dreams", answer: "Fleetwood Mac - Dreams" }, { url: "https://soundcloud.com/kanyewest/black-skinhead", answer: "Kanye West - Black Skinhead" }, { url: "https://soundcloud.com/arianagrande/7-rings", answer: "Ariana Grande - 7 rings" }, { url: "https://soundcloud.com/kingsofleon/use-somebody", answer: "Kings of Leon - Use Somebody" }, { url: "https://soundcloud.com/outkast-music/ms-jackson", answer: "Outkast - Ms. Jackson" }, { url: "https://soundcloud.com/secret-service-862007284/thats-what-i-want", answer: "Lil Nas X - That's What I Want" }, { url: "https://soundcloud.com/rihanna/rude-boy", answer: "Rihanna - Rude Boy" }, { url: "https://soundcloud.com/whitneyhouston/i-wanna-dance-with-somebody-1", answer: "Whitney Houston - I Wanna Dance With Somebody (Who Loves Me)" }, { url: "https://soundcloud.com/wheatus-official/teenage-dirtbag-1", answer: "Wheatus - Teenage Dirtbag" }, { url: "https://soundcloud.com/lizzomusic/truth-hurts", answer: "Lizzo - Truth Hurts" }, { url: "https://soundcloud.com/blurofficial/song-2", answer: "Blur - Song 2" }, { url: "https://soundcloud.com/childish-gambino/redbone", answer: "Childish Gambino - Redbone" }, { url: "https://soundcloud.com/madonna/like-a-virgin-album-version", answer: "Madonna - Like a Virgin" }, { url: "https://soundcloud.com/daftpunkofficialmusic/harder-better-faster", answer: "Daft Punk - Harder, Better, Faster, Stronger" }, { url: "https://soundcloud.com/al-green-official/lets-stay-together-5", answer: "Al Green - Let's Stay Together" }, { url: "https://soundcloud.com/atlanticrecords/locked-out-of-heaven", answer: "Bruno Mars - Locked Out of Heaven" }, { url: "https://soundcloud.com/wizkid-official/track-11", answer: "Wizkid - Essence (feat. Tems)" }, { url: "https://soundcloud.com/destinys-child-official/independent-women-pt-i-3", answer: "Destiny's Child - Independent Women, Pt. 1" }, { url: "https://soundcloud.com/thekidlaroi/stay", answer: "The Kid LAROI. - Stay (feat. Justin Bieber)" }, { url: "https://soundcloud.com/linkin_park/numb", answer: "Linkin Park - Numb" }, { url: "https://soundcloud.com/markronson/valerie-version-revisited", answer: "Mark Ronson - Valerie (feat. Amy Winehouse)" }, { url: "https://soundcloud.com/dj-jazzy-jeff-the-fresh-prince/summertime-single-edit-1", answer: "DJ Jazzy Jeff & The Fresh Prince - Summertime" }, { url: "https://soundcloud.com/dollyparton/jolene-11", answer: "Dolly Parton - Jolene" }, { url: "https://soundcloud.com/foofighters/learn-to-fly", answer: "Foo Fighters - Learn To Fly" }, { url: "https://soundcloud.com/missyelliott/get-ur-freak-on", answer: "Missy Elliott - Get Your Freak On" }, { url: "https://soundcloud.com/aceofbaseofficial/all-that-she-wants", answer: "Ace of Base - All That She Wants" }, { url: "https://soundcloud.com/iamcardib/up-1", answer: "Cardi B - Up" }, { url: "https://soundcloud.com/rick-astley-official/never-gonna-give-you-up-7", answer: "Rick Astley - Never Gonna Give You Up" }, { url: "https://soundcloud.com/miauk/paper-planes", answer: "M.I.A. - Paper Planes" }, { url: "https://soundcloud.com/daryl-hall-john-oates/you-make-my-dreams-remastered", answer: "Daryl Hall and John Oates - You Make My Dreams (Come True)" }, { url: "https://soundcloud.com/brunomars/bruno-mars-anderson-paak-silk", answer: "Silk Sonic - Leave The Door Open" }, { url: "https://soundcloud.com/spice-girls-official/wannabe-radio-edit", answer: "Spice Girls - Wannabe" }, { url: "https://soundcloud.com/ledzeppelin/immigrant-song-1", answer: "Led Zeppelin - Immigrant Song" }, { url: "https://soundcloud.com/fugees/ready-or-not-1", answer: "Fugees - Ready Or Not" }, { url: "https://soundcloud.com/abba-official/dancing-queen-1", answer: "Abba - Dancing Queen" }, { url: "https://soundcloud.com/luthervandrossmusic/never-too-much-2", answer: "Luther Vandross - Never Too Much" }, { url: "https://soundcloud.com/johnlegend/ordinary-people-1", answer: "John Legend - Ordinary People" }, { url: "https://soundcloud.com/red-hot-chili-peppers-official/californication", answer: "Red Hot Chili Peppers - Californication" }, { url: "https://soundcloud.com/originalkoffee/toast", answer: "Koffee - Toast" }, { url: "https://soundcloud.com/official-p-nk/get-the-party-started", answer: "Pink - Get The Party Started" }, { url: "https://soundcloud.com/camilacabello/my-oh-my-feat-dababy", answer: "Camila Cabello - My Oh My (feat. DaBaby)" }, { url: "https://soundcloud.com/oasisofficial/wonderwall-2", answer: "Oasis - Wonderwall" }, { url: "https://soundcloud.com/cheryl-lynn-official/got-to-be-real-single-version", answer: "Cheryl Lynn - Got To Be Real" }, { url: "https://soundcloud.com/fatboyslim/09-praise-you", answer: "Fatboy Slim - Praise You" }, { url: "https://soundcloud.com/annie-lennox-official/walking-on-broken-glass", answer: "Annie Lennox - Walking On Broken Glass" }, { url: "https://soundcloud.com/arcticmonkeys/i-bet-you-look-good-on-the", answer: "Arctic Monkeys - I Bet You Look Good On The Dancefloor" }, { url: "https://soundcloud.com/snoopdogg/young-wild-free-feat-bruno-1", answer: "Snoop Dogg & Wiz Khalifa - Young, Wild & Free (ft. Bruno Mars)" }, { url: "https://soundcloud.com/harrystyles/adore-you", answer: "Harry Styles - Adore You" }, { url: "https://soundcloud.com/shakira/whenever-wherever", answer: "Shakira - Whenever, Wherever" }, { url: "https://soundcloud.com/markmorrisonmusic/return-of-the-mack-c-j-street", answer: "Mark Morrison - Return Of The Mack" }, { url: "https://soundcloud.com/lauryn-hill-official/ex-factor", answer: "Lauryn Hill - Ex-Factor" }, { url: "https://soundcloud.com/rolling-stones-official/i-cant-get-no-satisfaction-3", answer: "Rolling Stones - (I Can't Get No) Satisfaction" }, { url: "https://soundcloud.com/amerie-official/1-thing", answer: "Amerie - 1 Thing" }, { url: "https://soundcloud.com/joanjettandtheblackhearts/i-love-rock-n-roll", answer: "Joan Jett & The Blackhearts - I Love Rock 'n' Roll" }];
var addtional_guesses = ["Lil Uzi Vert - XO Tour Llif3", "Wham! - Last Christmas", "Wham! - Wake Me Up Before You Go-Go", "Wham! - Club Tropicana", "DJ Khaled - Wild Thoughts (feat. Rihanna & Bryson Tiller)", "Dua Lipa - New Rules", "Lil Nas X - Old Town Road", "Lil Nas X - Panini", "Lil Nas X - Rodeo", "Lil Nas X - Industry Baby", "Marshmello - FRIENDS", "Marshmello - Alone", "Marshmello - Shockwave", "Toto - Africa", "Lil Jon - Get Low (feat. Ying Yang Twins)", "Cardi B - Bodak Yellow (feat. Kodak Black)", "Ed Sheeran - Shape of You", "The Kid LAROI. - Without You", "The Kid LAROI. - Still Chose You", "Eurythmics - Sweet Dreams (Are Made of This)", "Eurythmics - There Must Be An Angel", "The Chainsmokers - High", "The Chainsmokers feat. Halsey - Closer", "Katy Perry - Dark Horse (feat. Juicy J)", "Katy Perry - Roar", "Katy Perry - I Kissed A Girl", "Katy Perry - This Is How We Do", "Michael Jackson - Rock with You", "Michael Jackson - Billie Jean", "Michael Jackson - Bad", "Michael Jackson - Wanna Be Startin' Somethin'", "Michael Jackson - Beat It", "Michael Jackson - P.Y.T", "Rita Ora - Your Song", "Rita Ora - Let You Love Me", "Rita Ora - I Will Never Let You Down", "Rita Ora - Anywhere", "Wiz Khalifa - See You Again (feat. Charlie Puth)", "Wiz Khalifa - Black And Yellow", "Wiz Khalifa - Still Wiz", "Wiz Khalifa - Can't Stay Sober", "Adele - Someone Like You", "Adele - Easy On Me", "Adele - Chasing Pavements", "Madonna - Like a Prayer", "Madonna - Material Girl", "Madonna - Holiday", "Madonna - Vogue", "Carly Rae Jepsen - Call Me Maybe", "Adele - Rolling in the Deep", "Otis Redding - Try A Little Tenderness", "Otis Redding - I've Been Loving You Too Long", "Otis Redding - These Arms of Mine", "Lauv - I Like Me Better", "Daft Punk - One More Time", "Daft Punk - Around The World", "Daft Punk - Da Funk", "Daft Punk - Technologic", "Lynyrd Skynyrd - Sweet Home Alabama", "Sia - Cheap Thrills", "twentyonepilots - Stressed Out", "Mariah Carey - All I Want for Christmas Is You", "Future - Life Is Good (feat. Drake)", "Khalid - Location", "Roddy Ricch - The Box", "Jay-Z - Hard Knock Life (Ghetto Anthem)", "Jay-Z - Empire State Of Mind", "Jay-Z - Izzo (Hova)", "Jay-Z - 99 Problems", "Jay-Z - Dirt Off Your Shoulder", "Lewis Capaldi - Someone You Loved", "Lewis Capaldi - Before You Go", "Lewis Capaldi - Hold Me While You Wait", "Tracy Chapman - Fast Car", "XXXTENTACION - SAD!", "Oasis - Stand by Me", "Oasis - Don't Look Back In Anger", "Oasis - Champagne Supernova", "Prince - Kiss", "Prince - 1999", "Prince - When Doves Cry", "Prince - Purple Rain", "Al Green - How Can You Mend A Broken Heart?", "Al Green - Tired of Being Alone", "Al Green - Love and Happiness", "Al Green - Take Me To the River", "Al Green - I'm Still in Love With You", "David Bowie - Heroes", "David Bowie - Life on Mars", "David Bowie - Space Oddity", "David Bowie - Let's Dance", "Aretha Franklin - Respect", "Aretha Franklin - A Natural Woman", "Aretha Franklin - I Say A Little Prayer", "Migos - Bad and Boujee (Feat. Lil Uzi Vert)", "Migos - Versace", "Migos - Walk It Talk It", "Migos - MotorSport (feat. Nicki Minaj and Cardi B)", "Ed Sheeran & Justin Bieber - I Don't Care", "Ed Sheeran - Thinking Out Loud", "Ed Sheeran - Bad Habits", "Ed Sheeran - Castle on the Hill", "Bruno Mars - 24K Magic", "Duran Duran - Hungry Like The Wolf", "Duran Duran - Girls on Film", "Duran Duran - A View To a Kill", "Duran Duran - Rio", "Coldplay - Yellow", "Coldplay - Fix You", "Coldplay - Clocks", "Eagles - Hotel California", "Eagles - Lyin' Eyes", "Eagles - Heartache Tonight", "Eagles - New Kid In Town", "Calvin Harris - Slide (feat. Frank Ocean & Migos)", "Hozier - Take Me To Church", "Sean Paul - Temperature", "Sean Paul - Gimme the Light", "Sean Paul - Get Busy", "Sean Paul - I'm Still In Love With You", "Cardi B - WAP feat. Megan Thee Stallion", "Goo Goo Dolls - Iris", "XXXTENTACION - Jocelyn Flores", "Linkin Park - In the End", "Linkin Park - Crawling", "Linkin Park - Burn It Down", "ZAYN - PILLOWTALK", "ZAYN - Better", "ZAYN - Vibez", "ZAYN - Dusk till Dawn (feat. Sia)", "Jason Mraz - I'm Yours", "Doja Cat - Kiss Me More (feat. SZA)", "Doja Cat - Woman", "Doja Cat - Say So (feat. Nicki Minaj)", "Leona Lewis - Bleeding Love", "Leona Lewis - A Moment Like This", "Leona Lewis - Better In Time", "Leona Lewis - Run", "XXXTENTACION - Moonlight", "Mark Ronson - Uptown Funk (feat. Bruno Mars)", "Mark Ronson - Nothing Breaks Like a Heart (feat. Miley Cyrus)", "Mark Ronson - Find U Again (feat. Camila Cabello)", "Megan Thee Stallion - Savage", "Megan Thee Stallion - Thot Shit", "Megan Thee Stallion - Girls In the Hood", "Megan Thee Stallion - Hot Girl Summer (feat. Nicki Minaj & Ty Dolla Sign)", "Jason Derulo - Want to Want Me", "Jason Derulo - Ridin' Solo", "Jason Derulo - Talk Dirty (feat. 2 Chainz)", "Jason Derulo - Wiggle (feat. Snoop Dogg)", "OneRepublic - Counting Stars", "OneRepublic - Apologize", "OneRepublic - Rescue Me", "OneRepublic - Lose Somebody (feat. Kygo)", "24kGoldn - Mood (feat. iann dior)", "Fetty Wap - Trap Queen", "Adele - Hello", "The Fray - How to Save a Life", "Train - Drops of Jupiter (Tell Me)", "Train - Drive By", "Train - Hey, Soul Sister", "The Script - Breakeven", "The Script - Superheroes", "The Script - For The First Time", "Calvin Harris - Summer", "Calvin Harris - This Is What You Came For (feat. Rihanna)", "Calvin Harris - Feels (feat. Pharrell Williams, Katy Perry and Big Sean)", "Calvin Harris - One kiss (feat. Dua Lipa)", "Marshmello - Silence (feat. Khalid)", "Alan Walker - Faded", "Lil Nas X - MONTERO (Call Me By Your Name)", "Bruno Mars - That's What I Like", "Bruno Mars - Treasure", "Franz Ferdinand - Take Me Out", "Arctic Monkeys - Do I Wanna Know?", "Arctic Monkeys - Why'd You Only Call Me When You're High?", "Arctic Monkeys - When the Sun Goes Down", "Daryl Hall and John Oates - Maneater", "Daryl Hall and John Oates - Out of Touch", "Daryl Hall and John Oates - Rich Girl", "Daryl Hall and John Oates - Can't Go for That (No Can Do)", "French Montana - Unforgettable (feat. Swae Lee)", "The Chainsmokers - Don't Let Me Down (feat. Daya)", "George Ezra - Shotgun", "Tones and I - Dance Monkey", "Miley Cyrus - Wrecking Ball", "Miley Cyrus - Malibu", "Miley Cyrus - Midnight Sky", "Miley Cyrus - We Can't Stop", "Ace Of Base - The Sign", "Ace Of Base - Beautiful Life", "Clean Bandit - Rockabye (feat. Sean Paul & Anne-Marie)", "Ed Sheeran - Perfect", "Kings of Leon - Sex on Fire", "Kings of Leon - Wait for Me", "Kings of Leon - Closer", "Kings of Leon - Pyro", "Kings of Leon - Revelry", "James Blunt - You're Beautiful", "Vance Joy - Riptide", "Vance Joy - Mess Is Mine", "Vance Joy - Georgia", "Missy Elliott - One Minute Man (feat. Ludacris)", "Missy Elliott - Lose Control (feat. Ciara & Fatman Scoop)", "Missy Elliott - Work It", "Missy Elliott - The Rain (Supa Dupa Fly)", "Joy Division - Love Will Tear Us Apart", "Joy Division - Disorder", "Joy Division - Transmission", "Joy Division - Atmosphere", "Notorious B.I.G. - Juicy", "Notorious B.I.G. - One More Chance (Remix)", "Notorious B.I.G. - Hypnotize", "Neil Young - Heart Of Gold", "Neil Young - Harvest Moon", "Neil Young - Down By The River", "Pet Shop Boys - West End Girls", "Pet Shop Boys - Go West", "Pet Shop Boys - It's A Sin", "Travis Scott - SICKO MODE", "Kate Bush - Wuthering Heights", "Kate Bush - This Woman's Work", "Kate Bush - Babooshka", "Kate Bush - Cloudbusting", "Seal - Crazy", "Seal - Kiss From A Rose", "Foo Fighters - Everlong", "Foo Fighters - My Hero", "Foo Fighters - The Pretender", "Foo Fighters - Best of You", "Red Hot Chili Peppers - Zephyr Song", "Red Hot Chili Peppers - By The Way", "Red Hot Chili Peppers - Under The Bridge", "Red Hot Chili Peppers - Don't Stop", "Alanis Morissette - Hand In My Pocket", "Alanis Morissette - Ironic", "Alanis Morissette - Thank U", "Alanis Morissette - Head over Feet", "Phil Collins - Another Day In Paradise", "Phil Collins - In The Air Tonight", "Phil Collins - You Can't Hurry Love", "Phil Collins - Easy Lover", "Phil Collins - One More Night", "Joni Mitchell - River", "Joni Mitchell - A Case of You", "Joni Mitchell - Big Yellow Taxi", "The Doors - Light My Fire", "The Doors - End Of The Night", "The Doors - Riders of the Storm", "The Doors - Roadhouse Blues", "Pink Floyd - Another Brick in the Wall (Part II)", "Pink Floyd - Money", "Pink Floyd - Comfortably Numb", "Pink Floyd - One of My Turns", "Charlie Puth - Attention", "Childish Gambino - This is America", "Childish Gambino - Summertime Magic", "Childish Gambino - 3005", "Childish Gambino - Feels Like Summer", "Dua Lipa - Don't Start Now", "T.I. - Live Your Life (feat. Rihanna)", "T.I. - Whatever You Like", "T.I. - What You Know", "T.I. - Dead and Gone, (feat. Justin Timberlake)", "Outkast - Hey Ya!", "Tina Turner - The Best", "Tina Turner - What's Love Got to Do With It", "Tina Turner - Proud Mary", "Tina Turner - We Don't Need Another Hero (Thunderdome)", "Spandau Ballet - True", "Spandau Ballet - Gold", "Rod Stewart - Maggie May", "Rod Stewart - Do Ya Think I'm Sexy?", "Rod Stewart - First Cut is the Deepest", "Curtis Mayfield - Move on Up", "Curtis Mayfield - Superfly", "Curtis Mayfield - Pusherman", "Bad Day - Daniel Powter", "Simply Red - Stars", "Simply Red - If You Don't Know Me By Now", "Simply Red - Fairground", "Simply Red - Holding Back the Years", "Kylie Minogue - Can't Get You Out of My Head", "Kylie Minogue - The Loco-motion", "Kylie Minogue - Spinning Around", "Kylie Minogue - I Should Be So Lucky", "Eric Clapton - Tears In Heaven", "Eric Clapton - Wonderful Tonight", "Eric Clapton - Cocaine", "Eric Clapton - Change The World", "Foreigner - I Want to Know What Love Is", "Mark Cohn - Walking in Memphis", "A-ha - Take on Me", "Tom Petty - Wildflowers", "Christina Perri - A Thousand Years", "Roxette - It Must Have Been Love", "Whitney Houston - How Will I Know?", "Whitney Houston - I'm Every Woman", "Whitney Houston - I Will Always Love You", "Whitney Houston - I Have Nothing", "Lizzo - Rumors (feat. Cardi B)", "Lizzo - Good As Hell", "Lizzo - Juice", "Blur - Coffee and TV", "Blur - Beetlebum", "Blur - Parklife", "Outkast - Elevators (Me & You)", "Outkast - The Whole World (feat. Killer Mike)", "Outkast - Roses", "Outkast - The Way You Move (feat. Sleepy Brown)", "Gorillaz - Clint Eastwood", "Gorillaz - Dirty Harry", "Gorillaz - Dare", "Gorillaz - El Mañana", "Blink 182 - All The Small Things", "The Killers - Somebody Told Me", "Avril Lavigne - Sk8ter Boi", "Franz Ferdinand - Take Me Out", "The Fratellis - Chelsea Dagger", "Green Day - American Idiot", "DJ Jazzy Jeff & The Fresh Prince - The Fresh Prince of Bel-Air", "DJ Jazzy Jeff & The Fresh Prince -  Boom! Shake the Room", "DJ Jazzy Jeff & The Fresh Prince -  Parents Just Don't Understand", "Destiny's Child - Say My Name", "Destiny's Child - Bills, Bills, Bills", "Destiny's Child - Bootylicious", "Destiny's Child - Survivor", "Wizkid - Mood (feat. Buju)", "Wizkid - Ginger (feat. Burna Boy)", "Wizkid - No Stress", "Dolly Parton - 9 to 5", "Dolly Parton - Islands In the Stream", "The Zutons - Valerie", "Silk Sonic - Smokin Out The Window", "Silk Sonic - Love's Train", "Silk Sonic - Skate", "Spice Girls - Spice up your life", "Spice Girls - Say You'll Be There", "Spice Girls - 2 Become 1", "Spice Girls - Stop", "Led Zeppelin - Stairway To Heaven", "Led Zeppelin - Whole Lotta Love", "Led Zeppelin - Black Dog", "Led Zeppelin - Kashmir", "Enya - Boadicea", "Enya - Only Time", "Enya - Orinoco Flow", "Enya - Caribbean Blue", "Enya - May It Be", "Fugees - Fugee-La", "Fugees - The Score", "Fugees - Zealots", "Abba - Waterloo", "Abba - Super Trouper", "Abba - Take A Chance On Me", "Abba - Mamma Mia", "Luther Vandross - Give Me The Reason", "Luther Vandross - So Amazing", "Luther Vandross - A House Is Not A Home", "John Legend - Used To Love U", "John Legend - All of Me", "John Legend - Green Light (feat. André 3000)", "John Legend - So High", "Koffee - W (feat. Gunna)", "Koffee - Lockdown", "Koffee - Rapture", "Pink - Raise Your Glass", "Pink - What About Us", "Pink - So What", "Fatboy Slim - Right Here, Right Now", "Fatboy Slim - Weapon Of Choice (feat. Bootsy Collins)", "Fatboy Slim - Rockafeller Skank", "Erik - Got To Be Real", "Cheryl Lynn - Encore", "Cheryl Lynn - Shake it Up Tonight", "Camila Cabello - Havana (feat. Young Thug)", "Camila Cabello - Bam Bam (feat. Ed Sheeran)", "Camila Cabello - Don't Go Yet", "Harry Styles - Watermelon Sugar", "Harry Styles - As It Was", "Harry Styles - Sign of the Times", "Shakira - She Wolf", "Shakira - Hips Don't Lie (ft. Wyclef Jean)", "Shakira - Waka Waka (This Time For Africa)", "Lauryn Hill - Everything Is Everything", "Lauryn Hill - Doo Wop (That Thing)", "Lauryn Hill - To Zion (ft. Carlos Santana)", "Rolling Stones - Paint It, Black", "Rolling Stones - Start Me Up", "Rolling Stones - Gimme Shelter", "Rolling Stones - Sympathy For The Devil", "Amerie - Why Don't We Fall In Love", "Amerie - Talkin' To Me", "Joan Jett & The Blackhearts - I Hate Myself For Loving You", "Joan Jett & The Blackhearts - Bad Reputation", "Britney Spears - I Love Rock 'n' Roll", "Britney Spears - ...Baby One More Time", "Britney Spears - Oops!...I Did It Again", "Britney Spears - Toxic", "The Arrows - I Love Rock 'n' Roll"];
var current_song;

var widget;

function init_game() {
	current_guess = 0;
	current_song = song_list[Math.floor(Math.random() * song_list.length)];

	document.getElementById("sc-widget").src = "https://w.soundcloud.com/player/?url=" + current_song.url;
	var widgetIframe = document.getElementById('sc-widget');
	widget = SC.Widget(widgetIframe);

	widget.bind(SC.Widget.Events.READY, function () {
		console.log("SC ready");
		document.getElementById("toggle_btn").style.color = "black";
	});

	// old_time introduced since SC.Widget.Events.PLAY fires twice. Bar no longer skips around between 2 streams.
	var old_time = 0;
	document.getElementById('toggle_btn').addEventListener('click', function (e) {
		if (document.getElementById("toggle_btn").getAttribute("type") == "play") {
			//plays from the start each time
			widget.seekTo(0);
			old_time = 0;

			widget.play();
			document.getElementById("toggle_btn").setAttribute("type", "pause");

		}
		// cannot have pause atm - will have to let song play through!
		else {
			/*
			widget.pause();
			document.getElementById("toggle_btn").setAttribute("type", "play");
			clearInterval(loop);
			*/
		}
	});

	widget.bind(SC.Widget.Events.PLAY, function () {
		console.log("SC playing");
		document.getElementById("toggle_btn").style.color = "grey";

		widget.getPosition((milliseconds) => {

			var loop = setInterval(() => {
				milliseconds += 100;
				if (milliseconds <= old_time) {
					return;
				}

				console.log(milliseconds);
				old_time = milliseconds;
				document.getElementById("song_progress").value = (milliseconds / 300);

				if (milliseconds >= guess_secs[current_guess] * 1000) {
					console.log("time has reached " + milliseconds.toString());
					widget.pause();
					clearInterval(loop);
				}

			}, 100);

		});


		widget.bind(SC.Widget.Events.PAUSE, function () {
			console.log("SC paused");
			document.getElementById("toggle_btn").style.color = "black";
			document.getElementById("toggle_btn").setAttribute("type", "play");
		});
	});

	draw_app();
}

document.addEventListener("DOMContentLoaded", init_game);

function draw_app() {
	var app = "";
	for (var i = 0; i < n_guesses; i++) {
		app += "<div class='prev_guess grey_out' id='guess" + i.toString() + "'>" + guess_secs[i].toString() + " second" + (guess_secs[i] != 1 ? "s" : "") + "</div>";
	}

	app += "<div id='autocomplete'><input type='text' id='guess_input'></input><div id='autocomp_items'></div></div>";
	document.getElementById("guess_container").innerHTML = app;

	document.getElementById("guess_input").addEventListener("input", (e) => {
		if (e.target.value == "") {
			document.getElementById("autocomp_items").style.visibility = "hidden";
			return;
		}
		else {
			document.getElementById("autocomp_items").style.visibility = "visible";
			var suggestions_arr = [];
			for (var i = 0; i < addtional_guesses.length; i++) {
				if (addtional_guesses[i].toUpperCase().includes(e.target.value.toUpperCase())) {
					suggestions_arr.push("<div class='sugg_item'>" + addtional_guesses[i] + "</div>");
				}
			}
			for (var i = 0; i < song_list.length; i++) {
				if (song_list[i].answer.toUpperCase().includes(e.target.value.toUpperCase())) {
					suggestions_arr.push("<div class='sugg_item'>" + song_list[i].answer + "</div>");
				}
			}
			var suggestions_html = suggestions_arr.sort(() => Math.random() - 0.5).join("");
			document.getElementById("autocomp_items").innerHTML = suggestions_html != "" ? suggestions_html : "No results found";

			var items = document.getElementsByClassName("sugg_item");
			for (var i = 0; i < items.length; i++) {
				items[i].addEventListener("click", (e2) => {
					if (e2.target.outerText == current_song.answer) {
						document.getElementById("guess" + current_guess.toString()).innerHTML = e2.target.outerText;
						document.getElementById("guess" + current_guess.toString()).classList.remove("grey_out");
						document.getElementById("guess" + current_guess.toString()).classList.add("correct_ans");
						document.getElementById("guess_input").disabled = "true";
						current_guess = n_guesses - 1;
						widget.play();
					}
					else {
						document.getElementById("guess" + current_guess.toString()).innerHTML = e2.target.outerText;
						document.getElementById("guess" + current_guess.toString()).classList.remove("grey_out");
						current_guess++;
					}
					document.getElementById("autocomp_items").style.visibility = "hidden";
					e.target.value = "";
				});
			}
		}
	});
}

document.getElementById("reset").addEventListener("click", (e) => {
	init_game();
});