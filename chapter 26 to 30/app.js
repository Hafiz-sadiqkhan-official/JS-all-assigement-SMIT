// // chapter no 26 to 30

// // 1. Write a program that takes a positive integer from user & 
// // display the following in your browser. 
// // a. number 
// // b. round off value of the number 
// // c. floor value of the number 
// // d. ceil value of the numbe


// var usernum = +prompt("enter your num");

// // var numround = Math.round(usernum);

// document.write("user ka input num :" + usernum + "<br>");
// document.write("yeh round ka  :" + Math.round(usernum)+ "<br>");
// document.write("yeh ceil ka  :" + Math.ceil(usernum)+ "<br>");
// document.write("yeh floor ka :" + Math.floor(usernum)+ "<br>");
// document.write("yeh random  ka :" + Math.random(usernum)+ "<br>");
// document.write("yeh fround ka :" + Math.fround(usernum)+ "<br>");



// // 2. Write a program that takes a negative floating point 
// // number from user & display the following in your browser. 
// // a. number 
// // b. round off value of the number 
// // c. floor value of the number 
// // d. ceil value of the number 



// var usernum = +prompt("enter your negative num");

// document.write("user ka input num :" + usernum + "<br>");
// document.write("yeh round ka  :" + Math.round(usernum)+ "<br>");
// document.write("yeh ceil ka  :" + Math.ceil(usernum)+ "<br>");
// document.write("yeh floor ka :" + Math.floor(usernum)+ "<br>");
// document.write("yeh random  ka :" + Math.random(usernum)+ "<br>");
// document.write("yeh fround ka :" + Math.fround(usernum)+ "<br>");



// // 3. Write a program that displays the absolute value of a 
// // number. 
// // E.g. absolute value of -4 is 4 & absolute value of 5 is 5


// var usernum = prompt("enter your absolite number");

// document.write("user inpuut numm : " + usernum + "<br>");
// document.write(" absolute value of " +  usernum + "  is : "+ Math.abs(usernum) + "<br>");
// document.write(" positive kardia   hy : "+ Math.abs(usernum) + "<br>");


// // 4. Write a program that simulates a dice using random() 
// // method of JS Math class. Display the value of dice in your 
// // browser.:

// var usernum = prompt("enter your num");

// document.write("ussser input bnum : " + usernum +"<br>");
// document.write("apna : " + (Math.floor(Math.random() * 6)+1));


// // 5. Write a program that simulates a coin toss using random() 
// // method of JS Math class. Display the value of coin in your 
// // browser  6. Write a program that shows a random number between 1 
// // and 100 in your browser. 


// var toss = prompt("enter num")+Math.random();  // 0 aur 1 ke beech random number

// if (toss < 0.5) {
//     document.write("Heads");
// } else {
//     document.write("Tails");
// }

//// yeh samjh nahi aya mujhe sawal 


// // 6. Write a program that shows a random number between 1 
// // and 100 in your browser.

// var usernum=+prompt("enter your num");

// var refresh = Math.random(usernum);

// console.log(refresh)


// // 7. Write a program that asks the user about his weight. Parse 
// // the user input and display his weight in your browser. 
// // Possible user inputs can be: 
// // a. 50 
// // b. 50kgs 
// // c. 50.2kgs 
// // d. 50.2kilograms 


// var userwazan= prompt("enyer your wazan ");

// var apnakaam = Math.round(userwazan);
// var apnakaam = parseInt(userwazan);

// console.log(apnakaam);


// // 8. Write a program that stores a random secret number from 
// // 1 to 10 in a variable. Ask the user to input a number 
// // between 1 and 10. If the user input equals the secret 
// // number, congratulate the user.

// var secretnum = Math.floor(Math.random()*10)+1;

// var userguest = parseInt(prompt("ik num likho secret 1se 10 ke andar"));

// if(userguest===secretnum){
//     alert("congrugulation");
// }

// else{
//     alert("tryagain");
// }