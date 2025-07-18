document.addEventListener('DOMContentLoaded', function() {
    const signInForm = document.querySelector('.form-wrapper.sign-in form');

    signInForm.addEventListener('submit', function(event) {
        event.preventDefault(); // Prevent the default form submission

        // Retrieve sign-in form input values
        const signInUsername = signInForm.querySelector('input[type="text"]').value;
        const signInPassword = signInForm.querySelector('input[type="password"]').value;
        const signInRememberMe = signInForm.querySelector('input[type="checkbox"]').checked;

        // Simple validation for sign-in form
        if (signInUsername.trim() === '' || signInPassword.trim() === '') {
            alert('Please fill in all fields for sign in');
            return;
        }

        // Prepare sign-in form data
        const signInFormData = new FormData();
        signInFormData.append('username', signInUsername);
        signInFormData.append('password', signInPassword);
        signInFormData.append('rememberMe', signInRememberMe);

        // Send sign-in form data to server endpoint using AJAX
        fetch('your-server-url/signin', {
            method: 'POST',
            body: signInFormData
        })
        .then(response => {
            if (response.ok) {
                // Sign-in successful, redirect the user
                window.location.href = "dashboard.html";
            } else {
                // Sign-in failed, handle the error
                alert('Sign-in failed. Please try again.');
            }
        })
        .catch(error => {
            // Error handling for network errors
            console.error('Error:', error);
            alert('An error occurred. Please try again later.');
        });
    });
});
