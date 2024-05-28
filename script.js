//your JS code here. If required.
document.addEventListener("DOMContentLoaded", () => {
    const circles = document.querySelectorAll(".circle");
    const prevBtn = document.getElementById("prev");
    const nextBtn = document.getElementById("next");

    let currentStep = 1;

    updateButtons();

    prevBtn.addEventListener("click", () => {
        if (currentStep > 1) {
            currentStep--;
            updateButtons();
        }
    });

    nextBtn.addEventListener("click", () => {
        if (currentStep < circles.length) {
            currentStep++;
            updateButtons();
        }
    });

    function updateButtons() {
        circles.forEach((circle, index) => {
            if (index < currentStep - 1) {
                circle.classList.add("active");
            } else {
                circle.classList.remove("active");
            }
        });

        prevBtn.disabled = currentStep === 1;
        nextBtn.disabled = currentStep === circles.length;
    }
});
