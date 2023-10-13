let clickMe = document.querySelector('.clickMe');
let colorBox = document.querySelector('.color-box');
let heading = document.querySelector('.heading');
clickMe.addEventListener("click",function() {
    generateRandomColor();
})
function generateRandomColor() {
    let red = Math.floor(Math.random() * 255);
    let green = Math.floor(Math.random() * 255);
    let blue = Math.floor(Math.random() * 255);
    let rgbValue = `rgb(${red},${green},${blue})`;
    colorBox.style.backgroundColor=`${rgbValue}`;
    heading.innerText = rgbValue;
}