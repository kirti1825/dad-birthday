const enterButton = document.getElementById("enterButton");
const openingScreen = document.querySelector(".opening-screen");
const birthdayAnimation = document.getElementById("birthdayAnimation");

enterButton.addEventListener("click", () => {

    enterButton.disabled = true;
    enterButton.textContent = "OPENING...";

    openingScreen.style.transition = "opacity 1.8s ease";
    openingScreen.style.opacity = "0";

    setTimeout(() => {

        openingScreen.style.display = "none";

        birthdayAnimation.classList.remove("hidden");

        /*
         * NEXT PART WILL START HERE.
         *
         * We will add your father's next interface
         * without changing the opening screen above.
         */

    }, 1800);
});
