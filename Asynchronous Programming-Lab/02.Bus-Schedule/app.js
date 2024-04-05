function solve() {
    let text = document.getElementById('info')
    let departBtn = document.getElementById('depart')
    let arriveBtn = document.getElementById('arrive')
    let url = 'http://localhost:3030/jsonstore/bus/schedule'
    let currentId = 'depot'
    let next = ''

    function depart() {
        fetch(`${url}/${currentId}`)
        .then(res => res.json())
        .then(date =>{
            text.textContent = `Next stop ${date.name}`
            next = date.name
            currentId = date.next
            departBtn.disabled = true
            arriveBtn.disabled = false
        })
        .catch(err => {
            text.textContent = 'Error'
            departBtn.disabled = true
            arriveBtn.disabled = true
        })
    }

    async function arrive() {
            text.textContent = `Arriving at  ${next}`
            departBtn.disabled = false
            arriveBtn.disabled = true
    }

    return {
        depart,
        arrive
    };
}

let result = solve();