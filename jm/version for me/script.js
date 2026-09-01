let codeCount = 125430;
let bugCount = 3721;

setInterval(() => {

    codeCount += Math.floor(Math.random() * 5) + 1;

    document.getElementById("code-count").textContent =
        codeCount.toLocaleString();

}, 1000);

setInterval(() => {

    bugCount += 1;

    document.getElementById("bug-count").textContent =
        bugCount.toLocaleString();

}, 100);