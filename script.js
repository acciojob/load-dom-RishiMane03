function addMessage() {
    var body = document.body;
    body.innerHTML = "DOM load success";
}

// Add the message when the DOM is fully loaded
document.addEventListener("DOMContentLoaded", addMessage);