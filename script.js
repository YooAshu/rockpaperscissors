let option = ["&#9994", "&#9995", "&#9996"]
let compp = Math.floor(Math.random() * option.length)
let opp = option[compp]
console.log(opp)
let player = "";
let a = document.getElementById("last")
let u = 0
let c = 0
let uu = document.getElementById("yous1")
let cc = document.getElementById("comps1")
console.log(uu)

let you= document.getElementById("you")
let comp= document.getElementById("comp")

uu.innerText= u 
cc.innerText= c
let btn1 = document.getElementById("btn1")
let btn2 = document.getElementById("btn2")
let btn3 = document.getElementById("btn3")

btn1.onclick = function() {
  player = "rock"
  console.log(player)
  // you.style.backgroundColor="red"
  you.innerHTML = '&#9994'
  comp.innerHTML = opp
  btn1.style.borderColor ="green"
  btn2.style.borderColor ="black"
  btn3.style.borderColor ="black"

  if(opp == "&#9994"){
    a.innerHTML = '<h1 >match draw computer chose "rock" too</h1>';
  }
  else if (opp == "&#9995") {
    a.innerHTML = '<h1 class = "red" >you lose, paper beats rock</h1>';
    c = c + 1
  }
  else if (opp == "&#9996") {
    a.innerHTML = '<h1 class = "green" > you win, rock beats scissor</h1>';
    u = u + 1
  }
  uu.innerText= u 
  cc.innerText=c
  compp = Math.floor(Math.random() * option.length)
  opp = option[compp]
  console.log(opp)
}

btn2.onclick = function() {
  player = "paper"
  you.innerHTML = '&#9995'
  comp.innerHTML = opp
  btn1.style.borderColor ="black"
  btn2.style.borderColor ="green"
  btn3.style.borderColor ="black"
  console.log(player)
  if (opp == "&#9994") { a.innerHTML = '<h1 class = "green" >you win, paper beats rock</h1>' ;
   u=u+1}
  else if (opp == "&#9995") { a.innerHTML = '<h1 >match draw computer chose "paper" too</h1>';
   }
  else if (opp == "&#9996") { a.innerHTML = '<h1 class = "red" >you lose, scissor beats paper</h1>';
c=c+1 }
uu.innerText= u 
  cc.innerText=c
  compp = Math.floor(Math.random() * option.length)
  opp = option[compp]
  console.log(opp)

}

btn3.onclick = function() {
  player = "scissor"
  you.innerHTML = '&#9996'
  comp.innerHTML = opp
  btn1.style.borderColor ="black"
  btn2.style.borderColor ="black"
  btn3.style.borderColor ="green"
  console.log(player)
  if (opp == "&#9994") { a.innerHTML = '<h1 class = "red" >you lose, rock beats scissor</h1>';
c=c+1 }
  else if (opp == "&#9995") { a.innerHTML = '<h1 class = "green" >you win, scissor beats paper</h1>';
u=u+1 }
  else if (opp == "&#9996") { a.innerHTML = '<h1 >match draw computer chose "scissor" too</h1>' }
  uu.innerText= u 
  cc.innerText=c
  compp = Math.floor(Math.random() * option.length)
  opp = option[compp]
  console.log(opp)

}

