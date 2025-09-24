// chapter no 5 

// question no 1 answer

var num1 = 45;
var num2 = 5;

var result = (num1+num2)
document.write("sum of 45 & 5 " + result + "<br>")

// question no 2 answer

var num1 = 45;
var num2 = 5;
var result = (num1*num2)
document.write("multiplication of 45 & 5  " +result+"<br>" )



var num1 = 45;
var num2 = 5;

var result = (num1-num2)
document.write("subtraction of 45 & 5 " + result + "<br>")

var num1 = 45;
var num2 = 5;

var result = (num1%num2)
document.write("modulus of 45 & 5 " + result + "<br>")

var num1 = 45;
var num2 = 5;

var result = (num1/num2)
document.write("division of 45 & 5 " + result + "<br>")

// questio no 3 answer

var number;
document.write("Declare a variable. " + number);
number = 5;
document.write("initial value" +number);
number++;



var number;


document.write("Value after variable declaration is: " + number + "<br>");


number = 5;

document.write("Initial value: " + number + "<br>");


number++;

document.write("Value after increment is: " + number + "<br>");


number = number + 7;


document.write("Value after addition is: " + number + "<br>");

number--;

// j. Show value after decrement
document.write("Value after decrement is: " + number + "<br>");


var remainder = number % 3;

// l. Show final remainder
document.write("The remainder is: " + remainder);

// question no 4 answer

var ticket = 6 ;
var ticketprice = 600
var result =(6*600);
document.write(" total ticket price" +result +"<br>" )

// question n0 5 answer

var number = 5;

document.write("Multiplication Table of " + number + "<br><br>");

document.write(number + " * 1 = " + (number * 1) + "<br>");
document.write(number + " * 2 = " + (number * 2) + "<br>");
document.write(number + " * 3 = " + (number * 3) + "<br>");
document.write(number + " * 4 = " + (number * 4) + "<br>");
document.write(number + " * 5 = " + (number * 5) + "<br>");
document.write(number + " * 6 = " + (number * 6) + "<br>");
document.write(number + " * 7 = " + (number * 7) + "<br>");
document.write(number + " * 8 = " + (number * 8) + "<br>");
document.write(number + " * 9 = " + (number * 9) + "<br>");
document.write(number + " * 10 = " + (number * 10) + "<br>");

// question no 6 answer 

 // a. Celsius value ko variable me store karo
  var celsius = 25;

  // b. Celsius to Fahrenheit conversion formula: (C × 9/5) + 32
  var fahrenheit = (celsius * 9 / 5) + 32;

  // Result dikhayein: "25°C is 77°F"
  document.write(celsius + "°C is " + fahrenheit + "°F<br>");

  // c. Ab Fahrenheit value ko store karo
  var fahrenheit2 = 77;

  // d. Fahrenheit to Celsius conversion: (F − 32) × 5/9
  var celsius2 = (fahrenheit2 - 32) * 5 / 9;

  // Result dikhayein: "77°F is 25°C"
  document.write(fahrenheit2 + "°F is " + celsius2 + "°C");

  // question no 7 answer



  var item1Price = 500;


  var item2Price = 1000;


  var item1Quantity = 2;

  var item2Quantity = 1;


  var shippingCharges = 250;

  // Calculate total cost
  var totalItem1 = item1Price * item1Quantity;  // 500 × 2 = 1000
  var totalItem2 = item2Price * item2Quantity;  // 1000 × 1 = 1000
  var totalCost = totalItem1 + totalItem2 + shippingCharges; // 1000 + 1000 + 250 = 2250

  // Show output in browser
  document.write("Price of item 1 is " + item1Price + " PKR<br>");
  document.write("Quantity of item 1 is " + item1Quantity + "<br>");
  document.write("Price of item 2 is " + item2Price + " PKR<br>");
  document.write("Quantity of item 2 is " + item2Quantity + "<br>");
  document.write("Shipping Charges: " + shippingCharges + " PKR<br><br>");

  document.write("Total cost of your order is " + totalCost + " PKR");

  // questin no 8 answer 

  var totalmarks=1000;
  var marksobtained=800;
  var percentage=(marksobtained/ totalmarks) * 100

  document.write("total marks" + totalmarks +"<br>");
  document.write("marksobtained" + marksobtained +"<br>")
  document.write("percentage" + percentage +"%")

  
  // questin no 9 answer 

  var dollarquantity=10;
  var dollarprice=200;
  var totalcost= dollarprice*dollarquantity;

  document.write("totalpkr " + totalcost)

  // question no 10 answer

var number=5;

var result = ((number + 5) * 10) / 2;
document.write("Initial number: " + number + "<br>");
document.write("Result : " + result);

// question no 11 answer

var currentyear=2025
var birthyear=2006

var yourage=currentyear-birthyear

document.write("currentyear :" + currentyear+ "<br>");
document.write("birthyear :" + birthyear+ "<br>");
document.write("yourage :" +yourage)


// question no 12 answer

 var radius = 10;


  var pi = 3.142;
  var circumference = 2 * pi * radius;


  var area = pi * radius * radius;

  // Show results in browser
  document.write("Radius of the circle is: " + radius + "<br>");
  document.write("The circumference is: " + circumference + "<br>");
  document.write("The area is: " + area);


var snack = "Chocolate Chip";

  
  var currentAge = 18;


  var maxAge = 80;


  var perDay = 2;


  var yearsLeft = maxAge - currentAge;
  var totalNeeded = yearsLeft * 365 * perDay;

  // Output the message
  document.write("You will need <b>" + totalNeeded + "</b> " + snack +
    " to last you until the ripe old age of <b>" + maxAge + "</b>.");



  
