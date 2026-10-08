document.addEventListener("DOMContentLoaded", () => {

    /* ==========================================
       FATHER IMAGE
       ========================================== */

    const character =
        document.querySelector(".father-character");

    if (character) {

        character.addEventListener("load", () => {

            character.classList.add("loaded");

        });

    }


    /* ==========================================
       TAP TO REVEAL
       ========================================== */

    const cards =
        document.querySelectorAll(".reveal-card");


    cards.forEach((card) => {

        const button =
            card.querySelector(".reveal-button");


        button.addEventListener("click", () => {

            const wasOpen =
                card.classList.contains("open");


            /* Close other cards */

            cards.forEach((otherCard) => {

                otherCard.classList.remove("open");

            });


            /* Open the selected one */

            if (!wasOpen) {

                card.classList.add("open");

            }

        });

    });

});

setTimeout(() => {
    window.location.href = "page3.html";
}, 12000);
