let click= new Audio("click.mp3")
 
let info=document.getElementById('win')
let data=document.getElementsByClassName("gameContener")
// let game=false;
 
const  clearScreen=()=>{
  let box =document.getElementsByClassName("text")
  Array.from(box).forEach(element=>{
    element.innerText=" " 
    info.innerText=" "
    turn="x"
  })

}
 
 

let turn= "x"
const change=()=>{
    return turn==="x"? "o":"x";
}

 

const checkwin=()=>{
  let box =document.getElementsByClassName("text")
  let wins=[
    [0,1,2],
    [3,4,5],
    [6,7,8],
    [0,3,6],
    [1,4,7],
    [2,5,8],
    [0,4,8],
    [2,4,6]
  ]
  
  wins.forEach(e =>{
 
  let box =document.getElementsByClassName("text")
  
   if( (box[e[0]].innerText===box[e[1]].innerText) && (box[e[2]].innerText===box[e[1]].innerText) && (box[e[0]].innerText !=="") ){
     info.innerText=box[e[0]].innerText+" is won"
     gomeOver.play()
  
  setTimeout(() => {
    let box =document.getElementsByClassName("text")
    Array.from(box).forEach(element=>{
      element.innerText=" " 
      info.innerText=" "
      turn="x"
    })
  }, 2000);

     
  
   }
  
   
   
   })
  
}
// checkwin();
 
Array.from(data).forEach(element =>{
  let screen=element.querySelector('.text')
   element.addEventListener('click',()=>{
   screen.innerText=turn;
  //  info.innerText=turn+" turn";
   // console.log(turn)
   turn=change()
   checkwin();
   
  })
 })
 

 
 