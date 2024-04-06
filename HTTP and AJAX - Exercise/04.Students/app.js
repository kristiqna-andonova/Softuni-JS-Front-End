function attachEvents() {
    const url ='http://localhost:3030/jsonstore/collections/students'

    const tableBody = document.querySelector('tbody')

    const submitButton = document.getElementById('submit')
    submitButton.addEventListener('click', submit)

    async function refresh(){
        tableBody.innerHTML = ''

        let response = await fetch(url)
        let date = await response.json()

        for (let key of Object.keys(date)) {
            let current = date[key]
            
            let tr = document.createElement('tr')

            let firstName = document.createElement('td')
            firstName.textContent = current.firstName

            let lastName = document.createElement('td')
            lastName.textContent = current.lastName

            let faculty = document.createElement('td')
            faculty.textContent = current.facultyNumber

            let grade = document.createElement('td')
            grade.textContent = current.grade

            tr.appendChild(firstName)
            tr.appendChild(lastName)
            tr.appendChild(faculty)
            tr.appendChild(grade)

            tableBody.appendChild(tr)
        }
    }
    refresh()

    async function submit() {
        let firstName = document.getElementsByName('firstName')[0]
        let lastName = document.getElementsByName('lastName')[0]
        let facultyNumber = document.getElementsByName('facultyNumber')[0]
        let grade = document.getElementsByName('grade')[0]

        let student = {
            firstName: firstName.value,
            lastName: lastName.value,
            facultyNumber: facultyNumber.value,
            grade: grade.value
        }

        fetch(baseURL, {
            method: 'POST',
            body: JSON.stringify(student)
        })

        extractStudents()

        firstName.value = ''
        lastName.value = ''
        facultyNumber.value = ''
        grade.value = ''
    }
}

attachEvents();