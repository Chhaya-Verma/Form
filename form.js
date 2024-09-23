document.getElementById('myForm').addEventListener('submit', function (event) {
    event.preventDefault(); // Prevent form submission

    let isValid = true;

    // Clear previous error messages
    document.querySelectorAll('.error-msg').forEach(function (span) {
        span.textContent = '';
    });

    // Fetch values
    const name = document.getElementById('name').value.trim();
    const dob = document.getElementById('dob').value.trim();
    const age = parseInt(document.getElementById('age').value.trim());
    const email = document.getElementById('email').value.trim();
    const password = document.getElementById('password').value.trim();
    const number = document.getElementById('number').value.trim();
    const address = document.getElementById('address').value.trim();

    // Name validation
    const namePattern = /^[a-zA-Z\s]+$/;
    if (!namePattern.test(name)) {
        document.getElementById('nameError').textContent = "Name must contain only letters.";
        isValid = false;
    }

    // DOB validation 
    if (dob === "") {
        document.getElementById('dobError').textContent = 'please fill out this fiedl';
        isValid = false;
    }

    // Age validation
    if (isNaN(age) || age < 18) {
        document.getElementById('ageError').textContent = 'Age must be at least 18.';
        isValid = false;
    }

    // Email validation
    const emailPattern = /^[a-zA-Z0-9._-]+@navgurukul\.org$/;
    if (!emailPattern.test(email)) {
        document.getElementById('emailError').textContent = 'Please enter a valid NavGurukul email (e.g., example@navgurukul.org).';
        isValid = false;
    }

    // Password validation (at least 8 characters)
    if (password.length < 8) {
        document.getElementById('passwordError').textContent = 'Password must be at least 8 characters long.';
        isValid = false;
    }

    // Mobile number validation (exactly 10 digits)
    if (number.length !== 10 || isNaN(number)) {
        document.getElementById('numberError').textContent = 'Phone number must be exactly 10 digits.';
        isValid = false;
    }

    // Address validation (cannot be empty)
    if (address === "") {
        document.getElementById('addressError').textContent = 'Address cannot be empty.';
        isValid = false;
    }

    // If all validations pass, allow form submission
    if (isValid) {

        const formData = {
            name: name,
            dob: dob,
            age: age,
            email: email,
            password: password,
            number: number,
            address: address
        }
        localStorage.setItem('formData', JSON.stringify(formData));

        alert('Form submitted successfully!');
        document.getElementById('myForm').submit(); // Submit the form
    }


});