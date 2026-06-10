function checkAnswer(answer) {
    let result = document.getElementById("result");

    if (answer === "a") {
        result.innerHTML = "Correct Answer!";
    } else {
        result.innerHTML = "Wrong Answer!";
    }
}