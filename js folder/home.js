export const homeinitScreen=()=>{
const homeScreen=document.querySelector('#home-screen');
const eroSec=homeScreen.querySelector('.ero-sec');
const eroHeaderText=eroSec.querySelector('h1');
const weAre=homeScreen.querySelector('.who-we-are-sec')
const why=homeScreen.querySelector('.why-you-should-join')
const stats=homeScreen.querySelector('.BUYiT-stats')
const testi=homeScreen.querySelector('.testimonials')
const sponsored=homeScreen.querySelector('.sponsored')
const FAQs=homeScreen.querySelector('#FAQ')
const header=homeScreen.querySelector('header');
const icon=header.querySelector('#icon');
const overlay=homeScreen.querySelector('.overlay');
const showHide=homeScreen.querySelector('.show-side');
const store=showHide.querySelector('.things p');
const back=document.createElement('p');
const allProducts = document.querySelectorAll('.a');
allProducts.forEach((clicks) => {
  clicks.addEventListener('click', async (e) => {
    const product = await e.target.closest('.a');
    const img = await product.querySelector('img');
    const name = await product.querySelector('#product-name');
    const price = product.querySelector('#product-price');
    const productID = product.querySelector('#id');
    const imageSide = product.querySelector('.image-sec').addEventListener('click', async () => {
      console.log(img.src);
      console.log(name);
      console.log(price);

      const confirmProduct = await document.querySelector('.view-product-that-i-want-to-buy');
      const appendProductPic = confirmProduct.querySelector('.view-product-img-name-price .where-img-view-will-be');
      const productName = confirmProduct.querySelector('.view-product-img-name-price .product-price-nd-name #name');
      const productPrice = confirmProduct.querySelector('.view-product-img-name-price .product-price-nd-name #price');
      const productId = confirmProduct.querySelector('.view-product-img-name-price .product-price-nd-name #ids');
      //Side For Sending Message

      const buttonView = confirmProduct.querySelector('button');
      buttonView.addEventListener('click', () => {
        const iD = productId.textContent;
        const Name = productName.textContent;
        const Price = productPrice.textContent;

        console.log(iD)

        window.location.href=`https://wa.me/2349121440680?text=HI%20I%20am%20interested%20in%20${encodeURIComponent(iD)}-${encodeURIComponent(Name)}-${encodeURIComponent(Price)}`
      })

      //Log to see if it exist
      console.log(confirmProduct)
      console.log(appendProductPic)
      console.log(productName)
      console.log(productPrice)

      //Continue Display For View Product
      appendProductPic.innerHTML = '';

      // Create a new image element
      const newImg = document.createElement('img');
      newImg.src = img.src;
      newImg.alt = 'Selected Product';

      // Append the new image
      appendProductPic.append(newImg);

      //Set Price And Name Of Product
      productName.textContent = name.textContent;
      productPrice.textContent = price.textContent;
      productId.textContent = productID.textContent;
    
      //Now Display For the Main One
      confirmProduct.style.display = 'block';

      //Now Display None the Main One
      const displayNone = confirmProduct.querySelector('header .ri-arrow-left-line').addEventListener('click', () =>{
      confirmProduct.style.display =  'none';
    })
    });




    //Checking if There is an image
    
  })
});

back.addEventListener('click', ()=>{
  products.style.display='none';
  eroHeaderText.style.display='block';
  weAre.style.display='flex';
  eroSec.style.backgroundColor='#19C463';
  why.style.display='flex';
  stats.style.display='flex';
  testi.style.display='none';
  sponsored.style.display='flex';
  startSelling.style.display='flex';
  FAQs.style.display='flex';
  moreStore.style.display='flex';
})
store.addEventListener('click', ()=>{
  overlay.style.display='none'
  showHide.style.display='none'
  products.style.display='flex';
  window.location.href='#product-own';
  eroSec.style.backgroundColor='transparent';
  header.style.backgroundColor='#19C463'
  eroHeaderText.style.display='none';
  weAre.style.display='none';
  why.style.display='none';
  stats.style.display='none';
  testi.style.display='none';
  sponsored.style.display='none';
  startSelling.style.display='none';
  FAQs.style.display='none';
  moreStore.style.display='none';
  homeScreen.style.overflow='visible'
  back.innerHTML='Back';
  products.style.display='flex'
  products.style.marginTop='8px'
  products.style.flexDirection='column-reverse'
  const fitted=products.querySelector('.all-of-BUY-iT-products .sponsored');
  fitted.style.marginTop='4px'
  products.append(back)
  back.style.padding='8px'
})
const showHideCancel=showHide.querySelector('.img-nd-cancel i');
const startSelling=homeScreen.querySelector('.start-selling');
const moreStore=homeScreen.querySelector('.more-product')
showHideCancel.addEventListener('click', ()=>{
  overlay.style.display='none';
  showHide.style.display='none';
  homeScreen.style.overflow='scroll';
});
const navSide=header.querySelector('nav ul #home');
const navSideTwo=header.querySelector('nav ul #about');
const navSideThree=header.querySelector('nav ul #faq');
const navSideFour=header.querySelector('nav ul #contact');
const navSideFive=header.querySelector('nav ul #store');
const products=homeScreen.querySelector('#products-own');

navSideFive.addEventListener('click', ()=>{
products.style.display='block';
window.location.href='#product-own';
eroSec.style.backgroundColor='transparent';
header.style.backgroundColor='#19C463'
eroHeaderText.style.display='none';
weAre.style.display='none';
why.style.display='none';
stats.style.display='none';
testi.style.display='none';
sponsored.style.display='none';
startSelling.style.display='none';
FAQs.style.display='none';
moreStore.style.display='none';
})

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

// const FAQfour=homeScreen.querySelector('#FAQ .ask-nd-answer-question .fort .question #icon')
// const txtUnderfour=homeScreen.querySelector('#FAQ .ask-nd-answer-question .fort .txt');
// FAQfour.addEventListener('click', ()=>{
//   if(FAQfour.classList.contains('ri-add-fill')){
//     FAQfour.classList.replace('ri-add-fill', 'ri-subtract-fill');
//     txtUnderfour.style.display='block';
//   }else{
//     FAQfour.classList.replace('ri-subtract-fill', 'ri-add-fill');
//     txtUnderfour.style.display='none';
//   }
// });

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

// const FAQsix=homeScreen.querySelector('#FAQ .ask-nd-answer-question .sixt .question #icon')
// const txtUndersix=homeScreen.querySelector('#FAQ .ask-nd-answer-question .sixt .txt');
// FAQsix.addEventListener('click', ()=>{
//   if(FAQsix.classList.contains('ri-add-fill')){
//     FAQsix.classList.replace('ri-add-fill', 'ri-subtract-fill');
//     txtUndersix.style.display='block';
//   }else{
//     FAQsix.classList.replace('ri-subtract-fill', 'ri-add-fill');
//     txtUndersix.style.display='none';
//   }
// });

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

icon.addEventListener('click', ()=>{
overlay.style.display='block';
showHide.style.display='block';
homeScreen.style.overflow='hidden'
})
}