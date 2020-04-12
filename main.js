    //.clientX(ekran),.pageY(strona),.screenX(monitor)
document.body.addEventListener('mousemove', (event) => {
    const hTwoOutput = document.querySelector('h2');
    const x = event.clientX;
    const y = event.clientY;
    const width = window.innerWidth;
    const height = window.innerHeight;


    const firstColor = `${x/width*100}`;
    const secondColor = `${y/height*100}`;
    const thirdColor = `${((x/width*100)+(y/height*100))/2}`;


    hTwoOutput.textContent = `${x}, ${y}`;
    document.body.style.backgroundColor = `rgb(${firstColor}%,
    ${secondColor}%, ${thirdColor}%)`;

})

