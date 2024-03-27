function subtract() {
    const num1 = document.getElementById('firstNumber')
    const num2 = document.getElementById('secondNumber')
    const result = document.getElementById('result')

    result.textContent = Number(num1.value) - Number(num2.value)
}