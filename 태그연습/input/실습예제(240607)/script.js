let year = document.querySelector('.year');
console.log(year)

let kst = new Date()
let getYear = kst.getFullYear(); // 년도 

for(let i = 1960; i <= getYear; i++) {
    console.log(i)
    let options = document.createElement('option');
    console.log(options)
    options.innerHTML = i;
    year.appendChild(options);
    
  }

let month = document.querySelector('.month');
console.log(month)

let getMonth = kst.getMonth(); // 월

  for(let i = 1; i <= 12; i++) {
    console.log(i)
    let options = document.createElement('option');
    console.log(options)
    options.innerHTML = i;
    month.appendChild(options);
  }

let date = document.querySelector('.date');
console.log(date)

let getDate = kst.getDate(); // 일

  for(let i = 1; i <= 31; i++) {
    console.log(i)
    let options = document.createElement('option');
    console.log(options)
    options.innerHTML = i;
    date.appendChild(options);
  }


