let form = document.querySelector("form");
form.addEventListener("submit", (e) => {
    e.preventDefault();
    let input = document.querySelector("#url").value;
    let image = document.querySelector("img");
    let urlqr = `https://api.qrserver.com/v1/create-qr-code/?size=300x300&data=${encodeURIComponent(input)}`;
    image.src = urlqr;
});
