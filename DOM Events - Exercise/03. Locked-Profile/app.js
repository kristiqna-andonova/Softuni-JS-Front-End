function lockedProfile() {
    const profiles = document.querySelectorAll('.profile')

    for (const profile of profiles) {
        const showButton = profile.querySelector('button')
        const isLocked = profile.querySelector('input[type=radio][value=lock]')
        showButton.addEventListener('click', (e) => {
            if(isLocked.checked){
                return;
            }

            const hiddenInfo = showButton.previousElementSibling

            hiddenInfo.style.display = hiddenInfo.style.display === 'block' 
                    ? 'none' 
                    : 'block';
            showButton.textContent = showButton.textContent  === 'Show more' 
                    ? 'Hide it' 
                    : 'Show more';
        })
    }
}