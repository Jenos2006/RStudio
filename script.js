document.addEventListener("DOMContentLoaded", function() {
    const modal = document.getElementById("age-verification-modal");
    const confirmAgeButton = document.getElementById("confirm-age");
    const denyAgeButton = document.getElementById("deny-age");

    if (!localStorage.getItem("ageVerified")) {
        modal.style.display = "block";
    }

    confirmAgeButton.addEventListener("click", function() {
        localStorage.setItem("ageVerified", "true");
        modal.style.display = "none";
    });

    denyAgeButton.addEventListener("click", function() {
        window.location.href = "https://www.google.com";
    });
});