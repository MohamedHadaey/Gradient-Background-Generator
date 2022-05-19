let home = document.getElementById("home");
let leftInput = document.getElementById("leftInput");
let rightInput = document.getElementById("rightInput");
let currentBg = document.getElementById("currentBg");
const styles = window.getComputedStyle(home);

leftInput.addEventListener("input" , function(){
    home.style.backgroundImage = `linear-gradient(to right , ${leftInput.value} , ${rightInput.value})`;
    currentBg.innerHTML = styles.backgroundImage;
})

rightInput.addEventListener("input" , function(){
    home.style.backgroundImage = `linear-gradient(to right , ${leftInput.value} , ${rightInput.value})`;
    currentBg.innerHTML = styles.backgroundImage;
})