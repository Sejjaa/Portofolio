var VideosPage;

var AllCards;
var AllImages;

var CardWitdh;
var CardHeight;

var BtnDisplayAllProfiles;

var BtnProfile;

var EnterCard0;

var TrackerVideoClick=0;

var BtnClose;
var VideoPlaying;


function ExpandVideosAndAddVideosPage(){

	VideosPage=$('.VideosPage');
	AllImages=$('.imgg');


	BtnClose=$('.Close');
	VideoPlaying=$('.VideoHolder');

	VideosPage.css({position:'absolute',top:y,left:x+19,transition:'2s',background:'black'  })

	AllCards=$('.Card');

	let getCard=document.querySelector('.Card');
	let compStyles = window.getComputedStyle(getCard);
    let xx=compStyles.getPropertyValue('width');
    let xx1=compStyles.getPropertyValue('height');
    CardWitdh=parseInt(xx);
    CardHeight=parseInt(xx1);

   BtnDisplayAllProfiles=$('.AllProfiles');

   for(let i=0;i<BtnDisplayAllProfiles.length;i++){

   	$(BtnDisplayAllProfiles[i]).css({display:'none'});
   	$(BtnDisplayAllProfiles[i]).on('click',ScaleCardDown);

   }

    BtnProfile=$('.btnProfile');

    for(let i=0;i<BtnProfile.length;i++){

   	$(BtnProfile[i]).on('click',ScaleCard);

   }



   BtnClose.on('click',()=>{

   	TrackerVideoClick=1;
    $(VideoPlaying).attr("src", "");

   	VideosPage.css({left:x+20})

   })


    function ScaleCard(e){


    	let getClass=e.target.offsetParent.parentElement.classList;


    	if(getClass[2]=="card1"){


    		$(AllCards[0]).css({ width:'50%',height:'y/2' })
    		$(BtnProfile[0]).text('See Video')
    		$(BtnDisplayAllProfiles[0]).css({display:'inline-block',margin:'25px'})
    		$(AllImages[0]).css({ backgroundSize: '200px 200px',width:200,height:200  })

    		TrackerVideoClick++;

    		if(TrackerVideoClick==2){

    			
    			VideosPage.css({left:'0px' });

    			setTimeout( ()=>{

    				$(VideoPlaying).attr("src", "../Videos/BeyBlade.mp4");

    			},2000 );
		


    		}if(TrackerVideoClick==3){
    			TrackerVideoClick=0;
    		}


    		EnterCard0=0;
    		HideOthers();


    	}if(getClass[2]=="card2"){


    		$(AllCards[1]).css({ width:'50%',height:'y/2' })
    		$(BtnProfile[1]).text('See Video')
    		$(BtnDisplayAllProfiles[1]).css({display:'inline-block',margin:'10px'})
    		$(AllImages[1]).css({ backgroundSize: '200px 200px',width:200,height:200  })

    		TrackerVideoClick++;

    		if(TrackerVideoClick==2){

    			
    			VideosPage.css({left:'0px' });

    			setTimeout( ()=>{

    				$(VideoPlaying).attr("src", "../Videos/MemoryGame.mp4");

    			},2000 );
		


    		}if(TrackerVideoClick==3){
    			TrackerVideoClick=0;
    		}


    		EnterCard0=1;
    		HideOthers();


    	}if(getClass[2]=="card3"){


    		$(AllCards[2]).css({ width:'50%',height:'y/2' })
    		$(BtnProfile[2]).text('See Video')
    		$(BtnDisplayAllProfiles[2]).css({display:'inline-block',margin:'10px'})
    		$(AllImages[2]).css({ backgroundSize: '200px 200px',width:200,height:200  })


    		TrackerVideoClick++;

    		if(TrackerVideoClick==2){

    			
    			VideosPage.css({left:'0px' });

    			setTimeout( ()=>{

    				$(VideoPlaying).attr("src", "../Videos/SuperMario.mp4");

    			},2000 );
		


    		}if(TrackerVideoClick==3){
    			TrackerVideoClick=0;
    		}


    		EnterCard0=2;
    		HideOthers();


    	}if(getClass[2]=="card4"){


    		$(AllCards[3]).css({ width:'50%',height:'y/2',marginTop:-y/2 })
    		$(BtnProfile[3]).text('See Video')
    		$(BtnDisplayAllProfiles[3]).css({display:'inline-block',margin:'10px'})
    		$(AllImages[3]).css({ backgroundSize: '200px 200px',width:200,height:200  })


    		TrackerVideoClick++;

    		if(TrackerVideoClick==2){

    			
    			VideosPage.css({left:'0px' });

    			setTimeout( ()=>{

    				$(VideoPlaying).attr("src", "../Videos/TypeOsu.mp4");

    			},2000 );
		


    		}if(TrackerVideoClick==3){
    			TrackerVideoClick=0;
    		}


    		EnterCard0=3;
    		HideOthers();


    	}if(getClass[2]=="card5"){


    		$(AllCards[4]).css({ width:'50%',height:'y/2',marginTop:-y/2 })
    		$(BtnProfile[4]).text('See Video')
    		$(BtnDisplayAllProfiles[4]).css({display:'inline-block',margin:'10px'})
    		$(AllImages[4]).css({ backgroundSize: '200px 200px',width:200,height:200  })


    		TrackerVideoClick++;

    		if(TrackerVideoClick==2){

    			
    			VideosPage.css({left:'0px' });

    			setTimeout( ()=>{

    				$(VideoPlaying).attr("src", "../Videos/TypeWords.mp4");

    			},2000 );
		


    		}if(TrackerVideoClick==3){
    			TrackerVideoClick=0;
    		}



    		EnterCard0=4;
    		HideOthers();


    	}if(getClass[2]=="card6"){


    		$(AllCards[5]).css({ width:'50%',height:'y/2',marginTop:-y/2 })
    		$(BtnProfile[5]).text('See Video')
    		$(BtnDisplayAllProfiles[5]).css({display:'inline-block',margin:'10px'})
    		$(AllImages[5]).css({ backgroundSize: '200px 200px',width:200,height:200  })


    		TrackerVideoClick++;

    		if(TrackerVideoClick==2){

    			
    			VideosPage.css({left:'0px' });

    			setTimeout( ()=>{

    				$(VideoPlaying).attr("src", "../Videos/Word.mp4");

    			},2000 );
		


    		}if(TrackerVideoClick==3){
    			TrackerVideoClick=0;
    		}


    		EnterCard0=5;
    		HideOthers();


    	}



    } 



var CardHolder=$('.card');

var CardText=$('.card-text');

$(CardText[0]).css({color:'red'})


function changeCardColor(){


for(let i=0;i<CardHolder.length;i++){

	let rand10=Math.floor(Math.random()*ColorSparkArrey.length );
	let colorCard=ColorSparkArrey[rand10];

	$(CardHolder[i]).css({background:colorCard})


}


setTimeout(changeCardColor,25000);


}

changeCardColor();


}



