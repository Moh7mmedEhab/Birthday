let timer = document.querySelector("#countdown");

let head = document.querySelector("#date");

let week_days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

let day = new Date().getDay();

let year = new Date().getFullYear();

let date_day = "30";

let date_month = "9";

let date_hms = "00:00:00";

let date = `${date_month}, ${date_day}, ${year}, ${date_hms}`;

setInterval(() => {

    let time = new Date(date);

    let now = new Date().getTime();

    let dis = time.getTime() - now;

    if (dis < 0) {

        year += 1;

        time = new Date(date);

        dis = time.getTime() - now;

    }

    head.innerText = `${week_days[time.getDay()]} | ${date_day}-${date_month}-${year}`

    let days = Math.floor(dis / (1000 * 60 * 60 * 24));

    let hours = Math.floor(dis / (1000 * 60 * 60));

    let minutes = Math.floor(dis / (1000 * 60));

    let seconds = Math.floor(dis / (1000));

    timer.innerText = `${days.toString().padStart(2, "0")}d : ${(hours % 24).toString().padStart(2, "0")}h : ${(minutes % 60).toString().padStart(2, "0")}m : ${(seconds % 60).toString().padStart(2, "0")}s`;

}, 10);
