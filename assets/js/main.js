/*===== SHOW MENU =====*/
const showMenu = (toggleId, navId) => {
    const toggle = document.getElementById(toggleId),
        nav = document.getElementById(navId);

    if (toggle && nav) {
        toggle.addEventListener("click", () => {
            nav.classList.add("show-menu");

            gsap.from(".close-menu, .nav__item, .nav__button", {
                opacity: 0,
                duration: 2,
                delay: 1,
                y: 25,
                ease: "expo.out",
                stagger: 0.2,
            });

        });
    }
};
showMenu("nav-toggle", "nav__menu");

/*===== CLOSE MENU =====*/
const navMenu = document.querySelector("#nav__menu")
const closeMenu = document.querySelector(".close-menu")
    .addEventListener('click', () => {
        navMenu.classList.remove('show-menu')
    })

/*===== GSAP ANIMATIONS =====*/
gsap.from(".nav__logo, .nav__toggle", {
    opacity: 0,
    duration: 2,
    delay: 1.5,
    y: 25,
    ease: "expo.out",
    stagger: 0.2,
});


gsap.from(".nav__item, .nav__button", {
    opacity: 0,
    duration: 2,
    delay: 1.5,
    y: 25,
    ease: "expo.out",
    stagger: 0.2,
});

gsap.from(".home__data, .home__hero, .technology, .popular-items, .products, .newsletter, .advice, .footer", {
    opacity: 0,
    duration: 2,
    delay: 0.5,
});