function HideOthers(){


if(EnterCard0==0){

$(AllCards[1]).css({ display:'none'	  })
$(AllCards[2]).css({ display:'none'  })
$(AllCards[3]).css({ display:'none'  })
$(AllCards[4]).css({ display:'none'  })
$(AllCards[5]).css({ display:'none'	  })



}if(EnterCard0==1){

$(AllCards[0]).css({ display:'none'	  })
$(AllCards[2]).css({ display:'none'  })
$(AllCards[3]).css({ display:'none'  })
$(AllCards[4]).css({ display:'none'  })
$(AllCards[5]).css({ display:'none'	  })



}if(EnterCard0==2){

$(AllCards[0]).css({ display:'none'	  })
$(AllCards[1]).css({ display:'none'  })
$(AllCards[3]).css({ display:'none'  })
$(AllCards[4]).css({ display:'none'  })
$(AllCards[5]).css({ display:'none'	  })



}if(EnterCard0==3){

$(AllCards[0]).css({ display:'none'	  })
$(AllCards[1]).css({ display:'none'  })
$(AllCards[2]).css({ display:'none'  })
$(AllCards[4]).css({ display:'none'  })
$(AllCards[5]).css({ display:'none'	  })



}if(EnterCard0==4){

$(AllCards[0]).css({ display:'none'	  })
$(AllCards[2]).css({ display:'none'  })
$(AllCards[3]).css({ display:'none'  })
$(AllCards[1]).css({ display:'none'  })
$(AllCards[5]).css({ display:'none'	  })



}if(EnterCard0==5){

$(AllCards[0]).css({ display:'none'	  })
$(AllCards[2]).css({ display:'none'  })
$(AllCards[3]).css({ display:'none'  })
$(AllCards[4]).css({ display:'none'  })
$(AllCards[1]).css({ display:'none'	  })



}




}



function ScaleCardDown(){

TrackerVideoClick=0;

$(AllCards[0]).css({ display:'block',width:CardWitdh,height:CardHeight,marginTop:20 	  })
$(AllCards[1]).css({ display:'block',width:CardWitdh,height:CardHeight,marginTop:20 	  })
$(AllCards[2]).css({ display:'block',width:CardWitdh,height:CardHeight,marginTop:20   })
$(AllCards[3]).css({ display:'block',width:CardWitdh,height:CardHeight,marginTop:0  })
$(AllCards[4]).css({ display:'block',width:CardWitdh,height:CardHeight,marginTop:0  })
$(AllCards[5]).css({ display:'block',width:CardWitdh,height:CardHeight,marginTop:0	  })


for(let i=0;i<BtnProfile.length;i++){

	$(BtnProfile[i]).text('See Profile')

}


for(let i=0;i<BtnDisplayAllProfiles.length;i++){

	$(BtnDisplayAllProfiles[i]).css({display:'none'})

}

for(let i=0;i<AllImages.length;i++){

	$(AllImages[i]).css({backgroundSize: '120px 50px',width:120,height:50 })

}



}