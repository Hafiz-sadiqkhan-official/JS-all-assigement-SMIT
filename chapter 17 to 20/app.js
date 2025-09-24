// chapter 17 to 20 


// 1.  Declare and initialize an empty multidimensional array. 
// (Array of arrays)  


var arr = [[],[],[]];

console.log(arr);


// 2. Declare and initialize a multidimensional array 
// representing the following matrix


var arr = [
    [0, 1, 2, 3],
    [1, 0, 1, 2],
    [2, 1, 0, 1]
];

console.table(arr);



//  3. Write a program to print numeric counting from 1 to 10.  

// for (statement; condition; increment/decrement  ){



for (num=1; num<=10;num++){
    console.log(num)
}

//  4.  Write a program to print multiplication table of any 
// number using for loop. Table number & length should be 
// taken as an input from user.    


var number =prompt("plesae enter your table");
var length =prompt("enter youe table length");

for(var table=1; table <=length; table++){
    document.write(number +" x " + table + " = " +(number * table) +"<br>");
}






// 7. You have an array 
// A = [“cake”, “apple pie”, “cookie”, “chips”, “patties”] 
// Write a program to enable “search by user input” in an 
// array. 
// After searching, prompt the user whether the given item is 
// found in the list or not. Example: 

var bakeryitem = [" cake","apple pie","cookie","patties"];
var search =prompt(" welcome to ABC bakery ").toLowerCase().trim();


var flag = false;

for(i=0; i < bakeryitem.length; i++){
   if (bakeryitem[i].toLowerCase().trim() ===search ){
    flag = true;
    break;
   }
}

if(flag) {
    alert(search + " yes this item is available ");
}
else{
    alert(search +" this item is not avaliable ");
}

// 5. Write a program to print items of the following array 
// using for loop: 
// fruits = [“apple”, “banana”, “mango”, “orange”, 
// “strawberry”]


var fruits = ["apple","ornge","banana","mango","strawberry"];

for (i=0; i <fruits.length; i++){
    console.log(fruits.l[i]);
}


// 6. Generate the following series in your browser. See 
// example output. 
// a. Counting: 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15 
// b. Reverse counting: 10, 9, 8, 7, 6, 5, 4, 3, 2, 1 
// c. Even: 0, 2, 4, 6, 8, 10, 12, 14, 16, 18, 20 
// d. Odd: 1, 3, 5, 7, 9, 11, 13, 15, 17, 19 
// e. Series: 2k, 4k, 6k, 8k, 10k, 12k, 14k, 16k, 18k, 20k


for(i=1; i<=15; i++){
   console.log(i);
}


for (i = 10; i >1; i--) {
    console.log(i);
}


console.log("Even:");
for (var i = 0; i <= 20; i += 2) {
    console.log(i);
}


console.log("Odd:");
for (var i = 1; i < 20; i += 2) {
    console.log(i);
}

console.log("Series:");
for (var i = 2; i <= 20; i += 2) {
    console.log(i + "k");
}


// 8. Write a program to identify the largest number in the 
// given array. 
// A = [24, 53, 78, 91, 12].

var A = [24, 53, 78, 91, 12];

var largest = A [0];

for(var i=1 ;i<A.length; i++){
  if (A[i]>largest){
    largest=A[i];
  }
  console.log("largest number"+largest)
}

// 9. Write a program to identify the smallest number in the 
// given array. 
// A = [24, 53, 78, 91, 12]


A = [24, 53, 78, 91, 12 ,100];
var smallest = A[0];
for(var i=1; i<A.length; i++){
    if(A[i]<smallest){
        smallest=A[i];
    }
    console.log("smallest number" + smallest);
}


// 10. Write a program to print multiples of 5 ranging 1 to 
// 100.

for(var i=5 ;i<=100 ; i++){
    if(i % 5 === 0){
        console.log(i);
    }
}