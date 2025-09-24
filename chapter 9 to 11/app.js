// chapter no 9 to 11

// question no 1 answer


var cityname =prompt("please enter your city name");
if (cityname .toLowerCase() === "karachi") {
    document.write("welcome to city of lights in " + cityname)
}

// question no 2 answer

var gender=prompt("please enter your gender");
if(gender .toLowerCase() === "male"){
    alert(" Good Morning Sir");

}
if(gender .toLowerCase() === "female"){
    alert(" Good Morning mam");

}

// alag step

var gender = prompt("Apna gender likho (male ya female):");
var message = "";  // Ek khaali message variable banaya

gender = gender.toLowerCase();  // Capital/small letter ka farq khatam

if (gender === "male") {
  message = "Good Morning Sir";
}

if (gender === "female") {
  message = "Good Morning Ma’am";
}

if (message !== "") {
  alert(message); // Sirf ek hi alert box chalega
}


// question no 3 answer

var color = prompt("enter your colour name");
if(color .toLowerCase() === "yellow"){
    alert("Ready to move")
}

if(color .toLowerCase() === "green"){
    alert(" move now ")
}

if(color .toLowerCase() === "red"){
    alert("Must Stop")
}

// question no 4 answer

var fuel = prompt("fuel in car")

if (fuel < 0.25 ) {
    alert(" “Please refill the fuel in your car” ")
}

// quesyion no 5 answer

 var a = 4; 
if (++a === 5){ 
alert("given condition for variable a is true"); 
} 

 var b = 82; 
if (b++ === 83){ 
alert("given condition for variable b is true"); 
} 
var c = 12; 
if (c++ === 13){ 
alert("condition 1 is true"); 
} 
if (c === 13){ 
alert("condition 2 is true"); 
} 
if (++c < 14){ 
alert("condition 3 is true"); 
} 
if(c === 14){ 
alert("condition 4 is true"); 
} 

var materialCost = 20000; 
var laborCost = 2000; 
var totalCost = materialCost + laborCost; 
if (totalCost === laborCost + materialCost){ 
alert("The cost equals"); 
} 
if (true){ 
alert("True"); 
} 
if (false){ 
alert("False"); 
}

if ("car" < "cat") {
  alert("car is smaller than cat");
}

// question no 6 answer

var sub1 =prompt("subject 1 ka namer likho " );
var sub2 =prompt("subject 2 ka namer likho " );
var sub3 =prompt("subject 3 ka namer likho " );

var totalmarkspersubjeck = 100 ;

var marks2 = Number(prompt("Obtained marks in " + sub2));
var marks1 = Number(prompt("Obtained marks in " + sub1));
var marks3 = Number(prompt("Obtained marks in " + sub3));

var marks1 = Number (marks1);
var marks2 = Number (marks2);
var marks3 = Number (marks3);

var totalmarks=totalmarkspersubjeck * 3;

var obtainedMarks = marks1+marks2+marks3;
var percentage = (obtainedMarks/totalmarks)*100


document.write(sub1 + " : " + marks1 + "<br>");
document.write(sub2 + " : " + marks2 + "<br>");
document.write(sub3 + " : " + marks3 + "<br>");


document.write("Total marks : " + totalmarks + "<br>" )
document.write("obtained marks : " + obtainedMarks + "<br>");
document.write("Percentage : " + percentage + "%" + "<br>" )


if(percentage >=80){
    document.write("grade A+");
}
if (percentage >= 70 && percentage < 80){
    document.write("grade A");
}
if (percentage >=70 && percentage <70){
    document.write("grade B")
}
if (percentage >=60 && percentage <60){
    document.write("grade C");
}
if (percentage <50 ){
    document.write("grade : fail");
}


// question no 7 answer
var secretnumber= 5 
var guess=+prompt("Enter your secret number 1 to 10 ");
if(guess === secretnumber){
    alert(" “Bingo! Correct answer” ");
}
if (guess + 1 === secretnumber || guess - 1 === secretnumber) {
  alert(" Close enough to the correct answer");
}

// question no 8 answer

var number= +prompt("koi number likho ");

if (number %3 === 0 ){
alert("yes the number is divided  by three");
}

// question n0 9 answer


var number= +prompt("koi number likho ");

if(number %2 === 0){
    alert("" + number + " ek EVEN number hai");
}


if(number %2 !== 0){
    alert("" + number + " ek ODD number hai");
}


// question no 10 answer

var temperature = +prompt("yaha temperature likho");

if(temperature > 40){
    alert("It is too hot outside");
}
if (temperature > 30 && temperature <= 40){
    alert("The Weather today is Normal");
}
if (temperature >20 && temperature <=30){
    alert("Todays Weather is cool");
}
if (temperature >10 && temperature <=20){
    alert("OMG! Todays weather is so Coo");
}
if (temperature <= 10 ){
    alert("ajj bohot thand hy");
}

// question no 11 answer

var num1 = +prompt("yaha pehla number likho");
var num2 = +prompt("yaha doosra number likho");
var operator = prompt("yaha koi operator assign karo jese + , - , * % , /  ");
var message = "" ;
if (operator === "+") {
    message = "result :" + (num1 + num2);

}
if (operator === "-") {
    message = " result :" + (num1 - num2);
}

if (operator === "*") {
    message = "result :" + (num1 * num2);
}

if (operator === "%") {
    message = "result :" + (num1 % num2);
}

if (operator === "/") {
    message = "result :" + (num1 / num2);
}

alert(message);

