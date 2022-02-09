var DisplayAllContent;
var MusicHolder;
var MainPage;
var NewPageVideos;
var NewPage1;
var Shorcut;


function WiewPortForLG_AND_MD(){


var y=window.innerHeight;
var x=window.innerWidth;


DisplayAllContent=`



<div class="container-fluid MainPage" style="position:absolute;color:blue;background-image:url(../Img/background/img2.jpg);width:${x}px;height:${y}px;background-size: ${x}px ${y}px;background-repeat: no-repeat;"  >


  <div class="row">
    <div class="col-2" style="margin-top:3%;color:white;"><h1>Sead Sinanovic</h1></div>  
   
    <div class="col-1 offset-4" style="margin-top:3%;"><div class="SocialIcons SocialIcons1"></div></div>
    
    <div class="col-1" style="margin-top:3%;"><div class="SocialIcons SocialIcons2"></div></div>
    
    <div class="col-1" style="margin-top:3%;"><div class="SocialIcons SocialIcons3"></div></div>
   
    <div class="col-1" style="margin-top:3%;"><div class="SocialIcons SocialIcons4"></div></div>
   

    <div class="col-2" style="margin-top:3%;"><div class="SocialIcons SocialIcons5"></div></div>
  </div>


   <div class="row" style="margin-top:6%;">
     <div class="col-3 offset-2"><h1 style="color:white;">Sead</h1></div>
   </div>


   <div class="row">
      <div class="col-3 offset-7 Portofolio"  style="margin-top:-11%"><h1>Portofolio</h1></div>
   </div>

  <div class="row Shorcut">

    <div class="col-1">
      <ul class="nodecoration">
        <li class="Page Page-1"></li>
        <li class="Page Page-2"></li>
        <li class="Page Page-3"></li>
      </ul>
    </div> 
  </div>

  <div class="row">
    <div class="col-3 offset-2"><h1 style="color:white;">Sinanovic</h1></div>
  </div>

  <div class="row">
    <div class="col-2 offset-3 crtica1"></div>
  </div>

 <div class="row">
    <div class="col-2 offset-4 crtica2"></div>
  </div>


  <div class="row">
    <div class="col-3 offset-2" style="margin-top:10px;color:white;"><h3>Front End developer</h3></div>
  </div>

  <div class="row Scrooldownrow">
    <div class="col-2 Scrooldowncol1">Scrool down</div>
  </div>

   <div class="row Scrooldowndecoration">
    <div class="col-1 scroolcrtica"></div>
  </div>


</div>
		

			  


`;



var NewPageVideosAdd=`


  <div class="row NewPageVideos">

    <div class="col-4 offset-4" style="margin-top:20px;"><h2>All my Projects</h2></div>  
    <div class="col-2 offset-1" style="margin-top:20px;">GitHub</div>


<!-- First 3 projects -->
   <div class="row justify-content-center">
 
    <div class="col-3 Card card1">
      <div class="card">
        <div class="card-img-top"  alt="Card image"><h3>BeyBlade</h3>
          <div class="card-body">
              <div class="card-title imgg img1"></div>
              <p class="card-text"><a class="Link" href="https://github.com/Sejjaa/Beyblade-Game">GitHub Link</a></p>
              <div class="btn btn-danger btnProfile">See Profile</div><div class="btn btn-warning AllProfiles">Display All Profiles</div>
          </div>
        </div>
      </div>
    </div>


    <div class="col-3 Card card2">
      <div class="card">
        <div class="card-img-top"  alt="Card image"><h3>Memory Game</h3>
          <div class="card-body">
              <div class="card-title imgg img2"></div>
              <p class="card-text"><a class="Link" href="https://github.com/Sejjaa/MemoryGame">GitHub Link</a></p>
              <div class="btn btn-danger btnProfile">See Profile</div><div class="btn btn-warning AllProfiles">Display All Profiles</div>
          </div>
        </div>
      </div>
    </div>



    <div class="col-3 Card card3">
      <div class="card">
        <div class="card-img-top"  alt="Card image"><h3>Super Mario</h3>
          <div class="card-body">
              <div class="card-title imgg img3"></div>
              <p class="card-text"><a class="Link" href="https://github.com/Sejjaa/Super-Mario">GitHub Link</a></p>
              <div class="btn btn-danger btnProfile">See Profile</div><div class="btn btn-warning AllProfiles">Display All Profiles</div>
          </div>
        </div>
      </div>
    </div>


   </div> 

<!--End of first 3 videos  -->


<!-- Next 3 projects -->

<div class="row justify-content-center" style="">
 
    <div class="col-3 Card card4">
      <div class="card">
        <div class="card-img-top"  alt="Card image"><h3>Type Osu</h3>
          <div class="card-body">
              <div class="card-title imgg img4"></div>
              <p class="card-text"><a class="Link" href="https://github.com/Sejjaa/TextandOsuGame">GitHub Link</a></p>
              <div class="btn btn-danger btnProfile">See Profile</div><div class="btn btn-warning AllProfiles">Display All Profiles</div>
          </div>
        </div>
      </div>
    </div>


    <div class="col-3 Card card5">
      <div class="card">
        <div class="card-img-top"  alt="Card image"><h3>Type Words</h3>
          <div class="card-body">
              <div class="card-title imgg img5"></div>
              <p class="card-text"><a class="Link" href="https://github.com/Sejjaa/TypingWord">GitHub Link</a></p>
              <div class="btn btn-danger btnProfile">See Profile</div><div class="btn btn-warning AllProfiles">Display All Profiles</div>
          </div>
        </div>
      </div>
    </div>



    <div class="col-3 Card card6">
      <div class="card">
        <div class="card-img-top"  alt="Card image"><h3>Animal World</h3>
          <div class="card-body">
              <div class="card-title imgg img6"></div>
              <p class="card-text"><a class="Link" href="https://github.com/Sejjaa/ThreeJS-Animal-World">GitHub Link</a></p>
              <div class="btn btn-danger btnProfile">See Profile</div><div class="btn btn-warning AllProfiles">Display All Profiles</div>
          </div>
        </div>
      </div>
    </div>


</div> 



</div>




`;



var UpdateDisplayAllContent=`



<div class="row NewPage1" style="margin-top:0px;width:${x-19}px;height:${y}px;">
    
  <div id="imgPage"></div>  

  <div class="row">
    <div class="col-2" style="margin-top:3%;"><h1>Sead Sinanovic</h1></div>
    <div class="col-3 offset-8" style="margin-top:5%;position: absolute;"><h1>Portofolio</h1></div> 
  </div>

     <div class="row" style="margin-top:-2%;">
     <div class="col-3 offset-2 AboutMeText"><h2>About me</h2></div>
   </div>


  <div class="row NewDeco">
    <div class="col-2 offset-2 NewDeco1"></div>
    <div class="col-2 NewDeco1"></div>
  </div>


  <div class="row">
    <div class="col-3 offset-2 TextDeco10"><h5>I love Programming, Technology,
and Story.</h5></div>
  </div>

   <div class="row">
    <div class="col-3 offset-2 btn btn-danger ShowMeMore">Show Me More</div>
  </div>


<div class="row Page3Holder">
  
  <div class="col-2 offset-4"><div class="btnChangePage btnChangePage-1"></div>   </div>
  <div class="col-2"><div class="btnChangePage btnChangePage-2"></div></div>
  <div class="col-2"><div class="btnChangePage btnChangePage-3"></div></div>

</div>




</div>




`;


var ExtendVideos=`


<div class="row VideosPage" style="width:${x+19}px;height:${y}px;">
    

<div class="row">
  
 <div class="col-2 offset-10" style="margin-top:25px;"><btn class="btn btn-danger Close">Close</btn> </div> 

</div>



<div class="embed-responsive embed-responsive-1by1">
  <iframe class="embed-responsive-item VideoHolder"  src="../Videos/BeyBlade.mp4"  frameborder="0" style="width:${x/2+100}px;height: ${y/2+100}px;"></iframe>
</div>





</div>




`;




var ExtendUpdate1=`


<div class="row ExtendUpdate1">
    

      
      <div class="Linija0"></div>
      <div class="Broj1">01</div>
      <div class="TextIm">Who I am</div>

      <div class="TextHolder10">

      Rođen u Bosnia i Hercegovini u gradu Tesanj 07.03.1996 godine.Zavrsio sam IT Academy u Sarajevu za Front End Developer
      01.11.2021 godine.Nemam nikakvog radnog iskustva u WebProgramiranju.Od 2020 godine pocelo me je zanimati programiranje
      pa sam odlucio da upisem skolu radi lakseg zapošljavanja.Posebno volim da programiram VideoIgrice jel tu nalazim veci izazov u kodiranju.

      </div>
  

      <div id="animationFire"></div>


</div>




`;

var ExtendUpdate2=`


<div class="row ExtendUpdate2" style="width:${x-19}px;height:${y}px;">
    
      <div class="Linija1"></div>
      <div class="Broj2">02</div>
      <div class="SkillSet">Skill Set</div>


     <div class="SkillImg SkillImg-0">

          <img class="proimg proimg-0" src="../SkillImg/html5.png">

          <div class="progress progress-0">
            <div class="progress-bar" style="width:90%;background:red;"></div>
          </div>

          <div class="textname textname-0">Html5/Css</div>
          <div class="textskill textskill-0">90%</div>

     </div>


       <div class="SkillImg SkillImg-1">

          <img class="proimg proimg-1" src="../SkillImg/boot.png">

          <div class="progress progress-1">
            <div class="progress-bar" style="width:80%;background:red;"></div>
          </div>

          <div class="textname textname-1">Bootstrap</div>
          <div class="textskill textskill-1">80%</div>

     </div>



       <div class="SkillImg SkillImg-2">

          <img class="proimg proimg-2" src="../SkillImg/js.png">

          <div class="progress progress-2">
            <div class="progress-bar" style="width:90%;background:red;"></div>
          </div>

          <div class="textname textname-2">JS</div>
          <div class="textskill textskill-2">90%</div>

     </div>

  

       <div class="SkillImg SkillImg-3">

          <img class="proimg proimg-3" src="../SkillImg/jquery.png">

          <div class="progress progress-3">
            <div class="progress-bar" style="width:100%;background:red;"></div>
          </div>

          <div class="textname textname-3">Jquery</div>
          <div class="textskill textskill-3">100%</div>

     </div>



       <div class="SkillImg SkillImg-4">

          <img class="proimg proimg-4" src="../SkillImg/php.png">

          <div class="progress progress-4">
            <div class="progress-bar" style="width:60%;background:red;"></div>
          </div>

          <div class="textname textname-4">PHP</div>
          <div class="textskill textskill-4">60%</div>

     </div>



       <div class="SkillImg SkillImg-5">

          <img class="proimg proimg-5" src="../SkillImg/node.png">

          <div class="progress progress-5">
            <div class="progress-bar" style="width:50%;background:red;"></div>
          </div>

          <div class="textname textname-5">Node JS</div>
          <div class="textskill textskill-5">50%</div>

     </div>


       <div class="SkillImg SkillImg-6">

          <img class="proimg proimg-6" src="../SkillImg/vue.png">

          <div class="progress progress-6">
            <div class="progress-bar" style="width:40%;background:red;"></div>
          </div>

          <div class="textname textname-6">Vue 3</div>
          <div class="textskill textskill-6">40%</div>

     </div>


       <div class="SkillImg SkillImg-7">

          <img class="proimg proimg-7" src="../SkillImg/three.png">

          <div class="progress progress-7">
            <div class="progress-bar" style="width:50%;background:red;"></div>
          </div>

          <div class="textname textname-7">Three JS</div>
          <div class="textskill textskill-7">50%</div>

     </div>



</div>




`;



var Music=`

<div id="MusicHolder">
  <div class="spark spark-1"></div>
  <div class="spark spark-2"></div>
  <div class="spark spark-3"></div>
  <div class="spark spark-4"></div>
  <div class="spark spark-5"></div>
  <div class="spark spark-6"></div>
  <div class="spark spark-7"></div>
  <div class="spark spark-8"></div>

</div>




`;



MainApp.append(DisplayAllContent);


///need cal for  new page height

setTimeout( ()=>{


},1000  )





MainPage=$('.MainPage');
MainPage.append(NewPageVideosAdd);


MainPage.append(UpdateDisplayAllContent);
MainPage.append(ExtendUpdate1);
MainPage.append(ExtendUpdate2);


NewPage1=$('.NewPage1');
NewPage1.css({position:'absolute',top:y*2,transition:'1.5s'  })



MainPage.append(Music);
MusicHolder=$('#MusicHolder');





var crtica1=$('.crtica1');
let needtomove=document.querySelector('.crtica1');
let compStyles = window.getComputedStyle(needtomove);
let xx=compStyles.getPropertyValue('margin-left');
let num=parseInt(xx)
crtica1.css({width:'100px',height:'5px',background:'red',borderRadius:'15%',marginLeft:num-40,marginTop:'15px'})



var crtica2=$('.crtica2');
needtomove=document.querySelector('.crtica2');
compStyles = window.getComputedStyle(needtomove);
xx=compStyles.getPropertyValue('margin-left');
num=parseInt(xx)
crtica2.css({width:'100px',height:'5px',background:'red',marginTop:'15px',borderRadius:'15%',marginLeft:num-40})


NewPageVideos=$('.NewPageVideos');
NewPageVideos.css({top:y,left:0,position:'absolute',height:y,width:x+19})


Shorcut=$('.Shorcut');


///Creating songs and add click sound effect
CreateSongs();
AddClickSound();



//Edit SocialIcons and Pages Ul


EditSocialIcons();

//ALl this is in this  function above


///Appending videos page and function for videos

MainPage.append(ExtendVideos);
ExpandVideosAndAddVideosPage();

///End of videos


///Page3Edit


Page3AboutMe();




///Reseting position for transicion

function Reset(){


NewPageVideos.css({transition:'1.5s',top:y})
NewPage1.css({transition:'1.5s',top:y*2})
MainPage.css({transition:'1.5s',top:0})


}

Reset();

}