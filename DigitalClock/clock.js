const clock = document.querySelector('#center')

setInterval(() => {
    let date = new Date();
    clock.innerHTML = date.toLocaleTimeString(); 
}, 1000);