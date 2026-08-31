document.getElementById("sp").addEventListener("keydown", function(event) {
    if (event.key === "Enter") {
        checkAnswer();
    }
});

function checkAnswer() {
    const input = document.getElementById("sp");
    const answer = "not19freak";

    if (input.value === answer) {
        openPopup();
    } else {
        alert("that's WRONG you poo");
    }

    input.value = "";
}

function openPopup() {
    document.getElementById("modal").style.display = "flex";
}

function closePopup() {
    document.getElementById("modal").style.display = "none";
}