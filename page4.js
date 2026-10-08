document.addEventListener("DOMContentLoaded", () => {

    const birthdayMessage =
        document.querySelector(".birthday-message");

    const missionScreen =
        document.querySelector(".mission-screen");

    const countdown =
        document.querySelector(".countdown");

    const balloonLayer =
        document.querySelector(".balloon-layer");

    const popLayer =
        document.querySelector(".pop-layer");


    /* ================================
       CONFETTI
    ================================= */

    const confettiLayer =
        document.querySelector(".confetti-layer");

    const confettiColors = [
        "#f4a8d8",
        "#c9a7f5",
        "#ffd98e",
        "#a9d9ff",
        "#f5c4df",
        "#d8b4f8"
    ];

    for (let i = 0; i < 38; i++) {

        const piece =
            document.createElement("span");

        piece.className = "confetti";

        piece.style.left =
            Math.random() * 100 + "%";

        piece.style.background =
            confettiColors[
                Math.floor(
                    Math.random() *
                    confettiColors.length
                )
            ];

        piece.style.setProperty(
            "--fall-time",
            (5 + Math.random() * 5) + "s"
        );

        piece.style.setProperty(
            "--delay",
            (-Math.random() * 8) + "s"
        );

        piece.style.setProperty(
            "--drift",
            (-50 + Math.random() * 100) + "px"
        );

        confettiLayer.appendChild(piece);
    }


    /* ================================
       BIRTHDAY MESSAGE
    ================================= */

    setTimeout(() => {

        if (birthdayMessage) {
            birthdayMessage.classList.add("show");
        }

    }, 1800);


    /* ================================
       MISSION SCREEN
    ================================= */

    setTimeout(() => {

        if (missionScreen) {
            missionScreen.classList.add("show");
        }

    }, 6200);


    /* ================================
       COUNTDOWN
    ================================= */

    const numbers = [
        "3",
        "2",
        "1"
    ];

    numbers.forEach((number, index) => {

        setTimeout(() => {

            if (countdown) {

                countdown.textContent =
                    number;

                countdown.animate(
                    [
                        {
                            transform: "scale(.6)",
                            opacity: 0
                        },

                        {
                            transform: "scale(1.15)",
                            opacity: 1
                        },

                        {
                            transform: "scale(1)",
                            opacity: 1
                        }
                    ],
                    {
                        duration: 650,
                        easing: "ease-out"
                    }
                );

            }

        }, 7000 + index * 1000);

    });


    /* ================================
       START BALLOONS
    ================================= */

    setTimeout(() => {

        if (missionScreen) {
            missionScreen.style.opacity = "0";
        }

        if (missionScreen) {
            missionScreen.style.pointerEvents = "none";
        }

        startBalloons();

    }, 10100);


    /* ================================
       BALLOON CREATOR
    ================================= */

    function startBalloons() {

        setInterval(() => {

            createBalloon();

        }, 650);

    }


    function createBalloon() {

        if (!balloonLayer) return;


        const balloon =
            document.createElement("div");

        balloon.className = "balloon";


        /* Colours */

        const colors = [
            "#e982b9",
            "#b58be8",
            "#76b8e8",
            "#f2bd67",
            "#d98bd4",
            "#82d0c0",
            "#f39cae"
        ];

        const color =
            colors[
                Math.floor(
                    Math.random() *
                    colors.length
                )
            ];


        /* Size */

        const size =
            48 +
            Math.random() * 42;


        /* Position */

        const left =
            5 +
            Math.random() * 90;


        /* Speed */

        const riseTime =
            7 +
            Math.random() * 5;


        balloon.style.left =
            left + "%";

        balloon.style.setProperty(
            "--size",
            size + "px"
        );

        balloon.style.setProperty(
            "--balloon-color",
            color
        );

        balloon.style.setProperty(
            "--rise-time",
            riseTime + "s"
        );


        /* Natural sideways movement */

        balloon.style.setProperty(
            "--drift-one",
            (-35 + Math.random() * 70) + "px"
        );

        balloon.style.setProperty(
            "--drift-two",
            (-55 + Math.random() * 110) + "px"
        );

        balloon.style.setProperty(
            "--drift-three",
            (-40 + Math.random() * 80) + "px"
        );

        balloon.style.setProperty(
            "--drift-four",
            (-70 + Math.random() * 140) + "px"
        );


        balloon.addEventListener(
            "click",
            () => {

                popBalloon(balloon);

            }
        );


        balloon.addEventListener(
            "touchstart",
            (event) => {

                event.preventDefault();

                popBalloon(balloon);

            },
            {
                passive: false
            }
        );


        balloonLayer.appendChild(balloon);


        /* Remove after leaving screen */

        setTimeout(() => {

            if (balloon.parentNode) {
                balloon.remove();
            }

        }, (riseTime + 1) * 1000);

    }


    /* ================================
       POP BALLOON
    ================================= */

    function popBalloon(balloon) {

        if (
            !balloon ||
            balloon.classList.contains("popping")
        ) {
            return;
        }


        balloon.classList.add("popping");


        createPopEffect(
            balloon
        );


        setTimeout(() => {

            balloon.remove();

        }, 330);

    }


    /* ================================
       POP EFFECT
    ================================= */

    function createPopEffect(balloon) {

        if (!popLayer) return;


        const rect =
            balloon.getBoundingClientRect();


        const centerX =
            rect.left +
            rect.width / 2;

        const centerY =
            rect.top +
            rect.height / 2;


        for (let i = 0; i < 9; i++) {

            const piece =
                document.createElement("span");

            piece.className =
                "pop-piece";


            piece.style.left =
                centerX + "px";

            piece.style.top =
                centerY + "px";


            const angle =
                Math.random() *
                Math.PI *
                2;

            const distance =
                25 +
                Math.random() * 45;


            piece.style.setProperty(
                "--x",
                Math.cos(angle) *
                distance +
                "px"
            );

            piece.style.setProperty(
                "--y",
                Math.sin(angle) *
                distance +
                "px"
            );


            piece.style.background =
                getComputedStyle(
                    balloon
                ).getPropertyValue(
                    "--balloon-color"
                );


            popLayer.appendChild(piece);


            setTimeout(() => {

                piece.remove();

            }, 650);

        }

    }

});
