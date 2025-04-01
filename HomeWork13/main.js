const reqForm = document.getElementById("contactForm");

reqForm.addEventListener("submit", (e) => {
    e.preventDefault();

    let isValid = true;

    const formData = new FormData(reqForm);
    const name = formData.get("name");
    const message = formData.get("message")
    const phone = formData.get("phone")
    const email = formData.get("email")


    if (!name) {
        document.getElementById("nameError").textContent = "Ім'я є обов'язковим";
        isValid = false;
    }

    if (!message || message.length < 5) {
        document.getElementById("messageError").textContent = "Повідомлення має містити щонайменше 5 символів";
        isValid = false;
    }

    const phoneRegex = /^\+380\d{10}$/;
    if (!phone || !phoneRegex.test(phone)) {
    document.getElementById("phoneError").textContent = "Телефон має починатися з +380 та містити 9 цифр після";
    isValid = false;
    }

    const emailRegex = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;
    if (!email || !emailRegex.test(email)) {
        document.getElementById("emailError").textContent = "Введіть коректний email";
        isValid = false;
    }

    if (isValid) {
        console.log("Дані форми:");
        for (let [key, value] of formData.entries()) {
            console.log(`${key}: ${value}`);
        }

        reqForm.reset();
    }
});
