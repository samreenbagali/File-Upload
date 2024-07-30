// script.js

document.addEventListener('DOMContentLoaded', function() {
    const form = document.querySelector('form');
    const input = document.getElementById('fileInput');
    const infoSpan = document.getElementById('info');

    // Add event listener for file input change
    input.addEventListener('change', () => {
        validateSize();
    });

    // Add event listener for form submission
    form.addEventListener('submit', (e) => {
        e.preventDefault(); // Prevent default HTML form submission

        // Validate file size before uploading
        validateSize();

        // You can add more code here to handle file upload
        alert("Uploading..."); // Placeholder for actual upload logic
    });

    // Function to validate file size
    function validateSize() {
        const file = input.files[0]; // Get the selected file

        if (!file) {
            alert("Error: You need to select a file");
            return;
        }

        const limit = 2 * 1024 * 1024; // 2 MB limit in bytes
        const size = file.size;

        if (size <= limit) {
            const sizeInMb = (size / (1024 * 1024)).toFixed(2);
            alert(`File size OK: ${sizeInMb} MB`);
        } else {
            const sizeInMb = (size / (1024 * 1024)).toFixed(2);
            alert(`Error: File size exceeds 2 MB (${sizeInMb} MB)`);
        }
    }
});
