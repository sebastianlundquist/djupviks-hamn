(function () {
    // Jag tycker denna lösning är produktionsredo efter eventuell minifiering
    "use strict";
    var navbar = document.getElementById("navbar");
    var navbarOffset = navbar.offsetTop;

    function scrollNavbar() {
        if (window.pageYOffset >= navbarOffset) {
            navbar.classList.add("sticky-nav");
        } else {
            navbar.classList.remove("sticky-nav");
        }
    }

    function clearNavbar() {
        if (navbar.classList.contains("sticky-nav") && window.innerWidth < 640) {
            document.querySelector("main").style.paddingTop = "220px";
        }
        else {
            document.querySelector("main").style.paddingTop = "0";
        }
    }

    window.onscroll = function () {
        scrollNavbar();
        clearNavbar();
    };
})();