function create(words) {
	const parentElement = document.getElementById('content')

	Array.from(words).forEach(element => {
		const currentDiv = document.createElement('div')
		const currentParagraph = document.createElement('p')
		currentParagraph.textContent = element
		currentParagraph.style.display = 'none'

		currentDiv.appendChild(currentParagraph)
		parentElement.appendChild(currentDiv)

		currentDiv.addEventListener('click', () => {
			currentParagraph.style.display = 'block'
		})
	});
}