const button = document.querySelector("#calc");

button.addEventListener("click", function () {

    const left = parseInt(document.querySelector("#left").value);
    const right = parseInt(document.querySelector("#right").value);

    const sum = left + right;

    document.querySelector("#answer").textContent = sum;
});