// // chapter no 14 to 16


// //  1. Declare an empty array using JS literal notation to store 
// // student names in future .

// var studentname = [];

// studentname.push("sadia khan");
// studentname.push("atif khan");
// studentname.push("adil khan");

// console.log(studentname);

// // 2. Declare an empty array using JS object notation to store 
// // student names in future.

// var studentname = new Array();

// studentname.push("sadiq khan");
// studentname.push("adil khan");
// studentname.push("atif khan");


// console.log(studentname);


// // 3. Declare and initialize a strings array. 


// var names = [];

// var names = ["sadiqkhan","atifkhan","adilkhan"];

// console.log(names)

// // 4.  Declare and initialize a numbers array.


// var numbers = [];

// var numbers = [12,13,14,15,16];

// console.log(numbers);



// // 5.  Declare and initialize a boolean array

// var boolean = [];

// var boolean = [true,false,];

// console.log(boolean);

// // 6. Declare and initialize a mixed array.

// var mixedarray = [];

// var mixedarray = ["sadiq",true,45,"khan",false,50];

// console.log(mixedarray);


// // 7. Declare and Initialize an array and store available 
// // education qualifications in Pakistan (e.g. SSC, HSC, BCS, 
// // BS, BCOM, MS, M. Phil., PhD). Show the listed 
// // qualifications in your browser like:  

// var Pakistanqualification = ["SSC,","HSC,","BCS", "BS", "BCOM", "MS", "M", "Phil", "PhD"];
// for (var i=0 ; i < Pakistanqualification.length ; i++ ){
// document.write(Pakistanqualification[i] + "<br>");
// }


// // 8. Write a program to store 3 student names in an array.Take 
// // another array to store score of these three students. 
// // Assume that total marks are 500 for each student, display 
// // the scores & percentages of students like: 

// var names = ["sadiq","ali","atif"];
// var scroe = [400,410,380];
// totalmark = [500];

// for(i=0; i <names.length; i++){
//     percentage = (scroe[i] /totalmark)*100


// console.log(names[i] + " scroei " + scroe[i] + " marks.percentage " + percentage + "%");
// }



// // 9.Initialize an array with color names. Display the array 
// // elements in your browser. 
// // a. Ask the user what color he/she wants to add to the 
// // beginning & add that color to the beginning of the array. 
// // Display the updated array in your browser. 
// // b. Ask the user what color he/she wants to add to the end 
// // & add that color to the end of the array. Display the 
// // updated array in your browser. 
// // c. Add two more color to the beginning of the array. 
// // Display the updated array in your browser. 
// // d. Delete the first color in the array. Display the updated 
// // array in your browser. 
// // e. Delete the last color in the array. Display the updated 
// // array in your browser. 
// // f. Ask the user at which index he/she wants to add a color 
// // & color name. Then add the color to desired 
// // position/index. . Display the updated array in your 
// // browser. 
// // g. Ask the user at which index he/she wants to delete 
// // color(s) & how many colors he/she wants to delete. Then 
// // remove the same number of color(s) from user-defined 
// // position/index. . Display the updated array in your 
// // browser.


// var color = ["red","yellow","green"];

// color.unshift("blue");
// color.push("white");

// color.unshift("black","brown");
// color.shift(0);
// color.pop(5);

// color.splice(2,1 ,"alpha","violet");
// color.pop(6);
// color.splice(0,2);
// document.write(color);

// // chatgpt ka code 

// var colors = ["Red", "Yellow", "Green"];
// document.write("Original: " + colors + "<br>");

// colors.unshift(prompt("Color add at start:")); // a
// document.write("After adding start: " + colors + "<br>");

// colors.push(prompt("Color add at end:")); // b
// document.write("After adding end: " + colors + "<br>");

// colors.unshift("Black", "Brown"); // c
// document.write("After adding 2 at start: " + colors + "<br>");

// colors.shift(); // d
// document.write("After deleting first: " + colors + "<br>");

// colors.pop(); // e
// document.write("After deleting last: " + colors + "<br>");

// colors.splice(+prompt("Index to add:"), 0, prompt("Color name:")); // f
// document.write("After adding at index: " + colors + "<br>");

// colors.splice(+prompt("Index to delete from:"), +prompt("How many delete:")); // g
// document.write("After deleting from index: " + colors + "<br>");


// // 10. Write a program to store student scores in an array & 
// // sort the array in ascending order using Array’s sort 
// // method.

// var scoreofstudents = [320,230,480,120];

// scoreofstudents.sort()


// document.write(scoreofstudents);



// // 11. Write a program to initialize an array with city names. 
// // Copy 3 array elements from cities array to selectedCities 
// // array.

// var city = ["karachi","islamabad","quetta","panjab","peshawar"];

// var selectcity = city.slice(0,3);

// document.write(selectcity)


// // 12.  Write a program to create a single string from the below mentioned array: 
// // var arr = [“This ”, “ is ”, “ my ”, “ cat”]; 
// // (Use array’s join method)


// var arr = ["This","is","my","cat"];

// var sentence = arr.join(" ");

// document.write(sentence);


// // 13.  Create a new array. Store values one by one in such a way 
// // that you can access the values in the order in which they 
// // were stored. (FIFO-First In First Out)


// var names =[];

// names.push("sadiq");
// names.push("adil");
// names.push("atif");

// console.log(names);

// var first = names.shift();
// console.log(first);

// var second = names.shift();
// console.log(second);

// console.log(names);


// //  chapter 14 se 16 tak complete hogaya

