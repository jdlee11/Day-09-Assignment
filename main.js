var previousValue = "0";
var currentValue = "";
var typingNew = true;
var memory = 0;
var display = document.querySelector(".display");
display.value = previousValue;
var currentOp = "+"; // changed by operator buttons,
                    // affects what happens when user hits =

// add listeners to each number button
var numberArray = document.querySelectorAll(".num");
for (var i = 0; i < numberArray.length; i ++){
  numberArray[i].addEventListener("click", function(event){
    createNum(event.target);});
}

var clear = document.querySelector(".clear");
clear.addEventListener("click", clearDisplay);

var plus = document.querySelector(".add");
plus.addEventListener("click", setToAdd);

var sub = document.querySelector(".sub");
sub.addEventListener("click", setToSub);

var mul = document.querySelector(".mul");
mul.addEventListener("click", setToMul);

var dvd = document.querySelector(".dvd");
dvd.addEventListener("click", setToDiv);

var neg = document.querySelector(".negative");
neg.addEventListener("click", posNeg);

var equals = document.querySelector(".equals");
equals.addEventListener("click", calculate);

var sq = document.querySelector(".square");
sq.addEventListener("click", square);

var cb = document.querySelector(".cube");
cb.addEventListener("click", cube);

var arbExp = document.querySelector(".a-exp");
arbExp.addEventListener("click", arbitraryExp);

var sRoot = document.querySelector(".sq-root");
sRoot.addEventListener("click", squareRoot);

var sin = document.querySelector(".sin");
sin.addEventListener("click", getSin);

var cos = document.querySelector(".cos");
cos.addEventListener("click", getCos);

var tan = document.querySelector(".tan");
tan.addEventListener("click", getTan);

var cRoot = document.querySelector(".c-root");
cRoot.addEventListener("click", cubeRoot);

var sinh = document.querySelector(".sinh");
sinh.addEventListener("click", getSinh);

var cosh = document.querySelector(".cosh");
cosh.addEventListener("click", getCosh);

var tanh = document.querySelector(".tanh");
tanh.addEventListener("click", getTanh);

var arbRoot = document.querySelector(".a-root");
arbRoot.addEventListener("click", arbitraryRoot);

var log = document.querySelector(".log");
log.addEventListener("click", getLog);

var e = document.querySelector(".e");
e.addEventListener("click", getE);

var pi = document.querySelector(".pi");
pi.addEventListener("click", getPi);

var mclear = document.querySelector(".mc");
mclear.addEventListener("click", memClear);

var madd = document.querySelector(".mplus");
madd.addEventListener("click", memAdd);

var msub = document.querySelector(".mminus");
msub.addEventListener("click", memSubtract);

var mrecall = document.querySelector(".mr");
mrecall.addEventListener("click", memRecall);

//********END VARIABLE/LISTENER DECLARATIONS*********



//*******BEGIN FUNCTION DEFINITIONS**********
// function concatenates number as string to end of currentValue
function createNum(button){
  if (typingNew){
    currentValue = "";
  }
  currentValue += button.innerText;
  display.value = currentValue;
  typingNew = false;
}

// set previousValue and currentValue to 0
function clearDisplay(){
  previousValue = "0";
  currentValue = "";
  display.value = previousValue;
}

// sets current operator to +
function setToAdd(){
  calculate();
  currentOp = "+";
  previousValue = display.value;
  currentValue = "";
}

// sets current operator to -
function setToSub(){
  calculate();
  currentOp = "-";
  previousValue = display.value;
  currentValue = "";
}

// sets current operator to *
function setToMul(){
  calculate();
  currentOp = "*";
  previousValue = display.value;
  currentValue = "";
}

// sets current operator to -
function setToDiv(){
  calculate();
  currentOp = "/";
  previousValue = display.value;
  currentValue = "";
}

// switches current input between positive and negative
function posNeg(){
  currentValue = String(Number(currentValue) * -1);
  display.value = currentValue;
}

