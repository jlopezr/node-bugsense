node-bugsense
=============

[![NPM](https://nodei.co/npm/node-bugsense.png)](https://nodei.co/npm/node-bugsense/)

A Node.js implementation of the Bugsense API. It can be installed using:

```javascript
npm install node-bugsense
```  

Then inside your server.js include the following:

```javascript
var bugsense = require('node-bugsense').setAPIKey('<ENTER_YOUR_KEY_HERE>');

//catch all errors in the application
process.on('uncaughtException', function (error) {
  console.error(error.stack);
  bugsense.logError(error)
});

throw new Error("Hmmm we crashed!");
```







This package depends on request:

https://github.com/mikeal/request
