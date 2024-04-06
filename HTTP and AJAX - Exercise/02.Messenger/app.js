function attachEvents() {
    const url = 'http://localhost:3030/jsonstore/messenger'
    
    const textArea = document.getElementById('messages')

    const sendButton = document.getElementById('submit')
    sendButton.addEventListener('click', send)

    const refreshButton = document.getElementById('refresh')
    refreshButton.addEventListener('click', refresh)

    function send(event){
        let author = document.getElementsByName('author')[0].value
        let content = document.getElementsByName('content')[0].value

        let messages = {author, content}

        fetch(url, {
            method: 'POST',
            body: JSON.stringify(messages)
        })
    }

    async function refresh(){
        textArea.textContent = ''

        let response = await fetch(url)
        let date = await response.json()
        
        let messages = []

        for (let m of Object.entries(date)) {
            let currnet = m[1]
            messages.push(`${currnet.author}: ${currnet.content}`)
        }

        textArea.textContent = messages.join('\n')

    }
}

attachEvents();