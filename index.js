let days = document.querySelector(".days span");
let hours = document.querySelector(".hours span");
let minutes = document.querySelector(".minutes span");
let seconds = document.querySelector(".seconds span");

const Opening = new Date("4, 1, 2024");

setInterval(() => {
    let today = new Date();
    let timeDiff = Opening.getTime() - today.getTime();
    console.log("YO");
    // Convert the time difference to days, hours, minutes, and seconds
    let remainingDays = Math.floor(timeDiff / (1000 * 60 * 60 * 24));
    let remainingHours = Math.floor(
        (timeDiff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
    );
    let remainingMinutes = Math.floor(
        (timeDiff % (1000 * 60 * 60)) / (1000 * 60)
    );
    let remainingSeconds = Math.floor((timeDiff % (1000 * 60)) / 1000);

    days.innerHTML = remainingDays;
    hours.innerHTML = remainingHours;
    minutes.innerHTML = remainingMinutes;
    seconds.innerHTML = remainingSeconds;
}, 1000);
