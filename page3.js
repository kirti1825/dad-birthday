document.addEventListener("DOMContentLoaded", () => {

    const gate =
        document.querySelector(".gate");

    const leftDoor =
        document.querySelector(".left-door");

    const rightDoor =
        document.querySelector(".right-door");

    const knock =
        document.querySelector(".knock");

    const father =
        document.querySelector(".father-walker");


    /*
        PAPA WALKS STRAIGHT
        TO THE CENTER OF THE GATE
    */

    /*
        Papa animation lasts 8.5 seconds.
        After he reaches the center,
        give him a tiny pause.
    */

    setTimeout(() => {

        if (!father) return;

        /*
            STOP ALL WALKING MOVEMENT
        */

        father.style.animation = "none";

    }, 8500);


    /*
        LITTLE KNOCK
        Papa has already reached
        the center.
    */

    setTimeout(() => {

        if (!gate) return;

        /* Gate grows once */

        gate.classList.add("knock-reaction");


        /* Tiny knock sparkles */

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
                                transform:
                                    "scale(.5) translateY(4px)"
                            },

                            {
                                opacity: 1,
                                transform:
                                    "scale(1.15) translateY(0)"
                            },

                            {
                                opacity: 0,
                                transform:
                                    "scale(1.4) translateY(-8px)"
                            }
                        ],
                        {
                            duration: 550,
                            easing: "ease-out"
                        }
                    );

                }, index * 100);

            });

        }

    }, 9000);


    /*
        GATE OPENS
        AFTER THE KNOCK
    */

    setTimeout(() => {

        if (leftDoor) {

            leftDoor.style.transform =
                "perspective(700px) rotateY(-88deg)";

        }

        if (rightDoor) {

            rightDoor.style.transform =
                "perspective(700px) rotateY(88deg)";

        }

    }, 9650);


    /*
        PAPA WALKS STRAIGHT
        THROUGH THE CENTER
    */

    setTimeout(() => {

        if (!father) return;

        father.style.transition =
            "left 2.8s ease, opacity 2.8s ease";

        father.style.left =
            "calc(50% - 10px)";

        father.style.opacity = "1";

    }, 10800);


    /*
        NEXT PAGE
    */

    setTimeout(() => {

        window.location.href =
            "page4.html";

    }, 14000);

});
