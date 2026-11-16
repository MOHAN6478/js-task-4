
let  a =prompt("enter a number")

if(a>0){
    console.log("postive number");
}
else{
    console.log("negative  number");

}


let  age =prompt("enter age")

if(age>=18){
    console.log("eligible for voting");
}
else{
    console.log("not eligible for voting ");

}


let  b =prompt("enter a number")

if(b%2==0){
    console.log("even number");
}
else{
    console.log("odd number");

}


let  c =prompt("enter marks")

if(c>35){
    console.log("passed");
}
else{
    console.log("failed");

}


let t= prompt("enter time")

if(t>=1 && t<=6){

    console.log("early morning");
}
else if(t>=7 && t<=12){
    console.log("good morning");
}
else if(t>=13 && t<=15){
    console.log("good afternoon");
}
else if(t>=16 && t<=18){
    console.log("good evening");
}
else if(t>=19 && t<=24){
    console.log("good night");
}
else{
    console.log("invalid");
}




let agee= prompt("enter age")
let h= prompt("enter height")
let w= prompt("enter weight")


if(age>18){
    if(h>167){
        if(w<90){
        console.log("selected ");

         } else{
        console.log("weight is not enough ${w}");
         }
    
}else{
        console.log("hight is not enough ${h}");
      }

    }else{
    console.log(" not selected ");
}


let trafficlight= prompt("enter the singnal of traffic light")

switch(trafficlight){
 case("red") : console.log("stop the vechile")
           break;

case("green") : console.log("start and go the vechile")
           break;
case("yellow") : console.log("start  the vechile")
           break;
           default: console.log("enter correct colour");
        

}


let day= prompt("enter the number 1 monday 2 tuesday 3 wednesday 4 thursday 5 friday 6 saturday 7 sunday")

switch(day){
 case("1") : console.log("monday")
           break;

case("2") : console.log("tuesday")
           break;
case("3") : console.log("wednesday")
           break;
case("4") : console.log("thursday")
           break;
 case("5") : console.log("friday")
           break;
case("6") : console.log("saturday")
           break;
case("7") : console.log("sunday")
           break;
 default: console.log("enter correct day number");
        
}



let username = prompt("enter the usernamee");
let password = prompt("enter the passwordd");

if (username == "balu" && password == "123456") {
    console.log("Login Successful");
} else {
    console.log("Invalid Username or Password");
}



let studentMarks = prompt("enter the marks");
if (studentMarks >= 90) {
  console.log("Grade A");
} else if (studentMarks >= 75) {
    console.log("Grade B");
} else if (studentMarks >= 50) {
    console.log("Grade C")
} else {
    console.log("Fail");
}



//part 2

for (let i = 1; i <= 10; i++) {
    console.log(i);
}


for (let i = 10; i >= 1; i--) {
    console.log(i);
}


for (let i = 1; i <= 20; i++) {
    if (i % 2 == 0) {
        console.log(i);
    }
}


for (let i = 1; i <= 20; i++) {
    if (i % 2 != 0) {
        console.log(i);
    }
}


for (let i = 1; i <= 10; i++) {
    console.log("5 x " + i + " = " + (5 * i));
}


let sum = 0;

for (let i = 1; i <= 10; i++) {
    sum = sum + i;
}

console.log("Sum = " + sum);

let j = 10;

while (j >= 1) {
    console.log(j);
    j--;
}


let k = 1;

do {
    console.log(k);
    k++;
} while (k <= 5);


let word = "JAVASCRIPT";

for (let character of word) {
    console.log(character);
}


let languages = ["Java", "Python", "JavaScript", "C", "C++"];

for (let language of languages) {
    console.log(language);
}


let employee = {
    name: "balu",
    age: 22,
    location: "Hyderabad",
    designation: "Java Developer"
};

for (let ke in employee) {
    console.log(ke + " : " + employee[ke]);
}
let mobiles = ["Samsung", "Apple", "OnePlus", "Vivo", "Oppo"];

for (let brand of mobiles) {
    console.log(brand);
}


//part4




let studentMarksArray = [85, 90, 75, 60, 95];

for (let mark of studentMarksArray) {
    console.log(mark);
}


let employeeDetails = {
    name: "balu",
    age: 22,
    salary: 30000,
    location: "Hyderabad"
};

for (let key in employeeDetails) {
    console.log(key + " : " + employeeDetails[key]);
}


let numbers = [10, 15, 20, 25, 30];

for (let num of numbers) {
    if (num % 2 == 0) {
        console.log(num + " is Even");
    } else {
        console.log(num + " is Odd");
    }
}


let student = {
    name: "balu",
    marks: 80
};

if (student.marks >= 35) {
    console.log(student.name + " Passed");
} else {
    console.log(student.name + " Failed");
}


let signal = "green";

switch (signal) {
    case "red":
        console.log("Stop");
        break;

    case "yellow":
        console.log("Wait");
        break;

    case "green":
        console.log("Go");
        break;

    default:
        console.log("Invalid Signal");
}


let tableNumber = prompt("enter a number for table");

for (let i = 1; i <= 10; i++) {
    console.log(tableNumber + " x " + i + " = " + (tableNumber * i));
}


let fruitNames = ["apple", "banana", "mango", "orange", "grapes"];

for (let fruit of fruitNames) {
    console.log(fruit.toUpperCase());
}


let employeeInfo = {
    name: "balu",
    age: 22,
    salary: 30000,
    location: "Hyderabad"
};

for (let key in employeeInfo) {
    console.log(key + " : " + employeeInfo[key]);
}

if (employeeInfo.salary > 25000) {
    console.log("Salary is above 25000");
} else {
    console.log("Salary is 25000 or below");
}


let loginUsername = "balu";
let loginPassword = "12345";

if (loginUsername == "Naveen" && loginPassword == "12345") {
    console.log("Welcome! Login Successful");
} else {
    console.log("Invalid Login Details");
}


let students = [
    {
        name: "balu",
        marks: 85
    },
    {
        name: "Rahul",
        marks: 30
    },
    {
        name: "Kiran",
        marks: 65
    },
    {
        name: "Arjun",
        marks: 25
    },
    {
        name: "Sai",
        marks: 95
    }
];

for (let student of students) {
    console.log("Student Name: " + student.name);
    console.log("Student Marks: " + student.marks);

    if (student.marks >= 35) {
        console.log("Result: Pass");
    } else {
        console.log("Result: Fail");
    }

   
}
