function attachEvents() {
    const urlP ='http://localhost:3030/jsonstore/blog/posts'
    const urlC ='http://localhost:3030/jsonstore/blog/comments'
    
    const loadButton = document.getElementById('btnLoadPosts')
    const selectorElement = document.getElementById('posts')
    const viewButton = document.getElementById('btnViewPost')
    
    loadButton.addEventListener('click', load)
    viewButton.addEventListener('click', view)

    allPosts = {}

    async function load(event){
        selectorElement.innerHTML = ''
        let postRequest = await fetch(urlP)
        allPosts = await postRequest.json()
        console.log(allPosts)

        for(let postArr of Object.entries(allPosts)){
            let opions = document.createElement("option")
            opions.textContent = postArr[1].title
            opions.value = postArr[0]
            selectorElement.appendChild(opions)
        }
    }

    async function view(event){
        let currentPostObject = document.getElementById('posts')
        let currentPostComments = []

        let allCommentsResponse = await fetch(urlC)
        let allComments = await allCommentsResponse.json()
        
        for (let commentArr of Object.entries(allComments)) {
            if (commentArr[1].postId === currentPostObject.value) {
                currentPostComments.push(commentArr[1].text)
            }
        }

        let chosenPost = allPosts[currentPostObject.value]
    
        let titleElement = document.getElementById('post-title')
        titleElement.textContent = chosenPost.title

        let postContentElement = document.getElementById('post-body')
        postContentElement.textContent = chosenPost.body

        let ul = document.getElementById('post-comments')
        ul.innerHTML = ''
        for (let comment of currentPostComments) {
            let li = document.createElement('li')
            li.textContent = comment
            ul.appendChild(li)
        }
    }
}



attachEvents();