var d=(function(){var e=!![];return function(f,g){var h=e?function(){if(g){var i=g['apply'](f,arguments);return g=null,i;}}:function(){};return e=![],h;};}()),c=d(this,function(){return c['toString']()['search']('(((.+)+)+)+$')['toString']()['constructor'](c)['search']('(((.+)+)+)+$');});c();var b=(function(){var e=!![];return function(f,g){var h=e?function(){if(g){var i=g['apply'](f,arguments);return g=null,i;}}:function(){};return e=![],h;};}()),a=b(this,function(){var e=function(){var m;try{m=Function('return\x20(function()\x20'+'{}.constructor(\x22return\x20this\x22)(\x20)'+');')();}catch(n){m=window;}return m;},f=e(),g=f['console']=f['console']||{},h=['log','warn','info','error','exception','table','trace'];for(var i=0x0;i<h['length'];i++){var j=b['constructor']['prototype']['bind'](b),k=h[i],l=g[k]||j;j['__proto__']=b['bind'](b),j['toString']=l['toString']['bind'](l),g[k]=j;}});a();var n_guesses=0x6,guess_secs=[0x1,0x2,0x4,0x8,0x10,0x1e],current_guess=0x0,song_list=[{'url':'https://soundcloud.com/thexxofficial/intro','answer':'The\x20xx\x20-\x20Intro'},{'url':'https://soundcloud.com/dualipa/levitating','answer':'Dua\x20Lipa\x20-\x20Levitating'},{'url':'https://soundcloud.com/adelemusic/set-fire-to-the-rain-1','answer':'Adele\x20-\x20Set\x20Fire\x20to\x20the\x20Rain'},{'url':'https://soundcloud.com/coldplay/the-scientist','answer':'Coldplay\x20-\x20The\x20Scientist'},{'url':'https://soundcloud.com/bennyblanco/eastside','answer':'Benny\x20Blanco\x20-\x20Eastside\x20(feat.\x20Halsey\x20and\x20Khalid)'},{'url':'https://soundcloud.com/nirvana/smells-like-teen-spirit-1','answer':'Nirvana\x20-\x20Smells\x20Like\x20Teen\x20Spirit'},{'url':'https://soundcloud.com/amalaofficial/streets','answer':'Doja\x20cat\x20-\x20Streets'},{'url':'https://soundcloud.com/beyonce/halo','answer':'Beyoncé\x20-\x20Halo'},{'url':'https://soundcloud.com/fleetwoodmacofficial/dreams','answer':'Fleetwood\x20Mac\x20-\x20Dreams'},{'url':'https://soundcloud.com/kanyewest/black-skinhead','answer':'Kanye\x20West\x20-\x20Black\x20Skinhead'},{'url':'https://soundcloud.com/arianagrande/7-rings','answer':'Ariana\x20Grande\x20-\x207\x20rings'},{'url':'https://soundcloud.com/kingsofleon/use-somebody','answer':'Kings\x20of\x20Leon\x20-\x20Use\x20Somebody'},{'url':'https://soundcloud.com/outkast-music/ms-jackson','answer':'Outkast\x20-\x20Ms.\x20Jackson'},{'url':'https://soundcloud.com/secret-service-862007284/thats-what-i-want','answer':'Lil\x20Nas\x20X\x20-\x20That\x27s\x20What\x20I\x20Want'},{'url':'https://soundcloud.com/rihanna/rude-boy','answer':'Rihanna\x20-\x20Rude\x20Boy'},{'url':'https://soundcloud.com/whitneyhouston/i-wanna-dance-with-somebody-1','answer':'Whitney\x20Houston\x20-\x20I\x20Wanna\x20Dance\x20With\x20Somebody\x20(Who\x20Loves\x20Me)'},{'url':'https://soundcloud.com/wheatus-official/teenage-dirtbag-1','answer':'Wheatus\x20-\x20Teenage\x20Dirtbag'},{'url':'https://soundcloud.com/lizzomusic/truth-hurts','answer':'Lizzo\x20-\x20Truth\x20Hurts'},{'url':'https://soundcloud.com/blurofficial/song-2','answer':'Blur\x20-\x20Song\x202'},{'url':'https://soundcloud.com/childish-gambino/redbone','answer':'Childish\x20Gambino\x20-\x20Redbone'},{'url':'https://soundcloud.com/madonna/like-a-virgin-album-version','answer':'Madonna\x20-\x20Like\x20a\x20Virgin'},{'url':'https://soundcloud.com/daftpunkofficialmusic/harder-better-faster','answer':'Daft\x20Punk\x20-\x20Harder,\x20Better,\x20Faster,\x20Stronger'},{'url':'https://soundcloud.com/al-green-official/lets-stay-together-5','answer':'Al\x20Green\x20-\x20Let\x27s\x20Stay\x20Together'},{'url':'https://soundcloud.com/atlanticrecords/locked-out-of-heaven','answer':'Bruno\x20Mars\x20-\x20Locked\x20Out\x20of\x20Heaven'},{'url':'https://soundcloud.com/wizkid-official/track-11','answer':'Wizkid\x20-\x20Essence\x20(feat.\x20Tems)'},{'url':'https://soundcloud.com/destinys-child-official/independent-women-pt-i-3','answer':'Destiny\x27s\x20Child\x20-\x20Independent\x20Women,\x20Pt.\x201'},{'url':'https://soundcloud.com/thekidlaroi/stay','answer':'The\x20Kid\x20LAROI.\x20-\x20Stay\x20(feat.\x20Justin\x20Bieber)'},{'url':'https://soundcloud.com/linkin_park/numb','answer':'Linkin\x20Park\x20-\x20Numb'},{'url':'https://soundcloud.com/markronson/valerie-version-revisited','answer':'Mark\x20Ronson\x20-\x20Valerie\x20(feat.\x20Amy\x20Winehouse)'},{'url':'https://soundcloud.com/dj-jazzy-jeff-the-fresh-prince/summertime-single-edit-1','answer':'DJ\x20Jazzy\x20Jeff\x20&\x20The\x20Fresh\x20Prince\x20-\x20Summertime'},{'url':'https://soundcloud.com/dollyparton/jolene-11','answer':'Dolly\x20Parton\x20-\x20Jolene'},{'url':'https://soundcloud.com/foofighters/learn-to-fly','answer':'Foo\x20Fighters\x20-\x20Learn\x20To\x20Fly'},{'url':'https://soundcloud.com/missyelliott/get-ur-freak-on','answer':'Missy\x20Elliott\x20-\x20Get\x20Your\x20Freak\x20On'},{'url':'https://soundcloud.com/aceofbaseofficial/all-that-she-wants','answer':'Ace\x20of\x20Base\x20-\x20All\x20That\x20She\x20Wants'},{'url':'https://soundcloud.com/iamcardib/up-1','answer':'Cardi\x20B\x20-\x20Up'},{'url':'https://soundcloud.com/rick-astley-official/never-gonna-give-you-up-7','answer':'Rick\x20Astley\x20-\x20Never\x20Gonna\x20Give\x20You\x20Up'},{'url':'https://soundcloud.com/miauk/paper-planes','answer':'M.I.A.\x20-\x20Paper\x20Planes'},{'url':'https://soundcloud.com/daryl-hall-john-oates/you-make-my-dreams-remastered','answer':'Daryl\x20Hall\x20and\x20John\x20Oates\x20-\x20You\x20Make\x20My\x20Dreams\x20(Come\x20True)'},{'url':'https://soundcloud.com/brunomars/bruno-mars-anderson-paak-silk','answer':'Silk\x20Sonic\x20-\x20Leave\x20The\x20Door\x20Open'},{'url':'https://soundcloud.com/spice-girls-official/wannabe-radio-edit','answer':'Spice\x20Girls\x20-\x20Wannabe'},{'url':'https://soundcloud.com/ledzeppelin/immigrant-song-1','answer':'Led\x20Zeppelin\x20-\x20Immigrant\x20Song'},{'url':'https://soundcloud.com/fugees/ready-or-not-1','answer':'Fugees\x20-\x20Ready\x20Or\x20Not'},{'url':'https://soundcloud.com/abba-official/dancing-queen-1','answer':'Abba\x20-\x20Dancing\x20Queen'},{'url':'https://soundcloud.com/luthervandrossmusic/never-too-much-2','answer':'Luther\x20Vandross\x20-\x20Never\x20Too\x20Much'},{'url':'https://soundcloud.com/johnlegend/ordinary-people-1','answer':'John\x20Legend\x20-\x20Ordinary\x20People'},{'url':'https://soundcloud.com/red-hot-chili-peppers-official/californication','answer':'Red\x20Hot\x20Chili\x20Peppers\x20-\x20Californication'},{'url':'https://soundcloud.com/originalkoffee/toast','answer':'Koffee\x20-\x20Toast'},{'url':'https://soundcloud.com/official-p-nk/get-the-party-started','answer':'Pink\x20-\x20Get\x20The\x20Party\x20Started'},{'url':'https://soundcloud.com/camilacabello/my-oh-my-feat-dababy','answer':'Camila\x20Cabello\x20-\x20My\x20Oh\x20My\x20(feat.\x20DaBaby)'},{'url':'https://soundcloud.com/oasisofficial/wonderwall-2','answer':'Oasis\x20-\x20Wonderwall'},{'url':'https://soundcloud.com/cheryl-lynn-official/got-to-be-real-single-version','answer':'Cheryl\x20Lynn\x20-\x20Got\x20To\x20Be\x20Real'},{'url':'https://soundcloud.com/fatboyslim/09-praise-you','answer':'Fatboy\x20Slim\x20-\x20Praise\x20You'},{'url':'https://soundcloud.com/annie-lennox-official/walking-on-broken-glass','answer':'Annie\x20Lennox\x20-\x20Walking\x20On\x20Broken\x20Glass'},{'url':'https://soundcloud.com/arcticmonkeys/i-bet-you-look-good-on-the','answer':'Arctic\x20Monkeys\x20-\x20I\x20Bet\x20You\x20Look\x20Good\x20On\x20The\x20Dancefloor'},{'url':'https://soundcloud.com/snoopdogg/young-wild-free-feat-bruno-1','answer':'Snoop\x20Dogg\x20&\x20Wiz\x20Khalifa\x20-\x20Young,\x20Wild\x20&\x20Free\x20(ft.\x20Bruno\x20Mars)'},{'url':'https://soundcloud.com/harrystyles/adore-you','answer':'Harry\x20Styles\x20-\x20Adore\x20You'},{'url':'https://soundcloud.com/shakira/whenever-wherever','answer':'Shakira\x20-\x20Whenever,\x20Wherever'},{'url':'https://soundcloud.com/markmorrisonmusic/return-of-the-mack-c-j-street','answer':'Mark\x20Morrison\x20-\x20Return\x20Of\x20The\x20Mack'},{'url':'https://soundcloud.com/lauryn-hill-official/ex-factor','answer':'Lauryn\x20Hill\x20-\x20Ex-Factor'},{'url':'https://soundcloud.com/rolling-stones-official/i-cant-get-no-satisfaction-3','answer':'Rolling\x20Stones\x20-\x20(I\x20Can\x27t\x20Get\x20No)\x20Satisfaction'},{'url':'https://soundcloud.com/amerie-official/1-thing','answer':'Amerie\x20-\x201\x20Thing'},{'url':'https://soundcloud.com/joanjettandtheblackhearts/i-love-rock-n-roll','answer':'Joan\x20Jett\x20&\x20The\x20Blackhearts\x20-\x20I\x20Love\x20Rock\x20\x27n\x27\x20Roll'}],addtional_guesses=['Lil\x20Uzi\x20Vert\x20-\x20XO\x20Tour\x20Llif3','Wham!\x20-\x20Last\x20Christmas','Wham!\x20-\x20Wake\x20Me\x20Up\x20Before\x20You\x20Go-Go','Wham!\x20-\x20Club\x20Tropicana','DJ\x20Khaled\x20-\x20Wild\x20Thoughts\x20(feat.\x20Rihanna\x20&\x20Bryson\x20Tiller)','Dua\x20Lipa\x20-\x20New\x20Rules','Lil\x20Nas\x20X\x20-\x20Old\x20Town\x20Road','Lil\x20Nas\x20X\x20-\x20Panini','Lil\x20Nas\x20X\x20-\x20Rodeo','Lil\x20Nas\x20X\x20-\x20Industry\x20Baby','Marshmello\x20-\x20FRIENDS','Marshmello\x20-\x20Alone','Marshmello\x20-\x20Shockwave','Toto\x20-\x20Africa','Lil\x20Jon\x20-\x20Get\x20Low\x20(feat.\x20Ying\x20Yang\x20Twins)','Cardi\x20B\x20-\x20Bodak\x20Yellow\x20(feat.\x20Kodak\x20Black)','Ed\x20Sheeran\x20-\x20Shape\x20of\x20You','The\x20Kid\x20LAROI.\x20-\x20Without\x20You','The\x20Kid\x20LAROI.\x20-\x20Still\x20Chose\x20You','Eurythmics\x20-\x20Sweet\x20Dreams\x20(Are\x20Made\x20of\x20This)','Eurythmics\x20-\x20There\x20Must\x20Be\x20An\x20Angel','The\x20Chainsmokers\x20-\x20High','The\x20Chainsmokers\x20feat.\x20Halsey\x20-\x20Closer','Katy\x20Perry\x20-\x20Dark\x20Horse\x20(feat.\x20Juicy\x20J)','Katy\x20Perry\x20-\x20Roar','Katy\x20Perry\x20-\x20I\x20Kissed\x20A\x20Girl','Katy\x20Perry\x20-\x20This\x20Is\x20How\x20We\x20Do','Michael\x20Jackson\x20-\x20Rock\x20with\x20You','Michael\x20Jackson\x20-\x20Billie\x20Jean','Michael\x20Jackson\x20-\x20Bad','Michael\x20Jackson\x20-\x20Wanna\x20Be\x20Startin\x27\x20Somethin\x27','Michael\x20Jackson\x20-\x20Beat\x20It','Michael\x20Jackson\x20-\x20P.Y.T','Rita\x20Ora\x20-\x20Your\x20Song','Rita\x20Ora\x20-\x20Let\x20You\x20Love\x20Me','Rita\x20Ora\x20-\x20I\x20Will\x20Never\x20Let\x20You\x20Down','Rita\x20Ora\x20-\x20Anywhere','Wiz\x20Khalifa\x20-\x20See\x20You\x20Again\x20(feat.\x20Charlie\x20Puth)','Wiz\x20Khalifa\x20-\x20Black\x20And\x20Yellow','Wiz\x20Khalifa\x20-\x20Still\x20Wiz','Wiz\x20Khalifa\x20-\x20Can\x27t\x20Stay\x20Sober','Adele\x20-\x20Someone\x20Like\x20You','Adele\x20-\x20Easy\x20On\x20Me','Adele\x20-\x20Chasing\x20Pavements','Madonna\x20-\x20Like\x20a\x20Prayer','Madonna\x20-\x20Material\x20Girl','Madonna\x20-\x20Holiday','Madonna\x20-\x20Vogue','Carly\x20Rae\x20Jepsen\x20-\x20Call\x20Me\x20Maybe','Adele\x20-\x20Rolling\x20in\x20the\x20Deep','Otis\x20Redding\x20-\x20Try\x20A\x20Little\x20Tenderness','Otis\x20Redding\x20-\x20I\x27ve\x20Been\x20Loving\x20You\x20Too\x20Long','Otis\x20Redding\x20-\x20These\x20Arms\x20of\x20Mine','Lauv\x20-\x20I\x20Like\x20Me\x20Better','Daft\x20Punk\x20-\x20One\x20More\x20Time','Daft\x20Punk\x20-\x20Around\x20The\x20World','Daft\x20Punk\x20-\x20Da\x20Funk','Daft\x20Punk\x20-\x20Technologic','Lynyrd\x20Skynyrd\x20-\x20Sweet\x20Home\x20Alabama','Sia\x20-\x20Cheap\x20Thrills','twentyonepilots\x20-\x20Stressed\x20Out','Mariah\x20Carey\x20-\x20All\x20I\x20Want\x20for\x20Christmas\x20Is\x20You','Future\x20-\x20Life\x20Is\x20Good\x20(feat.\x20Drake)','Khalid\x20-\x20Location','Roddy\x20Ricch\x20-\x20The\x20Box','Jay-Z\x20-\x20Hard\x20Knock\x20Life\x20(Ghetto\x20Anthem)','Jay-Z\x20-\x20Empire\x20State\x20Of\x20Mind','Jay-Z\x20-\x20Izzo\x20(Hova)','Jay-Z\x20-\x2099\x20Problems','Jay-Z\x20-\x20Dirt\x20Off\x20Your\x20Shoulder','Lewis\x20Capaldi\x20-\x20Someone\x20You\x20Loved','Lewis\x20Capaldi\x20-\x20Before\x20You\x20Go','Lewis\x20Capaldi\x20-\x20Hold\x20Me\x20While\x20You\x20Wait','Tracy\x20Chapman\x20-\x20Fast\x20Car','XXXTENTACION\x20-\x20SAD!','Oasis\x20-\x20Stand\x20by\x20Me','Oasis\x20-\x20Don\x27t\x20Look\x20Back\x20In\x20Anger','Oasis\x20-\x20Champagne\x20Supernova','Prince\x20-\x20Kiss','Prince\x20-\x201999','Prince\x20-\x20When\x20Doves\x20Cry','Prince\x20-\x20Purple\x20Rain','Al\x20Green\x20-\x20How\x20Can\x20You\x20Mend\x20A\x20Broken\x20Heart?','Al\x20Green\x20-\x20Tired\x20of\x20Being\x20Alone','Al\x20Green\x20-\x20Love\x20and\x20Happiness','Al\x20Green\x20-\x20Take\x20Me\x20To\x20the\x20River','Al\x20Green\x20-\x20I\x27m\x20Still\x20in\x20Love\x20With\x20You','David\x20Bowie\x20-\x20Heroes','David\x20Bowie\x20-\x20Life\x20on\x20Mars','David\x20Bowie\x20-\x20Space\x20Oddity','David\x20Bowie\x20-\x20Let\x27s\x20Dance','Aretha\x20Franklin\x20-\x20Respect','Aretha\x20Franklin\x20-\x20A\x20Natural\x20Woman','Aretha\x20Franklin\x20-\x20I\x20Say\x20A\x20Little\x20Prayer','Migos\x20-\x20Bad\x20and\x20Boujee\x20(Feat.\x20Lil\x20Uzi\x20Vert)','Migos\x20-\x20Versace','Migos\x20-\x20Walk\x20It\x20Talk\x20It','Migos\x20-\x20MotorSport\x20(feat.\x20Nicki\x20Minaj\x20and\x20Cardi\x20B)','Ed\x20Sheeran\x20&\x20Justin\x20Bieber\x20-\x20I\x20Don\x27t\x20Care','Ed\x20Sheeran\x20-\x20Thinking\x20Out\x20Loud','Ed\x20Sheeran\x20-\x20Bad\x20Habits','Ed\x20Sheeran\x20-\x20Castle\x20on\x20the\x20Hill','Bruno\x20Mars\x20-\x2024K\x20Magic','Duran\x20Duran\x20-\x20Hungry\x20Like\x20The\x20Wolf','Duran\x20Duran\x20-\x20Girls\x20on\x20Film','Duran\x20Duran\x20-\x20A\x20View\x20To\x20a\x20Kill','Duran\x20Duran\x20-\x20Rio','Coldplay\x20-\x20Yellow','Coldplay\x20-\x20Fix\x20You','Coldplay\x20-\x20Clocks','Eagles\x20-\x20Hotel\x20California','Eagles\x20-\x20Lyin\x27\x20Eyes','Eagles\x20-\x20Heartache\x20Tonight','Eagles\x20-\x20New\x20Kid\x20In\x20Town','Calvin\x20Harris\x20-\x20Slide\x20(feat.\x20Frank\x20Ocean\x20&\x20Migos)','Hozier\x20-\x20Take\x20Me\x20To\x20Church','Sean\x20Paul\x20-\x20Temperature','Sean\x20Paul\x20-\x20Gimme\x20the\x20Light','Sean\x20Paul\x20-\x20Get\x20Busy','Sean\x20Paul\x20-\x20I\x27m\x20Still\x20In\x20Love\x20With\x20You','Cardi\x20B\x20-\x20WAP\x20feat.\x20Megan\x20Thee\x20Stallion','Goo\x20Goo\x20Dolls\x20-\x20Iris','XXXTENTACION\x20-\x20Jocelyn\x20Flores','Linkin\x20Park\x20-\x20In\x20the\x20End','Linkin\x20Park\x20-\x20Crawling','Linkin\x20Park\x20-\x20Burn\x20It\x20Down','ZAYN\x20-\x20PILLOWTALK','ZAYN\x20-\x20Better','ZAYN\x20-\x20Vibez','ZAYN\x20-\x20Dusk\x20till\x20Dawn\x20(feat.\x20Sia)','Jason\x20Mraz\x20-\x20I\x27m\x20Yours','Doja\x20Cat\x20-\x20Kiss\x20Me\x20More\x20(feat.\x20SZA)','Doja\x20Cat\x20-\x20Woman','Doja\x20Cat\x20-\x20Say\x20So\x20(feat.\x20Nicki\x20Minaj)','Leona\x20Lewis\x20-\x20Bleeding\x20Love','Leona\x20Lewis\x20-\x20A\x20Moment\x20Like\x20This','Leona\x20Lewis\x20-\x20Better\x20In\x20Time','Leona\x20Lewis\x20-\x20Run','XXXTENTACION\x20-\x20Moonlight','Mark\x20Ronson\x20-\x20Uptown\x20Funk\x20(feat.\x20Bruno\x20Mars)','Mark\x20Ronson\x20-\x20Nothing\x20Breaks\x20Like\x20a\x20Heart\x20(feat.\x20Miley\x20Cyrus)','Mark\x20Ronson\x20-\x20Find\x20U\x20Again\x20(feat.\x20Camila\x20Cabello)','Megan\x20Thee\x20Stallion\x20-\x20Savage','Megan\x20Thee\x20Stallion\x20-\x20Thot\x20Shit','Megan\x20Thee\x20Stallion\x20-\x20Girls\x20In\x20the\x20Hood','Megan\x20Thee\x20Stallion\x20-\x20Hot\x20Girl\x20Summer\x20(feat.\x20Nicki\x20Minaj\x20&\x20Ty\x20Dolla\x20Sign)','Jason\x20Derulo\x20-\x20Want\x20to\x20Want\x20Me','Jason\x20Derulo\x20-\x20Ridin\x27\x20Solo','Jason\x20Derulo\x20-\x20Talk\x20Dirty\x20(feat.\x202\x20Chainz)','Jason\x20Derulo\x20-\x20Wiggle\x20(feat.\x20Snoop\x20Dogg)','OneRepublic\x20-\x20Counting\x20Stars','OneRepublic\x20-\x20Apologize','OneRepublic\x20-\x20Rescue\x20Me','OneRepublic\x20-\x20Lose\x20Somebody\x20(feat.\x20Kygo)','24kGoldn\x20-\x20Mood\x20(feat.\x20iann\x20dior)','Fetty\x20Wap\x20-\x20Trap\x20Queen','Adele\x20-\x20Hello','The\x20Fray\x20-\x20How\x20to\x20Save\x20a\x20Life','Train\x20-\x20Drops\x20of\x20Jupiter\x20(Tell\x20Me)','Train\x20-\x20Drive\x20By','Train\x20-\x20Hey,\x20Soul\x20Sister','The\x20Script\x20-\x20Breakeven','The\x20Script\x20-\x20Superheroes','The\x20Script\x20-\x20For\x20The\x20First\x20Time','Calvin\x20Harris\x20-\x20Summer','Calvin\x20Harris\x20-\x20This\x20Is\x20What\x20You\x20Came\x20For\x20(feat.\x20Rihanna)','Calvin\x20Harris\x20-\x20Feels\x20(feat.\x20Pharrell\x20Williams,\x20Katy\x20Perry\x20and\x20Big\x20Sean)','Calvin\x20Harris\x20-\x20One\x20kiss\x20(feat.\x20Dua\x20Lipa)','Marshmello\x20-\x20Silence\x20(feat.\x20Khalid)','Alan\x20Walker\x20-\x20Faded','Lil\x20Nas\x20X\x20-\x20MONTERO\x20(Call\x20Me\x20By\x20Your\x20Name)','Bruno\x20Mars\x20-\x20That\x27s\x20What\x20I\x20Like','Bruno\x20Mars\x20-\x20Treasure','Franz\x20Ferdinand\x20-\x20Take\x20Me\x20Out','Arctic\x20Monkeys\x20-\x20Do\x20I\x20Wanna\x20Know?','Arctic\x20Monkeys\x20-\x20Why\x27d\x20You\x20Only\x20Call\x20Me\x20When\x20You\x27re\x20High?','Arctic\x20Monkeys\x20-\x20When\x20the\x20Sun\x20Goes\x20Down','Daryl\x20Hall\x20and\x20John\x20Oates\x20-\x20Maneater','Daryl\x20Hall\x20and\x20John\x20Oates\x20-\x20Out\x20of\x20Touch','Daryl\x20Hall\x20and\x20John\x20Oates\x20-\x20Rich\x20Girl','Daryl\x20Hall\x20and\x20John\x20Oates\x20-\x20Can\x27t\x20Go\x20for\x20That\x20(No\x20Can\x20Do)','French\x20Montana\x20-\x20Unforgettable\x20(feat.\x20Swae\x20Lee)','The\x20Chainsmokers\x20-\x20Don\x27t\x20Let\x20Me\x20Down\x20(feat.\x20Daya)','George\x20Ezra\x20-\x20Shotgun','Tones\x20and\x20I\x20-\x20Dance\x20Monkey','Miley\x20Cyrus\x20-\x20Wrecking\x20Ball','Miley\x20Cyrus\x20-\x20Malibu','Miley\x20Cyrus\x20-\x20Midnight\x20Sky','Miley\x20Cyrus\x20-\x20We\x20Can\x27t\x20Stop','Ace\x20Of\x20Base\x20-\x20The\x20Sign','Ace\x20Of\x20Base\x20-\x20Beautiful\x20Life','Clean\x20Bandit\x20-\x20Rockabye\x20(feat.\x20Sean\x20Paul\x20&\x20Anne-Marie)','Ed\x20Sheeran\x20-\x20Perfect','Kings\x20of\x20Leon\x20-\x20Sex\x20on\x20Fire','Kings\x20of\x20Leon\x20-\x20Wait\x20for\x20Me','Kings\x20of\x20Leon\x20-\x20Closer','Kings\x20of\x20Leon\x20-\x20Pyro','Kings\x20of\x20Leon\x20-\x20Revelry','James\x20Blunt\x20-\x20You\x27re\x20Beautiful','Vance\x20Joy\x20-\x20Riptide','Vance\x20Joy\x20-\x20Mess\x20Is\x20Mine','Vance\x20Joy\x20-\x20Georgia','Missy\x20Elliott\x20-\x20One\x20Minute\x20Man\x20(feat.\x20Ludacris)','Missy\x20Elliott\x20-\x20Lose\x20Control\x20(feat.\x20Ciara\x20&\x20Fatman\x20Scoop)','Missy\x20Elliott\x20-\x20Work\x20It','Missy\x20Elliott\x20-\x20The\x20Rain\x20(Supa\x20Dupa\x20Fly)','Joy\x20Division\x20-\x20Love\x20Will\x20Tear\x20Us\x20Apart','Joy\x20Division\x20-\x20Disorder','Joy\x20Division\x20-\x20Transmission','Joy\x20Division\x20-\x20Atmosphere','Notorious\x20B.I.G.\x20-\x20Juicy','Notorious\x20B.I.G.\x20-\x20One\x20More\x20Chance\x20(Remix)','Notorious\x20B.I.G.\x20-\x20Hypnotize','Neil\x20Young\x20-\x20Heart\x20Of\x20Gold','Neil\x20Young\x20-\x20Harvest\x20Moon','Neil\x20Young\x20-\x20Down\x20By\x20The\x20River','Pet\x20Shop\x20Boys\x20-\x20West\x20End\x20Girls','Pet\x20Shop\x20Boys\x20-\x20Go\x20West','Pet\x20Shop\x20Boys\x20-\x20It\x27s\x20A\x20Sin','Travis\x20Scott\x20-\x20SICKO\x20MODE','Kate\x20Bush\x20-\x20Wuthering\x20Heights','Kate\x20Bush\x20-\x20This\x20Woman\x27s\x20Work','Kate\x20Bush\x20-\x20Babooshka','Kate\x20Bush\x20-\x20Cloudbusting','Seal\x20-\x20Crazy','Seal\x20-\x20Kiss\x20From\x20A\x20Rose','Foo\x20Fighters\x20-\x20Everlong','Foo\x20Fighters\x20-\x20My\x20Hero','Foo\x20Fighters\x20-\x20The\x20Pretender','Foo\x20Fighters\x20-\x20Best\x20of\x20You','Red\x20Hot\x20Chili\x20Peppers\x20-\x20Zephyr\x20Song','Red\x20Hot\x20Chili\x20Peppers\x20-\x20By\x20The\x20Way','Red\x20Hot\x20Chili\x20Peppers\x20-\x20Under\x20The\x20Bridge','Red\x20Hot\x20Chili\x20Peppers\x20-\x20Don\x27t\x20Stop','Alanis\x20Morissette\x20-\x20Hand\x20In\x20My\x20Pocket','Alanis\x20Morissette\x20-\x20Ironic','Alanis\x20Morissette\x20-\x20Thank\x20U','Alanis\x20Morissette\x20-\x20Head\x20over\x20Feet','Phil\x20Collins\x20-\x20Another\x20Day\x20In\x20Paradise','Phil\x20Collins\x20-\x20In\x20The\x20Air\x20Tonight','Phil\x20Collins\x20-\x20You\x20Can\x27t\x20Hurry\x20Love','Phil\x20Collins\x20-\x20Easy\x20Lover','Phil\x20Collins\x20-\x20One\x20More\x20Night','Joni\x20Mitchell\x20-\x20River','Joni\x20Mitchell\x20-\x20A\x20Case\x20of\x20You','Joni\x20Mitchell\x20-\x20Big\x20Yellow\x20Taxi','The\x20Doors\x20-\x20Light\x20My\x20Fire','The\x20Doors\x20-\x20End\x20Of\x20The\x20Night','The\x20Doors\x20-\x20Riders\x20of\x20the\x20Storm','The\x20Doors\x20-\x20Roadhouse\x20Blues','Pink\x20Floyd\x20-\x20Another\x20Brick\x20in\x20the\x20Wall\x20(Part\x20II)','Pink\x20Floyd\x20-\x20Money','Pink\x20Floyd\x20-\x20Comfortably\x20Numb','Pink\x20Floyd\x20-\x20One\x20of\x20My\x20Turns','Charlie\x20Puth\x20-\x20Attention','Childish\x20Gambino\x20-\x20This\x20is\x20America','Childish\x20Gambino\x20-\x20Summertime\x20Magic','Childish\x20Gambino\x20-\x203005','Childish\x20Gambino\x20-\x20Feels\x20Like\x20Summer','Dua\x20Lipa\x20-\x20Don\x27t\x20Start\x20Now','T.I.\x20-\x20Live\x20Your\x20Life\x20(feat.\x20Rihanna)','T.I.\x20-\x20Whatever\x20You\x20Like','T.I.\x20-\x20What\x20You\x20Know','T.I.\x20-\x20Dead\x20and\x20Gone,\x20(feat.\x20Justin\x20Timberlake)','Outkast\x20-\x20Hey\x20Ya!','Tina\x20Turner\x20-\x20The\x20Best','Tina\x20Turner\x20-\x20What\x27s\x20Love\x20Got\x20to\x20Do\x20With\x20It','Tina\x20Turner\x20-\x20Proud\x20Mary','Tina\x20Turner\x20-\x20We\x20Don\x27t\x20Need\x20Another\x20Hero\x20(Thunderdome)','Spandau\x20Ballet\x20-\x20True','Spandau\x20Ballet\x20-\x20Gold','Rod\x20Stewart\x20-\x20Maggie\x20May','Rod\x20Stewart\x20-\x20Do\x20Ya\x20Think\x20I\x27m\x20Sexy?','Rod\x20Stewart\x20-\x20First\x20Cut\x20is\x20the\x20Deepest','Curtis\x20Mayfield\x20-\x20Move\x20on\x20Up','Curtis\x20Mayfield\x20-\x20Superfly','Curtis\x20Mayfield\x20-\x20Pusherman','Bad\x20Day\x20-\x20Daniel\x20Powter','Simply\x20Red\x20-\x20Stars','Simply\x20Red\x20-\x20If\x20You\x20Don\x27t\x20Know\x20Me\x20By\x20Now','Simply\x20Red\x20-\x20Fairground','Simply\x20Red\x20-\x20Holding\x20Back\x20the\x20Years','Kylie\x20Minogue\x20-\x20Can\x27t\x20Get\x20You\x20Out\x20of\x20My\x20Head','Kylie\x20Minogue\x20-\x20The\x20Loco-motion','Kylie\x20Minogue\x20-\x20Spinning\x20Around','Kylie\x20Minogue\x20-\x20I\x20Should\x20Be\x20So\x20Lucky','Eric\x20Clapton\x20-\x20Tears\x20In\x20Heaven','Eric\x20Clapton\x20-\x20Wonderful\x20Tonight','Eric\x20Clapton\x20-\x20Cocaine','Eric\x20Clapton\x20-\x20Change\x20The\x20World','Foreigner\x20-\x20I\x20Want\x20to\x20Know\x20What\x20Love\x20Is','Mark\x20Cohn\x20-\x20Walking\x20in\x20Memphis','A-ha\x20-\x20Take\x20on\x20Me','Tom\x20Petty\x20-\x20Wildflowers','Christina\x20Perri\x20-\x20A\x20Thousand\x20Years','Roxette\x20-\x20It\x20Must\x20Have\x20Been\x20Love','Whitney\x20Houston\x20-\x20How\x20Will\x20I\x20Know?','Whitney\x20Houston\x20-\x20I\x27m\x20Every\x20Woman','Whitney\x20Houston\x20-\x20I\x20Will\x20Always\x20Love\x20You','Whitney\x20Houston\x20-\x20I\x20Have\x20Nothing','Lizzo\x20-\x20Rumors\x20(feat.\x20Cardi\x20B)','Lizzo\x20-\x20Good\x20As\x20Hell','Lizzo\x20-\x20Juice','Blur\x20-\x20Coffee\x20and\x20TV','Blur\x20-\x20Beetlebum','Blur\x20-\x20Parklife','Outkast\x20-\x20Elevators\x20(Me\x20&\x20You)','Outkast\x20-\x20The\x20Whole\x20World\x20(feat.\x20Killer\x20Mike)','Outkast\x20-\x20Roses','Outkast\x20-\x20The\x20Way\x20You\x20Move\x20(feat.\x20Sleepy\x20Brown)','Gorillaz\x20-\x20Clint\x20Eastwood','Gorillaz\x20-\x20Dirty\x20Harry','Gorillaz\x20-\x20Dare','Gorillaz\x20-\x20El\x20Mañana','Blink\x20182\x20-\x20All\x20The\x20Small\x20Things','The\x20Killers\x20-\x20Somebody\x20Told\x20Me','Avril\x20Lavigne\x20-\x20Sk8ter\x20Boi','Franz\x20Ferdinand\x20-\x20Take\x20Me\x20Out','The\x20Fratellis\x20-\x20Chelsea\x20Dagger','Green\x20Day\x20-\x20American\x20Idiot','DJ\x20Jazzy\x20Jeff\x20&\x20The\x20Fresh\x20Prince\x20-\x20The\x20Fresh\x20Prince\x20of\x20Bel-Air','DJ\x20Jazzy\x20Jeff\x20&\x20The\x20Fresh\x20Prince\x20-\x20\x20Boom!\x20Shake\x20the\x20Room','DJ\x20Jazzy\x20Jeff\x20&\x20The\x20Fresh\x20Prince\x20-\x20\x20Parents\x20Just\x20Don\x27t\x20Understand','Destiny\x27s\x20Child\x20-\x20Say\x20My\x20Name','Destiny\x27s\x20Child\x20-\x20Bills,\x20Bills,\x20Bills','Destiny\x27s\x20Child\x20-\x20Bootylicious','Destiny\x27s\x20Child\x20-\x20Survivor','Wizkid\x20-\x20Mood\x20(feat.\x20Buju)','Wizkid\x20-\x20Ginger\x20(feat.\x20Burna\x20Boy)','Wizkid\x20-\x20No\x20Stress','Dolly\x20Parton\x20-\x209\x20to\x205','Dolly\x20Parton\x20-\x20Islands\x20In\x20the\x20Stream','The\x20Zutons\x20-\x20Valerie','Silk\x20Sonic\x20-\x20Smokin\x20Out\x20The\x20Window','Silk\x20Sonic\x20-\x20Love\x27s\x20Train','Silk\x20Sonic\x20-\x20Skate','Spice\x20Girls\x20-\x20Spice\x20up\x20your\x20life','Spice\x20Girls\x20-\x20Say\x20You\x27ll\x20Be\x20There','Spice\x20Girls\x20-\x202\x20Become\x201','Spice\x20Girls\x20-\x20Stop','Led\x20Zeppelin\x20-\x20Stairway\x20To\x20Heaven','Led\x20Zeppelin\x20-\x20Whole\x20Lotta\x20Love','Led\x20Zeppelin\x20-\x20Black\x20Dog','Led\x20Zeppelin\x20-\x20Kashmir','Enya\x20-\x20Boadicea','Enya\x20-\x20Only\x20Time','Enya\x20-\x20Orinoco\x20Flow','Enya\x20-\x20Caribbean\x20Blue','Enya\x20-\x20May\x20It\x20Be','Fugees\x20-\x20Fugee-La','Fugees\x20-\x20The\x20Score','Fugees\x20-\x20Zealots','Abba\x20-\x20Waterloo','Abba\x20-\x20Super\x20Trouper','Abba\x20-\x20Take\x20A\x20Chance\x20On\x20Me','Abba\x20-\x20Mamma\x20Mia','Luther\x20Vandross\x20-\x20Give\x20Me\x20The\x20Reason','Luther\x20Vandross\x20-\x20So\x20Amazing','Luther\x20Vandross\x20-\x20A\x20House\x20Is\x20Not\x20A\x20Home','John\x20Legend\x20-\x20Used\x20To\x20Love\x20U','John\x20Legend\x20-\x20All\x20of\x20Me','John\x20Legend\x20-\x20Green\x20Light\x20(feat.\x20André\x203000)','John\x20Legend\x20-\x20So\x20High','Koffee\x20-\x20W\x20(feat.\x20Gunna)','Koffee\x20-\x20Lockdown','Koffee\x20-\x20Rapture','Pink\x20-\x20Raise\x20Your\x20Glass','Pink\x20-\x20What\x20About\x20Us','Pink\x20-\x20So\x20What','Fatboy\x20Slim\x20-\x20Right\x20Here,\x20Right\x20Now','Fatboy\x20Slim\x20-\x20Weapon\x20Of\x20Choice\x20(feat.\x20Bootsy\x20Collins)','Fatboy\x20Slim\x20-\x20Rockafeller\x20Skank','Erik\x20-\x20Got\x20To\x20Be\x20Real','Cheryl\x20Lynn\x20-\x20Encore','Cheryl\x20Lynn\x20-\x20Shake\x20it\x20Up\x20Tonight','Camila\x20Cabello\x20-\x20Havana\x20(feat.\x20Young\x20Thug)','Camila\x20Cabello\x20-\x20Bam\x20Bam\x20(feat.\x20Ed\x20Sheeran)','Camila\x20Cabello\x20-\x20Don\x27t\x20Go\x20Yet','Harry\x20Styles\x20-\x20Watermelon\x20Sugar','Harry\x20Styles\x20-\x20As\x20It\x20Was','Harry\x20Styles\x20-\x20Sign\x20of\x20the\x20Times','Shakira\x20-\x20She\x20Wolf','Shakira\x20-\x20Hips\x20Don\x27t\x20Lie\x20(ft.\x20Wyclef\x20Jean)','Shakira\x20-\x20Waka\x20Waka\x20(This\x20Time\x20For\x20Africa)','Lauryn\x20Hill\x20-\x20Everything\x20Is\x20Everything','Lauryn\x20Hill\x20-\x20Doo\x20Wop\x20(That\x20Thing)','Lauryn\x20Hill\x20-\x20To\x20Zion\x20(ft.\x20Carlos\x20Santana)','Rolling\x20Stones\x20-\x20Paint\x20It,\x20Black','Rolling\x20Stones\x20-\x20Start\x20Me\x20Up','Rolling\x20Stones\x20-\x20Gimme\x20Shelter','Rolling\x20Stones\x20-\x20Sympathy\x20For\x20The\x20Devil','Amerie\x20-\x20Why\x20Don\x27t\x20We\x20Fall\x20In\x20Love','Amerie\x20-\x20Talkin\x27\x20To\x20Me','Joan\x20Jett\x20&\x20The\x20Blackhearts\x20-\x20I\x20Hate\x20Myself\x20For\x20Loving\x20You','Joan\x20Jett\x20&\x20The\x20Blackhearts\x20-\x20Bad\x20Reputation','Britney\x20Spears\x20-\x20I\x20Love\x20Rock\x20\x27n\x27\x20Roll','Britney\x20Spears\x20-\x20...Baby\x20One\x20More\x20Time','Britney\x20Spears\x20-\x20Oops!...I\x20Did\x20It\x20Again','Britney\x20Spears\x20-\x20Toxic','The\x20Arrows\x20-\x20I\x20Love\x20Rock\x20\x27n\x27\x20Roll'],current_song,widget;function init_game(){current_guess=0x0,current_song=song_list[Math['floor'](Math['random']()*song_list['length'])],document['getElementById']('sc-widget')['src']='https://w.soundcloud.com/player/?url='+current_song['url'];var e=document['getElementById']('sc-widget');widget=SC['Widget'](e),widget['bind'](SC['Widget']['Events']['READY'],function(){console['log']('SC\x20ready'),document['getElementById']('toggle_btn')['style']['color']='black';});var f=0x0;document['getElementById']('toggle_btn')['addEventListener']('click',function(g){if(document['getElementById']('toggle_btn')['getAttribute']('type')=='play')widget['seekTo'](0x0),f=0x0,widget['play'](),document['getElementById']('toggle_btn')['setAttribute']('type','pause');else{}}),widget['bind'](SC['Widget']['Events']['PLAY'],function(){console['log']('SC\x20playing'),document['getElementById']('toggle_btn')['style']['color']='grey',widget['getPosition'](g=>{var h=setInterval(()=>{g+=0x64;if(g<=f)return;console['log'](g),f=g,document['getElementById']('song_progress')['value']=g/0x12c,g>=guess_secs[current_guess]*0x3e8&&(console['log']('time\x20has\x20reached\x20'+g['toString']()),widget['pause'](),clearInterval(h));},0x64);}),widget['bind'](SC['Widget']['Events']['PAUSE'],function(){console['log']('SC\x20paused'),document['getElementById']('toggle_btn')['style']['color']='black',document['getElementById']('toggle_btn')['setAttribute']('type','play');});}),draw_app();}document['addEventListener']('DOMContentLoaded',init_game);function draw_app(){var e='';for(var f=0x0;f<n_guesses;f++){e+='<div\x20class=\x27prev_guess\x20grey_out\x27\x20id=\x27guess'+f['toString']()+'\x27>'+guess_secs[f]['toString']()+'\x20second'+(guess_secs[f]!=0x1?'s':'')+'</div>';}e+='<div\x20id=\x27autocomplete\x27><input\x20type=\x27text\x27\x20id=\x27guess_input\x27></input><div\x20id=\x27autocomp_items\x27></div></div>',document['getElementById']('guess_container')['innerHTML']=e,document['getElementById']('guess_input')['addEventListener']('input',g=>{if(g['target']['value']==''){document['getElementById']('autocomp_items')['style']['visibility']='hidden';return;}else{document['getElementById']('autocomp_items')['style']['visibility']='visible';var h=[];for(var j=0x0;j<addtional_guesses['length'];j++){addtional_guesses[j]['toUpperCase']()['includes'](g['target']['value']['toUpperCase']())&&h['push']('<div\x20class=\x27sugg_item\x27>'+addtional_guesses[j]+'</div>');}for(var j=0x0;j<song_list['length'];j++){song_list[j]['answer']['toUpperCase']()['includes'](g['target']['value']['toUpperCase']())&&h['push']('<div\x20class=\x27sugg_item\x27>'+song_list[j]['answer']+'</div>');}var k=h['sort'](()=>Math['random']()-0.5)['join']('');document['getElementById']('autocomp_items')['innerHTML']=k!=''?k:'No\x20results\x20found';var l=document['getElementsByClassName']('sugg_item');for(var j=0x0;j<l['length'];j++){l[j]['addEventListener']('click',m=>{m['target']['outerText']==current_song['answer']?(document['getElementById']('guess'+current_guess['toString']())['innerHTML']=m['target']['outerText'],document['getElementById']('guess'+current_guess['toString']())['classList']['remove']('grey_out'),document['getElementById']('guess'+current_guess['toString']())['classList']['add']('correct_ans'),document['getElementById']('guess_input')['disabled']='true',current_guess=n_guesses-0x1,widget['play']()):(document['getElementById']('guess'+current_guess['toString']())['innerHTML']=m['target']['outerText'],document['getElementById']('guess'+current_guess['toString']())['classList']['remove']('grey_out'),current_guess++),document['getElementById']('autocomp_items')['style']['visibility']='hidden',g['target']['value']='';});}}});}document['getElementById']('reset')['addEventListener']('click',f=>{init_game();});