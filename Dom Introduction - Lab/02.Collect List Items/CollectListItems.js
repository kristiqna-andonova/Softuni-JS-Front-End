function extractText() {
    const items = document.getElementById('items');
    const textArea = document.getElementById('result');
    textArea.value = items.textContent; 
}