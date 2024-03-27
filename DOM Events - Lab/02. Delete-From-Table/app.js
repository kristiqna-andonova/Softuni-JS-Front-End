function deleteByEmail() {
    const trElements = document.querySelectorAll('table#customers tbody tr');
    const userInput = document.querySelector('input[name=email]');
    const result = document.getElementById('result')

    const trElement = Array.from(trElements).find(trElement => trElement.children[1].textContent.includes(userInput.value))
    
    if(trElement){
        trElement.remove();

        result.textContent = 'Deleted'
    } else {
        result.textContent = 'Not found.';
    }
    
    userInput.value = '';
}