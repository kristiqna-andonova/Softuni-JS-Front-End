function getInfo() {
    const baseUrl = 'http://localhost:3030/jsonstore/bus/businfo'
    const stopIdElement = document.getElementById('stopId')
    const stopNameElement = document.getElementById('stopName')
    const busesElement = document.getElementById('buses')

    const stop = stopIdElement.value
    fetch(`${baseUrl}/${stop}`)
        .then(response => response.json())
        .then(date => {
            console.log(date)
            stopIdElement.textContent = date.name

            for (let bus of date.buses) {
                const liElement = document.createElement('li')
                liElement.textContent = `Bus ${bus} arrives in ${date.buses[bus]} minutes`
            }
        })
        .catch(() => {
            stopIdElement.textContent = "Error"
        })
}