document.addEventListener('DOMContentLoaded', function() {
    const form = document.querySelector('form');

    form.addEventListener('submit', function(event) {
        event.preventDefault(); // Prevent the default form submission

        // Retrieve form input values
        const username = form.querySelector('input[name="username"]').value;
        const email = form.querySelector('input[name="email"]').value;
        const password = form.querySelector('input[name="password"]').value;
        const termsChecked = form.querySelector('input[name="terms"]').checked;

        // Simple validation
        if (username.trim() === '' || email.trim() === '' || password.trim() === '') {
            alert('Please fill in all fields');
            return;
        }

        if (!termsChecked) {
            alert('Please agree to the terms and conditions');
            return;
        }

        // Prepare form data
        const formData = new FormData();
        formData.append('username', username);
        formData.append('email', email);
        formData.append('password', password);

        // Send form data to the server
        fetch('your-server-url', {
            method: 'POST',
            body: formData
        })
        .then(response => {
            if (response.ok) {
                // Handle successful form submission
                alert('Registration successful!');
                form.reset(); // Clear the form
            } else {
                // Handle errors
                alert('Registration failed. Please try again.');
            }
        })
        .catch(error => {
            // Handle network errors
            console.error('Error:', error);
            alert('An error occurred. Please try again later.');
        });
    });
});
