// alert("assalamu alikum");


// chapter no 6 to  9 

// queation no 1 answer


document.write("<h1> RESULT </h1>" + "<br>" );

var a=10;
document.write("The value of a is :" + a +"<br>" +"<br>"); 

// increment
var a=++a;
document.write("The value of ++a is : " + a +"<br>");
document.write("Now the value of a is :" +a +"<br>" +"<br>")


var a=a++;

document.write("The value of a++ is : " + a +"<br>");
document.write("Now the value of a is :" +a +"<br>" +"<br>")

// decrement


var a=--a;
document.write("The value of --a is : " + a +"<br>");
document.write("Now the value of a is :" +a +"<br>" +"<br>")


var a=a--;
document.write("The value of a-- is : " + a +"<br>");
document.write("Now the value of a is :" +a +"<br>" +"<br>")

// question no 2 answer

var a=2;
var b=1;

 a=--a;
document.write("now --a is : " +a +"<br>");

 a=--a;
 b=--b;
document.write("now --a is : " +a  +"<br>" );
document.write("now --b is : " +b  +"<br>");

 a=--a;
 b=--b;
 b=++b

document.write("now --a is : " +a+ "<br>" +"now --b is : " +b  +"<br>" + "now ++b is :" +b +"<br>" )

 a=--a;
 b=--b;
 b=++b;
 b--;

document.write("now --a is : " + a +"<br>" );
document.write("now --b is : " + b +"<br>" );
document.write("now ++b is : " + b +"<br>" );
document.write("now b-- is : " + b +"<br>" );

document.write("<h1> RESULT </h1>" + "<br>");
document.write("now a = : " + a +"<br>");
document.write("now b = : " + b +"<br>");

// question no 3 answer

var name=prompt("please enter your fullname");
alert("welcome to your my website " + name);

var work=prompt("plese enter your work")
document.write( name + " your work available " + work);

// question no 4 and 5 answer

var num=prompt("app ko kis number ka table chahiye app yaha sirif number likho app ki wish poore hojaygi");

var num = num // || 5 agar user kuch na likhe to  5 ka table ajay is liye
document.write("<h1>" + num + " x 1 = " + num * 1 +"</h1>" + "<br>");
document.write("<h1>" + num + " x 2 = " + num * 2 +"</h1>" + "<br>");
document.write("<h1>" + num + " x 3 = " + num * 3 +"</h1>" + "<br>");
document.write("<h1>" + num + " x 4 = " + num * 4 +"</h1>" + "<br>");
document.write("<h1>" + num + " x 5 = " + num * 5 +"</h1>" + "<br>");
document.write("<h1>" + num + " x 6 = " + num * 6 +"</h1>" + "<br>");
document.write("<h1>" + num + " x 7 = " + num * 7 +"</h1>" + "<br>");
document.write("<h1>" + num + " x 8 = " + num * 8 +"</h1>" + "<br>");
document.write("<h1>" + num + " x 9 = " + num * 9 +"</h1>" + "<br>");
document.write("<h1>" + num + " x 10 = " + num * 10 +"</h1>" + "<br>");


//  question answer no 6 and 7


var sub1 =prompt("subject 1 ka namer likho " );
var sub2 =prompt("subject 2 ka namer likho " );
var sub3 =prompt("subject 3 ka namer likho " );

var totalmarkspersubjeck = 100 ;

var marks1 = prompt("obtained marks in subject 1");
var marks2 = prompt("obtained marks in subject 2");
var marks3 = prompt("obtained marks in subject 3");
 
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
