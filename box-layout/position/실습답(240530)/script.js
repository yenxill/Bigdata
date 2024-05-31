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

//sidebar
let sidebar = document.querySelector('.sidebar');
let sidebarOpenBtn = document.querySelector('.sidebar-open-btn')
let sidebarCloseBtn = document.querySelector('.sidebar-close-btn')

// 1.sidebarOpenBtn을 클릭 했을 때
// sidebar에 is-active 클래스 추가
sidebarOpenBtn.addEventListener('click', function(){
  //sidebarOpenBtn을 클릭 했을 때 sidebar에
  // is-active라는 클래스 추가
  sidebar.classList.add('is-active')
})

//
sidebarCloseBtn.addEventListener('click',function() {
  sidebar.classList.remove('is-active');
})