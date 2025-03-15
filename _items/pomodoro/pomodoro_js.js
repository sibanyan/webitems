let timer; // setIntervalの参照
let isWorking = true; // 作業中か休憩中か
let secondsLeft = 25 * 60; // 初期の作業時間（25分）
let pomodoroCount = 0; // ポモドーロの回数

const timeDisplay = document.getElementById('timeDisplay');
const startStopButton = document.getElementById('startStopButton');
const resetButton = document.getElementById('resetButton');
const statusDisplay = document.getElementById('status');
const pomodoroCountDisplay = document.getElementById('pomodoroCount');
const notification = document.getElementById('notification');

// タイマーの更新
function updateTimer() {
  const minutes = Math.floor(secondsLeft / 60);
  const seconds = secondsLeft % 60;
  timeDisplay.textContent = `${String(minutes).padStart(2, '0')}:${String(seconds).padStart(2, '0')}`;
}

// タイマーの開始・停止
function toggleTimer() {
  if (timer) {
    clearInterval(timer);
    timer = null;
    startStopButton.textContent = 'スタート';
  } else {
    timer = setInterval(() => {
      secondsLeft--;
      updateTimer();

      if (secondsLeft === 0) {
        handleTimeUp();
      }
    }, 1000);
    startStopButton.textContent = '停止';
  }
}

// 時間が終わった時の処理
function handleTimeUp() {
  clearInterval(timer);
  timer = null;

  // 休憩時間（5分）に切り替え
  if (isWorking) {
    isWorking = false;
    secondsLeft = 5 * 60;
    statusDisplay.textContent = '休憩中';
    pomodoroCount++;
    pomodoroCountDisplay.textContent = `ポモドーロ回数: ${pomodoroCount}`;
  } else {
    // 作業時間に戻す
    isWorking = true;
    secondsLeft = 25 * 60;
    statusDisplay.textContent = '作業中';
  }

  // 通知音を再生
  notification.play();
  updateTimer();
}

// リセットボタンの処理
function resetTimer() {
  clearInterval(timer);
  timer = null;
  isWorking = true;
  secondsLeft = 25 * 60;
  statusDisplay.textContent = '作業中';
  pomodoroCountDisplay.textContent = `ポモドーロ回数: ${pomodoroCount}`;
  updateTimer();
  startStopButton.textContent = 'スタート';
}

// イベントリスナー
startStopButton.addEventListener('click', toggleTimer);
resetButton.addEventListener('click', resetTimer);

// 初期表示
updateTimer();
