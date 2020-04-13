const square = document.body.querySelector('div');
square.style.cursor="pointer";
let flag = true;


square.addEventListener('mousedown', () =>{
    console.log('dziala mousedown');
    square.style.backgroundColor="gray";

    document.body.addEventListener('mousemove', function asd() {
        if(flag == true){
        let x = event.clientX;
        let y = event.clientY;
        square.style.marginLeft = `${x}px`;
        square.style.marginTop = `${y}px`;
        console.log(`${x}, ${y}`);
        }else{
            return false;
        }
    })
    square.addEventListener('mouseup', ()=>{
        console.log('dziala mouseup');
        square.style.backgroundColor="black";
        flag = false;
    })
    flag = true;
})
