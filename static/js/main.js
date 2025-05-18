var socket = io();

socket.on('connect', function() {
    console.log('Connected to WebSocket');
});

socket.on('message', function(data) {
    console.log('Received message: ' + data.text);
    var chatbox = document.getElementById('chatbox');
    var messageElement = document.createElement('p');
    messageElement.innerHTML = '<strong>' + (data.user || 'Anonymous') + ':</strong> ' + data.text; // Use 'Anonymous' if user is not provided
    chatbox.appendChild(messageElement);
    chatbox.scrollTop = chatbox.scrollHeight; // Auto-scroll to the bottom
});

function sendMessage() {
    var messageInput = document.getElementById('messageInput');
    var message = messageInput.value;
    if (message.trim() !== '') {
        socket.emit('message', { 'user': 'Anonymous', 'text': message }); // Replace 'Anonymous' with actual user if you add auth
        messageInput.value = '';
    }
}

// Send message on Enter key press
document.getElementById('messageInput').addEventListener('keypress', function(event) {
    if (event.key === 'Enter') {
        sendMessage();
    }
});