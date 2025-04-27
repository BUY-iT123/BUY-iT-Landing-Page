export const homeinitScreen=()=>{
const homeScreen=document.querySelector('#home-screen');
const eroSec=homeScreen.querySelector('.ero-sec');
const header=homeScreen.querySelector('header');
const icon=header.querySelector('#icon');
const overlay=homeScreen.querySelector('.overlay');
const showHide=homeScreen.querySelector('.show-side');
const showHideCancel=showHide.querySelector('.img-nd-cancel i');
const startSelling=homeScreen.querySelector('.start-selling');
showHideCancel.addEventListener('click', ()=>{
  overlay.style.display='none';
  showHide.style.display='none';
  homeScreen.style.overflow='scroll';
});
const navSide=header.querySelector('nav ul #home');
const navSideTwo=header.querySelector('nav ul #about');
const navSideThree=header.querySelector('nav ul #faq');
const navSideFour=header.querySelector('nav ul #contact');

navSide.addEventListener('click', ()=>{
  window.location.href='index.html';
  navSideTwo.style.color='black';
  navSideThree.style.color='black';
  navSideFour.style.color='black';
});

navSideTwo.addEventListener('click', ()=>{
  navSideTwo.style.color='white';
  window.location.href='#about';
  navSide.style.color='black';
  navSideThree.style.color='black';
  navSideFour.style.color='black';
});

navSideThree.addEventListener('click', ()=>{
  navSideThree.style.color='white';
  window.location.href='#FAQ'
  navSide.style.color='black';
  navSideTwo.style.color='black';
  navSideFour.style.color='black';
});

const FAQ=homeScreen.querySelector('#FAQ .ask-nd-answer-question .fir .question #icon')
const txtUnder=homeScreen.querySelector('#FAQ .ask-nd-answer-question .fir .txt');
FAQ.addEventListener('click', ()=>{
  if(FAQ.classList.contains('ri-add-fill')){
    FAQ.classList.replace('ri-add-fill', 'ri-subtract-fill');
    txtUnder.style.display='block';
  }else{
    FAQ.classList.replace('ri-subtract-fill', 'ri-add-fill');
    txtUnder.style.display='none';
  }
});

const FAQtwo=homeScreen.querySelector('#FAQ .ask-nd-answer-question .sec .question #icon')
const txtUndertwo=homeScreen.querySelector('#FAQ .ask-nd-answer-question .sec .txt');
FAQtwo.addEventListener('click', ()=>{
  if(FAQtwo.classList.contains('ri-add-fill')){
    FAQtwo.classList.replace('ri-add-fill', 'ri-subtract-fill');
    txtUndertwo.style.display='block';
  }else{
    FAQtwo.classList.replace('ri-subtract-fill', 'ri-add-fill');
    txtUndertwo.style.display='none';
  }
});

const FAQthree=homeScreen.querySelector('#FAQ .ask-nd-answer-question .thr .question #icon');
const txtUnderthree=homeScreen.querySelector('#FAQ .ask-nd-answer-question .thr .txt');
FAQthree.addEventListener('click', ()=>{
  if(FAQthree.classList.contains('ri-add-fill')){
    FAQthree.classList.replace('ri-add-fill', 'ri-subtract-fill');
    txtUnderthree.style.display='block';
  }else{
    FAQthree.classList.replace('ri-subtract-fill', 'ri-add-fill');
    txtUnderthree.style.display='none';
  }
});

const FAQfour=homeScreen.querySelector('#FAQ .ask-nd-answer-question .fort .question #icon')
const txtUnderfour=homeScreen.querySelector('#FAQ .ask-nd-answer-question .fort .txt');
FAQfour.addEventListener('click', ()=>{
  if(FAQfour.classList.contains('ri-add-fill')){
    FAQfour.classList.replace('ri-add-fill', 'ri-subtract-fill');
    txtUnderfour.style.display='block';
  }else{
    FAQfour.classList.replace('ri-subtract-fill', 'ri-add-fill');
    txtUnderfour.style.display='none';
  }
});

const FAQfive=homeScreen.querySelector('#FAQ .ask-nd-answer-question .fit .question #icon')
const txtUnderfive=homeScreen.querySelector('#FAQ .ask-nd-answer-question .fit .txt');
FAQfive.addEventListener('click', ()=>{
  if(FAQfive.classList.contains('ri-add-fill')){
    FAQfive.classList.replace('ri-add-fill', 'ri-subtract-fill');
    txtUnderfive.style.display='block';
  }else{
    FAQfive.classList.replace('ri-subtract-fill', 'ri-add-fill');
    txtUnderfive.style.display='none';
  }
});

const FAQsix=homeScreen.querySelector('#FAQ .ask-nd-answer-question .sixt .question #icon')
const txtUndersix=homeScreen.querySelector('#FAQ .ask-nd-answer-question .sixt .txt');
FAQsix.addEventListener('click', ()=>{
  if(FAQsix.classList.contains('ri-add-fill')){
    FAQsix.classList.replace('ri-add-fill', 'ri-subtract-fill');
    txtUndersix.style.display='block';
  }else{
    FAQsix.classList.replace('ri-subtract-fill', 'ri-add-fill');
    txtUndersix.style.display='none';
  }
});

const FAQseven=homeScreen.querySelector('#FAQ .ask-nd-answer-question .sevn .question #icon')
const txtUnderseven=homeScreen.querySelector('#FAQ .ask-nd-answer-question .sevn .txt');
FAQseven.addEventListener('click', ()=>{
  if(FAQseven.classList.contains('ri-add-fill')){
    FAQseven.classList.replace('ri-add-fill', 'ri-subtract-fill');
    txtUnderseven.style.display='block';
  }else{
    FAQseven.classList.replace('ri-subtract-fill', 'ri-add-fill');
    txtUnderseven.style.display='none';
  }
});

const FAQeight=homeScreen.querySelector('#FAQ .ask-nd-answer-question .eith .question #icon')
const txtUndereight=homeScreen.querySelector('#FAQ .ask-nd-answer-question .eith .txt');
FAQeight.addEventListener('click', ()=>{
  if(FAQeight.classList.contains('ri-add-fill')){
    FAQeight.classList.replace('ri-add-fill', 'ri-subtract-fill');
    txtUndereight.style.display='block';
  }else{
    FAQeight.classList.replace('ri-subtract-fill', 'ri-add-fill');
    txtUndereight.style.display='none';
  }
});

const FAQnine=homeScreen.querySelector('#FAQ .ask-nd-answer-question .nint .question #icon')
const txtUndernine=homeScreen.querySelector('#FAQ .ask-nd-answer-question .nint .txt');
FAQnine.addEventListener('click', ()=>{
  if(FAQnine.classList.contains('ri-add-fill')){
    FAQnine.classList.replace('ri-add-fill', 'ri-subtract-fill');
    txtUndernine.style.display='block';
  }else{
    FAQnine.classList.replace('ri-subtract-fill', 'ri-add-fill');
    txtUndernine.style.display='none';
  }
});

const FAQtenth=homeScreen.querySelector('#FAQ .ask-nd-answer-question .tnth .question #icon')
const txtUndertenth=homeScreen.querySelector('#FAQ .ask-nd-answer-question .tnth .txt');
FAQtenth.addEventListener('click', ()=>{
  if(FAQtenth.classList.contains('ri-add-fill')){
    FAQtenth.classList.replace('ri-add-fill', 'ri-subtract-fill');
    txtUndertenth.style.display='block';
  }else{
    FAQtenth.classList.replace('ri-subtract-fill', 'ri-add-fill');
    txtUndertenth.style.display='none';
  }
});

icon.addEventListener('click', ()=>{
overlay.style.display='block';
showHide.style.display='block';
homeScreen.style.overflow='hidden'
})
}