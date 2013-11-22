node-bugsense
=============

A Node.js implementation of the Bugsense API. It can be installed using:

```
  npm install node-bugsense
```  

Then inside your server.js include the following:

```
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
