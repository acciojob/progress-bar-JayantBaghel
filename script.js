document.addEventListener("DOMContentLoaded", () => {
    const circles = document.querySelectorAll(".circle");
    const prevBtn = document.getElementById("prev");
    const nextBtn = document.getElementById("next");

    let currentStep = 0;

    updateButtons();

    prevBtn.addEventListener("click", () => {
        if (currentStep > 0) {
            currentStep--;
            updateButtons();
        }
    });

    nextBtn.addEventListener("click", () => {
        if (currentStep < circles.length - 1) {
            currentStep++;
            updateButtons();
        }
    });

    function updateButtons() {
        circles.forEach((circle, index) => {
            if (index <= currentStep) {
                circle.classList.add("active");
            } else {
                circle.classList.remove("active");
            }
        });

        prevBtn.disabled = currentStep === 0;
        nextBtn.disabled = currentStep === circles.length - 1;
    }
});
