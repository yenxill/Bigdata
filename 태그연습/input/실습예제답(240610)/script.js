//복합대입연산자
//let a, b, c = true;
//let a = b = c = true;
//console.log(a,b,c);

let idVeri = pwVeri = pwChVeri = false;
//console.log(pwVeri,pwChVeri,idVeri)

let userid = document.getElementById('userid');
//console.log(userid)
let idWarn = document.querySelector('.id-warn');

// keyup : 키를 눌렀다가 놨을 때 발생 kdyup
userid.addEventListener('focusout', function() {
  // userid.value => input에 입력된 텍스트
  // userid.value.length => input 텍스트 길이
  // 8글자 이상일 때 '멋진 아이디네요!'(color : green)
  // 8글자 미만일 때 '아이디를 8글자 이상 입력하세요.' (color : red)
  // console.log(userid.value.length)

  if(userid.value.length < 8) {
    // 8글자 미만일 때 '아이디를 8글자 이상 입력하세요.' (color : red)
    idWarn.innerHTML = `<span class="txt-red">아이디를 8글자 이상 입력하세요.</span>`;
    } else {
    // 8글자 이상일 때 '멋진 아이디네요!' (color : green)
    idWarn.innerHTML = `<span class="txt-green">멋진 아이디네요!</span>`;
    idVeri = true;
  }
})

// 비밀번호
let userpw = document.getElementById('userpw');
let pwWarn = document.querySelector('.pw-warn');
// console.log(pwWarn)

userpw.addEventListener('focusout', function() {
  // 1. 비밀번호 자릿수 (최소 8자에서 16자까지)
  // 2. 최소 하나 이상의 영문자 (소문자 or 대문자)
  // 3. 최소 하나 이상의 숫자
  // 4. 최소 하나 이상의 특수문자 (!@#$%^&*?_)
    let pwExp = /^(?=.*[a-zA-Z])(?=.*[0-9])(?=.*[!@#$%^&*?_]).{8,16}$/;
    // pwExp.test(userpw.value)
    // test() : 정규식 일치 여부를 Boolean 값으로 반환한다. true, false
    console.log(userpw.value)
    console.log(userpw.value.length)
  
    if(!pwExp.test(userpw.value)) {
      pwWarn.innerHTML = `<span class="txt-red">8~16자 영문 대 소문자, 숫자를 사용하세요.</span>`
    } else {
      pwWarn.innerHTML = '';
      pwVeri = true;
    }
  })

// 비밀번호 재확인
// userpw.value 값과 userPwChk.value 값 비교
// 일치하지 않을 때 => 비밀번호가 일치하지 않습니다. 
// 일치할 때 => '';
let userPwChk = document.getElementById('user-pwchk')
let pwChkWarn = document.querySelector('.pwchk-warn')
//console.log(userPwChk, pwChkWarn)

userPwChk.addEventListener('focusout', function(){
  //userpw.value 값과 userPwChk 값 비교
  if(userpw.value == userPwChk.value) {
    //일치할때 => '';
    pwChkWarn.innerHTML = '';
  } else {
    //일치하지 않을 때 => 비밀번호가 일치하지 않습니다
    pwChkWarn.innerHTML = `<span class="txt-red">비밀번호가 일치하지 않습니다</span>`;
    pwChVeri = true;
  }
})

// 생년월일
let year = document.getElementById('year');
let month = document.getElementById('month');
let date = document.getElementById('date');
//console.log(year, month, date);

let kst = new Date();
let getYear = kst.getFullYear();
//console.log(getYear)


// 1920 i 값이 getYear(2024)와 작거나 같을때 까지
// i씩 1씩 더하며 반복
for(let i = 1920; i <= getYear; i++ ) {
  //console.log(i)

  let option = `<option>${i}</option>`;
  //console.log(option)
  year.insertAdjacentHTML('beforeend', option);
}

for(let i = 1; i <= 12; i++) {
  //console.log(i)

  let option = `<option>${i}</option>`;
  //console.log(option)
  month.insertAdjacentHTML('beforeend', option);
}

for(let i = 1; i <= 31; i++) {
  //console.log(i)

  let option = `<option>${i}</option>`;
  //console.log(option)
  date.insertAdjacentHTML('beforeend', option);
}

//취미
// 5개까지만 체크 되도록
// alert('최대 5개까지만 선택할 수 있습니다.'
let checkBoxs = document.querySelectorAll('input[type="checkbox"][name="hobby"]');
//console.log(checkBoxs)
let maxCount = 5;

checkBoxs.forEach((item) => {
  console.log(item);
  item.addEventListener('change', () => {
  let checkCount = document.querySelectorAll('input[type="checkbox"][name="hobby"]:checked').length;
  //console.log(checkCount)

  // alert('최대 5개까지만 선택할 수 있습니다.')
    if(checkCount > maxCount) {
      item.checked = false; // 6번째 체크박스 체크 해제
      alert('최대 5개까지만 선택할 수 있습니다.');
    }
  })
})

let submitBtn = document.getElementById('submit-btn');
let joinForm = document.getElementById('join-form');
//console.log(joinForm)

submitBtn.addEventListener('click', (e) => {
  if(idVeri && pwVeri && pwChVeri) {
    joinForm.submit();
  } else {
    //기본 속성 제거
    e.preventDefault();
  }
})