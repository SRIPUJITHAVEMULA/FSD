// x=parseInt(window.prompt("Enter  first number"));
// y=parseInt(window.prompt("Enter second number"));
// if (x>y){
//     console.log(x);
// }
// else{
//     console.log(y);
// }


// var x=10;
// var x=20;
// console.log(x);

// let x=10;
// let x=20;
// console.log(x); error occurs due to re defined

// var a=[10,20,30,40];
// a.push(50);
// document.write(a); for pushing adds at end

// var a=[21,22,23,24,25];
// a.pop();
// document.write(a); for pop deletes at end

// var a=[21,22,23,24,25];
// a.shift();
// document.write(a); delete at front

// var a=[21,22,23,24,25];
// a.unshift(27);
// document.write(a); adds at front


// var a=[10,20,30,40];
// a.splice(2,0,20,21,23,24);
// console.log(a)

// var a=[10,20,30,40,50];
// console.log(a.slice(1,4));

// var a=[10,20,30,40,50];
// a.map(ele => {
//     console.log(ele);
// })


// var Details={"name":"VSP",
//     "age":"19",
//     "branch":"AIML"}

// var x=Object.entries(Details);
// x.map(ele =>{
//     console.log(ele)
// })

// Object.entries(Details);map(ele =>{
//     console.log(ele)
// })

// console.log(Object.entries(Details))

// var s="Sripujitha"
// console.log(s.charAt(0))
// console.log(s[0])


// printing of  prime number
// var x=parseInt(window.prompt("Enter a number"));
// var c=0;
// for(i=1;i<=x;i++)
// {
//         if(x%i==0)
//         {
//                 c=c+1;
//         }
// }
// if(c==2){
//     console.log("prime number");
// }
// else{
//     console.log("Not prime number");
// }

// var x= new Date();
// console.log(x.getFullYear());
// console.log(x.getMonth());
// console.log(x.getDate());
// console.log(x.getHours());
// console.log(x.getMinutes());
// console.log(x.getSeconds());

// var y=x.getMonth()+1
// document.write(x.getDate()+"-"+y+"-"+x.getFullYear());

// console.log(Math.round(4.3)); //nearest integer
// console.log(Math.ceil(4.3)); //highest near integer
// console.log(Math.floor(4.3)); //lowest near integer
// console.log(Math.trunc(4.3)); //earases decimal values and return the integer values
// console.log(Math.sqrt(2));
// console.log(Math.pow(2,7));
// console.log(Math.abs(2.7));
// console.log(Math.sign(-45));
// console.log(Math.sign(45));
// console.log(Math.sign(0));
// console.log(Math.max(2,7,4,5));
// console.log(Math.min(2,7,5,6));
// console.log(Math.random(50,30));

// function karna(a,b){
//     console.log(a+b);
// }
// karna(2,4)

// function karna(a=12,b,c){
//     console.log(a+b);
// }
// karna(2,4)

// function karna(a,b,c=13){
//     console.log(a+b+c);
// }
// karna(2,4).

// var x={
//     "name":"v.sripujitha",
//     "age":19,
//     "rollnumber":"22A91A61J2",
//     Details:function(){
//         console.log("Hai i am working");
//     }
// }
// x.Details();

// x=10+1;
// console.log(x);
// var x;

//Error Handling
//1.Reference error
// try{
//     {
//         let x=0;
//     }
//     console.log(x);
// }
// catch(err){
//     console.log(err);
// }
// finally{
//     console.log("Succesfully executed");
// }


//using throw keyword user defined error
// try{
//     {
//         var x=window.prompt("Enter the name");
//         if (x==="rohini")
//         {
//             throw "rohini error";
//         }
//     }
// }
// catch(err){
//     console.log(err);
// }
// finally{
//     console.log("Succesfully executed");
// }


//2.Type error
// try{
//     {
//         var x=parseInt(window.prompt("Enter the name"));
//         x.upper();
//     }
//     console.log(x);
// }
// catch(err){
//     console.log(err);
// }
// finally{
//     console.log("Succesfully executed");
// }


//student grades
// var x=parseInt(window.prompt("Enter the grades"));
// if(x>90 && x<=100){
//     document.write("A");
// }
// else if(x>80 && x<=90){
//     document.write("B");
// }
// else if(x>70 && x<=80){
//     document.write("C");
// }
// else if(x>60 && x<=70){
//     document.write("D");
// }
// else{
//     document.write("fail");
// }


//Heroens formula
// var a=parseInt(window.prompt("Enter the value of a"));
// var b=parseInt(window.prompt("Enter the value of b"));
// var c=parseInt(window.prompt("Enter the value of c"));
// var s=((a+b+c)/2);
// var x=Math.sqrt(s*(s-a)*(s-b)*(s-c));
// console.log(x);


//roots formula
var a=parseInt(window.prompt("Enter the value of a"));
var b=parseInt(window.prompt("Enter the value of b"));
var c=parseInt(window.prompt("Enter the value of c"));
var x=((b*b)-(4*a*c));
if (x<0){
    console.log("The roots are not real")
}
else{
    var root1=(-b + Math.sqrt(x))/(2*a);
    var root2=(-b - Math.sqrt(x))/(2*a);
}
console.log(root1,root2);







