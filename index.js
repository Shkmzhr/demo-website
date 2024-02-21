document.addEventListener("DOMContentLoaded", function() {
    const navLinks = document.querySelectorAll(".navbar-nav .nav-link");

    navLinks.forEach(function(navLink) {
        navLink.addEventListener("click", function(e) {
            e.preventDefault();

            const targetId = navLink.getAttribute("href");
            const targetElement = document.querySelector(targetId);
            const offset = 50; // Adjust this value as needed

            if (targetElement) {
                const targetPosition = targetElement.getBoundingClientRect().top + window.pageYOffset;
                window.scrollTo({
                    top: targetPosition - offset,
                    behavior: "smooth"
                });
            }
        });
    });
});