// calculates based using previousValue, currentOp, and currentValue
function calculate(){
  typingNew = true;
  if (currentOp === "+"){
    previousValue = Number(previousValue) + Number(currentValue);
    display.value = previousValue;
  } else if (currentOp === "-"){
    previousValue = Number(previousValue) - Number(currentValue);
    display.value = previousValue;
  } else if (currentOp === "*"){
    previousValue = Number(previousValue) * Number(currentValue);
    display.value = previousValue;
  } else if (currentOp === "/"){
    previousValue = Number(previousValue) / Number(currentValue);
    display.value = previousValue;
  } else if (currentOp === "exp"){
    previousValue = Math.pow(Number(previousValue), Number(currentValue));
    display.value = previousValue;
  } else if (currentOp === "root"){
    previousValue = Math.pow(Number(previousValue), 1.0 / Number(currentValue));
    display.value = previousValue;
  }
  currentOp = ""; // fixed a bug. unfortunately prevents consecutive "=" presses
}
 // squares current value
function square(){
  currentValue = display.value;
  currentValue *= currentValue;
  display.value = currentValue;
  typingNew = true;
}

// cubes current value
function cube(){
  currentValue *= currentValue * currentValue;
  previousValue = currentValue;
  display.value = currentValue;
  typingNew = true;
}

// sets operator to allow value to be raised to "next input" power
function arbitraryExp(){
  currentOp = "exp";
  previousValue = display.value;
  currentValue = "";
  typingNew = true;
}

// finds square root of current value
function squareRoot(){
  currentValue = Math.sqrt(currentValue);
  previousValue = currentValue;
  display.value = currentValue;
  typingNew = true;
}

// finds cube root of current value
function cubeRoot(){
  currentValue = Math.pow(currentValue, 1/3.0);
  previousValue = currentValue;
  display.value = currentValue;
  typingNew = true;
}

// gets sine of current value ***IN RADIANS***
function getSin(){
  currentValue = Math.sin(currentValue);
  previousValue = currentValue;
  display.value = currentValue;
  typingNew = true;
}

// gets cosine of current value ***IN RADIANS***
function getCos(){
  currentValue = Math.cos(currentValue);
  previousValue = currentValue;
  display.value = currentValue;
  typingNew = true;
}

// gets tangent of current value ***IN RADIANS***
function getTan(){
  currentValue = Math.tan(currentValue);
  previousValue = currentValue;
  display.value = currentValue;
  typingNew = true;
}

// gets hyperbolic sine of current value ***IN RADIANS***
function getSinh(){
  currentValue = Math.sinh(currentValue);
  previousValue = currentValue;
  display.value = currentValue;
  typingNew = true;
}

// gets hyperbolic cosine of current value ***IN RADIANS***
function getCosh(){
  currentValue = Math.cosh(currentValue);
  previousValue = currentValue;
  display.value = currentValue;
  typingNew = true;
}

// gets hyperbolictangent of current value ***IN RADIANS***
function getTanh(){
  currentValue = Math.tanh(currentValue);
  previousValue = currentValue;
  display.value = currentValue;
  typingNew = true;
}

// sets operator to "root" to get "next input" of current value
function arbitraryRoot(){
  currentOp = "root";
  previousValue = display.value;
  currentValue = "";
  typingNew = true;
}

// gets natural log of current value
function getLog(){
  currentValue = Math.log(currentValue);
  previousValue = currentValue;
  display.value = currentValue;
  typingNew = true;
}

// sets current value to e
function getE(){
  currentValue = Math.E;
  display.value = currentValue;
  typingNew = true;
}

// sets current value to e
function getPi(){
  currentValue = Math.PI;
  display.value = currentValue;
  typingNew = true;
}

// clear the memory
function memClear(){
  memory = 0;
}

// adds current value to memory
function memAdd(){
  memory += Number(currentValue);
  typingNew = true;
}

// adds current value to memory
function memSubtract(){
  memory -= Number(currentValue);
  typingNew = true;
}

// recall memory
function memRecall(){
  display.value = memory;
  typingNew = true;
}

//*****************************
