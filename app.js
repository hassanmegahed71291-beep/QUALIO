/*
==========================================
QUALIO APP.JS
Version 1.0
==========================================
*/

document.addEventListener("DOMContentLoaded", function () {

    // ===========================
    // Hide Loader
    // ===========================

    const loader = document.getElementById("loader");

    if (loader) {

        setTimeout(function () {

            loader.style.opacity = "0";
            loader.style.visibility = "hidden";
            loader.style.pointerEvents = "none";

            setTimeout(function () {
                loader.remove();
            }, 800);

        }, 1500);

    }

    // ===========================
    // Sticky Header
    // ===========================

    const header = document.querySelector("header");

    window.addEventListener("scroll", function () {

        if (!header) return;

        if (window.scrollY > 80) {

            header.classList.add("sticky");

        } else {

            header.classList.remove("sticky");

        }

    });

    // ===========================
    // Button Hover Effect
    // ===========================

    const buttons = document.querySelectorAll("button");

    buttons.forEach(function(btn){

        btn.addEventListener("mouseenter",function(){

            this.style.transform="translateY(-4px)";

        });

        btn.addEventListener("mouseleave",function(){

            this.style.transform="translateY(0px)";

        });

    });

    console.log("QUALIO Loaded Successfully");

});
