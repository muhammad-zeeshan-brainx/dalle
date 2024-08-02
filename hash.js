// Import the crypto module
const crypto = require('crypto');

// The data you want to hash
const secret = 'your-secret-data';

// Create a hash object
const hash = crypto.createHash('sha256');

// Update the hash with the secret data
hash.update(secret);

// Generate the hash in hexadecimal format
const secretHash = hash.digest('hex');

console.log('Generated Secret Hash:', secretHash);
