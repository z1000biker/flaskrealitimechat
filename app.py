from flask import Flask, render_template
from flask_socketio import SocketIO, emit

app = Flask(__name__)
app.config['SECRET_KEY'] = 'your-simple-secret-key' # Change this to a random strong key
socketio = SocketIO(app)

@app.route('/')
def index():
    return render_template('index.html')

@socketio.on('message')
def handle_message(data):
    print('received message: ' + str(data))
    # Emit the received message to all connected clients
    emit('message', data, broadcast=True)

if __name__ == '__main__':
    # Use socketio.run() to run the Flask development server with WebSocket support
    socketio.run(app, debug=True)