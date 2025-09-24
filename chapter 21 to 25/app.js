// // chapter 21  t0 25




// // 1.  Write a program that takes two user inputs for first and 
// // last name using prompt and merge them in a new variable 
// // titled fullName. Greet the user using his full name.

// var namee = prompt("enter your name ");

// var lastname = prompt("enter your last name ");

// var fullName = (" hello " + namee+lastname);

// alert(fullName);



// // 2. Write a program to take a user input about his favorite 
// // mobile phone model. Find and display the length of user 
// // input in your browser

// var mobile =prompt ("please enter you favourite mobile and phone model number");

// var favmobile = mobile.length;

// console.log(favmobile);


// // 3. Write a program to find the index of letter “n” in the word 
// // “Pakistani” and display the result in your browser . 

// var word = ("pakistani")

// var letter = word.indexOf("n")

// console.log(letter);



// // 4. Write a program to find the last index of letter “l” in the 
// // word “Hello World” and display the result in your browser.

// var word = ("helloworld");

// var letter = word.lastIndexOf("l");

// console.log(letter);


// // 5. Write a program to find the character at 3rd index in the 
// // word “Pakistani” and display the result in your browser


// var word = ("pakistani");
// var letter = word.charAt(3);
// var letter1 = word.indexOf("i");

// console.log(letter,letter1,word.length);



// // 6. Repeat Q1 using string concat() method.



// var namee = prompt("enter your name ");

// var lastname = prompt("enter your last name ");

// var fullName = " hello ".concat(namee+lastname + " welcome");

// alert(fullName);




// // 7. Write a program to replace the “Hyder” to “Islam” in the 
// // word “Hyderabad” and display the result in your browser


// var text = ("hyderabad");

// var last = text.replace("hyder","islam");


// document.write( text.length);
// document.write(last);



// // 8.  Write a program to replace all occurrences of “and” in the 
// // string with “&” and display the result in your browser. 
// // var message = “Ali and Sami are best friends. They play cricket and 
// // football together.”;

// var message = "Ali and Sami are best friends. They play cricket and football together.";

// var lastmessage = message.replaceAll("and","&");

// document.write(lastmessage);
// console.log(message,lastmessage.length,message.length);


// // 9. Write a program that converts a string “472” to a number 
// // 472. Display the values & types in your browser.


// var string = "472";
// var number = Number(string);

// console.log("value : " + number);
// console.log("typeof : " + number);

// console.log(number)


// // 10. Write a program that takes user input. Convert and 
// // show the input in capital letters. 

// var userinput = prompt("enter your favourite biscuit");
// var capitalinpuit = userinput.toUpperCase();

// document.write("capital se pehle : " + userinput + "<br>")
// document.write("capital hy : " + capitalinpuit);


// // 11. Write a program that takes user input. Convert and 
// // show the input in title case.

// var fullName = prompt("enter name");

// var title = fullName.charAt(0).toUpperCase()+fullName.slice(1).toLowerCase();

// console.log(title);

// // 12. Write a program that converts the variable num to string. 
// // var num = 35.36 ; 
// // Remove the dot to display “3536” display in your browser

// var  num = 35.36;
// var str = num.toString(); 
// var newstr = str.replace(".", "");

// console.log(newstr);



// // 13. Write a program to take user input and store username 
// // in a variable. If the username contains any special symbol 
// // among [@ . , !], prompt the user to enter a valid username. 
// // For character codes of [@ . 


// var username = prompt("Enter your username:");

// if (username.includes("@") || username.includes(".") || username.includes(",") || username.includes("!")) {
//     alert("Please enter a valid username (without @ . , ! )");
// } else {
//     alert("Your username is: " + username);
// }



// // 14. You have an array 
// // A = [cake”, “apple pie”, “cookie”, “chips”, “patties”] 
// // Write a program to enable “search by user input” in an 
// // array. After searching, prompt the user whether the given 
// // item is found in the list or not. 
// // Note: Perform case insensitive search. Whether the user 
// // enters cookie, Cookie, COOKIE or coOkIE, program 
// // should inform about its availability. Example:


// var product = ["cake", "apple pie", "cookie", "chips", "patties"];

// var userinput = prompt("please serch your priduct");

// var serachitem = userinput.toLowerCase();

// if (product.includes(serachitem)) {
//     alert(serachitem + "  yes this product is avalible ");
// }

// else {
//     alert(serachitem + "  this product is not avalible ");

// }




// // 15. Write a program to take password as an input from 
// // user. The password must qualify these requirements: 
// // a. It should contain alphabets and numbers 
// // b. It should not start with a number 
// // c. It must at least 6 characters long 
// // If the password does not meet above requirements, 
// // prompt the user to enter a valid password. 
// // For character codes of a-z, A-Z & 0-9, refer to ASCII 
// // table at the end of this document.

// var password = prompt("Enter your password:");

// // Condition c: Length at least 6 characters
// if (password.length < 6) {
//     alert("Password must be at least 6 characters long!");
// }
// // Condition b: Should not start with number
// else if (!isNaN(password.charAt(0))) {
//     alert("Password should not start with a number!");
// }
// // Condition a: Must contain alphabets and numbers
// else if (!(/[a-zA-Z]/.test(password) && /[0-9]/.test(password))) {
//     alert("Password must contain both alphabets and numbers!");
// }
// else {
//     alert("Password is valid ✅");
// }


// // 16. Write a program to convert the following string to an 
// // array using string split method. 
// // var university = “University of Karachi”; 
// // Display the elements of array in your browser.

// var str = "university of karachi";

// // var arr = [str.split("")];

// var result = str.split("");

// // console.log(arr[str]);
// console.log(result);



// var university = "University of Karachi";
// var arr = university.split("");           
// for (var i = 0; i < arr.length; i++) {    
//     console.log(arr[i]);        
// }





// // 17. Write a program to display the last character of a user 
// // input

// var userinput = prompt("enter your character");
// var lastcharacter = userinput.charAt(userinput.length - 1);
// console.log("Input: " + userinput);
// console.log("Last Character: " + lastcharacter);





// 18. You have a string “The quick brown fox jumps over the 
// lazy dog”. Write a program to count number of 
// occurrences of word “the” in given string.

// String
var text = "The quick brown fox jumps over the lazy dog";

// Sabko lowercase kar do taake "The" aur "the" dono match ho jayein
var lowerText = text.toLowerCase();

// Word ko count karna
var word = "the";
var count = lowerText.split(" ").filter(w => w === word).length;

// console.log(`The word "${word}" occurs ${count} times.`);

console.log(count)
