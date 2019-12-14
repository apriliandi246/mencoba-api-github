let profile = require('./profile');

// menampung username dalam bentuk array
let profiles = process.argv.slice(2);

profiles.map(user => {
      profile.get(user);
});