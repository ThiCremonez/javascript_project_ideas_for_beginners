setInterval(displayTime, 1000);

function displayTime() {
    var now = new Date;
    var hour = now.getHours();
    var minute = now.getMinutes();

    if (hour < 10){
        hour = "0" + hour;
    }

    if (minute < 10){
        minute = "0" + minute;
    }

document.querySelector('.hour').innerHTML = hour;
document.querySelector('.minutes').innerHTML = minute;
}



