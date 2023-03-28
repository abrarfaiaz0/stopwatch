box = document.querySelector("#main-box");
sp = document.querySelector("#sp");
reset = document.querySelector("#reset");
time = document.querySelector("#time");

sp.addEventListener("click", startTimer);
reset.addEventListener("click", resetTimer);

let s = 0,
  m = 0,
  h = 0;
active = false;

function stopWatch() {
  s++;
  if (s / 60 === 1) {
    s = 0;
    m++;
  }
  if (m / 60 === 1) {
    m = 0;
    h++;
  }
  time.innerText =
    (h > 9 ? h : "0" + h) +
    ":" +
    (m > 9 ? m : "0" + m) +
    ":" +
    (s > 9 ? s : "0" + s);
}

function startTimer(e) {
  if (!active) {
    sp.innerText = "Pause";
    timer = setInterval(stopWatch, 1000);
    active = true;
  } else {
    sp.innerText = "Start";
    active = false;
    clearInterval(timer);
  }
}

function resetTimer(e) {
  clearInterval(timer);
  h = m = s = 0;
  active = false;
  time.innerText = "00:00:00";
}
