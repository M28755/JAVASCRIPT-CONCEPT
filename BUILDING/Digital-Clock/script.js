
const hours = document.getElementById('hours');
const minutes = document.getElementById('minutes');
const seconds = document.getElementById('seconds');
const period = document.getElementById('ampm');
const dateDisplay = document.getElementById('dateDisplay');

function updateClock() {
    const now = new Date();

    const Hours = now.getHours();
    const Minutes = now.getMinutes();
    const Seconds = now.getSeconds();

    //detereming AM / PM and converting to 12h
    const ampm = Hours >= 12 ? "PM" : "AM"
    let hours12 = Hours % 12;

    if (hours12 === 0) {
        return hours12 = 12 // midnight / noon
    }



   // console.log(`${padZero(Hours)} : ${padZero(Minutes)} : ${padZero(Seconds)}`);

    hours.textContent = padZero(Hours);
    minutes.textContent = padZero(Minutes);
    seconds.textContent = padZero(Seconds)
    period.textContent = ampm;

    dateDisplay.textContent = dateUpdate(now)

}


function padZero(value) {
    return String(value).padStart(2, '0');
}

function dateUpdate(date) {
    // day-name, date- month- year

    //console.log(date)
    const weekdays = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];

    const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];

    const dayweek = weekdays[date.getDay()];
    const day = date.getDay();
    const month = months[date.getMonth()];
    const year = date.getYear();

   // console.log(`${dayweek}, ${day}-${month}-${year}`)
    
 return `${dayweek}, ${padZero(day)} ${month} ${year}`

}
updateClock();

const intervalId = setInterval(updateClock, 1000);

window.addEventListener('beforeunload', () =>{
    clearInterval(intervalId);
})