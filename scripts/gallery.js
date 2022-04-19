//  here we set on click event on the menu btn 
const menuBtn = document.querySelector(".menu-btn");
menuBtn.addEventListener("click", () => {

    menuBtn.classList.toggle("open");
    document.querySelector(".sidebar").classList.toggle("show");
});
// flipster js 

$('.carousel').flipster({
    style:'carousel', 
    spacing: '-0.3',
});