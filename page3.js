document.addEventListener("DOMContentLoaded", () => {

    const gate =
        document.querySelector(".gate");

    const leftDoor =
        document.querySelector(".left-door");

    const rightDoor =
        document.querySelector(".right-door");

    const knock =
        document.querySelector(".knock");


    /*
        PAPA REACHES THE GATE
    */

    setTimeout(() => {

        if (!gate) return;

        /* Cute little knock-knock */

        gate.classList.add("shake");

        if (knock) {

            knock.style.opacity = "1";

            const sparks =
                knock.querySelectorAll("span");

            sparks.forEach((spark, index) => {

                setTimeout(() => {

                    spark.animate(
                        [
                            {
                                opacity: 0,
                                transform: "scale(.5) translateY(5px)"
                            },

                            {
                                opacity: 1,
                                transform: "scale(1.1) translateY(0)"
                            },

                            {
                                opacity: 0,
                                transform: "scale(1.5) translateY(-12px)"
                            }
                        ],
                        {
                            duration: 700,
                            easing: "ease-out"
                        }
                    );

                }, index * 130);

            });
        }

    }, 11200);


    /*
        GATE OPENS
        No golden light.
        Just the wooden doors opening.
    */

    setTimeout(() => {

        if (leftDoor) {

            leftDoor.style.transform =
                "perspective(600px) rotateY(-82deg)";

        }

        if (rightDoor) {

            rightDoor.style.transform =
                "perspective(600px) rotateY(82deg)";

        }

    }, 11900);


    /*
        PAPA WALKS THROUGH
    */

    setTimeout(() => {

        const father =
            document.querySelector(".father-walker");

        if (!father) return;

        father.style.transition =
            "left 2.8s ease, opacity 2.8s ease";

        father.style.left =
            "calc(50% + 20px)";

        father.style.opacity = "1";

    }, 13000);


    /*
        NEXT SCENE
        We'll connect this to the birthday
        party page after we finish it.
    */

    setTimeout(() => {

        window.location.href = "page4.html";

    }, 16500);

});
