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
