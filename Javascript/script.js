var a;
a = 10;
var a = 20;
console.log(a);
let b;
b = 10;
console.log(b);
const d = 23;
console.log(d);
var sum = () => {
    console.log("Hello world")
}
sum();
function add() {
    console.log("I am a student");
}
add();
sum();
var a1 = [10, 20, 30];
var a2 = [...a1, 40];
console.log(a1);
console.log(a2);
var m = [99, 90, 89, 96, 97];
var [m1, m2, m3, m4, m5] = m;
console.log(m);
console.log(m1);
console.log(m2);
console.log(m3);
console.log(m4);
console.log(m5);

var arr=[1,2,3,4,5];
var [x, y, ...rest] = arr;
var num=arr.map((num) => num * 2);
var n1=num.filter((num) => num > 5);
var r=n1.reduce((a,b) => a + b, 0);
console.log(r); // 16
console.log(x); // 1
console.log(y); // 2
console.log(rest); // [3, 4, 5]     
console.log(num); // [2, 4, 6, 8, 10]
var obj = {                

    name: "John",
    age: 30,          

    city: "New York"
};
var { name, age, city } = obj;      
console.log(name); // John
console.log(age); // 30
console.log(city); // New York  
var obj1 = {
    name: "Alice",
    age: 25,
    city: "Los Angeles"
};
var { name: n, age: a, city: c } = obj1;
console.log(n); // Alice    
console.log(a); // 25   
console.log(c); // Los Angeles

