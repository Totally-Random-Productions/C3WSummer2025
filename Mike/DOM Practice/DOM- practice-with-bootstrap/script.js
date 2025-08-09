// Get for and form inputs
const form = document.getElementById('item-form');

// Get the input field
const formInput = document.getElementById('form-input');

// Get the submit button
const submitButton = document.getElementById('add-item');

// Get the ul element with id "item-list"
const ulElement = document.getElementById('item-list');

// Add event listener to the form
form.addEventListener('submit', function(event) {
    // Prevent the default form submission
    event.preventDefault();
    
    // Get the value from the input field
    const itemValue = formInput.value.trim();
    
    // Check if the input is not empty
    if (itemValue) {
        
        // Create a new list item
        const listItem = document.createElement('li');
        listItem.className = 'list-group-item d-flex justify-content-between align-items-center';
        listItem.textContent = itemValue;
        
        // Create a delete button
        const deleteButton = document.createElement('button');
         // Add a class to the delete button for styling
        deleteButton.classList.add('btn', 'btn-danger', 'btn-sm');
        deleteButton.textContent = 'Delete';
        
        // Add event listener to the delete button
        deleteButton.addEventListener('click', function() {
            ulElement.removeChild(listItem);
        });

        // Append the delete button to the list item
        listItem.appendChild(deleteButton);
        
        // Append the new list item to the item list
        ulElement.appendChild(listItem);
        
        // Clear the input field
        formInput.value = '';
    } else if (formInput.value === '') {
        // If the input is empty, alert the user
        const errorMessage = document.createElement('div');
        errorMessage.className = 'alert alert-danger mt-2';
        errorMessage.textContent = 'Please enter an item.';
        form.appendChild(errorMessage);
    } else if (formInput.value !== '') {
        // Clear any existing error messages
        const existingError = form.querySelector('.alert');
        if (existingError) {
            form.removeChild(existingError);
        }
    }
});