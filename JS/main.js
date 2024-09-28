let daysC = document.querySelector("#days-c");

let hoursC = document.querySelector("#hours-c");

let minutesC = document.querySelector("#minutes-c");

let secondsC = document.querySelector("#seconds-c");

let dateC = document.querySelector("#date-c");

let week_days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

let day = new Date().getDay();

let year = new Date().getFullYear();

let date_day = "30";

let date_month = "09";

let date_hms = "00:00:00";

let date = `${date_month}, ${date_day}, ${year}, ${date_hms}`;

setInterval(() => {

    let time = new Date(date);

    let now = new Date().getTime();

    let dis = time.getTime() - now;

    if (dis < 0) {

        year += 1;

        date = `${date_month}, ${date_day}, ${year}, ${date_hms}`;

        time = new Date(date);

        dis = time.getTime() - now;

    }

    dateC.innerText = `${week_days[time.getDay()]} | ${date_day}-${date_month}-${year}`

    let days = Math.floor(dis / (1000 * 60 * 60 * 24));

    let hours = Math.floor(dis / (1000 * 60 * 60));

    let minutes = Math.floor(dis / (1000 * 60));

    let seconds = Math.floor(dis / (1000));

    daysC.innerText = `${days.toString().padStart(2, "0")}`;

    hoursC.innerText = `${(hours % 24).toString().padStart(2, "0")}`;

    minutesC.innerText = `${(minutes % 60).toString().padStart(2, "0")}`;

    secondsC.innerText = `${(seconds % 60).toString().padStart(2, "0")}`;

}, 1);