alert("Pentru a începe numărătoarea apasă OK")

// stopwatch
window.onload = function () {
    var seconds = 00;
    var tens = 00;
    var appendTens = document.getElementById("tens")
    var appendSeconds = document.getElementById("seconds")
    var buttonStart = document.getElementById('button-start');
    var buttonStop = document.getElementById('button-stop');
    var buttonReset = document.getElementById('button-reset');
    var Interval;

    buttonStart.onclick = function () {
        clearInterval(Interval);
        Interval = setInterval(startTimer, 10);
    }

    buttonStop.onclick = function () {
        clearInterval(Interval);
    }

    buttonReset.onclick = function () {
        clearInterval(Interval);
        tens = "00";
        seconds = "00";
        appendTens.innerHTML = tens;
        appendSeconds.innerHTML = seconds;
    }

    document.addEventListener('keydown', function (event) {
        if (event.keyCode == 32) {
            clearInterval(Interval);
            Interval = setInterval(startTimer, 10);
            stopwatchStarted = true;
        }
    });

    function startTimer() {
        tens++;
        if (tens <= 9) {
            appendTens.innerHTML = "0" + tens;
        }

        if (tens > 9) {
            appendTens.innerHTML = tens;
        }

        if (tens > 99) {
            console.log("seconds");
            seconds++;
            appendSeconds.innerHTML = "0" + seconds;
            tens = 0;
            appendTens.innerHTML = "0" + 0;
        }

        if (seconds > 9) {
            appendSeconds.innerHTML = seconds;
        }
    }
}

// day/night toggle
const iconMoon = document.querySelector('.night');
const iconSun = document.querySelector('.day');
const body = document.body;
iconMoon.style.display = 'block';
iconSun.style.display = 'none';
const btnMode = document.querySelector('.toggle-btn');
btnMode.addEventListener('click', () => {
    body.classList.toggle('dark')

    if (body.classList.contains('dark')) {
        iconMoon.style.display = 'none'
        iconSun.style.display = 'block'
    } else {
        iconMoon.style.display = 'block'
        iconSun.style.display = 'none'
    }

    body.classList.toggle('active');

    function changeText() {
        const text = document.querySelector('.text-mode');
        const stopwatchText = document.querySelector('#stopwatch');
        const countdownText = document.querySelector('.countdown-container');
        const countdown = document.querySelector('#countdown');

        if (text.innerHTML === 'Night Mode') {
            stopwatchText.style.color = 'black'
            countdownText.style.color = 'black'
            countdown.style.color = 'black'
            document.getElementById("timer").style.color = "black";
            document.getElementById("line").style.borderTop = "1px solid black";
            text.innerHTML = 'Day Mode'
            text.style.color = '#ffbf00'
        } else {
            stopwatchText.style.color = 'white'
            countdownText.style.color = 'white'
            countdown.style.color = 'white'
            document.getElementById("timer").style.color = "white";
            document.getElementById("line").style.borderTop = "1px solid white";
            text.innerHTML = 'Night Mode'
            text.style.color = 'white'
        }
    }
    changeText()
});

// timer
var seconds = 0;
var timer = document.getElementById('seconds-counter');
function incrementSeconds() {
    seconds += 1;
    timer.innerText = seconds + " seconds";
}
var cancel = setInterval(incrementSeconds, 1000);

// countdown
var countDownDate = new Date("1Jan, 2023 00:00:00").getTime();
var countdown = document.getElementById('countdown');
var x = setInterval(function () {
    var now = new Date().getTime();
    var distance = countDownDate - now;
    var days = Math.floor(distance / (1000 * 60 * 60 * 24));
    var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    var seconds = Math.floor((distance % (1000 * 60)) / 1000);
    countdown.innerHTML = days + "d " + hours + "h " + minutes + "m " + seconds + "s ";

    if (distance < 0) {
        clearInterval(x);
        countdown.innerHTML = "LMA 2023!";
    }
}, 1000);
