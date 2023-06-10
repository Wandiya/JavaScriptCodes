async function loginUser(email, password) {
    try {
        // Send a POST request to the login API endpoint with the user's email and password
        const response = await fetch('/api/login', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ email, password })
        });

        // If the login was successful, return the user data from the response
        if (response.ok) {
            const user = await response.json();
            return user;
        } else {
            // If the login failed, throw an error with the response status and message
            const error = await response.json();
            throw new Error(`${response.status}: ${error.message}`);
        }
    } catch (err) {
        console.error(err);
        throw err;
    }
}
async function registerUser(email, password) {
    try {
        // Send a POST request to the registration API endpoint with the user's email and password
        const response = await fetch('/api/register', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ email, password })
        });

        // If the registration was successful, return the user data from the response
        if (response.ok) {
            const user = await response.json();
            return user;
        } else {
            // If the registration failed, throw an error with the response status and message
            const error = await response.json();
            throw new Error(`${response.status}: ${error.message}`);
        }
    } catch (err) {
        console.error(err);
        throw err;
    }
}