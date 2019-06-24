let plus = document.getElementById('+')
let minus = document.getElementById('-')
let counter = document.getElementById("counter")
let heart = document.getElementById('<3')
let likes = document.getElementsByClassName('likes')
let pauseButton = document.getElementById('pause')
let commentList = document.getElementById('list')
let commentForm = document.getElementById('comment-form')
let submit = document.getElementById('submit')

plus.addEventListener('click', function() {
    counter.innerText = parseInt(counter.innerText, 10) + 1
})

minus.addEventListener('click', function() {
    counter.innerText = parseInt(counter.innerText, 10) - 1
})

heart.addEventListener('click', function() {
    let likesId = document.getElementById(counter.innerText)
    
    if (likesId) {
        let number = parseInt(likesId.innerText.split(":")[1].trim(), 10)
        likesId.innerText = `${counter.innerText}: ${number + 1}`
    } else {
        let li = document.createElement("LI")
        li.setAttribute('id', counter.innerText)
        li.appendChild(document.createTextNode(`${counter.innerText}: 1`))
        likes[0].appendChild(li)
    }
})

function increment() {
    counter.innerText = parseInt(counter.innerText, 10) + 1
}

var t = setInterval(increment, 1000)

function pause() {
    clearInterval(t)
}

pauseButton.addEventListener('click', function(){
    pause();
    let status = pauseButton.innerText

    if (status === "pause") { 
        plus.disabled = true
        minus.disabled = true
        heart.disabled = true
        submit.disabled = true
        pauseButton.innerText = "resume"
    } else {
        plus.disabled = false
        minus.disabled = false
        heart.disabled = false
        submit.disabled = false
        t = setInterval(increment, 1000)
        pauseButton.innerText = "pause"
    }
})

document.getElementById('submit').addEventListener('click', function(){
    content = commentForm.querySelector("input").value
    div = document.createElement("div")
    div.innerText = content
    commentList.appendChild(div)
})


