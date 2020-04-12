    //.clientX(ekran),.pageY(strona),.screenX(monitor)
document.body.addEventListener('mousemove', (event) => {
    document.querySelector('h2').textContent = `${event.clientX}, ${event.clientY}`;
    document.body.style.backgroundColor = `rgb(${event.clientX/3},
    ${event.clientY/2.5}, ${event.clientY/event.clientX * 10})`;
})

