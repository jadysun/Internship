let value = prompt("Ваше имя?", "");
alert(value);

let age = 18;

console.log(age++);

age = 18;
console.log(++age);

if (age < 18) {
  console.log('1')
} else if (age > 80) {
  console.log('2')
} else {
  console.log('OK')
}


// присваивание

let apple = 3;
let pineapple = 7;

pineapple = apple + 4;


// приоритеты
let fruits;
fruits = apple + pineapple * 3;

apple *= 1 + 3; // 3 * 4 = 12


// инкремент/дикремент

let nut = 45;
nut++; // 46

let vegetables = 25;
vegetables--; // 24

let salad = 100;
let veg = ++salad;
alert(veg); // 101 (увеличивает и возвращает новое значение)

let salad = 100;
let veg = salad++;
alert(2 * veg); // 200 (увеличивает, но возвращает старое значение, которое было до увеличения)


// операторы сравнения
let a;
let c;
let b;

a == b // обычное сравнение в JS т.к. "=" является оператором присваивания
c != b // обозначение "не равно"

'я' > 'а'; // true, т.к. строки сравниваются посимвольно
'коты' > 'кода'; // true
'сонный' < 'сон'; // false

'А' < 'а'; // true, т.к. строчные буквы имеют больший код во внутренней таблице кодирования, которую использует JS

2 === '2'; // false (строгое сравнение, сравниваются типы, т.е. number и string)
2 == '2'; // true (строка '2' становится числом 2)
2 == '3'; // false


// условие (if, else)

let year = prompt('В каком году была опубликована спецификация ECMAScript-2015?', '');
if (year == 2015) {
  alert( "Правильно!" );
  alert( "Вы такой умный!" );
} else {
  alert( 'А вот и неправильно!' ); // любое значение, кроме 2015
}

if (year < 2015) {
  alert( 'Это слишком рано...' );
} else if (year > 2015) {
  alert( 'Это поздновато' );
} else {
  alert( 'Верно!' );
}

let condition = (year == 2015); // преобразуется к true или false

if (condition) {
  
}

// let result = условие ? значение1 : значение2;

let accessAllowed;
let age = prompt('Сколько вам лет?', '');

if (age > 18) {
  accessAllowed = true;
} else {
  accessAllowed = false;
}

alert(accessAllowed);


let accessAllowed = (age > 18) ? true : false; // сокращённая запись примера выше



let age = prompt('Возраст?', 18);

let message = (age < 3) ? 'Здравствуй, малыш!' :
  (age < 18) ? 'Привет!' :
  (age < 100) ? 'Здравствуйте!' :
  'Какой необычный возраст!';

alert( message );

// if (age < 3) {
//   message = 'Здравствуй, малыш!';
// } else if (age < 18) {
//   message = 'Привет!';
// } else if (age < 100) {
//   message = 'Здравствуйте!';
// } else {
//   message = 'Какой необычный возраст!';
// }



let company = prompt('Какая компания создала JavaScript?', '');

(company == 'Netscape') ?
  alert('Верно!') : alert('Неправильно.');


// let company = prompt('Какая компания создала JavaScript?', '');

// if (company == 'Netscape') {
//   alert('Верно!');
// } else {
//   alert('Неправильно.');
// }


// логические операторы

result = a || b; // (оператор "или")

alert( true || true );   // true
alert( false || true );  // true
alert( true || false );  // true
alert( false || false ); // false  (просто запомнить)

let hour = 12;
let isWeekend = true;

if (hour < 10 || hour > 18 || isWeekend) {
  alert( 'Офис закрыт.' ); // это выходной
}

alert( null || 1 ); // 1 (первое истинное значение)
alert( null || 0 || 1 ); // 1 (первое истинное значение)
alert( undefined || null || 0 ); // 0 (поскольку все ложно, возвращается последнее значение)


let currentUser = null;
let defaultUser = "John";

let imya = currentUser || defaultUser || "unnamed";

alert(imya); // выбирается "John" – первое истинное значение, если бы и currentUser , и defaultUser были ложными, в качестве результата вывелось "unnamed"


result = a && b; // оператор "И"

alert( true && true );   // true
alert( false && true );  // false
alert( true && false );  // false
alert( false && false ); // false

let hour = 12;
let minute = 30;

if (hour == 12 && minute == 30) {
  alert( 'The time is 12:30' );
}

if (1 && 0) { // вычисляется как true && false
  alert( "не сработает, так как результат ложный" );
}

// Если первый операнд истинный,
// И возвращает второй:
alert( 1 && 0 ); // 0
alert( 1 && 5 ); // 5

// Если первый операнд ложный,
// И возвращает его. Второй операнд игнорируется
alert( null && 5 ); // null
alert( 0 && "no matter what" ); // 0



result = !value; // оператор "НЕ", его приоритет является наивисшим у логических операторов

alert( !true ); // false
alert( !0 ); // true (Сначала приводит аргумент к логическому типу  true/false, затем возвращает противоположное значение)

