document.addEventListener("DOMContentLoaded", function () {
    const menuToggle = document.getElementById("menuToggle");
    const nav = document.querySelector("nav");
    const topNavbar = document.getElementById("topNavbar");
    const dashCards = document.getElementById("dashCards");
    const monitoringSection = document.getElementById("monitoring-section");
    const controlSection = document.getElementById("control-section"); // Added Control Section

    function updateNavVisibility() {
        const screenWidth = window.innerWidth;

        if (screenWidth >= 769) {
            nav.classList.remove("nav-hidden");
            nav.classList.add("nav-open");
            menuToggle.classList.remove("menuToggle-move");
            topNavbar.classList.remove("navtopbar-move"); 
        } else {
            nav.classList.add("nav-hidden");
            nav.classList.remove("nav-open");
        }
    }

    menuToggle.addEventListener("click", function (event) {
        event.stopPropagation();
        nav.classList.toggle("nav-hidden");
        nav.classList.toggle("nav-open");
        menuToggle.classList.toggle("menuToggle-move");
        topNavbar.classList.toggle("navtopbar-move");

        // ✅ Adjust dashboard cards position when sidebar is toggled
        dashCards.classList.toggle("dashCards-move");

        // ✅ Adjust monitoring-section position when sidebar is toggled
        monitoringSection.classList.toggle("monitoring-move");

        // ✅ Adjust control-section position when sidebar is toggled
        controlSection.classList.toggle("control-move");
    });

    document.addEventListener("click", function (event) {
        const screenWidth = window.innerWidth;
        if (screenWidth < 769) {
            if (!nav.contains(event.target) && !menuToggle.contains(event.target)) {
                nav.classList.add("nav-hidden");
                nav.classList.remove("nav-open");
                menuToggle.classList.remove("menuToggle-move");
                topNavbar.classList.remove("navtopbar-move");

                // ✅ Reset positions when clicking outside
                dashCards.classList.remove("dashCards-move");
                monitoringSection.classList.remove("monitoring-move");
                controlSection.classList.remove("control-move");
            }
        }
    });

    window.addEventListener("resize", updateNavVisibility);
    updateNavVisibility();
});



// PARA PANG TOGGLE NG NIGHT MODE
 document.body.classList.add('light');

        document.getElementById('switchBtn').addEventListener('click', () => { 
            document.body.classList.toggle('dark');
            document.body.classList.toggle('light');

            // Get the <i> element inside the button
            const icon = document.querySelector("#switchBtn i");

            // Toggle icon classes correctly
            if (document.body.classList.contains('dark')) {
                icon.classList.remove('fa-moon');  // Remove moon icon
                icon.classList.add('fa-sun');     // Add sun icon
            } else {
                icon.classList.remove('fa-sun');  // Remove sun icon
                icon.classList.add('fa-moon');    // Add moon icon
            }
        });


// PANG OPEN NG SELECTION SA MGA PC
document.querySelectorAll('.pc-item').forEach(pc => {
    pc.addEventListener('click', function() {
        document.querySelectorAll('.pc-item').forEach(item => {
            if (item == this) {
                item.classList.remove('active'); // Hide others
            }
        });
        this.classList.toggle('active');
    });
});


// PANG SWITCH NG SECTION
document.addEventListener("DOMContentLoaded", function () {
    const dashboardSection = document.getElementById("dashCards");
    const monitoringSection = document.getElementById("monitoring-section");
    const controlSection = document.getElementById("control-section"); // Control Section

    // Sidebar links
    const dashboardLink = document.querySelector("a[href='#dashboard']");
    const monitoringLink = document.querySelector("a[href='#monitoring-section']");
    const controlLink = document.querySelector("a[href='#control-section']"); // Control Section Link

    function showSection(section) {
        if (section === "dashboard") {
            dashboardSection.style.display = "block";
            monitoringSection.style.display = "none";
            controlSection.style.display = "none";
        } else if (section === "monitoring") {
            dashboardSection.style.display = "none";
            monitoringSection.style.display = "block";
            controlSection.style.display = "none";
        } else if (section === "control") {
            dashboardSection.style.display = "none";
            monitoringSection.style.display = "none";
            controlSection.style.display = "block";
        }
    }

    if (dashboardLink) {
        dashboardLink.addEventListener("click", function (e) {
            e.preventDefault();
            showSection("dashboard");
        });
    }

    if (monitoringLink) {
        monitoringLink.addEventListener("click", function (e) {
            e.preventDefault();
            showSection("monitoring");
        });
    }

    if (controlLink) {
        controlLink.addEventListener("click", function (e) {
            e.preventDefault();
            showSection("control");
        });
    }

    // Show only the dashboard by default
    showSection("dashboard");
});


