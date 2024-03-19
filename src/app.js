let userLogin = prompt("Введите свой логин") 
let userPassword = prompt("Введите свой пароль")

const loginDb = "fariz"
const passswordDb ="2006"

if (userlogin === loginDb && userPassword === passswordDb){
    alert("Добро пожаловать")
} else {
    alert("Доступ запрещен")
}

//const btn = document.getElementBuId()
const btn = document.querySelector("#myBtn")
console.log(btn);

//?создание функции
function myFunc() {
    console.log("hello");
}

//? вызов функции
myFunc()

function sum(a,b) {
    let sum = a + b
    console.log(sum); 
}
sum(3,4)
sum(4,10)

function checkKAge(age) {
  if(age >= 18)
    console.log("Добро Пожаловать");{
  } else if (age < 18) {
    console.log("Вам нельзя");
  } else {
    console.log("error");
  }
}