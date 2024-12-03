

# EmailFetcher

**EmailFetcher** is a Node.js-based project designed to automate the fetching, reading, and replying to emails directly through WhatsApp. Built using **Twilio**, **imap-simple**, and **Node.js**, it allows seamless communication between email and WhatsApp platforms.

---

## 🚀 Features

- Fetch emails from your inbox using IMAP.
- Parse and display email details (sender, subject, content) on WhatsApp.
- Reply to emails directly through WhatsApp.
- Simple and intuitive setup for seamless automation.

---

## 🛠️ Tech Stack

- **Node.js**: Backend runtime.
- **imap-simple**: Email fetching and parsing using IMAP.
- **Twilio**: WhatsApp API integration.
- **JavaScript**: Core language for implementation.

---

## 📂 Folder Structure

```
EmailFetcher/
├── src/
│   ├── index.js          # Main application file
│   ├── emailService.js   # Email fetching and parsing logic
│   ├── whatsappService.js # Twilio WhatsApp messaging logic
│   └── config.js         # Configuration settings (Twilio, IMAP)
├── .env                  # Environment variables
├── package.json          # Project dependencies and scripts
└── README.md             # Project documentation
```

---

## ⚙️ Setup

### Prerequisites
1. **Node.js** (v16 or later)
2. A Twilio account with a verified WhatsApp sandbox.
3. An email account with IMAP access (e.g., Gmail, Yahoo).

### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/your-username/EmailFetcher.git
   cd EmailFetcher
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Set up your `.env` file with the following variables:
   ```env
   TWILIO_ACCOUNT_SID=your_twilio_account_sid
   TWILIO_AUTH_TOKEN=your_twilio_auth_token
   TWILIO_WHATSAPP_NUMBER=whatsapp:+your_twilio_number
   IMAP_USER=your_email@example.com
   IMAP_PASSWORD=your_email_password
   IMAP_HOST=imap.your_email_provider.com
   IMAP_PORT=993
   ```

---

## 🏃 Usage

1. Start the application:
   ```bash
   npm start
   ```

2. Open WhatsApp and send a message to your Twilio WhatsApp number (e.g., "fetch emails").

3. Respond to an email by replying to the WhatsApp message.

---

## 🤝 Contributing

Contributions are welcome! Feel free to:
- Report bugs
- Suggest features
- Submit pull requests

---



## 🌐 Connect

- **Email**: yashlohar158@gmail.com
- **GitHub**: https://github.com/yashmalvi525
- **LinkedIn**: https://www.linkedin.com/in/yash-malvi-867458227/

---

Let me know if you'd like to customize this further or need help creating other files!
