 let buttons = document.querySelectorAll('.btn');

buttons.forEach(btn => {
    btn.addEventListener("click", () => {

        btn.classList.toggle("active");

        if (btn.classList.contains("active")) {
            btn.innerHTML = "Remove Friend";
        } else {
            btn.innerHTML = "Add Friend";
        }

    });
});

