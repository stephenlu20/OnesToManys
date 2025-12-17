function clearElement(element) {
    element.innerHTML = "";
}

function createListItem(text) {
    const li = document.createElement("li");
    li.style.whiteSpace = "pre-line";
    li.textContent = text;
    return li;
}
