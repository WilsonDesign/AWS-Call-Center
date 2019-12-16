const https = require('https');

exports.handler = (event,context,callback) => {
    
    let body = ``;
    let jsonObject = JSON.stringify(event);
    
	var options = {
	"method": "GET",
	"hostname": "us-weather-by-zip-code.p.rapidapi.com",
	"port": null,
	"path": "/getweatherzipcode?zip=75201",
	"headers": {
		"x-rapidapi-host": "us-weather-by-zip-code.p.rapidapi.com",
		"x-rapidapi-key": "9ef146c60cmsh9d0ec05dc709e9dp1a73e8jsn9d47a6c67cea"
    	}
    };
	
	let reqPost =  https.request(options, function(res) {
        console.log("statusCode: ", res.statusCode);
        res.on('data', function (chunk) {
            body += chunk;
        });
        res.on('end', function () {
           console.log("Result", body);
           context.succeed(JSON.parse(body));
        });
        res.on('error', function () {
          console.log("Result Error", body.toString());
          context.done(null, 'FAILURE');
        });
    });
    reqPost.write(jsonObject);
    reqPost.end();
};