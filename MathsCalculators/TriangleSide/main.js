window.onload = function() {
    const a_side = document.getElementById("a");
    const b_side = document.getElementById("b");
    const c_side = document.getElementById("c");
    const calculate_Button = document.getElementById("calculate")

    function isEmpty(inputBox) {
        return inputBox.value === "" || isNaN(Number(inputBox.value));
    }

    function updateValues() {
        let a = parseFloat(a_side.value);
        let b = parseFloat(b_side.value);
        let c = parseFloat(c_side.value);

        if (isEmpty(b_side) && !isEmpty(c_side) && !isEmpty(a_side)) {
            b_side.value = Math.sqrt(a ** 2 - c ** 2).toFixed(2);
            console.log("2")
        } else if (isEmpty(c_side) && !isEmpty(b_side) && !isEmpty(a_side)) {
            c_side.value = Math.sqrt(a ** 2 - b ** 2).toFixed(2);
            console.log("3")
        } else if (isEmpty(a_side) && !isEmpty(b_side) && !isEmpty(c_side)) {
            a_side.value = Math.sqrt(b ** 2 + c ** 2).toFixed(2);
            console.log("4")
        } else if (!isEmpty(a_side) && !isEmpty(b_side) && !isEmpty(c_side)) {
            window.alert("All boxes are full. Please empty the box you wish to calculate.")
        }
    }

    function clearValues() {
        const inputs = document.querySelectorAll("input")
        inputs.forEach(inputBox => {
            inputBox.value = ''
        });
    }

    document.getElementById("clear").onclick = clearValues;

    calculate_Button.onclick = updateValues;
    console.log("done");
};