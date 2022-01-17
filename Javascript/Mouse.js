var MainApp;    ///MainApp is The div main app



var Mouse;
var MousePart2;
var MousePart3;

function CreateMouse(){
	MainApp=$('#MainApp');

	MainApp.append('<div id="Mouse"></div>');
	Mouse=$('#Mouse');

	Mouse.append('<div id="MousePart2"></div>');
	MousePart2=$('#MousePart2');


	MousePart2.append('<div id="MousePart3"></div>');
	MousePart3=$('#MousePart3');


	AddAnimationToMouse();

}



var MouseRotationTracker=0;

function AddAnimationToMouse(){

	var MouseRotation=setInterval( ()=>{

		Mouse.css({transform:'rotateZ('+MouseRotationTracker+'deg)'})
		MouseRotationTracker+=3;

		if(MouseRotationTracker>=359){
			MouseRotationTracker=0;
		}

	},10);




	var MouseAnimation=setInterval( ()=>{


		MousePart3.css({width:'10px',height:'10px',transition:'1s',top:'0px'});


		setTimeout( ()=>{

			MousePart3.css({width:'2.5px',height:'2.5px',transition:'0.5s',top:'40%'});	

		},1000 )

	},1700);



addEventListener('mousemove',(e)=>{


	let MX=e.clientX;
	let MY=e.clientY;


	Mouse.css({left:MX-15,top:MY-15})


})


}