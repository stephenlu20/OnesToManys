const loadButton = document.getElementById("loadBtn");
const activityList = document.getElementById("activityList");

loadButton.addEventListener("click", loadActivities);

function loadActivities() {
    fetchActivities()
        .then(activities => {
            clearElement(activityList);

            activities.forEach(activity => {
                const li = createListItem(formatActivity(activity));
                activityList.appendChild(li);
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
${activity.label} (${activity.category})
Duration: ${activity.duration} min
Date: ${formattedDate}
Description: ${activity.description}
Note: ${activity.note}
Completed: ${activity.completed ? "Yes" : "No"}
`.trim();
}
