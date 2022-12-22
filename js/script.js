
//1 ый слайдер

 new Swiper(".swiper", {
  
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  breakpoints:{
    320:{
      slidesPerView:1,
    },
    859:{
      slidesPerView:2,
    },
    1060:{
      slidesPerView:3,
    }
  }
});

 
//якорь
  const anchors = document.querySelectorAll('a[href*="#"]')
for (let anchor of anchors) {
anchor.addEventListener('click', function(event){
event.preventDefault()
const  blockID = anchor.getAttribute('href')
document.querySelector('' + blockID).scrollIntoView({
    behavior:'smooth',
    block: 'start'
})
})
}

// взаимодействие с escape
window.addEventListener("keydown", (event)=>{

  if(event.key == 'Escape'){
 modal.classList.remove("active")
 mod_sl.classList.remove('mod-active')
//  brg_center.classList.remove('brg-not-active')
//  brg_top.classList.remove('rot')
//  brg_bot.classList.remove('rot2')
//  brg_block.classList.remove('brg-pos')
  }
  },true)

// Модальное окно
let modal = document.querySelector('.modal')
let btn = document.querySelector('.btn')
let btn2 = document.querySelector('.btn2')
let senk = document.querySelector('.senk')
let cross = document.querySelector('.cross')
let btnor = document.querySelector('.btnor')
let btnye = document.querySelector('.btnyel')
let btngr = document.querySelector('.btngr')
let btnpr = document.querySelector('.btnpr')
let btnrz = document.querySelector('.btnrz')
let btnbl = document.querySelector('.btnbl')
let cross2 = document.querySelector('.cross2')


btn.onclick = ()=>{
  modal.classList.toggle('active')
  senk.classList.remove('active')

}
btn2.onclick = (event)=>{
senk.classList.toggle('active')

}

cross.onclick = ()=>{
  
    modal.classList.remove('active')
    senk.classList.remove('active')
    
}


btnor.onclick = ()=>{
  modal.classList.toggle('active')
  senk.classList.remove('active')

}
btnye.onclick = ()=>{
  modal.classList.toggle('active')
  senk.classList.remove('active')

}
btngr.onclick = ()=>{
  modal.classList.toggle('active')
  senk.classList.remove('active')

}
btnpr.onclick = ()=>{
  modal.classList.toggle('active')
  senk.classList.remove('active')

}
btnrz.onclick = ()=>{
  modal.classList.toggle('active')
  senk.classList.remove('active')

}
btnbl.onclick = ()=>{
  modal.classList.toggle('active')
  senk.classList.remove('active')

}




// Событие при нажатии на подробнее..

let bot_sl = document.querySelector('.bottom-slider-block')
let one = document.querySelector('.one-bt')
let podrob = document.querySelector('.first')
let otstup_btn = document.querySelector('.btn-o1')
let podrob2 = document.querySelector('.two-pod')
let two = document.querySelector('.twop')
let otstup_btn2 = document.querySelector('.btn-o2')
let three = document.querySelector('.threep')
let podrob3 = document.querySelector('.three-pod')
let otstup_btn3 = document.querySelector('.btn-o3')
let prev = document.querySelector('.swiper-button-prev')
let next = document.querySelector('.swiper-button-next')

let four = document.querySelector('.fourp')
let podrob4 = document.querySelector('.four-pod')
let otstup_btn4 = document.querySelector('.btn-o4')
let five = document.querySelector('.fivep')
let podrob5 = document.querySelector('.five-pod')
let otstup_btn5 = document.querySelector('.btn-o5')


one.onclick = ()=>{ 
  podrob.classList.toggle('sl-active')
  bot_sl.classList.add('height')
  one.classList.toggle('not-active')
  
}




two.onclick = ()=>{
  podrob2.classList.add('sl-active')
  bot_sl.classList.add('height')
  two.classList.add('not-active')
  
} 

three.onclick = ()=>{ 
  podrob3.classList.add('sl-active')
  bot_sl.classList.add('height')
  three.classList.add('not-active')
  
}

four.onclick = ()=>{ 
  podrob4.classList.add('sl-active')
  bot_sl.classList.add('height')
  four.classList.add('not-active')
 
}

five.onclick = ()=>{ 
  podrob5.classList.add('sl-active')
  bot_sl.classList.add('height')
  five.classList.add('not-active')
  
}


podrob.onclick = ()=>{
  podrob3.classList.remove('sl-active')
  bot_sl.classList.remove('height')
  three.classList.remove('not-active')
  otstup_btn3.classList.remove('otsbtn1')
  otstup_btn2.classList.remove('otsbtn1')
  podrob2.classList.remove('sl-active')
  otstup_btn.classList.remove('otsbtn1')
  podrob.classList.remove('sl-active')
  four.classList.remove('not-active')
  otstup_btn4.classList.remove('otsbtn1')
  one.classList.remove('not-active')
  two.classList.remove('not-active')
  podrob5.classList.remove('sl-active')
  five.classList.remove('not-active')
  otstup_btn5.classList.remove('otsbtn1')
  podrob4.classList.remove('sl-active')
}
podrob2.onclick = ()=>{
  podrob3.classList.remove('sl-active')
  bot_sl.classList.remove('height')
  three.classList.remove('not-active')
  otstup_btn3.classList.remove('otsbtn1')
  otstup_btn2.classList.remove('otsbtn1')
  podrob2.classList.remove('sl-active')
  otstup_btn.classList.remove('otsbtn1')
  podrob.classList.remove('sl-active')
  four.classList.remove('not-active')
  otstup_btn4.classList.remove('otsbtn1')
  one.classList.remove('not-active')
  two.classList.remove('not-active')
  podrob5.classList.remove('sl-active')
  five.classList.remove('not-active')
  otstup_btn5.classList.remove('otsbtn1')
  podrob4.classList.remove('sl-active')
}
podrob3.onclick = ()=>{
  podrob3.classList.remove('sl-active')
  bot_sl.classList.remove('height')
  three.classList.remove('not-active')
  otstup_btn3.classList.remove('otsbtn1')
  otstup_btn2.classList.remove('otsbtn1')
  podrob2.classList.remove('sl-active')
  otstup_btn.classList.remove('otsbtn1')
  podrob.classList.remove('sl-active')
  four.classList.remove('not-active')
  otstup_btn4.classList.remove('otsbtn1')
  one.classList.remove('not-active')
  two.classList.remove('not-active')
  podrob5.classList.remove('sl-active')
  five.classList.remove('not-active')
  otstup_btn5.classList.remove('otsbtn1')
  podrob4.classList.remove('sl-active')
}

