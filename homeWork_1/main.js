document.body.addEventListener('click', (event) => {
 let x = event.clientX;
 let y = event.clientY;
 if(x%2==0 && y%2==0){
     document.body.style.backgroundColor = 'red';
     console.log(`${x}, ${y}`)
 }else if(x%2==1 && y%2==1){
    document.body.style.backgroundColor = 'blue';
    console.log(`${x}, ${y}`)
 }else{
    document.body.style.backgroundColor = 'green';
    console.log(`${x}, ${y}`)
 }
})



// document.body.addEventListener('click', (event) => {
// const color = getColor(event);
// document.body.style.backgroundColor = color;
// })

// function getColor(e) {
//     let x = event.clientX;
//     let y = event.clientY;
//     if(x%2==0 && y%2==0){
//         console.log(`${x}, ${y}`);
//         return "red";
//     }else if(x%2==1 && y%2==1){
//        console.log(`${x}, ${y}`)
//        return "blue";
//     }else{
//        console.log(`${x}, ${y}`)
//        return "green";
//     }
//    }
