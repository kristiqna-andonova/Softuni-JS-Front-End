function focused() {
    const inputs = document.querySelectorAll('input[type=text]');
    
    Array.from(inputs).forEach(inputListener => inputListener.addEventListener('focus', (event) => {
        event.target.parentElement.classList.add('focused');
    }))

    Array.from(inputs).forEach(inputListener => inputListener.addEventListener('blur', (event) => {
        event.target.parentElement.classList.remove('focused');
    }))
}