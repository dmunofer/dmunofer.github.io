let quizForm = document.getElementById("quiz");
let resultsDiv = document.getElementById("resultados");
let puntuacion = 0;
let quizSubmitted = false;

quizForm.addEventListener("submit", function(event) {
    event.preventDefault();

    if (!quizSubmitted) {
        let p1Answer = quizForm.elements.p1.value;
        let p2Answer = quizForm.elements.p2.value;
        let p3Answer = quizForm.elements.p3.value;
        let p4Answer = quizForm.elements.p4.value;
        let p5Answer = quizForm.elements.p5.value;
        let p6Answer = quizForm.elements.p6.value;
        let p7Answer = quizForm.elements.p7.value;
        if (p1Answer === "c") {
            puntuacion += 1;
        }
        if (p2Answer === "b") {
            puntuacion += 1;
        }
        if (p3Answer === "b") {
            puntuacion += 1;
        }
        if (p4Answer === "d") {
            puntuacion += 1;
        }
        if (p5Answer === "a") {
            puntuacion += 1;
        }
        if (p6Answer === "a") {
            puntuacion += 1;
        }
        if (p7Answer === "a") {
            puntuacion += 1;
        }

        quizSubmitted = true;

        if (puntuacion === 7) {
            resultsDiv.innerHTML = "Eres todo un experto, acertaste todas las preguntas!";
        } else {
            resultsDiv.innerHTML = ` Has respondido correctamente ${puntuacion} /7`;
        }
    }
});

resultsDiv.style.color = "white";
resultsDiv.style.fontSize = "25px";
resultsDiv.style.textAlign = "center";