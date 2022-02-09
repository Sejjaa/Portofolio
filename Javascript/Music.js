var Sparks;
var HeightSpark=[30,35,40,45,50,55,60];
var ColorSparkArrey=["#fc0b03","#ada2a1","#e85110","#e07d0b","#d1ab80","#de9c0d","#ede907","#8deb09","#3bf507","#08731c","#05f585","#27dbb1","#35f0e6","#07cbf2","#058ff2","#071bf2","#6848a8","#a512db","#e00af0","#d60fa4","#e30780","#f20713"];

var DecoarationMusicCircle;
var CircleAnimation;

var SongsName=["Forever After All","God we need you","Kevin gates dear god","Nobody but you","One call away","Suga boom boom","Mom","Welcome to my house","Gods Country"];
var SongsPlayList=[];
var Song;

var SparkAnimation;
var RunCircleAnimation;

var MusicNameHolder;

function CreateSongs(){

var Song1=new Audio('../Song/forever_after_all.mp3');
var Song2=new Audio('../Song/god_we_need_you_now.mp3');
var Song3=new Audio('../Song/kevin_gates_dear_god.mp3');
var Song4=new Audio('../Song/nobody_but_you.mp3');
var Song5=new Audio('../Song/one_call_away.mp3');
var Song6=new Audio('../Song/suga_boom_boom.mp3');
var Song7=new Audio('../Song/mom.mp3');
var Song8=new Audio('../Song/welcome_to_my_house.mp3');
var Song9=new Audio('../Song/gods_country.mp3');

SongsPlayList.push(Song1,Song2,Song3,Song4,Song5,Song6,Song7,Song8,Song9);

}


function RunMusic(){

Sparks=$('.spark');


SparkAnimation=setInterval( ()=>{

	let rand=Math.floor(Math.random()*Sparks.length);
	let h1=Math.floor(Math.random()*HeightSpark.length);
	let c1=Math.floor(Math.random()*ColorSparkArrey.length);
	$(Sparks[rand]).css({transition:'0.3s',height:HeightSpark[h1],background:ColorSparkArrey[c1]})

	let rand1=Math.floor(Math.random()*Sparks.length);
	let h2=Math.floor(Math.random()*HeightSpark.length);
	let c2=Math.floor(Math.random()*ColorSparkArrey.length);
	$(Sparks[rand1]).css({ transition:'0.3s',height:HeightSpark[h2],background:ColorSparkArrey[c2] })


	let rand2=Math.floor(Math.random()*Sparks.length);
	let h3=Math.floor(Math.random()*HeightSpark.length);
	let c3=Math.floor(Math.random()*ColorSparkArrey.length);
	$(Sparks[rand2]).css({transition:'0.3s',height:HeightSpark[h3],background:ColorSparkArrey[c3]})


	let rand3=Math.floor(Math.random()*Sparks.length);
	let h4=Math.floor(Math.random()*HeightSpark.length);
	let c4=Math.floor(Math.random()*ColorSparkArrey.length);
	$(Sparks[rand3]).css({transition:'0.3s',height:HeightSpark[h4],background:ColorSparkArrey[c4]})

	let rand4=Math.floor(Math.random()*Sparks.length);
	let h5=Math.floor(Math.random()*HeightSpark.length);
	let c5=Math.floor(Math.random()*ColorSparkArrey.length);
	$(Sparks[rand4]).css({transition:'0.3s',height:HeightSpark[h5],background:ColorSparkArrey[c5]})

	setTimeout( ()=>{

		$(Sparks[rand]).css({transition:'0.3s',height:'5px'})
		$(Sparks[rand1]).css({transition:'0.3s',height:'5px'})
		$(Sparks[rand2]).css({transition:'0.3s',height:'5px'})
		$(Sparks[rand3]).css({transition:'0.3s',height:'5px'})
		$(Sparks[rand4]).css({transition:'0.3s',height:'5px'})
	},300)


},600 )



var Rotation=0;
var MusicDecAnimation=setTimeout( ()=>{



var CreateCircle="<div id='circle'></div>";
MainPage.append(CreateCircle)
CircleAnimation=$('#circle');
let pos=MusicHolder.position();
CircleAnimation.css({position:'absolute',borderRadius:'50%',width:300,height:300,backgroundRepeat: "no-repeat",backgroundSize: "contain",backgroundImage:"url('../Img/background/fire2.png')",left:pos.left-65,top:pos.top-160})

var SongNameDisplay="<div id='MusicNameHolder'></div>";
MainPage.append(SongNameDisplay)
MusicNameHolder=$('#MusicNameHolder');

MusicNameHolder.css({ position:'absolute',width:'200px',height:'50px',textAlign:'center',fontSize:'18px',color:'red',fontFamily:'monospace',textDecoration: 'underline',left:pos.left-10,top:pos.top-70  })



RunCircleAnimation=setInterval( ()=>{

CircleAnimation.css({transform:'rotateZ('+Rotation+'deg)'})
Rotation++;

if(Rotation>=359){
	Rotation=0;
}

},22 );





function PlayAudio(){

	let rands=Math.floor(Math.random()*SongsPlayList.length); 
	Song=SongsPlayList[rands];
	Song.volume = 0.1;
	Song.play();
	
	let songNametoPut=SongsName[rands];
	MusicNameHolder.text(songNametoPut)

	Song.addEventListener("ended", ()=>{
	Song.currentTime = 0;	
	Song.pause();	
	Song=1;

	setTimeout(PlayAudio,1500 );

	});

}

PlayAudio();







},2000);









}


var ClickSound=new Audio('../Song/click3.wav');

function AddClickSound(){

$(window).on('click',()=>{

ClickSound.play();

})

}