//часы и календарь
const time = document.querySelector('.time');
const date = document.querySelector('.date');

let currentData = new Date();

function showTime() {
    const currentTime = currentData.toLocaleTimeString();
    time.textContent = currentTime;
    setTimeout(showTime, 1000);
}
showTime();
/* setInterval(showTime, 1000); */
