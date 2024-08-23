function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

function confetti() {
    console.log("running...")
    for (let i = 0; i < 50; i++) {
        console.log("making new one")
        const newConfetti = document.createElement("div")
        newConfetti.classList.add("confetti")
        newConfetti.style.left = `${Math.random() * window.innerWidth}px`
        const colors = ["red", "blue", "green", "yellow", "purple", "orange", "pink", "cyan", "magenta", "lime"]
        newConfetti.style.backgroundColor = colors[Math.floor(Math.random() * colors.length)]
        newConfetti.classList.add("fall")
        const duration = Math.random() * 3 + 2; // Between 2s and 5s
        newConfetti.style.animationDuration = `${duration}s`;
        newConfetti.addEventListener('animationend', () => {
            newConfetti.remove();
            console.log("removed")
        });
        document.getElementById("confettiContainer").innerHTML += newConfetti.outerHTML
        console.log("done")
        sleep(Math.random() * 100)
    }
}

window.onload = function() {
    const enterButton = document.getElementById("guess")
    const guessBox = document.getElementById("input")
    const statusMsg = document.getElementById("status")
    const statusDiv = document.getElementById("statusContainer")
    let correctNumber = Math.floor(Math.random() * 101)

    function checkGuess(guess) {
        if (guess == correctNumber) {
            statusDiv.classList.add("bounce-animation")
            statusMsg.textContent = "You got it!!! Try to guess a new number..."
            setTimeout(() => {
                statusDiv.classList.remove('bounce-animation')
              }, 500)
            console.log("confetti")
            confetti()
            correctNumber = Math.floor(Math.random() * 101)
        }
        else if (guess > correctNumber) {
            statusDiv.classList.add("bounce-animation")
            statusMsg.textContent = "Try a lower number..."
            setTimeout(() => {
                statusDiv.classList.remove('bounce-animation')
              }, 500)
        } else if (guess < correctNumber) {
            statusDiv.classList.add("bounce-animation")
            statusMsg.textContent = "Try a higher number..."
            setTimeout(() => {
                statusDiv.classList.remove('bounce-animation')
              }, 500)
        }
    }

    enterButton.onclick = function() {
        checkGuess(guessBox.value)
        guessBox.value = ""
    }
} 