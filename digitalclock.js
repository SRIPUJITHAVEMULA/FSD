let y;
var a=0;
var b=0;
var c=0;
var timer=null;
function change(d){
    if(d<10)
    {
        return '0'+d;
    }
    else{
        return d;
    }
}
function fun(){
    document.getElementsByClassName("hours")[0].innerHTML=change(a);
    document.getElementsByClassName("minutes")[0].innerHTML=change(b);
    document.getElementsByClassName("seconds")[0].innerHTML=change(c);
    var x=new Date();
    if(x.getSeconds)
    {
        // document.getElementsByClassName("seconds")[0].innerHTML=c;
        c++;
        if(c==60)
        {
            b++;
            c=0;
            // document.getElementsByClassName("minutes")[0].innerHTML=b;
        }
        if(b==60){
            a++;
            b=0;
            // document.getElementsByClassName("hours")[0].innerHTML=a;
        }
    }
}
function displaystart(){
    if(timer==null){
    timer=setInterval(fun,1000);
    }
}
function displaystop(){
    if(timer!=null){
      clearInterval(timer);
      timer=null;
    }
}
function displayreset(){
    displaystop();
    var a=0;
    var b=0;
    var c=0;
    fun();
}



























// function fun(){
//     var x= new Date();
//     document.getElementsByClassName("hours")[0].innerHTML=x.getHours();
//     document.getElementsByClassName("minutes")[0].innerHTML=x.getMinutes();
//     document.getElementsByClassName("seconds")[0].innerHTML=x.getSeconds();
// if(x.getSeconds()==0)
// {
//     clearInterval(address);
// }
// }
// var address=setInterval(fun,1000);
