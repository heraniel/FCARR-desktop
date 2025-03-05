document.addEventListener("DOMContentLoaded", function () {
    const logoutButton = document.querySelector(".logout");
    
    if (logoutButton) {
        logoutButton.addEventListener("click", function () {
          
            const confirmLogout = confirm("Are you sure you want to log out?");
            
            if (confirmLogout) {
                
                localStorage.clear();
                sessionStorage.clear();
                 
                window.location.href = "index.html";
            }
        });
    }
});
