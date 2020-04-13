i = 100;
let red = i;
let green = i;
let blue = i;
let flag = true;





function plusI() {
    i+=5;
    console.log(`rgb(${red=i}, ${green=i}, ${blue=i})`);
    document.body.style.backgroundColor= `rgb(${red=i}, ${green=i}, ${blue=i})`;
}
function minusI() {
    i-=5;
    console.log(`rgb(${red=i}, ${green=i}, ${blue=i})`);
    document.body.style.backgroundColor= `rgb(${red=i}, ${green=i}, ${blue=i})`;
}





const changeColor = function(){
  if(flag == true){
    if(event.keyCode == 38){
        plusI();
    }else if(event.keyCode == 40){
        minusI();
    }
   }
   if(i >= 255 || i == 0){
    flag = false;
   }
}



document.body.style.backgroundColor= `rgb(${red+=1}, ${green+=1}, ${blue+=1})`;
window.addEventListener('keydown', changeColor);