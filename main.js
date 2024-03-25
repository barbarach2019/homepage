//alert('witaj');

const name = "Basia";
const age = 45;
const dzienTygodnia = 'niedziela'

//alert('cześć');
//console.log("witaj");
console.log(name);
console.log(age);
//console.log(`Mam na imię ${name} i mam ${age} lat`);
console.log(`jest dzisiaj ${dzienTygodnia}`)

function calculate(myNumber) {
  console.log(`Dostałam ${myNumber}`);
  return myNumber * 3;
}
const myResult = calculate(age);
console.log(myResult);

//const heading = document.querySelector('.navigation');
//console.log(heading);

//const heading = document.querySelector('.main-heading--js');
//heading.innerHTML =`Witaj Drogi Odwiedzający. nazywam się`;