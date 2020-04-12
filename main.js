    //client(ekran),page(strona),screen(monitor)
const hTwoEvent = document.querySelector('h2');
document.body.addEventListener('mousemove', (event) => {
    hTwoEvent.textContent = `${event.clientX}, ${event.clientY}`;
    // console.log(event.pageX, event.pageY);
    // console.log(event.screenX, event.screenY);
})

