

var btnChangePage;

var ExtendUpdate1;
var ExtendUpdate2;
var Page3Holder;

var AnimationTracker=0;
var AnimationInterval;

var TrackerAnimationChange=0;

var ImageInterval;

function Page3AboutMe(){


let widthget10=x/6;

var AboutMeText1=$('.AboutMeText');
AboutMeText1.css({ position:'absolute',left:widthget10,top:'27%',color:'white',width:400,height:50,fontWeight:'bold'  })

let pos20=AboutMeText1.position();

var NewDeco=$('.NewDeco1');

$(NewDeco[0]).css({width:'100px',height:'5px',background:'red',borderRadius:'15%',position:'absolute',

	left:pos20.left+95,top:pos20.top+65,

})


$(NewDeco[1]).css({width:'100px',height:'5px',background:'red',borderRadius:'15%',marginLeft:'10px',position:"absolute",left:pos20.left+185,top:pos20.top+85, })







let textDeco=$('.TextDeco10');

$(textDeco).css({ position:"absolute",left:pos20.left+10,top:pos20.top+110,width:400 })

let ShowMeMore=$('.ShowMeMore');

$(ShowMeMore).css({position:"absolute",left:pos20.left+100,top:pos20.top+200,width:200 })


ShowMeMore.on('click',()=>{


TrackerShowMeMore=2;
MoveAboutMePage();


})



Page3Holder=$('.Page3Holder');

Page3Holder.css({ position:'absolute',top:'87%',transition:'2s' })

btnChangePage=$('.btnChangePage');


for(let i=0;i<btnChangePage.length;i++){

	$(btnChangePage[i]).on('click',ChangeShowMorePage);

}



ExtendUpdate1=$('.ExtendUpdate1');

ExtendUpdate1.css({ position:'absolute',top:y+y,left:x+19,background:'white',height:y,width:x+19,transition:'2s'  })

ExtendUpdate2=$('.ExtendUpdate2');

ExtendUpdate2.css({ position:'absolute',top:y+y,left:x+x+19,background:'white',height:y,width:x+19,transition:'2s'  })


///Edit position for fix pageWhoIm


let Linija0=$('.Linija0');
let broj1=$('.Broj1');
let TextIm=$('.TextIm');




Linija0.css({ top:'10%',width:'100px',height:'5px',background:'black',position:'absolute'  })

let pos30=Linija0.position();
broj1.css({ top:pos30.top-18,position:'absolute',width:'50px',height:'50px',marginLeft:'105px',fontWeight:"bold",color: 'red',fontSize:'28px',fontFamily: 'fantasy',  })
TextIm.css({ top:pos30.top-21,position:'absolute',width:'200px',height:'50px',marginLeft:'160px',fontWeight:"bold",color: 'black',fontSize:'32px',fontFamily: 'fantasy',wordSpacing:'12px'  })


NewPage1.css({transition:'1.5s',})

let TextHolder10=$('.TextHolder10');


let textwidth=x/3;
TextHolder10.css({width:400,position:'absolute',left:'50%',fontWeight:"bold",color: 'black',fontSize:'17px',fontFamily: 'cursive',marginTop:'16%'  })

var animationFire=$('#animationFire');

var ArreyAnimation=["url(../ImgAnimation/fire0.png)","url(../ImgAnimation/fire1.png)","url(../ImgAnimation/fire2.png)","url(../ImgAnimation/fire3.png)","url(../ImgAnimation/fire4.png)","url(../ImgAnimation/fire5.png)","url(../ImgAnimation/fire6.png)","url(../ImgAnimation/fire7.png)","url(../ImgAnimation/fire8.png)"]


animationFire.css({ top:'37%',backgroundImage:ArreyAnimation[0],backgroundRepeat: 'no-repeat',backgroundSize:'contain',width:'150px',height:'150px',position:'absolute',left:'100px' })



TrackerAnimationChange=0;

var positionText=TextHolder10.position();

var WheretoGO=0;

var loopImg=0;

var RotateImage=0;
NewPage1.css({transition:'2s'})

var ImgPage=$('#imgPage');

let widthimg=x-190;
let heightimg=y+310;
let topimg=y/8;

ImgPage.css({width:widthimg,height:heightimg,top:-topimg,zIndex:-1,position:'absolute',left:x/8.5})


NewPage1.on("mouseover",()=>{

ImageInterval=setInterval( ()=>{

RotateImage++;

ImgPage.css({transform:'rotateZ('+RotateImage+'deg)'})

},30 )



})

NewPage1.on("mouseout",()=>{

clearInterval(ImageInterval)



})



ExtendUpdate1.on('mouseover',( )=>{

	AnimationTracker++;

	if(AnimationTracker==1){
		AnimationTracker++;

		AnimationInterval=setInterval( ()=>{

			let positionFire=animationFire.position();

			if(positionFire.left<115){

				WheretoGO=1;

			}if(positionFire.left>positionText.left-140){

				WheretoGO=2;

			}



			if(WheretoGO==1){
					
					animationFire.css({left:'+='+1})

				}	


			if(WheretoGO==2){
				animationFire.css({left:'-='+1})

			}	


			if(TrackerAnimationChange>50){

				loopImg++;
				if(loopImg>=ArreyAnimation.length){
					loopImg=0;
				}

				console.log(loopImg)
				animationFire.css({ backgroundImage:ArreyAnimation[loopImg] })
				TrackerAnimationChange=0;
			}

			TrackerAnimationChange++;

		},10 );

	}	


})


ExtendUpdate1.on('mouseout',( )=>{

	AnimationTracker=0;	

	if(AnimationTracker==0){

		clearInterval(AnimationInterval);

	}


})



///Page3

let Linija1=$('.Linija1');
let Broj2=$('.Broj2');
let SkillSet=$('.SkillSet');

Linija1.css({ top:'10%',width:'100px',height:'5px',background:'black',position:'absolute'  })

let pos31=Linija1.position();
Broj2.css({ top:pos31.top-18,position:'absolute',width:'50px',height:'50px',marginLeft:'105px',fontWeight:"bold",color: 'red',fontSize:'28px',fontFamily: 'fantasy',  })
SkillSet.css({ top:pos31.top-21,position:'absolute',width:'200px',height:'50px',marginLeft:'140px',fontWeight:"bold",color: 'black',fontSize:'32px',fontFamily: 'fantasy',wordSpacing:'12px'  })


var SkillImgs=$('.SkillImg');
var Proimgs=$('.proimg');
var Textskills=$('.textskill');
var Textnames=$('.textname');

let getleft=x/2;


$(SkillImgs[0]).css({width:'300px',height:'100px',top:pos31.top+100,left:getleft-260,position:'absolute'})

let poshold=$(SkillImgs[0]).position();

$(Proimgs[0]).css({ position:'absolute',top:-30,width:80,height:80,left:-80 })

$(Textskills[0]).css({position:'absolute',top:-40,width:50,height:50,left:220,fontWeight:"bold",color: 'red',fontSize:'24px',fontFamily: 'fantasy'})

$(Textnames[0]).css({position:'absolute',top:-35,width:50,height:50,left:50,fontWeight:"bold",color: 'black',fontSize:'18px',fontFamily: 'cursive'})



$(SkillImgs[1]).css({width:'300px',height:'100px',top:pos31.top+100,left:getleft+180,position:'absolute'})

poshold=$(SkillImgs[1]).position();

$(Proimgs[1]).css({ position:'absolute',top:-30,width:80,height:80,left:-80 })

$(Textskills[1]).css({position:'absolute',top:-40,width:50,height:50,left:220,fontWeight:"bold",color: 'red',fontSize:'24px',fontFamily: 'fantasy'})

$(Textnames[1]).css({position:'absolute',top:-35,width:50,height:50,left:50,fontWeight:"bold",color: 'black',fontSize:'18px',fontFamily: 'cursive'})




$(SkillImgs[2]).css({width:'300px',height:'100px',top:pos31.top+200,left:getleft-260,position:'absolute'})

poshold=$(SkillImgs[2]).position();

$(Proimgs[2]).css({ position:'absolute',top:-30,width:80,height:80,left:-80 })

$(Textskills[2]).css({position:'absolute',top:-40,width:50,height:50,left:220,fontWeight:"bold",color: 'red',fontSize:'24px',fontFamily: 'fantasy'})

$(Textnames[2]).css({position:'absolute',top:-35,width:50,height:50,left:50,fontWeight:"bold",color: 'black',fontSize:'18px',fontFamily: 'cursive'})




$(SkillImgs[3]).css({width:'300px',height:'100px',top:pos31.top+200,left:getleft+180,position:'absolute'})

poshold=$(SkillImgs[3]).position();

$(Proimgs[3]).css({ position:'absolute',top:-37,width:80,height:80,left:-85 })

$(Textskills[3]).css({position:'absolute',top:-40,width:50,height:50,left:220,fontWeight:"bold",color: 'red',fontSize:'24px',fontFamily: 'fantasy'})

$(Textnames[3]).css({position:'absolute',top:-35,width:50,height:50,left:50,fontWeight:"bold",color: 'black',fontSize:'18px',fontFamily: 'cursive'})



$(SkillImgs[4]).css({width:'300px',height:'100px',top:pos31.top+300,left:getleft-260,position:'absolute'})

poshold=$(SkillImgs[4]).position();

$(Proimgs[4]).css({ position:'absolute',top:-30,width:80,height:80,left:-80 })

$(Textskills[4]).css({position:'absolute',top:-40,width:50,height:50,left:220,fontWeight:"bold",color: 'red',fontSize:'24px',fontFamily: 'fantasy'})

$(Textnames[4]).css({position:'absolute',top:-35,width:50,height:50,left:50,fontWeight:"bold",color: 'black',fontSize:'18px',fontFamily: 'cursive'})


$(SkillImgs[5]).css({width:'300px',height:'100px',top:pos31.top+300,left:getleft+180,position:'absolute'})

poshold=$(SkillImgs[5]).position();

$(Proimgs[5]).css({ position:'absolute',top:-30,width:80,height:80,left:-80 })

$(Textskills[5]).css({position:'absolute',top:-40,width:50,height:50,left:220,fontWeight:"bold",color: 'red',fontSize:'24px',fontFamily: 'fantasy'})

$(Textnames[5]).css({position:'absolute',top:-35,width:100,height:50,left:50,fontWeight:"bold",color: 'black',fontSize:'18px',fontFamily: 'cursive'})



$(SkillImgs[6]).css({width:'300px',height:'100px',top:pos31.top+400,left:getleft-260,position:'absolute'})

poshold=$(SkillImgs[6]).position();

$(Proimgs[6]).css({ position:'absolute',top:-30,width:80,height:80,left:-80 })

$(Textskills[6]).css({position:'absolute',top:-40,width:50,height:50,left:220,fontWeight:"bold",color: 'red',fontSize:'24px',fontFamily: 'fantasy'})

$(Textnames[6]).css({position:'absolute',top:-35,width:100,height:50,left:50,fontWeight:"bold",color: 'black',fontSize:'18px',fontFamily: 'cursive'})



$(SkillImgs[7]).css({width:'300px',height:'100px',top:pos31.top+400,left:getleft+180,position:'absolute'})

poshold=$(SkillImgs[7]).position();

$(Proimgs[7]).css({ position:'absolute',top:-30,width:80,height:80,left:-80 })

$(Textskills[7]).css({position:'absolute',top:-40,width:50,height:50,left:220,fontWeight:"bold",color: 'red',fontSize:'24px',fontFamily: 'fantasy'})

$(Textnames[7]).css({position:'absolute',top:-35,width:100,height:50,left:50,fontWeight:"bold",color: 'black',fontSize:'18px',fontFamily: 'cursive'})





}




