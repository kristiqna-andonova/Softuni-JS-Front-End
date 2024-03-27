function sumTable() {
    const elements = document.querySelectorAll('tr td:last-of-type:not(#sum)')
    const sum = document.getElementById('sum')
    sum.textContent = Array.from(elements).reduce((sum, element) => sum + Number(element.textContent), 0)
}