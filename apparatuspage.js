function updateDateTime() {
    const now = new Date();
    const date = now.toLocaleDateString('en-US', {
        month: 'long',
        day: 'numeric',
        year: 'numeric'
    });
    const time = now.toLocaleTimeString('en-US', {
        hour: '2-digit',

        
        minute: '2-digit',
        second: '2-digit'
    });
    document.getElementById('datetime').innerHTML = `${date}<br>${time}`;
}

function goToInventory() {
    window.location.href = "inventorypage.html"; // Ensure the file name matches exactly
}

document.addEventListener("DOMContentLoaded", function () {
    const container = document.getElementById("button-container");
    const modal = document.getElementById("modal");
    const modalTitle = document.getElementById("modal-title");
    const modalDescription = document.getElementById("modal-description");
    const modalImage = document.getElementById("modal-image");
    const closeModal = document.getElementById("close-modal");

    modal.style.display = "none"; 

    // Apparatus details (Name, Description, Image)
    const apparatusDetails = {
        "Bunsen Burner Tripod": {
            description: "Tripod stands are often used in combination with other lab equipment, such as Bunsen burners, hot plates, and wire gauze, to provide a stable platform for heating and mixing experiments. They can also be used to support and stabilize glassware during filtration, distillation, and other chemical processes.",
            image: "Pictures/Apparatus/bunsenburnertripod.JPG"
        },
        "Flask": {
            description: "A flask is used to contain chemical reactions, solutions, and distillations.",
            image: "images/flask.jpg"
        },
        "Test Tube": {
            description: "A test tube is a small glass container used for holding chemical reactions.",
            image: "images/test_tube.jpg"
        },
        "Graduated Cylinder": {
            description: "A graduated cylinder is used to measure the volume of a liquid precisely.",
            image: "images/graduated_cylinder.jpg"
        },
        "Pipette": {
            description: "A pipette is a laboratory tool used to transport a measured volume of liquid.",
            image: "images/pipette.jpg"
        },

        "Protective Gloves": {
            description: "To prtect eyes",
            image: "eyes.jpg"
        },
        // ➜ Add more items here as needed!
    };

    // Create buttons dynamically
    Object.keys(apparatusDetails).forEach(name => {
        let button = document.createElement("button");
        button.className = "box-button";
        button.innerText = name;

        // Open modal with specific content when clicked
        button.onclick = function () {
            const details = apparatusDetails[name];
            modalTitle.innerText = name;
            modalDescription.innerText = details.description;
            modalImage.src = details.image;
            modalImage.alt = name;
            modal.style.display = "flex"; // Show modal
        };

        container.appendChild(button);
    });

    // Close modal when clicking 'X'
    closeModal.onclick = function () {
        modal.style.display = "none";
    };

    // Close modal when clicking outside content
    window.onclick = function (event) {
        if (event.target == modal) {
            modal.style.display = "none";
        }
    };
});

updateDateTime();
setInterval(updateDateTime, 1000);