podrob4.onclick = ()=>{
  podrob3.classList.remove('sl-active')
  bot_sl.classList.remove('height')
  three.classList.remove('not-active')
  otstup_btn3.classList.remove('otsbtn1')
  otstup_btn2.classList.remove('otsbtn1')
  podrob2.classList.remove('sl-active')
  otstup_btn.classList.remove('otsbtn1')
  podrob.classList.remove('sl-active')
  four.classList.remove('not-active')
  otstup_btn4.classList.remove('otsbtn1')
  one.classList.remove('not-active')
  two.classList.remove('not-active')
  podrob5.classList.remove('sl-active')
  five.classList.remove('not-active')
  otstup_btn5.classList.remove('otsbtn1')
  podrob4.classList.remove('sl-active')
}
podrob5.onclick = ()=>{
  podrob3.classList.remove('sl-active')
  bot_sl.classList.remove('height')
  three.classList.remove('not-active')
  otstup_btn3.classList.remove('otsbtn1')
  otstup_btn2.classList.remove('otsbtn1')
  podrob2.classList.remove('sl-active')
  otstup_btn.classList.remove('otsbtn1')
  podrob.classList.remove('sl-active')
  four.classList.remove('not-active')
  otstup_btn4.classList.remove('otsbtn1')
  one.classList.remove('not-active')
  two.classList.remove('not-active')
  podrob5.classList.remove('sl-active')
  five.classList.remove('not-active')
  otstup_btn5.classList.remove('otsbtn1')
  podrob4.classList.remove('sl-active')
}

// 2 ой слайдер
new Swiper(".swiper2", {
  cssMode: false,
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  pagination: {
    el: ".swiper-pagination",
    type: 'bullets',
    clickable: true,
    dynamicBullets: true,
  },
  speed:500,
  
  mousewheel: true,
  keyboard: true,

  
});


// сдайдер с сертификатами
let mod_sl = document.querySelector('.modal-win-sl')
let sert1 = document.querySelector('.sert1')
let sert2 = document.querySelector('.sert2')
let sert3 = document.querySelector('.sert3')
let sert4 = document.querySelector('.sert4')


sert1.onclick = ()=>{
  mod_sl.classList.toggle('mod-active')

}

sert2.onclick = ()=>{
  mod_sl.classList.toggle('mod-active')

}
sert3.onclick = ()=>{
  mod_sl.classList.toggle('mod-active')

}
sert4.onclick = ()=>{
  mod_sl.classList.toggle('mod-active')

}
cross2.onclick = ()=>{
  
  mod_sl.classList.remove('mod-active')
  
  
}

window.onscroll = function() {myFunction()};

function myFunction() {
  let winScroll = document.body.scrollTop || document.documentElement.scrollTop;
  let height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
  let scrolled = (winScroll / height) * 100;
  document.getElementById("myBar").style.width = scrolled + "%";




}




let theme = document.querySelector('.theme')
let theme_btn = document.querySelector('.theme-btn')
let body = document.querySelector('body')
let swiper = document.querySelector('.swiper')
let swiper_sl = document.querySelector('.swiper-slide')
let sun = document.querySelector('.soon')
let mom = document.querySelector('soon2')



theme.onclick = ()=>{
  sun.classList.toggle('sun')
  theme_btn.classList.toggle('moon')
  body.classList.toggle('dark')
  mom.classList.toggle('sun2')
  swiper.classList.toggle('dark')
  slide2.classList.toggle('dark')
  bot_sl.classList.toggle('dark')

 
}

let brg_menu = document.querySelector('.brg-menu')
let brg_top = document.querySelector('.tops')
let brg_center = document.querySelector('.centers')
let brg_bot = document.querySelector('.bottoms')
let brg_block =document.querySelector('.brg-block')
let secr = document.querySelector('.secr  ')


brg_menu.onclick = ()=> {
  brg_center.classList.toggle('brg-not-active')
  brg_top.classList.toggle('rot')

  brg_bot.classList.toggle('rot2')
  brg_block.classList.toggle('brg-pos')
    secr.classList.toggle('secr-ac')

}

secr.onclick = () =>{
  brg_center.classList.toggle('brg-not-active')
  brg_top.classList.toggle('rot')
  brg_bot.classList.toggle('rot2')
  brg_block.classList.toggle('brg-pos')
  secr.classList.toggle('secr-ac')
}