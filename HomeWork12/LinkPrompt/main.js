let savedLink = "";

document.querySelector(".enterLink").addEventListener("click", () => {
    savedLink = prompt("Set link");
});

document.querySelector(".travel").addEventListener("click", () => {
    if (savedLink) {
        window.location.href = savedLink;
    }
});