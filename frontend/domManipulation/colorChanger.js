alert("Connected");

//select buttom
var btn = document.querySelector("button");

//select body
var page = document.querySelector("body");

//when button is clicked if purpleBAckground is not already a class add it, if it is remove it (toggle)
btn.addEventListener("click", function () {
    console.log("clicked");
    page.classList.toggle("purpleBackground");
});
