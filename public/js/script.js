document.addEventListener('DOMContentLoaded', () => {
    // Register form submission
    document.getElementById('registerForm').addEventListener('submit', async (event) => {
        event.preventDefault();
        
        const name = document.getElementById('name').value;
        const email = document.getElementById('email').value;
        const dateOfBirth = document.getElementById('dateOfBirth').value;
        const password = document.getElementById('password').value;
            console.log(name,email,dateOfBirth,password);
        try {
             fetch('/auth/register', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ name, email, dateOfBirth, password })
            });

            
        } catch (error) {
            console.error('Error during registration:', error);
            alert('Registration failed');
        }
    });


//Login Page
document.getElementById('loginForm').addEventListener('submit', async (event) => {
    event.preventDefault();
    
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
    console.log(email,password);

    try {
        fetch('/auth/login', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ email, password })
        });

        // const result = await response.json();
        // if (response.ok) {
        //     //localStorage.setItem('token', result.token);
        //     window.location.href = '/homepage.html';
        // } else {
        //     alert(result.message || 'Login failed');
        // }
    } catch (error) {
        console.error('Error during login:', error);
        alert('Login failed');
    }
});

});