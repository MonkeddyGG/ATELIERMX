document.addEventListener("DOMContentLoaded", () => {
    /* 1. Animación del Navbar al hacer Scroll */
    const navbar = document.querySelector(".navbar");
    window.addEventListener("scroll", () => {
        if (window.scrollY > 50) {
            navbar.classList.add("scrolled");
        } else {
            navbar.classList.remove("scrolled");
        }
    });

    /* 2. Menú Móvil (Hamburger) */
    const hamburger = document.querySelector(".hamburger");
    const navLinks = document.querySelector(".nav-links");
    const links = document.querySelectorAll(".nav-links li a");

    hamburger.addEventListener("click", () => {
        navLinks.classList.toggle("active");
        hamburger.classList.toggle("toggle");

        // Cambiar color del logo si se abre el menú sobre un fondo transparente
        const logo = document.querySelector('.logo');
        if (navLinks.classList.contains("active") && window.scrollY <= 50) {
            logo.style.color = "var(--black)";
        } else if (!navLinks.classList.contains("active") && window.scrollY <= 50) {
            logo.style.color = "var(--white)";
        }
    });

    links.forEach(link => {
        link.addEventListener("click", () => {
            navLinks.classList.remove("active");
            hamburger.classList.remove("toggle");
            if (window.scrollY <= 50) {
                document.querySelector('.logo').style.color = "var(--white)";
            }
        });
    });

    /* 3. Animaciones al hacer Scroll (Intersection Observer) */
    // Esto detecta cuando los elementos con la clase .reveal entran en pantalla
    const reveals = document.querySelectorAll(".reveal");

    const revealOptions = {
        threshold: 0.15, // Ejecuta cuando el 15% del elemento es visible
        rootMargin: "0px 0px -50px 0px"
    };

    const revealOnScroll = new IntersectionObserver(function (entries, observer) {
        entries.forEach(entry => {
            if (!entry.isIntersecting) {
                return;
            } else {
                entry.target.classList.add("active");
                // Dejar de observar una vez que ya apareció
                observer.unobserve(entry.target);
            }
        });
    }, revealOptions);

    reveals.forEach(reveal => {
        revealOnScroll.observe(reveal);
    });
});