let timer = document.querySelector("#countdown");

let year = new Date().getFullYear();

setInterval(() => {

    let time = new Date(`Sep, 30, ${year}, 00:00:00`).getTime();

    let now = new Date().getTime();

    let dis = time - now;

    if (dis < 0) {

        year += 1;

        time = new Date(`Sep, 30, ${year}, 00:00:00`).getTime();

        dis = time - now;

    }

    let days = Math.floor(dis / (1000 * 60 * 60 * 24));

    let hours = Math.floor(dis / (1000 * 60 * 60));

    let minutes = Math.floor(dis / (1000 * 60));

    let seconds = Math.floor(dis / (1000));

    timer.innerText = `${days.toString().padStart(2, "0")}d : ${(hours % 24).toString().padStart(2, "0")}h : ${(minutes % 60).toString().padStart(2, "0")}m : ${(seconds % 60).toString().padStart(2, "0")}s`;

}, 1);
