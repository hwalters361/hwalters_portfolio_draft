document.addEventListener('mousemove', (event) => {
    
    console.log(`Mouse X: ${event.clientX}, Mouse Y: ${event.clientY}`);
    var header = document.getElementById('headerimg');
    var x = event.clientX; //goes from 0 to 1440 on macbook pro
    var y = event.clientY; //goes from 0 to 720 on macbook pro
    var w = window.innerWidth;
    var h = window.innerHeight;
    header.style.left = (x)**0.6 - w/10 + "px";
    console.log(header.style.left);
    header.style.top = (y)**0.6 - h/10 + "px";
    console.log(header.style.top);
});