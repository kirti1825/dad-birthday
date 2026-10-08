document.addEventListener("DOMContentLoaded", () => {

    const father = document.querySelector(".father-walker");

    const leftDoor = document.querySelector(".left-door");
    const rightDoor = document.querySelector(".right-door");

    const insideLight = document.querySelector(".inside-light");

    const knockEffect =
        document.querySelector(".knock-effect");

    const finalLight =
        document.querySelector(".final-light");


    /*
       The father reaches the gate.
       Then comes the cute knock-knock moment.
    */

    setTimeout(() => {

        if (father) {
            father.classList.add("ready-to-knock");
        }

        if (knockEffect) {

            knockEffect.style.opacity = "1";

            const sparks =
                knockEffect.querySelectorAll("span");

            sparks.forEach((spark) => {

                spark.style.animation =
                    "knockSpark .8s ease forwards";

            });

        }

    }, 9800);


    /*
       Gate opens after the knock.
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

        if (insideLight) {

            insideLight.style.opacity = "1";

            insideLight.style.transform =
                "scale(1.15)";

        }

    }, 10800);


    /*
       After the gate opens,
       father walks through the light.
    */

    setTimeout(() => {

        if (father) {

            father.style.transition =
                "left 3.5s ease, transform 3.5s ease";

            father.style.left =
                "calc(50% - 70px)";

            father.style.transform =
                "scale(.82)";

        }

    }, 12500);


    /*
       Final magical light transition.
    */

    setTimeout(() => {

        if (finalLight) {

            finalLight.animate(
                [
                    {
                        opacity: 0
                    },
                    {
                        opacity: .35
                    },
                    {
                        opacity: 1
                    }
                ],
                {
                    duration: 2200,
                    easing: "ease-in-out",
                    fill: "forwards"
                }
            );

        }

    }, 15000);


    /*
       Then Part 4 can begin.
       We are NOT linking it yet.
       We'll add your next scene when you design it.
    */

});
