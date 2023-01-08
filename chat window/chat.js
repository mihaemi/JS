const chatWindow = document.getElementById('chat')
const sendBtn = document.querySelector('.form-send button') 
// const sendBtn = chatWindow.children[2].firstElementChild.lastElementChild
const chatInput = document.querySelector('#chat input')
// const chatInput = chatWindow.children[2].firstElementChild.firstElementChild
const chatBody = document.querySelector('#chat .chat-body')
// const chatBody = chatWindow.children[1]

let messages = []

function initChat(){
    let chatHidden = !!localStorage.getItem('chatHidden')
    if(!chatHidden){
        openChat()
    }
    sendBtn.addEventListener('click', sendMessage)

    let message_json = localStorage.getItem('messages')
    if(message_json != null) {
        messages = JSON.parse(message_json)
    }
    renderMessages()
}

function sendMessage(e){
    let currentDate = new Date()
    
     
    e.preventDefault()
    let message = { 
        content: chatInput.value + ' ' + currentDate.toLocaleTimeString() ,
        Date: currentDate
         
          
        // HW6: add a property which contains the date
        // hint: Date()
        // when the messages are rendered show hh:mm:ss
        

    }
    messages.push(message)
    chatInput.value = ''

    renderMessages()
    saveMessages()
   
}

function saveMessages(){
    localStorage.setItem('messages', JSON.stringify(messages))
}

function renderMessages() {
    let html = `<ul>`
    // HW: rewrite the code using Array.forEach()
    for(let i=Math.max(messages.length - 6,0); i<messages.length; i++) {
        html += `<li>${messages[i].content}</li>`
    }
    html += `</ul>`
    chatBody.innerHTML = html
}


function openChat(){
    chatWindow.classList.remove('hidden') 
    localStorage.removeItem('chatHidden' )
}

function closeChat(){
    chatWindow.classList.add('hidden')
    localStorage.setItem('chatHidden', true)

}

/*  create a function 'sendMessage' which should be fired when the user clicks
    on the button, or hits ENTER key on input
    the function should read the input value and add it to the end
    of an array cald 'messages'
*/  