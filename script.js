const daysEl = document.getElementById('days');
const hoursEl = document.getElementById('hours');
const minutesEl = document.getElementById('minutes');
const secondsEl = document.getElementById('seconds');

const goal = '1 jan 2022';


function countdown() {
   
    const goalDate = new Date(goal);
    const currentDate = new Date();

    const totalseconds = (goalDate - currentDate) / 1000;

    const days = Math.floor(((totalseconds / 3600) / 24));
    const hours = Math.floor(totalseconds / 3600) % 24;
    const minutes = Math.floor(totalseconds / 60) % 60;
    const seconds = Math.floor(totalseconds % 60);

    daysEl.innerHTML = days;
    hoursEl.innerHTML = hours;
    minutesEl.innerHTML = minutes;
    secondsEl.innerHTML = seconds;  

   // console.log(days, hours, minutes, seconds);
    
}
function format(time) {

    return time < 10 ? (`0${time}`) : time;
}


countdown();

setInterval(countdown,1000);