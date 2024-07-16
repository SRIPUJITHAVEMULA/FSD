var n=parseInt(window.prompt("Enter a number"));
var parent=document.getElementById("div1");
var grid=[];
var r=0;
var c=0;
if(n<11){
for(let i=0;i<n;i++)
{
    var row=document.createElement("div");
    row.style.display='flex';
    var rowcell=[];
    for(let j=0;j<n;j++)
    {
        var col=document.createElement("div");
        col.style.width='70px';
        col.style.height='50px';
        col.style.backgroundColor="white";
        // col.style.backgroundImage="url('http://orig12.deviantart.net/50f7/f/2014/341/6/b/him_run_animation_by_dog_san-d892e52.png')";
        // col.style.backgroundSize='100% 100%';
        // col.style.backgroundRepeat='no-repeat';
        col.style.border="1px solid black";
        row.appendChild(col); 
        rowcell.push(col);
    }
    parent.appendChild(row);
    grid.push(rowcell);
}
grid[0][0].style.backgroundColor="black";
}
else{
    alert("please enter the number in between the range 1 to 6");
}
function upgradegrid(){
    for(let i=0;i<n;i++){
      for(let j=0;j<n;j++){
        grid[i][j].style.backgroundColor='white';
      }
    }
    grid[r][c].style.backgroundColor='black';
    // grid[r][c].style.backgroundImage = "url('http://orig12.deviantart.net/50f7/f/2014/341/6/b/him_run_animation_by_dog_san-d892e52.png')";
    //     grid[r][c].style.backgroundSize = '100% 100%';
    //     grid[r][c].style.backgroundRepeat = 'no-repeat';
}
function move(dir){
    switch(dir){
     case 'up':
       if (r>0){
         r--;
       }
       else{
         alert("cannot be moved further");
       }
       break;
     case 'left':
       if(c>0){
         c--;
       }
       else{
         alert("cannot be moved further");
       }
       break;
     case 'right':
       if(c<n-1){
         c++;
        }
        else{
          alert("cannot be moved further");
        }
        break;
      case 'down':
        if(r<n-1){
          r++;
        }
        else{
          alert("cannot be moved further");
        }
        break;
     }
     upgradegrid();
}


  











































































































































// // var table=document.getElementById("table");
// // for(i=0;i<n;i++){
// //     var row=document.createElement("tr");
// //     table.appendChild(row);
// //     for(j=0;j<n;j++){
// //         var col=document.createElement("td");
// //         row.appendChild(col);
// //     }
// // }