const https = require('https');

let get = (username) => {

      // connect to github API
      const options = {
            hostname: 'api.github.com',
            port: 443,
            path: `/users/${username}`,
            method: 'GET',
            headers: {
                  'user-agent': 'nodejs'
            }
      }

      let request = https.request(options, (response) => {
            let body = '';

            response.on('data', (data) => {
                  // maka hasilnya akan menjadi buffer. Buffer adalah bitecode string.
                  body += data;
            });

            response.on('end', () => {
                  let profile = JSON.parse(body);

                  if (response.statusCode === 200) {
                        console.log(`${profile.name} owns ${profile.public_repos} repos and has ${profile.followers} followers`);

                  } else {
                        console.log(`Profile with username '${username}' not found`);
                  }
            });
      });

      request.end();


      // menangani error
      request.on('error', e => {
            console.error(e);
      });

}

module.exports = {
      get
};