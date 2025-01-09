document.getElementById('contactForm').addEventListener('submit', function(e) { 
    e.preventDefault();
    
    const form = e.target;
    const formData = new FormData(form);
    const errors = [];

    // Validate required fields
    if (!formData.get('firstName').trim()) {
        errors.push('First name is required');
    }
    
    if (!formData.get('lastName').trim()) {
        errors.push('Last name is required');
    }
    
    if (!formData.get('email').trim()) {
        errors.push('Email is required');
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.get('email'))) {
        errors.push('Please enter a valid email address');
    }
    
    if (!formData.get('queryType')) {
        errors.push('Please select a query type');
    }
    
    if (!formData.get('message').trim()) {
        errors.push('Message is required');
    }
    
    if (!formData.get('consent')) {
        errors.push('Please consent to being contacted');
    }

    if (errors.length === 0) {
        // Form is valid - you would typically send the data to a server here
        showSuccessMessage();
        form.reset();
    } else {
        // Show first error
        showErrorMessage(errors[0]);
    }
});

// Helper functions for showing messages
function showSuccessMessage() {
    const successMessage = document.createElement('div');
    successMessage.className = 'success-message';
    successMessage.style.cssText = `
        position: fixed;
        top: 20px;
        right: 20px;
        background-color: #4CAF50;
        color: white;
        padding: 1rem;
        border-radius: 0.5rem;
        box-shadow: 0 2px 5px rgba(0,0,0,0.2);
    `;
    successMessage.textContent = 'Form submitted successfully!';
    
    document.body.appendChild(successMessage);
    
    setTimeout(() => {
        successMessage.remove();
    }, 3000);
}

function showErrorMessage(message) {
    const errorMessage = document.createElement('div');
    errorMessage.className = 'error-message';
    errorMessage.style.cssText = `
        position: fixed;
        top: 20px;
        right: 20px;
        background-color: #cc0000;
        color: white;
        padding: 1rem;
        border-radius: 0.5rem;
        box-shadow: 0 2px 5px rgba(0,0,0,0.2);
    `;
    errorMessage.textContent = message;
    
    document.body.appendChild(errorMessage);
    
    setTimeout(() => {
        errorMessage.remove();
    }, 3000);
}
