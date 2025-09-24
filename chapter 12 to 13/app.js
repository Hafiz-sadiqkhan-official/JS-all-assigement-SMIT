

// var input = prompt("yeha ik koi character ya phir koi number lkho");

// var code = input.charCodeAt(0);

// if(code >= 48 && code <=57){
//     alert("yeh number hy");
// }
// else if(code >= 65 && code <= 90){
//     alert("yeh capital letter hy");
// }

// else if(code >= 97 && code <= 122){
//     alert("yeh small letter hy");
// }

// else{
//     alert("yeh na number hy na koi laetter");
// }


// // question no 2 answer

// var num1 = prompt("yaha app pehla number likho");
// var num2 = prompt("yahan app doosra number likho ");


// if(num1 > num2){
//     alert("yeh number bara hy : " +num1);
// }

// if(num2 > num1){
//     alert("yeh number bara hy : " +num2);
// }

// else{
//     alert("yeh dono number brabar hy : ");
// }


// // qusetion no 3 answer
// var num = +prompt("yaha app  number likho examlp -1 ...-0 ..0 ..1 ..2 etc");



// if(num > 0){
//     alert("yeh  positive number hy : " );
// }

// else if(num < 0){
//     alert("yeh negative  number hy : ");
// }

// else{
//     alert("yeh  number  0 hy : ");
// }

// // question no 4 answer 

// var vowel = prompt("yaha app koi bhi  likho jese vowel ");
// vowel = vowel.toLowerCase();

// if(vowel === "a" || vowel === "e" || vowel === "i" || vowel === "o" || vowel === "u"){
//     alert("true");
// }

// else{
//     alert("appne vowel nahi likha");
// }

// // question no 5 answer


// // (a) 
// var correctPassword = "mypassword";

// // (b) 
// var userPassword = prompt("Enter your password:");

// // (c) 

// if (userPassword === "" || userPassword === null) {
//   alert("Please enter your password");
// }
// else if (userPassword === correctPassword) {
//   alert("Correct! The password you entered matches the original password");
// }
// else {
//   alert("Incorrect password");
// }


// // question no 6 answer

// var greeting; 
// var hour = 13; 
// if (hour < 18) { 
// greeting = "Good day"; }
// else {
// greeting = "Good evening"; 
// }

// alert(greeting);


// question no 7 answer


var time = +prompt("Apna waqt likhein 24-hour format mein (jaise 1900):");

if (time >= 0 && time < 1200) {
  alert("Good Morning ");
}
else if (time >= 1200 && time < 1700) {
  alert("Good Afternoon ");
}
else if (time >= 1700 && time < 2100) {
  alert("Good Evening ");
}
else if (time >= 2100 && time <= 2359) {
  alert("Good Night ");
}
else {
  alert("Ghalat waqt likha hai. Sahi format mein likho, jaise 0700 ya 2130.");
}
