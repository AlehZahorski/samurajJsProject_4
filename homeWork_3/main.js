i = 100;
let red = i;
let green = i;
let blue = i;
let flag = true;





function plusI() {
    if(i < 255){
        i+=5;
        console.log(`rgb(${red=i}, ${green=i}, ${blue=i})`);
        document.body.style.backgroundColor= `rgb(${red=i}, ${green=i}, ${blue=i})`;
    }
}
function minusI() {
    if(i>0){
        i-=5;
        console.log(`rgb(${red=i}, ${green=i}, ${blue=i})`);
        document.body.style.backgroundColor= `rgb(${red=i}, ${green=i}, ${blue=i})`;
    }
}





const changeColor = function(){
    if(event.keyCode == 38){
        plusI();
    }else if(event.keyCode == 40){
        minusI();
    }
}







const changeColorTwo = function(){
    switch(event.keyCode){
        case 38:
            plusI();
            break;
        case 40:
            minusI();
            break;
    }
  }



document.body.style.backgroundColor= `rgb(${red}, ${green}, ${blue})`;
window.addEventListener('keydown', changeColorTwo);