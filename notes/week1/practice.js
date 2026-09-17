// 1주차 실습 코드
alert("Hello, World!");
confirm("Are you sure?");
prompt("What is your name?");
prompt("What is your age?", 20); // 기본값 20 / 취소 누르면 null

// 변수와 함께 내용을 연결해서 표시 
name = "1호";
console.log(name + "님은 영어를 공부중");

// 실제 웹브라우저 창에 보여주기
name = "2호";
document.write(name + "님은 수학을 공부중");

//변수 (값이 바뀌는 변수) 선언하기 (1)
let sum;
sum = 10; 

//변수 선언하기 (2)
let sum = 10;

//변수 선언하기 (3)
let result = 10; // 초기값 10
result = 20; // 값 변경

// 상수 (값이 바뀌지 않는 변수) 선언하기
const result = 10; // 초기값 10
result = 20; // 값 변경 불가

// 🍎 Quiz
// number 변수값에 100을 더한 후, result 변수에 저장하고 출력하기
let number = 100;
result = number + 100;
console.log(result);

// var와 변수 호이스팅
var x = 10;
var sum = x + y;
var y = 20;
console.log(sum); // Nan (호이스팅이 발생해서 오류는 없고 결과값이 이상하게 나타남 -> 오류 찾기 힘들어짐)

let x = 10;
let sum = x + y;
let y = 20;
console.log(sum); // y is not defined

// =========================================

// 재선언과 재할당 (`let` 이나 `const` 는 재선언 허용 ❌❌❌)
function add(a,b) { return a+b; }

var sum = add(10,20);
console.log(sum); // 여기까지는 30 
var sum = 100; // 변수를 재선언을 / 재할당 가능. 
console.log(sum); // 100 이 돼버림 

// 객체 만들기 
let myBook = {
    title: "모던자바스크립트",
    startDate: "2026-09-08",
    endDate: "2026-10-25",
    pagesd: 700,
    finished: true
}

myBook.title //모던자바스크립트
myBook["title"] //모던자바스크립트

// 심벌
let a = Symbol();
let b = Symbol();
a === b // false

let id = Symbol() // 
const member = {
    name : "0호",
    [id] : 12345 // symbol 로 키를 지정할땐 대괄호 사용 
}

member // {name: '0호', Symbol(): 12345}
member[id] // 12345

// =========================================
// 🍎 Quiz
// 화씨온도를 섭씨온도로 변환하기 

// 섭씨온도 = (화씨온도 - 32) / 1.8 
// 섭씨: celsius / 화씨: fahrenheit

let fah = parseInt(prompt("변화할 화씨온도: "));
let cel; 

cel = ((fah - 32) / 1.8).toFixed(1); // toFixed(1) : 소수점 1자리 지정
alert (`화씨 ${fah}는 섭씨 ${cel}도 입니다`);

// =========================================
// if...else if...else
let score = prompt("프로그래밍 점수: ");

if(score != null) {     // 입력값이 null 이 아닐때 = 뭔가를 입력했을때 
    if (parseInt(score) >= 90){
        alert ("A 학점"); 
    } else if (parseInt(score) >= 80){
        alert ("B 학점"); 
    } else {
        alert ("C 학점");
    }}

    // 삼항 연산자
    if (num1 < num2) {small = num1;} else {small = num2}; // 아래처럼 쓸 수 있음 
    
    // `(조건) ? true일떄 실행할 명령 : false일떄 실행할 멸령`
    small = (num1 < num2) ? num1 : num2; 

// 🍎 Quiz
// 짝수와 홀수를 구별하는 프로그램 만들기 
let userNumber = prompt ("숫자를 입력하세요");
if (userNumber !== null){
    userNumber = parseInt(userNumber);
    (userNumber % 2 === 0) ? alert(`${userNumber} : 짝수`) : alert(`${userNumber} : 홀수`);
}

// for문
// `for (초깃값; 조건; 증가식) {...}`
const students = ["Park", "Kim", "Lee", "Kang"];
for (let i = 0; i < students.length; i++) {document.write(`${students[i]}`)}; 

// forEach문



// 🍎 Quiz
// 1. userInput을 숫자형으로 변환해서 10을 더한 값을 출력하는 코드를 작성하세요.
let userInput = "25";

// 내꺼 🔽
userInput = Number(userInput)+10;


// 2. score가 90 이상이면 "A", 80 이상이면 "B", 70 이상이면 "C", 그 외엔 "F"를 출력하는
// if...else if...else 문을 작성하세요.
let score = 85;

// 내꺼 🔽
let score = prompt("Write your score");
if (score >= 90) {
    alert("A");
} else if (score >= 80) 
    {alert ("B")}
  else if (score >= 70) {alert ("C")
  } else {alert ("F")};


// 3. 1부터 10까지 숫자 중 짝수만 출력하는 for문을 작성하세요.
// for (초깃값; 조건; 증가식) {...}
// 모르겠음
// 해답 🔽
for(let i = 1; i <= 10; i++){
    if(i % 2 === 0){
        console.log(i)
    }
};


// 4. forEach를 사용해서 "사과를 먹었습니다.", "바나나를 먹었습니다.", "포도를 먹었습니다." 를
// 순서대로 출력하는 코드를 작성하세요.
// 배열명.forEach(콜백 함수){...} 
let fruits = ["사과", "바나나", "포도"];

// 내꺼 🔽
fruits.forEach(function(){
    console.log(fruits);
})

// 해답 🔽
fruits.forEach(function(fruit){
    console.log(fruit + "를 먹었습니다.");
})


// 5. 삼항 연산자를 사용해서 age가 19 이상이면 "성인", 아니면 "미성년자"를 출력하는 한 줄 코드를 작성하세요.
// (조건) ? true일떄 실행할 명령 : false일떄 실행할 멸령`
let age = 17;

// 내꺼 🔽
let age = prompt("Enter your age"); 
age >= 19 ? alert("성인") : alert("미성년자");

// ⚠️ let은 같은 스코프에서 재선언하면 Identifier 'score' has already been declared 에러가 나. 
// ("재선언과 재할당" 부분 - let은 재선언 불가, 재할당만 가능)


// 6. typeof를 사용해서 a, b, c의 자료형을 각각 출력하는 코드를 작성하세요.
let a = null;
let b = undefined;
let c = "10";

alert(typeof(a));
alert(typeof(b));
alert(typeof(c));
