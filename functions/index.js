const {setGlobalOptions} = require("firebase-functions");
const {onDocumentCreated} = require("firebase-functions/v2/firestore");
const logger = require("firebase-functions/logger");
const {Resend} = require("resend");

setGlobalOptions({maxInstances: 10});

exports.sendContactEmail = onDocumentCreated(
    "messages/{messageId}",
    async (event) => {
      const message = event.data.data();
      const to = process.env.CONTACT_EMAIL_TO;
      const from = process.env.CONTACT_EMAIL_FROM;

      if (!process.env.RESEND_API_KEY || !to || !from) {
        logger.warn("Contact email env vars are not fully configured.");
        return;
      }

      const resend = new Resend(process.env.RESEND_API_KEY);

      await resend.emails.send({
        from,
        to,
        subject: `New Beit Lechem Tech inquiry from ${message.name}`,
        replyTo: message.email,
        html: `
          <h2>New contact form submission</h2>
          <p><strong>Name:</strong> ${message.name}</p>
          <p><strong>Email:</strong> ${message.email}</p>
          <p><strong>Project type:</strong> ${message.projectType}</p>
          <p><strong>Message:</strong></p>
          <p>${message.message}</p>
        `,
      });

      logger.info("Contact email sent.", {messageId: event.params.messageId});
    },
);
