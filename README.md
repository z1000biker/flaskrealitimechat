# Flask Real-time Chat (Anonymous)

A simple real-time chat application built with **Flask** and **Flask-SocketIO**. This initial version supports anonymous users sending and receiving text messages instantly.

---

## Features
- Real-time messaging using WebSockets.
- Anonymous participation (users are identified as "Anonymous").
- Simple web interface.

---

## Prerequisites
Before you begin, ensure you have the following installed:
- **Python 3.6** or higher
- **pip** (Python package installer)

---

## Installation
Clone the repository (or create the files manually if you haven't already):

```bash
git clone https://github.com/z1000biker/flaskrealitimechat.git
cd flaskrealitimechat
```

Install the required Python packages:

```bash
pip install -r requirements.txt
```

---

## How to Run
Make sure you are in the `flaskrealitimechat` directory in your terminal.

Run the Flask application:

```bash
python app.py
```

Open your web browser and go to [http://127.0.0.1:5000/](http://127.0.0.1:5000/).

Open the same URL in multiple browser tabs or windows to see the real-time communication in action.

---

## Project Structure
```plaintext
flaskrealitimechat/
├── app.py               # Main Flask application and SocketIO handling
├── requirements.txt     # Project dependencies
├── static/              # Static files (CSS and JS)
│   ├── css/
│   │   └── style.css    # Basic styling
│   └── js/
│       └── main.js      # Frontend WebSocket logic
└── templates/           # HTML templates
    └── index.html       # The chat interface
```

---

## Future Enhancements
- [ ] Allow users to set aliases.
- [ ] Implement user authentication and registration.
- [ ] Add support for chat rooms.
- [ ] Implement file and image uploads (potentially using Celery for background processing).
- [ ] Store messages in a database.
- [ ] Improve the user interface and styling.

---

## Repository
[GitHub Repository](https://github.com/z1000biker/flaskrealitimechat)
