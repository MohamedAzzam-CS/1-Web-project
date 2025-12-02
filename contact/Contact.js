
        document.getElementById('contactForm').addEventListener('submit', function(e) {
            e.preventDefault();
            
            // Form Data
            const firstName = document.getElementById('firstName').value;
            const lastName = document.getElementById('lastName').value;
            const email = document.getElementById('email').value;
            
            // Basic Verification
            if (!firstName || !lastName || !email) {
                alert('Please fill in all required fields');
                return;
            }
            
            // Display success message
            alert('The form has been sent successfully! Thank you.');
            
            // Reset the form
            this.reset();
        });