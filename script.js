const btn = document.getElementById("btn");
const btnMessage = document.getElementById("btn-message");

btn.addEventListener("click", () => {
    btnMessage.classList.toggle("d-none");
})