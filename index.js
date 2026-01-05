$(document).ready(function () {

    if (localStorage.getItem("darkMode") === "on") {
        $("body").addClass("dark-mode");
        $("#darkToggle").text("☀️");
    }

    $("#darkToggle").on("click", function () {
        $("body").toggleClass("dark-mode");

        if ($("body").hasClass("dark-mode")) {
            localStorage.setItem("darkMode", "on");
            $(this).text("☀️");
        } else {
            localStorage.setItem("darkMode", "off");
            $(this).text("🌙");
        }
    });
    // const fallingItems = $(".falling");

    // fallingItems.each(function () {
    //     const speed = Math.random() * 1.5 + 0.2;
    //     const rotateSpeed = Math.random() * 0.5 + 0.2;

    //     $(this).data("speed", speed);
    //     $(this).data("rotate", rotateSpeed);

    //     const randomX = Math.random() * window.innerWidth;
    //     $(this).css("left", randomX + "px");
    // });

    $(window).on("scroll", function () {
        const scrollTop = $(window).scrollTop();

        fallingItems.each(function () {
            const baseSpeed = $(this).data("speed");
            const rotateSpeed = $(this).data("rotate");

            const acceleration = scrollTop * 0.0013;

            let y = scrollTop * (baseSpeed + acceleration);
            let rotation = scrollTop * rotateSpeed;
            console.log($("body").height())
            if (y > $("body").height() - 300) {
                $(this).hide();
            } else {
                $(this).show();
                $(this).css(
                    "transform",
                    `translateY(${y}px) rotate(${rotation}deg)`
                );
            }
        });
    });

    $(function () {

        const $btnNormal = $("#btnNormal");
        const $btnRehab = $("#btnRehab");

        const $normalPlans = $("#normalPlans");
        const $rehabPlans = $("#rehabPlans");

        $normalPlans.show();
        $rehabPlans.hide();

        $btnNormal.on("click", function () {
            $normalPlans.fadeIn(200);
            $rehabPlans.hide();

            $btnNormal
                .addClass("btn-primary active")
                .removeClass("btn-outline-primary");

            $btnRehab
                .removeClass("btn-primary active")
                .addClass("btn-outline-primary");
        });

        $btnRehab.on("click", function () {
            $normalPlans.hide();
            $rehabPlans.fadeIn(200);

            $btnRehab
                .addClass("btn-primary active")
                .removeClass("btn-outline-primary");

            $btnNormal
                .removeClass("btn-primary active")
                .addClass("btn-outline-primary");
        });

    });
    function revealOnScroll() {
        $(".fade-scroll").each(function () {
            const top = $(this).offset().top;
            const bottom = $(window).scrollTop() + $(window).height();

            if (bottom > top + 150) {
                $(this).addClass("visible");
            }
        });
    }

    $(window).on("scroll", function () {
        let scrollTop = $(this).scrollTop();

        $(".parallax-card").each(function () {
            let offset = $(this).offset().top;
            let yPos = (scrollTop - offset) * 0.1;
            $(this).css("background-position", "center " + yPos + "px");
        });

        revealOnScroll();
    });

    revealOnScroll();
});
