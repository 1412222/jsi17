const clocks = document.querySelectorAll(".clock");
const stopAllBtn = document.querySelector(".stop-all");


function initClock(clock) {
    const timeEl = clock.querySelector(".time");
    const startBtn = clock.querySelector(".start");
    const stopBtn = clock.querySelector(".stop");

    let intervalId;àm 


    startBtn.addEventListener("click", () => {
        intervalId = setInterval(() => {
            let time = timeEl.textContent;
            const [minutes, seconds] = time.split(":");
            const newSeconds = parseInt(seconds) + 1;
            if (newSeconds === 60) {
                timeEl.textContent = `${parseInt(minutes) + 1}:00`;
            } else {
                timeEl.textContent = `${minutes}:${newSeconds.toString().padStart(2, "0")}`;
            }
        }, 1000);
    });

 
    stopBtn.addEventListener("click", () => {
        clearInterval(intervalId);
        timeEl.textContent = "00:00";
    });
}


clocks.forEach(initClock);


stopAllBtn.addEventListener("click", () => {
    clocks.forEach((clock) => {
        const timeEl = clock.querySelector(".time");
        timeEl.textContent = "00:00";
        clearInterval(intervalId);
    });
});
