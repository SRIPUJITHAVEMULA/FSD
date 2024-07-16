var x=parseInt(window.prompt("Enter a number"));
var h=x;
var m=59;
var s=59;
function fun(){
    document.getElementsByClassName("hours")[0].innerHTML=h-1;
    document.getElementsByClassName("minutes")[0].innerHTML=m;
    document.getElementsByClassName("seconds")[0].innerHTML=s;
    if (s > 0) 
    {
        s--;
    } 
    else 
    {
        s = 59;
        if (m > 0) 
        {
            m--;
        } 
        else 
        {
            m = 59;
            if (h > 0) 
            {
                h--;
            }
        }
    }
}
setInterval(fun,1000);