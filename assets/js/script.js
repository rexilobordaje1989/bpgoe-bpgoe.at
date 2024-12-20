function openModal(name, position, image) {
    // Set modal content
    document.getElementById("modalName").innerText = name;
    document.getElementById("modalPosition").innerText = position;
    document.getElementById("modalImg").src = image;

    // Show the modal
    document.getElementById("myModal").style.display = "block";
}

function closeModal() {
    // Hide the modal
    document.getElementById("myModal").style.display = "none";
}

// Close modal when clicking outside
window.onclick = function(event) {
    if (event.target == document.getElementById("myModal")) {
        closeModal();
    }
}
