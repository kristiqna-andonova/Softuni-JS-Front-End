function addItem() {
    const userInput = document.getElementById("newItemText")
    const listElement = document.getElementById('items')
    const newListItem = document.createElement('li')
    
    newListItem.textContent = userInput.value
    listElement.appendChild(newListItem)

    userInput.value = ''

    const deletedElement = document.createElement('a')
    deletedElement.textContent = '[Delete]'
    deletedElement.href = '#'

    newListItem.appendChild(deletedElement)

    deletedElement.addEventListener('click', () => newListItem.remove())
}
