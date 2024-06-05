// html #hello 찾아오기
//auerySelector('.클래스이름')
let hello = document.getElementById('hello');
let changeBtn = document.getElementById('txt-change-btn');

hello.innerHTML = '안녕?';
hello.style.color = 'red';

//console.log()

// changeBtn 클릭 했을 때, html 'Hello', color -> blue
changeBtn.addEventListener('click',() => {
  hello.innerHTML = 'Hello';
  hello.style.color = 'blue';
})

//querySelectorAll은 .item class를 모두 찾는다.
let items = document.querySelectorAll('.item');
//console.log(items) <- 배열 반복

/*document.querySelector('.item').style.color = 'blue';*/
/*console.log(item)*/

//Vanilla Js
document.querySelectorAll('.item')[0].style.color = 'blue';
document.querySelectorAll('.item')[1].style.color = 'blue';
document.querySelectorAll('.item')[2].style.color = 'blue';

// j-Query
$('.item').css('color','blue');

// })

//반복문 for
for(let i = 0; i < items.length; i++ ) {
  items[i].innerHTML = 'for 반복문';
  // console.log(i)
}

// 배열 반복 forEach
// 배열.forEach((item <- 반복할 이름으로 작성) => {

// })

// items.forEach((item) => {
//   //console.log(item)
//   item.innerHTML = '반복문'; // <- 한번에 바꿈
// })

// 자료형
// Numbur
let num = 5;
//String
let num1 = '5';
let txt = '안녕하세요!';

// 숫자, 문자, 변수
// 문자열은 따옴표 안에
console.log(num1)
console.log(typeof(num1))
// 변수이름 쓸때는 '' 작성 X
console.log(txt);
console.log(typeof(txt));


// Array(배열). Object{} 자료형
// 여러값을 한번에 담을 떄
// Array : []
// Object : {}

let arr = ['yeji', 121, 'dadd', txt];
//배열에서 원하는  값 가져오기 => 배열이름[숫자]
// console.log(arr)
console.log(arr[2])

//{key : value}
let tel = 01055256624 ;

let obj = { 
  이름 : 'yi',
  전화 : tel,
  주소 :'대전광역시'
}

// console.log(obj.이름)
// console.log(obj.주소)
console.log(obj)

let hi = '안녕하세요 저는';
let name = '최예지';

//변수, 문자열
// `` backtick(~) ${변수명} 으로 작성
let my = hi + name +'입니다';
let my1 = `안녕하세요 저는 ${name} 입니다`;

// console.log(hi,name)
// console.log(my)

//문자열
// ''
// ""
// ``
console.log(my1)
console.log(typeof(my1))

//aoroqustn(parameter)로 이름값
function info(myName){
  console.log(`안녕하세요 저는 ${myName} 입니다`);
}

info('아무개');

// 배열(Array), Object | [], {}
// 배열 원하는 값/ 배열이름[num]/ 배열의 시작은 0부터

// Object 원하는 값/ 오브젝트이름. 키값
// key : value, key : value
// 여러값을 입력하고 싶을 때는 ,로 구분한다.

// 변수, 문자열
// 문자열 : '',"", ``(따옴표, 큰 따옴표, 백틱)

// 문자열 사이에 변수 바인딩하는 방법 두가지
// + : 변수 + '문자열'
// '안녕' + name(변수) + '나는' + age(변수)
// `` : `안녕 ${name} sksms ${age}`

// Parameter(변수)
// 함수를 호출할 때 함수에 넘겨주는 값

