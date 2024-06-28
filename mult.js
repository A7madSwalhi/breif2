document.querySelectorAll(".quiz").forEach((button) => {
    button.addEventListener("click", (event) => {
        const buttonId = event.target.id;
        const buttonText = event.target.innerText;
        console.log(`Button ID: ${buttonId}`);
        console.log(`Button Text: ${buttonText}`);
    });
});
