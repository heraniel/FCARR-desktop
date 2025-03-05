document.addEventListener("DOMContentLoaded", function () {
    const publishButton = document.getElementById("publishButton");

   
    publishButton.replaceWith(publishButton.cloneNode(true));
    document.getElementById("publishButton").addEventListener("click", function () {
        alert("Teachers & Staffs section updated successfully!");
    });
});

function toggleProfile() {
    document.getElementById('profileCard').classList.toggle('show');
}
