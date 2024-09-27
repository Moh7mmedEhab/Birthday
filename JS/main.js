let timer = document.querySelector("#countdown");

setInterval(() => {

    let time = new Date("Sep, 30, 2024, 00:00:00").getTime();

    let now = new Date().getTime();

    let dis = time - now;

    let days = Math.floor(dis / (1000 * 60 * 60 * 24));

    let hours = Math.floor(dis / (1000 * 60 * 60));

    let minutes = Math.floor(dis / (1000 * 60));

    let seconds = Math.floor(dis / (1000));

    timer.innerText = `${days.toString().padStart(2, "0")}d : ${(hours % 24).toString().padStart(2, "0")}h : ${(minutes % 60).toString().padStart(2, "0")}m : ${(seconds % 60).toString().padStart(2, "0")}s`;

    if (dis < 0) {

        clearInterval();

        timer.innerText("The Time Has Been Arrived.");

    }

}, 1000);
