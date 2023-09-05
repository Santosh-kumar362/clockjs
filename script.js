//timing methods

function clock(){
   let date=new Date();
   let hours=date.getHours();
   let minutes=date.getMinutes();
   let seconds=date.getSeconds();
   if(hours>12){
     hours=hours-12
   }
    

    let hrs= document.getElementById("hrs");
    hrs.innerText=hours;
    let mins= document.getElementById("mins");
    mins.innerText=minutes;
    let secs=document.getElementById("secs");
    secs.innerText=seconds;

  
    }
    setInterval(() => {
      clock();
    },1000)

    let date=new Date();
    let hours=date.getHours();
    if(hours>=12){
    let ampm=document.getElementById("am");
    ampm.innerText="PM"
    }else if(hours<12){
      let ampm=document.getElementById('am').innertext="AM"
    }
    
  // mouse hover button
  let button = document.getElementById('alarm');
 console.log(button,"alarm");

button.addEventListener("mouseover", function(){
     console.log("mouse hover");
    this.innerText = "Party time";
});
button.addEventListener("mouseout", function(){
    this.innerText = "Set Alarm"
});

//change good morning text;;;;
var wakeup=document.getElementById("wakup")
if(hours>=12 && hours<16){
wakeup.innerHTML='GOOD AFTERNOON !!! TAKE SOME LUNCH'

}

 else if(hours>16 && hours<20){
wakeup.innerHTML='GOOD EVENING!!!';
}

else if(hours>=20 && hours<23){
wakeup.innerHTML='GOOD NIGHT!!!'
 }
 // else{
//   wakeup.innerText="GOOD MORNING"
// }


 button.addEventListener("click",function(){
  
  let date=new Date();
  let hours=date.getHours();

  let morning=document.getElementById("gm");
  let lounch=document.getElementById("lch");
  let evening=document.getElementById("evn");
  let night=document.getElementById("night");
  // let img=document.getElementById("window")

  if(parseInt(morning.value)===hours){
   document.getElementById("health").innerHTML="GRAB SOME BREAKFAST!!"
    document.getElementById("window").src="./window girl.jpg";
  }
   else if(parseInt(lounch.value)===hours){
    document.getElementById("health").innerHTML="LETS HAVE SOME LOUNCH!!"
    document.getElementById("window").src="./Group 5183@2x.jpg";

  }
  else if (parseInt(night.value)===hours){
    document.getElementById("health").innerHTML="CLOSE YOUR EYES AND GO TO SLEEP!!"
    document.getElementById("window").src="./good night.jpg";

  }
  else if(parseInt(evening.value)===hours){
    document.getElementById("health").innerHTML="STOP YAWNING GET SOME TEA IT IS EVENING!!"
    document.getElementById("window").src="./good evening.png";

  }
 

   

 let touch= document.getElementsByClassName('touch');
 touch[0].innerText=morning.options[morning.selectedIndex].text;
 touch[1].innerText=lounch.options[lounch.selectedIndex].text;

 touch[2].innerText=evening.options[evening.selectedIndex].text;

 touch[3].innerText=night.options[night.selectedIndex].text;
});




     

      
    
    




    