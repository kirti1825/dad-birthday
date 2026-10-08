const enterButton = document.getElementById("enterButton");
const openingScreen = document.querySelector(".opening-screen");
const birthdayAnimation = document.getElementById("birthdayAnimation");

enterButton.addEventListener("click", () => {

    enterButton.disabled = true;
    enterButton.textContent = "OPENING...";

    openingScreen.style.transition = "opacity 1.8s ease";
    openingScreen.style.opacity = "0";

    setTimeout(() => {

    window.location.href = "page2.html";

}, 1800);
});
