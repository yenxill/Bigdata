let btn = document.querySelector('.light');

function dark() {
  btn.classList.add('.dark');
}

btn.addEventListener('click', dark);


console.log(btn)




// //mode-btn class 안 텍스트를 가져온다.
// //텍스트가 Dark일 경우 (조건)
// //mode-btn 클릭하면(클릭이벤트) 텍스트를 'Light'로 바꾼다.
// //header 태그에 dark class add

// let modeBtn = document.querySelector('.mode-btn'); //.innerHTML;
// //console.log(modeBtn)
// //let count 0 ;

// function modeToggle() {
//   let modeTxt = modeBtn.innerHTML;
//   let header = document.querySelector('header');
//   //console.log(modeTxt)


//   if(modeTxt == 'Dark') {
//     // 텍스트를 'Light'로 바꾼다.
//       modeBtn.innerHTML = 'Light';
//     //header 태그에 dark class add
//     //document.querySelector('header').classList.add('dark')
//       header.classList.add('dark');

//   } else{
//     //텍스트를 'Dark'로 바꾼다.
//     modeTxt.innerHTML = 'Dark';
//     header.classList.remove('dark');

//     // //header 태그에 dark class remove
//     // document.querySelector('header').classList.add('dark')
//   }

//   // console.log(modeToggle);
// }

// // document.querySelector('header').classList.add('dark')
// // //해당 함수 호출
// // modeToggle();

// //mode-btn 클릭하면(클릭이벤트)
// modeBtn.addEventListener('click', modeToggle);