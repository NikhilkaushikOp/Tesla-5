const https = require('https');

// Define the URL you want to send the request to
const url = 'https://example.com';

// Define your cookies as a string
const cookies = 'cookie_name1=cookie_value1; cookie_name2=cookie_value2';

// Options for the GET request
const options = {
  method: 'GET',
  headers: {
    'Cookie': cookies
  }
};

// Make the GET request
const req = https.request(url, options, (res) => {
  let data = '';

  // A chunk of data has been received
  res.on('data', (chunk) => {
    data += chunk;
  });

  // The whole response has been received
  res.on('end', () => {
    console.log('Response:', data);
  });
});

// Handle errors
req.on('error', (error) => {
  console.error('Error:', error);
});

// End the request
req.end();
