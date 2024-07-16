var n=parseInt(window.prompt("enter how many grids you want"));
var parent=document.getElementsByClassName('a')[0];
var grid=[];
var r=0;
var c=0;
if(n<7){
for(let i=0;i<n;i++){
    var row=document.createElement('div');
    row.style.display='flex';
    var rowcell=[];
    for(let j=0;j<n;j++){
      var div=document.createElement('div');
      div.style.height='120px';
      div.style.width='120px';
      div.style.margin='2px';
      // div.style.backgroundImage="url('http://orig12.deviantart.net/50f7/f/2014/341/6/b/him_run_animation_by_dog_san-d892e52.png')";
      // div.style.backgroundSize='100% 100%';
      // div.style.backgroundRepeat='no-repeat';
      div.style.backgroundColor='lightpink';
      row.appendChild(div);
      rowcell.push(div);
}
parent.appendChild(row);
grid.push(rowcell);
}
grid[0][0].style.backgroundImage="url('http://orig12.deviantart.net/50f7/f/2014/341/6/b/him_run_animation_by_dog_san-d892e52.png')";
grid[0][0].style.backgroundSize='100% 100%';
grid[0][0].style.backgroundRepeat='no-repeat';
}
else{
    alert("please enter the number in between the range 1 to 6");
}
 
function upgradegrid(){
  for(let i=0;i<n;i++){
    for(let j=0;j<n;j++){
      grid[i][j].style.backgroundColor='lightpink';
    }
  }
  grid[r][c].style.backgroundImage="url('http://orig12.deviantart.net/50f7/f/2014/341/6/b/him_run_animation_by_dog_san-d892e52.png')";
  grid[r][c].style.backgroundSize='100% 100%';
  grid[r][c].style.backgroundRepeat='no-repeat';

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