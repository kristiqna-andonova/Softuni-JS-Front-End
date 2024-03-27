function addItem() {
    const userInput = document.getElementById("newItemText")
    const listElement = document.getElementById('items')
    const newListItem = document.createElement('li')
    
    newListItem.textContent = userInput.value
    listElement.appendChild(newListItem)

    userInput.value = ''
}