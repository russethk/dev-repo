var twilio = require('twilio');
var client = new twilio(accountSid, authToken);

client.messages.create({
    body: 'Hello from Node',
    to:   '+14075952578',     // your real-world cell number
    from: '+18449521279'      // your Twilio phone number
})
.then((message) => console.log(message.sid));
.done();
