var SocialIcons;
var AllPages;
var TrackingSoicalSound=0;
var TrackingSoicalMenu=0;

var SocialMenuHolder;

var y=window.innerHeight;
var x=window.innerWidth;

///Socail icons and doing Page function

var TrackerScroolClick=0;

var ResultScrool=0;



function EditSocialIcons(){

SocialIcons=$('.SocialIcons');

$(SocialIcons[0]).on('click',()=>{

	if(TrackingSoicalSound==0){
		MusicHolder.css({display:'block'})
		setTimeout(RunMusic,500)
		$(SocialIcons[0]).css({backgroundImage:"url(../Img/socialicons/onsound.png)"})

		TrackingSoicalSound=4;
		setTimeout( ()=>{

			TrackingSoicalSound=1;

		},10000);

		
		if(CircleAnimation){
			CircleAnimation.css({display:'block'})
		}if(MusicNameHolder){
			MusicNameHolder.css({display:'block'})
		}
		

	}else if(TrackingSoicalSound==1){
		Song.pause();
		clearInterval(SparkAnimation);
		clearInterval(RunCircleAnimation)
		MusicHolder.css({display:'none'})
		CircleAnimation.css({display:'none'})
		MusicNameHolder.css({display:'none'})
		$(SocialIcons[0]).css({backgroundImage:"url(../Img/socialicons/mutesound.png)"})
		TrackingSoicalSound=4;
		setTimeout( ()=>{

			TrackingSoicalSound=0;
			
		},10000);
	}


})//end on first click





$(SocialIcons[4]).on('click',()=>{


	if(TrackingSoicalMenu==0){

		let SocialMenuHolder=`<div id='SocialMenuHolder'>
		<div class='Home'>Home</div>
		<div class='Projects'>Projects</div>
		<div class='AboutMe'>About Me</div>
		</div>`;
		let SocialMenuPos=$(SocialIcons[4]).position();
		MainPage.append(SocialMenuHolder);

		SocialMenuHolder=$('#SocialMenuHolder');
		SocialMenuHolder.css({ position:'absolute',width:'130px',height:"130px",left:SocialMenuPos.left-40,top:SocialMenuPos.top+50,borderRadius:'10%',border:'solid 3px gold',textAlign:'center',fontSize:'21px',fontWeight: 'bold',background: "rgb(2,0,36)",
        background: "linear-gradient(82deg, rgba(2,0,36,1) 0%, rgba(231,126,14,1) 50%, rgba(0,212,255,1) 100%)"  })


		let Home=$('.Home');
		Home.css({color:'red',marginTop:'10px'})

		Home.on('click',()=>{


			GoToFirstPage();
			goPageToFirstPage();
			SocialMenuHolder.remove();

		})


		let Projects=$('.Projects');
		Projects.css({color:'orange'})

		Projects.on('click',()=>{


			GoToSecoundPage();
			ResultScrool=0;
			GoPageDown();
			SocialMenuHolder.remove();

		})


		let AboutMe=$('.AboutMe');
		AboutMe.css({color:'lightblue'})

		AboutMe.on('click',()=>{


			GoToThirdPage();
			ResultScrool=1;
			GoPageDown();
			SocialMenuHolder.remove();

		})


		TrackingSoicalMenu=1;

	}else if(TrackingSoicalMenu==1){

		SocialMenuHolder=$('#SocialMenuHolder');
		SocialMenuHolder.remove();
		TrackingSoicalMenu=0;
	}




} )



function EditSwitchPage(){

AllPages=$('.Page');

for(var AllPage of AllPages){

	$(AllPage).on('click',(e)=>{

		if(e.target.className=="Page Page-1"){

			GoToFirstPage();
			goPageToFirstPage();

		}else if(e.target.className=="Page Page-2"){

			
			GoToSecoundPage();
			ResultScrool=0;
			GoPageDown();

		}else if (e.target.className=="Page Page-3") {
			
	
			GoToThirdPage();
			ResultScrool=1;
			GoPageDown();



		}

	})///end of event





}///end of for loop


var Scrooldownrow=$('.Scrooldownrow');

Scrooldownrow.css({width:750,top:y-130,left:-40})

var Scrooldowndec=$('.Scrooldowndecoration');

Scrooldowndec.css({ width:x-10,top:y-90,left:0  })

var scroolcrtica=$('.scroolcrtica');

scroolcrtica.css({width:170,height:5,left:2})





addEventListener('wheel', (e)=>{


if(TrackerScroolClick==0){

TrackerScroolClick++;


if(event.deltaY >= 10){

	if(ResultScrool == 0 ){

	ResultScrool=1;
	MainPage.css({top:-y})
	NewPageVideos.css({top:y })
	NewPage1.css({top:y+y})
	GoToSecoundPage();

	}else if(ResultScrool == 1 ){

	ResultScrool=2;
	MainPage.css({top:-y-y })
	NewPageVideos.css({top:y })
	NewPage1.css({top:y+y})

	GoToThirdPage();

	}


}else if(event.deltaY <= 10){


	if(ResultScrool == 1 ){

	ResultScrool=0;
	MainPage.css({top:0 })
	NewPageVideos.css({top:y })
	GoToFirstPage()


	}else if(ResultScrool == 2 ){

	ResultScrool=1;

	MainPage.css({top:-y })
	NewPageVideos.css({top:y })
	GoToSecoundPage();
	}



}


setTimeout( ()=>{

TrackerScroolClick=0;


},1500 )



}//end of main loop




});


}

EditSwitchPage();








///reset Scrool
setTimeout( ()=>{

window.scroll({top:0})

setTimeout( ()=>{

window.scroll({top:0})

setTimeout( ()=>{

window.scroll({top:0})


},200 )


},20 )


},20 )





}






function GoToFirstPage(){

$(AllPages[0]).css({ width:50,transition:'2s' })
$(AllPages[1]).css({ width:20,transition:'2s' })
$(AllPages[2]).css({ width:20,transition:'2s' })
Shorcut.css({top:'42%',transition:'2s',zIndex:1})
Mouse.css({zIndex:1})


}


function GoToSecoundPage(){

$(AllPages[0]).css({ width:20,transition:'2s' })
$(AllPages[1]).css({ width:50,transition:'2s' })
$(AllPages[2]).css({ width:20,transition:'2s' })

Shorcut.css({top:'142%',transition:'2s',zIndex:1})
Mouse.css({zIndex:1})


}


function GoToThirdPage(){

$(AllPages[0]).css({ width:20,transition:'2s' })
$(AllPages[1]).css({ width:20,transition:'2s' })
$(AllPages[2]).css({ width:50,transition:'2s' })
			
Shorcut.css({top:'242%',transition:'2s',zIndex:1})
Mouse.css({zIndex:1})


}


function GoPageDown(){


	if(ResultScrool == 0 ){

	ResultScrool=1;
	MainPage.css({top:-y})
	NewPageVideos.css({top:y })
	NewPage1.css({top:y+y})

	}else if(ResultScrool == 1 ){

	ResultScrool=2;
	MainPage.css({top:-y-y })
	NewPageVideos.css({top:y })
	NewPage1.css({top:y+y})
	}


}


function goPageToFirstPage(){

	MainPage.css({top:0 })
	NewPageVideos.css({top:y })
	NewPage1.css({top:y+y})
	ResultScrool=0;

}



