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