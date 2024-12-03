const imaps = require('imap-simple');

exports.handler = async function (context, event, callback) {
  const twiml = new Twilio.twiml.MessagingResponse();

  const incomingMessage = event.Body.trim().toLowerCase();

  if (incomingMessage === 'hello') {
    twiml.message('Do you want to check unseen emails? Reply with "yes" or "no".');
  } else if (incomingMessage === 'yes') {
    try {
      const emailData = await fetchUnseenEmails();
      if (emailData.length === 0) {
        twiml.message('No unseen emails found.');
      } else {
        const emailDetails = emailData.map((email, index) => {
          return `Email ${index + 1}:\nFrom: ${email.from}\nTo: ${email.to}\nSubject: ${email.subject}\nDate: ${email.date}`;
        }).join('\n\n');
        twiml.message(emailDetails.slice(0, 1600)); // WhatsApp character limit
      }
    } catch (error) {
      console.error('Error fetching emails:', error);
      twiml.message('An error occurred while fetching emails.');
    }
  } else {
    twiml.message('Command not recognized. Try "hello" or "yes".');
  }

  callback(null, twiml);
};

// Fetch unseen emails
async function fetchUnseenEmails() {
  const config = {
    imap: {
      user: 'yashlohar158@gmiail.com',
      password: 'evtdhnxgouaoovjm',
      host: 'imap.gmail.com',
      port: 993,
      tls: true,
      tlsOptions: { rejectUnauthorized: false },
    },
  };

  const connection = await imaps.connect(config);
  await connection.openBox('INBOX');
  const searchCriteria = ['UNSEEN'];
  const fetchOptions = { bodies: ['HEADER.FIELDS (FROM TO SUBJECT DATE)'], markSeen: false };

  const messages = await connection.search(searchCriteria, fetchOptions);
  return messages.map((message) => {
    const header = message.parts.find((part) => part.which === 'HEADER.FIELDS (FROM TO SUBJECT DATE)').body;
    return {
      from: header.from[0],
      to: header.to[0],
      subject: header.subject[0],
      date: header.date[0],
    };
  });
}
