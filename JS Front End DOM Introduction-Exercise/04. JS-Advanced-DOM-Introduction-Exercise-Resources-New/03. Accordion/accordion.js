function toggle() {
    const currenttextEl = document.getElementById('extra');
    const buttonEl = document.querySelector('.head span.button');

    const button = buttonEl.textContent;

    if(button === 'More'){
        currenttextEl.style.display = 'block';
        buttonEl.textContent = 'Less'
    } else {
        currenttextEl.style.display = 'none';
        buttonEl.textContent = 'More'
    }
}