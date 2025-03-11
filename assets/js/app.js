const appointmentButton = document.querySelector("#appointment-button");

appointmentButton.addEventListener("click", (e) => {
    e.preventDefault();

    const name = document.querySelector("#name").value;
    const message = document.querySelector("#message").value;
    const waMessage = `الاسم: ${name}%0Aالشكوى: ${message}`;

    window.open(`https://wa.me/201002414958?text=${waMessage}`, "_blank");
});
