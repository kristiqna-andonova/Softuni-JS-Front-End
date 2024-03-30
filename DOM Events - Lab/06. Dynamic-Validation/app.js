function validate() {
    const input = document.getElementById('email')
    const validate = /[a-z]+@[a-z]+\.[a-z]+/

    input.addEventListener('change', (event) => {
        if(!validate.test(event.target.value)){
            event.target.classList.add('error')
        } else {
            event.target.classList.remove('error')
        }
    })
}