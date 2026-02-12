// Hearts animation
document.addEventListener("DOMContentLoaded", function () {
    const container = document.getElementById("hearts");
    if (!container) return;

    function createHeart() {
        const el = document.createElement("div");
        el.className = "heart";
        el.textContent = "";
        el.classList.add("fas", "fa-heart");

        const left = Math.random() * 100;
        const randomSize = Math.random();
        let sizeClass;
        if (randomSize < 0.5) {
            sizeClass = "small";
        } else if (randomSize < 0.7) {
            sizeClass = "medium";
        } else {
            sizeClass = "large";
        }
        el.classList.add(sizeClass);

        const duration = (Math.random() * 8 + 8).toFixed(2); // 8-16s
        const drift = Math.round((Math.random() - 0.5) * 240); // -120..120 px

        el.style.left = left + "%";
        el.style.animationDuration = duration + "s";
        el.style.setProperty("--drift", drift + "px");

        container.appendChild(el);
        el.addEventListener("animationend", () => el.remove());

        if (container.children.length > 80)
            container.firstElementChild.remove();
    }

    setInterval(createHeart, 250);
});

// Mobile menu toggle
document.addEventListener("DOMContentLoaded", function () {
    const btn = document.getElementById("mobile-menu-button");
    const nav = document.getElementById("primary-nav");
    if (!btn || !nav) return;

    btn.addEventListener("click", function () {
        const expanded = btn.getAttribute("aria-expanded") === "true";
        btn.setAttribute("aria-expanded", String(!expanded));
        nav.classList.toggle("hidden");
    });

    // Close menu when clicking a link
    const links = nav.querySelectorAll("a");
    links.forEach(link => {
        link.addEventListener("click", function () {
            nav.classList.add("hidden");
            btn.setAttribute("aria-expanded", "false");
        });
    });
});
