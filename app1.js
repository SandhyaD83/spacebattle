
class Ship{
  constructor(hull,firepower,accuracy){
      this.hull=hull;
      this.firepower=firepower;
      this.accuracy=accuracy;
      } 
      randomNum(min, max) {
          return Math.floor(Math.random() * (max - min) + min);
        }
 }
let ussShip=new Ship(20,5,0.7)
let alienShip=new Ship();
let aHull=alienShip.randomNum(3, 6);
let aFire=alienShip.randomNum(2, 4);
let aAcc= alienShip.randomNum(6,8)/10;


const ourShip=()=>{
  ussShip=new Ship(20,5,0.7)
  let  p1hull =document.querySelector(".p1Hull")
  p1hull.innerHTML=`Hull ${ussShip.hull}`;
  let  p1fire =document.querySelector(".p1Fire")
  p1fire.innerHTML=`Fire power ${ussShip.firepower}`;
   let ussbox=document.querySelector(".ourSpaceShip")
   ussbox.style.backgroundImage="url('https://i.redd.it/jagaa6tz1vl71.gif')";   
   ussbox.style.backgroundSize="cover"
  
   let  p1acc =document.querySelector(".p1Acc")
  p1acc.innerHTML=`Accuracy ${ussShip.accuracy}`;
}
let images=['https://i.gifer.com/1KcQ.gif'
         ,"https://media.tenor.com/yzUgNJdZ2_sAAAAC/spaceship-moonfall.gif",
         "https://media4.giphy.com/media/3o72F739f2XxGFXZQY/giphy.gif",
         "https://i.gifer.com/nOD.gif","https://i.pinimg.com/originals/83/0e/0f/830e0fdceaf364e4eb90d734f95dab7b.gif"
      ]
let i=0;
const aShip=()=>{
   aHull=alienShip.randomNum(3, 6);
   aFire=alienShip.randomNum(2, 4);
   aAcc= alienShip.randomNum(6,8)/10;
 
  let  p2hull =document.querySelector(".p2Hull")
  p2hull.innerHTML=`Hull ${aHull}`;
  let  p2fire =document.querySelector(".p2Fire")
  p2fire.innerHTML=`Fire Power ${aFire}`;
  let  p2acc =document.querySelector(".p2Acc")
  p2acc.innerHTML=`Accuracy ${aAcc}`;
  let alienbox=document.querySelector(".alienSpaceShip")
  alienbox.style.backgroundImage=`url(${images[i]})`;
  alienbox.style.backgroundSize="cover"
}
const play=()=>{
  document.querySelector(".txt3").style.display="none"
  document.querySelector(".txt1").style.display="none"
  document.querySelector(".txt2").style.display="none"
  document.querySelector(".ourSpaceShip").style.display="block"
  document.querySelector(".alienSpaceShip").style.display="block"
  i=0;
  ourShip();
  aShip();
  }
let alienbox=document.querySelector(".alienSpaceShip")
const changeImage=()=>{
  i++;
  
  aShip();
  setTimeout(ussattack,2000);
}
const ussattack=()=>{
 if(aHull>0)
  {
   aHull-=aFire;
  let  p2hull =document.querySelector(".p2Hull")
  p2hull.innerHTML=`Hull ${aHull}`;
  if(aHull>0) {
   setTimeout(alienattack,2000);
  }
  else if(aHull<=0 && i<(images.length-1)) {
      createBtns();
     }
  else{
      let txt2=document.querySelector(".txt2")
      txt2.style.display="block"
      txt2.innerHTML="You lost"
  }   

}
}
const alienattack=()=>{
 
  if(ussShip.hull>0)
 {
  ussShip.hull-=ussShip.firepower;
  let  p1hull =document.querySelector(".p1Hull")
  p1hull.innerHTML=`Hull ${ussShip.hull}`;
     if(ussShip.hull>0)
     {
      setTimeout(ussattack,2000);
 
     }
     else{
      let txt1=document.querySelector(".txt1")
      txt1.style.display="block"
      txt1.innerHTML="You lost"
     }
}

}

const createBtns=()=>{
  let popupbtns=document.createElement("div")
  popupbtns.classList.add("popupDiv");
  let alienbox=document.querySelector(".alienSpaceShip")
  alienbox.appendChild(popupbtns)
  let attack= document.createElement("button");
  attack.classList.add("attackBtn")
  attack.textContent="Attack"
  document.querySelector(".popupDiv").appendChild(attack)
  let retreat= document.createElement("button");
  retreat.classList.add("retreatBtn")
  retreat.textContent="Retreat"
  document.querySelector(".popupDiv").appendChild(retreat)
  attack.addEventListener("click",attack1)
  retreat.addEventListener("click",retreat1)
   
}
const attack1=()=>
{ 
  document.querySelector(".popupDiv").remove();
 changeImage();
}
const retreat1=()=>
{
  document.querySelector(".popupDiv").remove();
  document.querySelector(".ourSpaceShip").style.display="none"
  document.querySelector(".alienSpaceShip").style.display="none"
  let txt3=document.querySelector(".txt3")
  txt3.style.display="block"
      txt3.innerHTML="Game over"
}