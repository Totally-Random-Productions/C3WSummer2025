// Get input elements

const inputs = document.querySelectorAll('.form__input');
const submitButton = document.querySelector('.btn');

submitButton.addEventListener('click', function(event) {
        // Prevent form submission
        event.preventDefault(); 

        let isValid = true;

        // Validate inputs 
        inputs.forEach(input => {
            if (input.value.trim() === '') {
                isValid = false;
                input.classList.add('error'); // Add a red border
            } else {
                input.classList.add('valid'); // Add a green border
                input.classList.remove('error'); // Remove red border if valid
            }
        });

        // If all fields are filled
        if (isValid) {
            const name = inputs[0].value;
            const email = inputs[1].value;
            const age = inputs[2].value;
            const city = inputs[4].value;

            // Store data in localStorage
            localStorage.setItem('formData', JSON.stringify({ name, email, age, city }));

            // Redirect to confirmation page
            window.location.href = 'confirmation.html';
            } else {
                alert('Please fill in all required fields.');
            }

        // Clear the inputs
        inputs.forEach(input => input.value = '');
});


