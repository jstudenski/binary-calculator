let numberOne = "";
let operator = "";
let numberTwo = "";
let answer = "";

document.getElementById('btn0').onclick = function(){
  operator == "" ? numberOne += 0 :  numberTwo += 0;
  updateDisplay();
}
document.getElementById('btn1').onclick = function(){
  operator == "" ? numberOne += 1 :  numberTwo += 1;
  updateDisplay();
}

document.getElementById('btnClr').onclick = function(){
  numberOne = "";
  operator = "";
  numberTwo = "";
  answer = "";
  updateDisplay();
}

document.getElementById('btnEql').onclick = function(){
  //let answer = '?';
  if (numberOne != "" && numberTwo != "" &&  operator != "") {
    switch(operator) {
      case '+':
        answer = add(numberOne,numberTwo,'+');
        break;
      case '-':
        answer = add(numberOne,numberTwo,'-');
        break;
      case '*':
      answer = multiply(numberOne,numberTwo);
        break;
      case '/':
      answer = divide(numberOne,numberTwo);
        break;
      default:
        console.log("hello world");
        break;
    };
  } else {
    console.log("missing perameter");
  };
  console.log(answer);
  updateDisplay();
}

// operators
document.getElementById('btnSum').onclick = function(){
  operator = '+'
  updateDisplay();
}
document.getElementById('btnSub').onclick = function(){
  operator = '-'
  updateDisplay();
}
document.getElementById('btnMul').onclick = function(){
  operator = '*'
  updateDisplay();
}
document.getElementById('btnDiv').onclick = function(){
  operator = '/'
  updateDisplay();
}

function updateDisplay(){
  document.getElementById('res').innerHTML = answer != "" ? parseInt(answer) : numberOne+operator+numberTwo;
}

function add(a, b, o){
  const longest = (a.length > b.length) ? a.length : b.length;
  let num3 = 0;
  let result = [];
  for (let i = 1; i < longest+1; i++) {
    num1 = a.charAt(a.length-i);
    num2 = b.charAt(b.length-i);
    num1 = num1 ? parseInt(num1) : 0;
    num2 = num2 ? parseInt(num2) : 0;
    switch((o === '+')? num1+num2+num3 : num1-num2-num3) {
      case -2:
        result.unshift(0);
        num3 = 1;
        break;
      case -1:
        result.unshift(1);
        num3 = 1;
        break;
      case 0:
        result.unshift(0);
        num3 = 0;
        break;
      case 1:
        result.unshift(1);
        num3 = 0;
        break;
      case 2:
        result.unshift(0);
        num3 = 1;
        break;
      case 3:
        result.unshift(1);
        num3 = 1;
        break;
      default:
        console.log("case missing");
    } 
  }
  num3 == 1 ? result.unshift(num3):null;
  return result.join('');
}

function multiply(a, b){
  let total = '0';
  let result = [];
  for (let i = 1; i < b.length+1; i++) {
    result.unshift('0'.repeat(i-1));
    for (let f = 1; f < a.length+1; f++) {
      result.unshift(a.charAt(a.length-f)*b.charAt(b.length-i));
    }
    total = add(total,result.join(""),"+");
    result = [];
  }
  return total;
}

function divide(a, b){
  let current = a[0];
  let topNum = '';
  for (let i = 0; i < a.length; i++) {
    if (parseInt(current) < b) {
      topNum+=0;
      current+=a[i+1];
    } else {
      topNum+=1;
      current = add(current,b,'-')+a[i+1];
    }
  }
  return topNum;
}

// divide('110101', '101'); // 
// divide('101010', '110'); // 111
// divide('1001', '100'); // 10
// divide('1110', '101'); // 10
// divide('101', '1'); // 101

// multiply('10000111010101', '0011101010111'); // 0111110000101001001100011
// multiply('10000', '00111'); // 01110000
// multiply('1001', '101'); // 0101101

// console.log(add('1001', '101', '+') == 1110);
// console.log(add('10000111010101', '0011101010111', '+') == 10100100101100);
// console.log(add('10000110101', '0011101010111', '+') == 101110001100);

// console.log(add('1001', '101', '-') == 100);
// console.log(add('10000111010101', '0011101010111', '-') == 1101001111110);
// console.log(add('0011101010111', '10000110101', '-') == 1100100010);