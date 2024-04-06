function attachEvents() {
    let url = 'http://localhost:3030/jsonstore/phonebook'
    
    const listElement = document.getElementById('phonebook')

    const loadButton = document.getElementById('btnLoad')
    loadButton.addEventListener('click', load)

    const createButton = document.getElementById('btnCreate')
    createButton.addEventListener('click', onCreate)

    async function load(even){
        let response = await fetch(url)
        let date = await response.json()

        for (let phoneObj of Object.entries(date)) {
            let phoneDate = phoneObj[1]

            let li = document.createElement('li')
            li.textContent = `${phoneDate.person}: ${phoneDate.phone}`

            let deleteButton = document.createElement('button')
            deleteButton.textContent = `Delete`
            deleteButton.addEventListener('click', onDelete)

            li.appendChild(deleteButton)
            listElement.appendChild(li)

            async function onDelete(){
                fetch(`${url}/${phoneDate._id}`, {
                    method: 'DELETE'
                })
                li.remove() 
            }
        }
    }

    async function  onCreate(event){
        let person = document.getElementById('person').value
        let phone = document.getElementById('phone').value

        let number = {
            person,phone
        }

        fetch(url, {
            method: 'POST',
            body: JSON.stringify(number)
        })

        person.value = ''
        phone.value = ''
        load()
    }
}

attachEvents();