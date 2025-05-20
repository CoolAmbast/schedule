// Animation for table rows loading
        document.addEventListener("DOMContentLoaded", function() {
            const tableRows = document.querySelectorAll("#schedule-body tr");
            
            tableRows.forEach((row, index) => {
                row.style.opacity = "0";
                row.style.animation = `fadeIn 0.5s ease forwards ${index * 0.1}s`;
            });
            
            // Add subtle hover effect to the header
            const header = document.querySelector(".page-header");
            header.addEventListener("mouseover", function() {
                this.style.boxShadow = "0 6px 12px rgba(0, 0, 0, 0.15)";
            });
            
            header.addEventListener("mouseout", function() {
                this.style.boxShadow = "0 4px 6px rgba(0, 0, 0, 0.1)";
            });
        });