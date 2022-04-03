// selectors
const burgerMenu = document.querySelector(".burgerMenu")
const navBar = document.querySelector("nav")
const navList = Array.from(document.querySelectorAll(".navLink-text"))
const logoText = document.querySelector(".logo-text")
const toggleContainer = document.querySelector(".toggle-container")
const pointerToggle = document.querySelector(".pointer-toggle")
const container = document.querySelector(".container")
let users = document.querySelector(".users")
console.log(users)




// Event Handlers
// navbarClick //
burgerMenu.addEventListener("click",()=>{
    navBar.classList.toggle("close")
    if(navBar.classList.contains("close")){
        navList.map(item => item.classList.add("hidden"))
        logoText.classList.add("hidden")
        toggleContainer.classList.add("close")
        pointerToggle.classList.add("dark")
        container.classList.add("close")
    }
    else{
        navList.map(item => item.classList.remove("hidden"))
        logoText.classList.remove("hidden")
        logoText.classList.remove("hidden")
        toggleContainer.classList.remove("close")
    }

})
// dark mode click //
pointerToggle.addEventListener("click", ()=>{
    pointerToggle.classList.toggle("dark")
    document.body.classList.toggle("dark")
})
//
window.addEventListener("DOMContentLoaded", ()=>{
    fetch('https://jsonplaceholder.typicode.com/users')
  .then(response => response.json())
  .then(usersArray => usersArray.map(user =>{
        html = `<div class="user">
                    <p class="userName">${user.name}</p>
                    <p class="userEmail">${user.email}</p>
                    <p class="userCompany">${user.company.name}</p>
                    <p class="userZipCode">${user.address.zipcode}</p>
                </div>`
                users.innerHTML += html
  }
    ))
})