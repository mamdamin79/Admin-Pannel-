// selectors
const burgerMenu = document.querySelector(".burgerMenu")
const navBar = document.querySelector("nav")
const navList = Array.from(document.querySelectorAll(".navLink-text"))
const logoText = document.querySelector(".logo-text")
const header = document.querySelector("header")
const toggleContainer = document.querySelector(".toggle-container")
const pointerToggle = document.querySelector(".pointer-toggle")




// Event Handlers
// navbarClick //
burgerMenu.addEventListener("click",()=>{
    navBar.classList.toggle("close")
    if(navBar.classList.contains("close")){
        navList.map(item => item.classList.add("hidden"))
        logoText.classList.add("hidden")
        header.classList.add("open")
        toggleContainer.classList.add("close")
        pointerToggle.classList.add("dark")
    }
    else{
        navList.map(item => item.classList.remove("hidden"))
        logoText.classList.remove("hidden")
        logoText.classList.remove("hidden")
        header.classList.remove("open")
        toggleContainer.classList.remove("close")
    }

})
// dark mode click //
pointerToggle.addEventListener("click", ()=>{
    pointerToggle.classList.toggle("dark")
    document.body.classList.toggle("dark")
})