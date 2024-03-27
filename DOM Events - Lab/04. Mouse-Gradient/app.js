function attachGradientEvents() {
    const gradientElement = document.getElementById('gradient')
    const resultArea = document.getElementById('result')

    gradientElement.addEventListener('mousemove', (event) => {
        const currentPoint = event.offsetX
        const elementWidth = event.target.clientWidth
        const percent = Math.floor((currentPoint / elementWidth) * 100)
        resultArea.textContent = `${percent}%`
    })

    
}