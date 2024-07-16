// console.log(document.getElementById("div"));
// console.log(document.getElementsByTagName("div"));
// console.log(document.getElementsByClassName("mydiv")[0]);
// console.log(document.getElementsByClassName("mydiv")[1]);
// console.log(document.getElementsByClassName("div1").innerHTML="puji");
function change(){
    var x=document.getElementsByClassName("div1")[0];
    x.style.backgroundColor="red"
}
function change1(){
    var x=document.getElementsByTagName("img")[0];
    x.src="./tpic7.jpeg"
}
function change2(){
    var x=document.getElementsByClassName("div2")[0];
    x.style.backgroundImage="url('./tpic7.jpeg')"
}