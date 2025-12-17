const loadActivitiesButton = document.getElementById("loadActivities");
const loadUsersButton = document.getElementById("loadUsers");
const loadTemplatesButton = document.getElementById("loadTemplates");
const list = document.getElementById("list");

loadActivitiesButton.addEventListener("click", loadActivities);
loadUsersButton.addEventListener("click", loadUsers);
loadTemplatesButton.addEventListener("click", loadTemplates);

function loadActivities() {
    fetchActivities()
        .then(activities => {
            clearElement(list);

            activities.forEach(activity => {
                const li = createListItem(formatActivity(activity));
                list.appendChild(li);
            });
        })
        .catch(error => {
            console.error("Failed to load activities:", error);
        });
}

function formatActivity(activity) {
    const date = new Date(activity.dateTime);
    const formattedDate = date.toLocaleString();

    return `
        ID: ${activity.id}
        UserID: ${activity.userId}
        ${activity.label} (${activity.category})
        Duration: ${activity.duration} min
        Date: ${formattedDate}
        Description: ${activity.description}
        Note: ${activity.note}
        Completed: ${activity.completed ? "Yes" : "No"}
        `.trim();
}

function loadUsers() {
    fetchUsers()
        .then(users => {
            clearElement(list);

            users.forEach(user => {
                const li = createListItem(formatUser(user));
                list.appendChild(li);
            });
        })
        .catch(error => {
            console.error("Failed to load users:", error);
        });
}

function formatUser(user) {
    return `
        ID: ${user.id}
        First Name: ${user.firstName}
        Last Name: ${user.lastName}
        Age: ${user.age}
        Weight: ${user.weight}
        `.trim();
}

function loadTemplates() {
    fetchTemplates()
        .then(templates => {
            clearElement(list);

            templates.forEach(template => {
                const li = createListItem(formatTemplate(template));
                list.appendChild(li);
            });
        })
        .catch(error => {
            console.error("Failed to load templates:", error);
        });
}

function formatTemplate(template) {
    return `
        ID: ${template.id}
        UserID: ${template.userId}
        Category: ${template.category}
        Label: ${template.label}
        `.trim();
}