document.addEventListener("DOMContentLoaded", () => {
    // タイマーの要素取得
    const timerInput = document.getElementById("timer-minutes");
    const timerDisplay = document.getElementById("timer-display");
    const startTimerButton = document.getElementById("start-timer");
    const stopTimerButton = document.getElementById("stop-timer");
    const resetTimerButton = document.getElementById("reset-timer");

    let timerInterval;
    let timerTime = 0;

    function startTimer() {
        let minutes = parseInt(timerInput.value, 10);
        if (isNaN(minutes) || minutes <= 0) {
            alert("有効な時間を入力してください");
            return;
        }

        timerTime = minutes * 60;
        updateTimerDisplay();
        
        timerInterval = setInterval(() => {
            if (timerTime <= 0) {
                clearInterval(timerInterval);
                alert("タイマー終了！");
                return;
            }
            timerTime--;
            updateTimerDisplay();
        }, 1000);
    }

    function stopTimer() {
        clearInterval(timerInterval);
    }

    function resetTimer() {
        clearInterval(timerInterval);
        timerTime = 0;
        updateTimerDisplay();
    }

    function updateTimerDisplay() {
        let minutes = Math.floor(timerTime / 60);
        let seconds = timerTime % 60;
        timerDisplay.innerText = `${String(minutes).padStart(2, '0')}:${String(seconds).padStart(2, '0')}`;
    }

    startTimerButton.addEventListener("click", startTimer);
    stopTimerButton.addEventListener("click", stopTimer);
    resetTimerButton.addEventListener("click", resetTimer);

    // ストップウォッチの要素取得
    const stopwatchDisplay = document.getElementById("stopwatch-display");
    const startStopwatchButton = document.getElementById("start-stopwatch");
    const stopStopwatchButton = document.getElementById("stop-stopwatch");
    const resetStopwatchButton = document.getElementById("reset-stopwatch");
    const lapStopwatchButton = document.getElementById("lap-stopwatch");
    const lapTimesList = document.getElementById("lap-times");

    let stopwatchInterval;
    let stopwatchTime = 0;
    let isRunning = false;

    function startStopwatch() {
        if (!isRunning) {
            isRunning = true;
            stopwatchInterval = setInterval(() => {
                stopwatchTime++;
                updateStopwatchDisplay();
            }, 10);
        }
    }

    function stopStopwatch() {
        isRunning = false;
        clearInterval(stopwatchInterval);
    }

    function resetStopwatch() {
        isRunning = false;
        clearInterval(stopwatchInterval);
        stopwatchTime = 0;
        updateStopwatchDisplay();
        lapTimesList.innerHTML = "";
    }

    function lapStopwatch() {
        let lapTime = formatTime(stopwatchTime);
        let li = document.createElement("li");
        li.innerText = `ラップ: ${lapTime}`;
        lapTimesList.appendChild(li);
    }

    function updateStopwatchDisplay() {
        stopwatchDisplay.innerText = formatTime(stopwatchTime);
    }

    function formatTime(time) {
        let minutes = Math.floor(time / 6000);
        let seconds = Math.floor((time % 6000) / 100);
        let milliseconds = time % 100;
        return `${String(minutes).padStart(2, '0')}:${String(seconds).padStart(2, '0')}:${String(milliseconds).padStart(2, '0')}`;
    }

    startStopwatchButton.addEventListener("click", startStopwatch);
    stopStopwatchButton.addEventListener("click", stopStopwatch);
    resetStopwatchButton.addEventListener("click", resetStopwatch);
    lapStopwatchButton.addEventListener("click", lapStopwatch);
});
