document.addEventListener("DOMContentLoaded", function () {
    const fields = ["siteName", "phone", "email", "address", "facebook", "map"];

    document.getElementById("publishBtn").addEventListener("click", function () {
        fields.forEach(field => {
            let input = document.getElementById(field);
            if (input.value.trim() === "") {
                alert(`Please enter a value for ${field.replace(/([A-Z])/g, ' $1')}`);
                return;
            }
        });

        alert("Website information updated successfully!");
    });
});
