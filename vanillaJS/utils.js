function clearElement(element) {
    element.innerHTML = "";
}

function createListItem(text) {
    const li = document.createElement("li");
    li.textContent = text;
    return li;
}
