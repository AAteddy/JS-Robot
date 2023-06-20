const checkbox = document.getElementById("checkbox");
const submitBtn = document.querySelector("button[type=submit]");

checkbox.disabled = true;
submitBtn.disabled = true;

const elements = document.querySelectorAll(".element");
const selectColor = document.getElementById("SelectColor");

// Assign color to each element
elements.forEach(function (element) {
    const color = getRandomColor();

    element.style.backgroundColor = color;
    element.innerHTML = color;
    selectColor.innerHTML = color;
});
// Generate random color function
function getRandomColor() {
    const letter = "0123456789ABCDEF";
    let colors = "#";
    for (let i = 0; i < 6; i++) {
        colors += letter[Math.floor(Math.random() * 16)];
    }
    return colors;
}
// Check if the right color selected
elements.forEach(function (element) {
    element.addEventListener("click", function() {
        if (element.innerHTML === selectColor.innerHTML) {
            checkbox.checked = true;
            alert("You are Human!");           
            submitBtn.disabled = false;
            submitBtn.classList.remove("btn-light");
            submitBtn.classList.add("btn-success");
        } else {
            alert("Please verify that you are a Human");
            location.reload(true);
        }
    })
})