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
        const sizeClass =
            Math.random() < 0.5
                ? "small"
                : Math.random() < 0.7
                  ? "medium"
                  : "large";
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

    const iv = setInterval(createHeart, 250);
});
