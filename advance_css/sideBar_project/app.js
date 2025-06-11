const dark = document.querySelector(".dark");
const night = document.querySelector(".night")
const light= document.querySelector(".light");

const sidebar = document.querySelector(".sidebar");
const activeListItem = document.querySelector(".list-item.active");

console.log(dark)
console.log(night)
console.log(night)
console.log(activeListItem)

dark.addEventListener("click", ()=>{
    console.log("you click on dark");
    sidebar.className = "sidebar";
    activeListItem = "list-item active";
})

night.addEventListener("click", ()=>{
    console.log("you click on  night");
    sidebar.className = "sidebar night";
    activeListItem = "list-item active night";
})

light.addEventListener("click", ()=>{
    console.log("you click on light");
    sidebar.className = "sidebar light";
    activeListItem = "list-item active light";
})



