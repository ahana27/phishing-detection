document.addEventListener('DOMContentLoaded', function() {
    // Sign-in form
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

        // Simulate sign-in form submission (replace this with your actual server endpoint)
        console.log('Sign-in form submitted with data:', signInFormData);
        
        // Optional: You can redirect the user after successful sign-in
        // window.location.href = "dashboard.html";
    });

    // Register form
    const registerForm = document.querySelector('.form-wrapper.register form');

    registerForm.addEventListener('submit', function(event) {
        event.preventDefault(); // Prevent the default form submission

        // Retrieve register form input values
        const registerUsername = registerForm.querySelector('input[name="username"]').value;
        const registerEmail = registerForm.querySelector('input[name="email"]').value;
        const registerPassword = registerForm.querySelector('input[name="password"]').value;
        const termsChecked = registerForm.querySelector('input[type="checkbox"]').checked;

        // Simple validation for register form
        if (registerUsername.trim() === '' || registerEmail.trim() === '' || registerPassword.trim() === '') {
            alert('Please fill in all fields for registration');
            return;
        }

        if (!termsChecked) {
            alert('Please agree to the terms and conditions');
            return;
        }

        // Prepare register form data
        const registerFormData = new FormData();
        registerFormData.append('username', registerUsername);
        registerFormData.append('email', registerEmail);
        registerFormData.append('password', registerPassword);

        // Simulate register form submission (replace this with your actual server endpoint)
        console.log('Register form submitted with data:', registerFormData);
        
        // Optional: You can redirect the user after successful registration
        // window.location.href = "dashboard.html";
    });
});
