document.getElementById("saveHomeBtn").addEventListener("click", function() {
    alert("Home section updated successfully!");
});

function toggleProfile() {
    document.getElementById('profileCard').classList.toggle('show');
}

function logout() {
    const confirmLogout = confirm("Are you sure you want to log out?");
    if (confirmLogout) {
        window.location.href = "index.html";
    }
}