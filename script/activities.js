document.addEventListener("DOMContentLoaded", function () {
    initializeSampleActivities();
    loadActivities();
    document.getElementById("activitiesForm").addEventListener("submit", saveActivity);
});

function initializeSampleActivities() {
    if (!localStorage.getItem("activities")) {
        const sampleActivities = [
            {
                title: "Sports Day",
                description: "Join us for a fun-filled sports day event.",
                imageUrl: "../image/sample.jpg"
            },
            {
                title: "Science Fair",
                description: "Showcase your science projects!",
                imageUrl: "../image/sample2.jpg"
            }
        ];
        localStorage.setItem("activities", JSON.stringify(sampleActivities));
    }
}

function openModal(editIndex = null) {
    const modal = document.getElementById("activitiesFormContainer");
    const form = document.getElementById("activitiesForm");
    const previewImage = document.getElementById("previewImage");

    document.getElementById("modalTitle").textContent = editIndex === null ? "Add Activity" : "Edit Activity";
    
    if (editIndex !== null) {
        const activities = JSON.parse(localStorage.getItem("activities")) || [];
        const activity = activities[editIndex];
        document.getElementById("title").value = activity.title;
        document.getElementById("description").value = activity.description;
        form.dataset.index = editIndex;

        if (activity.imageUrl) {
            previewImage.src = activity.imageUrl;
            previewImage.style.display = "block";
        } else {
            previewImage.style.display = "none";
        }
    } else {
        form.reset();
        delete form.dataset.index;
        previewImage.style.display = "none";
    }

    modal.style.display = "block";
}

function closeModal() {
    document.getElementById("activitiesFormContainer").style.display = "none";
}

function saveActivity(event) {
    event.preventDefault();

    const title = document.getElementById("title").value;
    const description = document.getElementById("description").value;
    const image = document.getElementById("image").files[0];

    let imageUrl = "";
    if (image) {
        const reader = new FileReader();
        reader.onload = function (e) {
            imageUrl = e.target.result;
            processSave(title, description, imageUrl);
        };
        reader.readAsDataURL(image);
    } else {
        processSave(title, description, imageUrl);
    }
}

function processSave(title, description, imageUrl) {
    const activities = JSON.parse(localStorage.getItem("activities")) || [];
    const form = document.getElementById("activitiesForm");

    if (form.dataset.index !== undefined) {
        const index = parseInt(form.dataset.index);
        activities[index] = { title, description, imageUrl };
    } else {
        activities.push({ title, description, imageUrl });
    }

    localStorage.setItem("activities", JSON.stringify(activities));
    closeModal();
    loadActivities();
}

function loadActivities() {
    const activities = JSON.parse(localStorage.getItem("activities")) || [];
    const tableBody = document.getElementById("activitiesList");

    tableBody.innerHTML = "";
    activities.forEach((activity, index) => {
        const row = document.createElement("tr");

        row.innerHTML = `
            <td>${activity.title}</td>
            <td>${activity.description}</td>
            <td>${activity.imageUrl ? `<img src="${activity.imageUrl}" width="50">` : "No Image"}</td>
            <td>
                <button class="edit-btn" onclick="openModal(${index})">Edit</button>
                <button class="delete-btn" onclick="deleteActivity(${index})">Delete</button>
            </td>
        `;

        tableBody.appendChild(row);
    });
}

function deleteActivity(index) {
    const activities = JSON.parse(localStorage.getItem("activities")) || [];
    activities.splice(index, 1);
    localStorage.setItem("activities", JSON.stringify(activities));
    loadActivities();
}
  // load id//
  function loadActivities() {
    const activities = JSON.parse(localStorage.getItem("activities")) || [];
    const tableBody = document.getElementById("activitiesList");

    tableBody.innerHTML = "";
    activities.forEach((activity, index) => {
        const row = document.createElement("tr");

        row.innerHTML = `
            <td>${index + 1}</td> <!-- Auto-incremented ID -->
            <td>${activity.title}</td>
            <td>${activity.description}</td>
            <td>${activity.imageUrl ? `<img src="${activity.imageUrl}" width="50">` : "No Image"}</td>
            <td>
                <button class="edit-btn" onclick="openModal(${index})">Edit</button>
                <button class="delete-btn" onclick="deleteActivity(${index})">Delete</button>
            </td>
        `;

        tableBody.appendChild(row);
    });
}


