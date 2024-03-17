const clocks = document.querySelectorAll(".clock");
const stopAllBtn = document.querySelector(".stop-all");

// Hàm khởi tạo đồng hồ
function initClock(clock) {
    const timeEl = clock.querySelector(".time");
    const startBtn = clock.querySelector(".start");
    const stopBtn = clock.querySelector(".stop");
    const pauseBtn = clock.querySelector(".pause");

    let intervalId;

    // Hàm bắt đầu đồng hồ
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

    // Hàm dừng đồng hồ
    stopBtn.addEventListener("click", () => {
        clearInterval(intervalId);
        timeEl.textContent = "00:00";
    });
}

// Khởi tạo đồng hồ cho mỗi element
clocks.forEach(initClock);

// Hàm dừng tất cả đồng hồ
stopAllBtn.addEventListener("click", () => {
    clocks.forEach((clock) => {
        const timeEl = clock.querySelector(".time");
        timeEl.textContent = "00:00";
        clearInterval(intervalId);
    });
});
