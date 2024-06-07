let year = document.querySelector('.year');
//console.log(year)

//한국 표준시 (korea Standard Time)
let kst = new Date()
console.log(kst)
let getYear = kst.getFullYear(); // 년도 
let getMonth = kst.getMonth(); // 월
let getDate = kst.getDate(); // 일
console.log(getMonth)


for(let i = 2000; i <= getYear; i++) {
  //console.log(i)
  //let options = document.createElement('option');
  //console.log(options)
  //options.innerHTML = i;
  //year.appendChild(options);

  let options = `<option>${i}</option>`;
  //console.log(options)
  
  //afterbegin, beforebegin, afterend, beforend
  // 추가하고 싶은 곳.insertAdjacentHTML('위치', 추가할 요소)
  year.insertAdjacentHTML('beforeend', options); 

  //jQuery
  $('.year').append('<option>' + i + '</option>');


}

