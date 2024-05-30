//Javascript 변수명(낙타표기법)//
let popupOpenBtn = document.querySelector('.popup-open-btn');
let popup = document.querySelector('.popup');
let popupClosebtn = document.querySelector('.popup-close-btn');

console.log(popup, popupClosebtn)

// function(){}
// popupOpenBtn 클릭시 popup에 is-active class add 추가
popupOpenBtn.addEventListener('click', function(){
  //classList.add('클래스명')
  popup.classList.add('is-active')
})

popupClosebtn.addEventListener('click', function(){
  popup.classList.remove('is-active')
})