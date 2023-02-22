//часы и календарь
const time = document.querySelector('.time');
const date = document.querySelector('.date');

function showDate() {
    const getDate = new Date();
    const options = {weekday: 'long', month: 'long', day: 'numeric'};
    const currentDate = getDate.toLocaleDateString('en-US', options);
    date.textContent = currentDate;
}

function showTime() {
    const getDate = new Date();
    const currentTime = getDate.toLocaleTimeString();
    time.textContent = currentTime;
    setTimeout(showTime, 1000);
    showDate();
}
showTime();