// Open Modal Function
function openModal(pcName, imgSrc) {
    document.getElementById("pcTitle").innerText = "PC Name: " + pcName;
    document.getElementById("pcImage").src = imgSrc;
    document.getElementById("pcModal").style.display = "flex";
}

// Close PC Modal Function
function closeModal() {
    document.getElementById("pcModal").style.display = "none";
}

// Close PC Modal when clicking outside modal-content
// document.getElementById("pcModal").addEventListener("click", closeModal);

document.querySelector(".modal-content").addEventListener("click", function(event) {
    event.stopPropagation();
});

// Send Chat Message
function sendMessage(event) {
    // Allow sending via Enter key or button click
    if (!event || event.key === "Enter") {  
        let chatInput = document.getElementById("chatInput");
        let chatMessages = document.getElementById("chatMessages");

        if (chatInput.value.trim() !== "") {
            let message = document.createElement("p");
            message.classList.add("sent-message");
            message.innerText = chatInput.value;
            chatMessages.appendChild(message);
            chatInput.value = ""; // Clear input after sending
            chatMessages.scrollTop = chatMessages.scrollHeight; // Auto-scroll to latest message
        }
    }
}

// Attach event listener to the send button
document.getElementById("sendButton").addEventListener("click", function () {
    sendMessage(); // Call sendMessage when the button is clicked
});

document.getElementById("fileInput").addEventListener("change", function () {
    let file = this.files[0]; // Get the selected file
    if (file) {
        let chatMessages = document.getElementById("chatMessages");

        // Create a file message container
        let fileMessage = document.createElement("p");
        fileMessage.classList.add("sent-message");

        // Create an object URL for local preview
        let fileURL = URL.createObjectURL(file);

        // Display a clickable file link
        fileMessage.innerHTML = `
            <a href="${fileURL}" download="${file.name}" target="_blank">
                <i class="fas fa-file"></i> ${file.name}
            </a>
        `;

        chatMessages.appendChild(fileMessage);
        this.value = "";

        // Scroll to latest message
        chatMessages.scrollTop = chatMessages.scrollHeight;
    }
});


// Open Chat Modal
document.getElementById("chatToggle").addEventListener("click", function () {
    let chatModal = document.getElementById("chatModal");

    if (chatModal.style.display === "none" || chatModal.style.display === "") {
        chatModal.style.display = "block"; // Open modal
    } else {
        chatModal.style.display = "none"; // Close modal
    }
});


// Close Chat Modal
function closeChatModal() {
    document.getElementById("chatModal").style.display = "none";
}

// Toggle Chat Modal
document.getElementById("chatToggle").addEventListener("click", openChatModal);

// para sa gap to ng mga PCs sa monitoring-section
document.addEventListener("DOMContentLoaded", function () {
    function adjustGap() {
        const pcItems = document.querySelectorAll(".pc-item").length;
        let newGap = 120; // Default gap

        if (pcItems > 10) {
            newGap = Math.max(10, 120 * Math.pow(0.1, pcItems - 10));
        }

        document.documentElement.style.setProperty("--dynamic-gap", `${newGap}px`);
    }

    adjustGap(); // Call on page load

    // Optional: Call adjustGap() when new PCs are added dynamically
    const observer = new MutationObserver(adjustGap);
    observer.observe(document.querySelector(".pc-grid"), { childList: true });
});

// ito yung sa controls pag nag n notif 
document.addEventListener("click", function(event) {
    const pcItem = event.target.closest(".pc-item"); // Get the specific PC clicked
    if (!pcItem) return;

    const pcName = pcItem.querySelector(".pc-info p").innerText; // Extract PC name

    if (event.target.closest(".shutdown")) {
        alert(`Shutting down ${pcName}...`);
    } else if (event.target.closest(".restart")) {
        alert(`Restarting ${pcName}...`);
    } else if (event.target.closest(".startup")) {
        alert(`Starting up ${pcName}...`);
    } else if (event.target.closest(".file-transfer")) {
        alert(`Opening file transfer for ${pcName}...`);
    } else if (event.target.closest(".adv-opt")) {
        alert(`Opening advanced options for ${pcName}...`);
    }
});
