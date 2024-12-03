const imaps = require('imap-simple');
require('dotenv').config();

const config = {
  imap: {
    user: process.env.EMAIL_USER,
    password: process.env.EMAIL_PASS,
    host: 'imap.gmail.com',
    port: 993,
    tls: true,
    tlsOptions: { rejectUnauthorized: false },
  },
};

async function fetchEmails() {
  try {
    const connection = await imaps.connect(config);
    await connection.openBox('INBOX'); // Open the inbox

    const searchCriteria = ['UNSEEN'];
    const fetchOptions = {
      bodies: ['HEADER.FIELDS (FROM TO SUBJECT DATE)'],
      markSeen: false,
    };

    const messages = await connection.search(searchCriteria, fetchOptions);

    messages.forEach((message) => {
      const header = message.parts.find(
        (part) => part.which === 'HEADER.FIELDS (FROM TO SUBJECT DATE)'
      ).body;
      console.log('From:', header.from ? header.from[0] : 'N/A');
      console.log('To:', header.to ? header.to[0] : 'N/A');
      console.log('Subject:', header.subject ? header.subject[0] : 'N/A');
      console.log('Date:', header.date ? header.date[0] : 'N/A');
      console.log('-----------------------');
    });

    connection.end(); // Close connection
  } catch (error) {
    console.error('Error fetching emails:', error.message);
  }
}

fetchEmails();
