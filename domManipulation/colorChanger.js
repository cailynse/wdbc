alert("Connected");
var btn = document.querySelector("button");
var page = document.querySelector("body");
btn.addEventListener("click", function () {
    console.log("clicked");
    page.classList.toggle("purpleBackground");
});
