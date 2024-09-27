let timer = document.querySelector("#countdown");

let head = document.querySelector("#date");

let week_days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

let day = new Date().getDay();

let year = new Date().getFullYear();

setInterval(() => {

    let time = new Date(`Sep, 30, ${year}, 00:00:00`).getTime();

    let time_cpy = new Date(`Sep, 30, ${year}, 00:00:00`).getDay();

    let now = new Date().getTime();

    let dis = time - now;

    if (dis < 0) {

        year += 1;

        time = new Date(`Sep, 30, ${year}, 00:00:00`).getTime();

        time_cpy = new Date(`Sep, 30, ${year}, 00:00:00`).getDay();

        dis = time - now;

    }

    head.innerText = `${week_days[time_cpy]} | 30-9-${year}`

    let days = Math.floor(dis / (1000 * 60 * 60 * 24));

    let hours = Math.floor(dis / (1000 * 60 * 60));

    let minutes = Math.floor(dis / (1000 * 60));

    let seconds = Math.floor(dis / (1000));

    timer.innerText = `${days.toString().padStart(2, "0")}d : ${(hours % 24).toString().padStart(2, "0")}h : ${(minutes % 60).toString().padStart(2, "0")}m : ${(seconds % 60).toString().padStart(2, "0")}s`;

}, 10);
