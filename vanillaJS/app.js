const loadActivitiesButton = document.getElementById("loadActivities");
const list = document.getElementById("activityList");

loadActivitiesButton.addEventListener("click", loadActivities);

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
        ${activity.label} (${activity.category})
        Duration: ${activity.duration} min
        Date: ${formattedDate}
        Description: ${activity.description}
        Note: ${activity.note}
        Completed: ${activity.completed ? "Yes" : "No"}
        `.trim();
}
