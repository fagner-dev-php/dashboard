progressBarTotal();
progressBarFirst();
progressBarSecond();
progressBarThird();


function progressBarTotal() {
    let progressBar = document.querySelector(".circular-progress-total");
    let valueContainer = document.querySelector(".value-container-total");
    let numberTotal = document.querySelector(".number-total");

    let color = '#299B63';
    let progressValue = 0;
    let progressEndValue = numberTotal.textContent;
    let speed = 55;

    let progress = setInterval(() => {
        progressValue++;
        valueContainer.textContent = `${progressValue}%`;
        progressBar.style.background = `conic-gradient(
        `+ color + ` ${progressValue * 3.6}deg,
        #fff ${progressValue * 3.6}deg
    )`;
        if (progressValue == progressEndValue) {
            clearInterval(progress);
        }
    }, speed);
}

function progressBarFirst() {
    let progressBar = document.querySelector(".circular-progress-first");
    let valueContainer = document.querySelector(".value-container-first");
    let numberTotal = document.querySelector(".number-first");

    let color = '#299B63';
    let progressValue = 0;
    let progressEndValue = numberTotal.textContent;
    let speed = 55;

    let progress = setInterval(() => {
        progressValue++;
        valueContainer.textContent = `${progressValue}%`;
        progressBar.style.background = `conic-gradient(
        `+ color + ` ${progressValue * 3.6}deg,
        #fff ${progressValue * 3.6}deg
    )`;
        if (progressValue == progressEndValue) {
            clearInterval(progress);
        }
    }, speed);
}

function progressBarSecond() {
    let progressBar = document.querySelector(".circular-progress-second");
    let valueContainer = document.querySelector(".value-container-second");
    let numberTotal = document.querySelector(".number-second");

    let color = '#299B63';
    let progressValue = 0;
    let progressEndValue = numberTotal.textContent;
    let speed = 55;

    let progress = setInterval(() => {
        progressValue++;
        valueContainer.textContent = `${progressValue}%`;
        progressBar.style.background = `conic-gradient(
        `+ color + ` ${progressValue * 3.6}deg,
        #fff ${progressValue * 3.6}deg
    )`;
        if (progressValue == progressEndValue) {
            clearInterval(progress);
        }
    }, speed);
}

function progressBarThird() {
    let progressBar = document.querySelector(".circular-progress-third");
    let valueContainer = document.querySelector(".value-container-third");
    let numberTotal = document.querySelector(".number-third");

    let color = '#299B63';
    let progressValue = 0;
    let progressEndValue = numberTotal.textContent;
    let speed = 55;

    let progress = setInterval(() => {
        progressValue++;
        valueContainer.textContent = `${progressValue}%`;
        progressBar.style.background = `conic-gradient(
        `+ color + ` ${progressValue * 3.6}deg,
        #fff ${progressValue * 3.6}deg
    )`;
        if (progressValue == progressEndValue) {
            clearInterval(progress);
        }
    }, speed);
}