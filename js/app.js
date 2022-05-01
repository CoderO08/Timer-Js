// XULOSA --> qandaydir proyekt qilishda funcsiyalarni mantiqiy tartibi bulishi kerak

const formTimer = document.getElementById("timer-form"),
  hourInput = document.getElementById("hours"),
  minuteInput = document.getElementById("minutes"),
  secundInput = document.getElementById("secunds"),
  result = document.querySelector(".result"),
  formCard = document.querySelector(".form-card"),
  resultCard = document.querySelector(".result-card"),
  pauseBtn = document.querySelector(".btn.red"),
  restartBtn = document.querySelector(".btn.yellow"),
  materialIcons = document.querySelector(".material-icons");

loadEventListener();
var timerInterval, time;

console.log(formCard);
console.log(resultCard);

function loadEventListener() {
  formTimer.addEventListener("submit", startTimer);
  pauseBtn.addEventListener("click", pauseTime);
  restartBtn.addEventListener("click", () => {
    window.location.reload();
  });
}

function showAndHide(cardInForm, cardInResult) {
  cardInForm.classList.add("scale-out");
  cardInResult.style.display = "block ";

  setTimeout(function () {
    cardInForm.style.display = "none";
    cardInResult.classList.add("scale-in");
  }, 400);
}

function pauseTime(e) {
  e.preventDefault();
  if (pauseBtn.classList.contains("red")) {
    pauseBtn.classList.add("green");
    pauseBtn.classList.remove("red");

    let icon = pauseBtn.firstElementChild;
    pauseBtn.textContent = "Play";
    icon.textContent = "play_arrow";
    pauseBtn.insertAdjacentElement("afterbegin", icon);
    clearInterval(timerInterval);
  } else {
    pauseBtn.classList.add("red");
    pauseBtn.classList.remove("green");

    let icon = pauseBtn.firstElementChild;
    pauseBtn.textContent = "Pause";
    icon.textContent = "pause";
    pauseBtn.insertAdjacentElement("afterbegin", icon);
    setTimerInterval();
  }
}

function startTimer(event) {
  event.preventDefault();
  showAndHide(formCard, resultCard);
  // console.log("Working");
  let hour = hourInput.value;
  let minute = minuteInput.value;
  let secund = secundInput.value;

  time = parseInt(hour) * 3600 + parseInt(minute) * 60 + parseInt(secund);
  // console.log(time);
  setTimerInterval();
}

function setTimerInterval() {
  timerInterval = setInterval(function () {
    time--;
    if (time === 0) {
      clearInterval(timerInterval);
    }
    // console.log(time);

    timeAdd(time);
  }, 1000);

  function timeAdd(timeResult) {
    let resultHour = parseInt(timeResult / 3600);
    // console.log(resultHour);
    let resultMinute = parseInt((timeResult - resultHour * 3600) / 60);
    // console.log(resultMinute);
    let resultSecond = parseInt(
      timeResult - resultHour * 3600 - resultMinute * 60
    );

    resultHour = resultHour < 10 ? "0" + resultHour : resultHour;
    resultMinute = resultMinute < 10 ? "0" + resultMinute : resultMinute;
    resultSecond = resultSecond < 10 ? "0" + resultSecond : resultSecond;

    // console.log(resultSecond);
    result.textContent = `${resultHour}: ${resultMinute}:${resultSecond}`;
  }
}
