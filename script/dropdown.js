document.addEventListener("DOMContentLoaded", function() {
    const dropdownToggle = document.querySelector(".dropdown-toggle");
    const dropdownMenu = document.querySelector(".dropdown-menu");
    
    dropdownToggle.addEventListener("click", function(event) {
        event.preventDefault();
        dropdownMenu.classList.toggle("show");
    });
});