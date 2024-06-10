//mode-btn class 안 텍스트를 가져온다.
//텍스트가 Dark일 경우 (조건)
//mode-btn 클릭하면(클릭이벤트) 텍스트를 'Light'로 바꾼다.
//header 태그에 dark class add

let modeBtn = document.querySelector('.mode-btn'); //.innerHTML;
//console.log(modeBtn)
let count = 0;

function modeToggle() {
  let modeTxt = modeBtn.innerHTML;
  let header = document.querySelector('header');
  //console.log(modeTxt)

  //count = count + 1;
  count += 1;
  console.log(count)
  // 1,3,5,7 => Darkmode
  // 2,4,6,8 => Lightmode
  if(count % 2 == 0) {
    this.innerHTML = 'Dark';
    header.classList.remove('dark');
  } else {
    this.innerHTML = 'Light';
    header.classList.add('dark');
  }


  // if(modeTxt == 'Dark') {
  //   // 텍스트를 'Light'로 바꾼다.
  //   modeBtn.innerHTML = 'Light';
  //   // header 태그에 dark class add
  //   header.classList.add('dark');
    //document.querySelector('header').classList.add('dark')

  // } else {
    //텍스트를 'Dark'로 바꾼다.
  //   modeBtn.innerHTML = 'Dark';
  //   // header 태그에 dark class remove
  //   header.classList.remove('dark');
  // document.querySelector('header').classList.add('dark')
  // console.log(modeToggle);
}

// //해당 함수 호출
// modeToggle();

// mode-btn 클릭하면 (클릭 이벤트) 
modeBtn.addEventListener('click', modeToggle);