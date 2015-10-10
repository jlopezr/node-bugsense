var request = require('request')
  , pjson = require(process.cwd() + '/package.json')

var errObject = {
   client: {
      name: pjson.name || "node", // Obligatory
      version: process.version
   },
   exception: {
      message: "", // Obligatory
      where: "", // Obligatory
      klass: "", // Type of exception
      backtrace: "" // Obligatory
   },
   application_environment: {
      phone: "node", // Device model (could be PC or Max) Obligatory
      appver: pjson.version || "version",
      appname: "node", // Obligatory
      osver: process.platform // Obligatory
   }
}

var Bugsense = {

  apiKey     : 'FOOBAR',
  url        : 'https://www.bugsense.com/api/errors',
  appversion : null,
  callback   : null,
  headers    : {'X-BugSense-Api-Key': this.apiKey, 'Content-Type': 'application/x-www-form-urlencoded'},

  setAPIKey: function(apiKey) {

    this.apiKey = apiKey;
    this.headers = {'X-BugSense-Api-Key': this.apiKey};
    return this;

  },
  logError: function(error, extra) {

    errObject.exception.message = error.message;
    if(error.stack) errObject.exception.where = error.stack.split('at')[1];
    errObject.exception.klass = error.type;
    errObject.exception.backtrace = error.stack;

    if(extra) {
        errObject.request = {};
        errObject.request.custom_data = extra;
        errObject.feedback = {};
    }
    //console.log("BUGSENSE REQUEST ", errObject);

    request.post({url:this.url, headers:this.headers, json:errObject}, function (err, res, body) {
        //console.log("BUGSENSE RESPONSE ", body);
    });

  }
};

module.exports = Bugsense;