document.addEventListener("DOMContentLoaded", function () {
    const aboutForm = document.getElementById("about-form");

    const initialValues = {
        aboutText: document.getElementById("about-text").value.trim(),
        mission: document.getElementById("mission").value.trim(),
        vision: document.getElementById("vision").value.trim(),
        aboutImage: null,
        academicImage: null
    };

    aboutForm.addEventListener("submit", function (e) {
        e.preventDefault();

        const aboutText = document.getElementById("about-text").value.trim();
        const mission = document.getElementById("mission").value.trim();
        const vision = document.getElementById("vision").value.trim();
        const aboutImage = document.getElementById("about-image").files[0];
        const academicImage = document.getElementById("academic-image").files[0];

        const formData = new FormData();
        let hasUpdate = false;

    
        if (aboutText && aboutText !== initialValues.aboutText) {
            formData.append("aboutText", aboutText);
            initialValues.aboutText = aboutText;
            hasUpdate = true;
        }
        if (mission && mission !== initialValues.mission) {
            formData.append("mission", mission);
            initialValues.mission = mission;
            hasUpdate = true;
        }
        if (vision && vision !== initialValues.vision) {
            formData.append("vision", vision);
            initialValues.vision = vision;
            hasUpdate = true;
        }
        if (aboutImage) {
            formData.append("aboutImage", aboutImage);
            hasUpdate = true;
        }
        if (academicImage) {
            formData.append("academicImage", academicImage);
            hasUpdate = true;
        }

      
        if (!hasUpdate) {
            alert("No changes detected. Please update at least one field.");
            return;
        }

        console.log("Updated Form Data:", Object.fromEntries(formData.entries()));

        alert("Content updated successfully!");
        aboutForm.reset();
    });
});


function toggleProfile() {
    document.getElementById("profileCard").classList.toggle("show");
}

// Logout Function
function logout() {
    alert("Logging out...");
    window.location.href = "login.html";
}
