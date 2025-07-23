// confirm.js
const container = document.getElementById('confirmation-container');

// Get data from localStorage
const data = JSON.parse(localStorage.getItem('formData'));

// Create paragraph
const p = document.createElement('p');
p.classList.add('confirmation__message');
p.innerHTML = `
  <strong>Welcome ${data.name}!</strong><br>
  We see you're ${data.age} years old and live in ${data.city}.<br>
  We will send you a confirmation to your email <em>${data.email}</em>.
`;

// Append to page
container.appendChild(p);

// Clear localStorage after displaying
localStorage.removeItem('formData');

const backBtn = document.getElementById('backBtn');

backBtn.addEventListener('click', () => {
    window.location.href = 'index.html'; // Redirect back to the form page  
});