var TrackerShowMeMore=0;

function ChangeShowMorePage(event){

	let ThisClick=event.target.classList;


	if(ThisClick[1] == "btnChangePage-1"  ){

		TrackerShowMeMore=1;
		MoveAboutMePage();
	}

	if(ThisClick[1] == "btnChangePage-2"  ){

		TrackerShowMeMore=2;
		MoveAboutMePage();
	}

	if(ThisClick[1] == "btnChangePage-3"  ){

		TrackerShowMeMore=3;
		MoveAboutMePage();
	}


}





function MoveAboutMePage(){



if(TrackerShowMeMore==1){

	NewPage1.css({left:19,})
	ExtendUpdate1.css({left:x+19})
	ExtendUpdate2.css({left:x+x+19})


	for(let i=0;i<btnChangePage.length;i++){

	$(btnChangePage[i]).css({ background:'white' })

	}


	Page3Holder.css({left:0,zIndex:1})
	Mouse.css({zIndex:1})


}



if(TrackerShowMeMore==2){

	NewPage1.css({left:-x-19,})
	ExtendUpdate1.css({left:+19})
	ExtendUpdate2.css({left:x+19})


	for(let i=0;i<btnChangePage.length;i++){

	$(btnChangePage[i]).css({ background:'orange' })

	}

	Page3Holder.css({left:x,zIndex:1})
	Mouse.css({zIndex:1})


}if(TrackerShowMeMore==3){

	NewPage1.css({left:-x-x-19,})
	ExtendUpdate1.css({left:-x-19})
	ExtendUpdate2.css({left:+19})


	for(let i=0;i<btnChangePage.length;i++){

	$(btnChangePage[i]).css({ background:'red' })

	}


	Page3Holder.css({left:x+x,zIndex:1})
	Mouse.css({zIndex:1})


}


}