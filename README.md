# Calculator

## Installation
cd to project directory
Use the package manager [npm](https://nodejs.org/en/download/) to install modules.

```bash
npm i express
npm i -g nodemon
```

## Launch
```bash
nodemon calculator.js
```

#### Type this in your browser:
http://localhost:3000/



Express Explained: These routing methods specify a callback function (sometimes called “handler functions”) called when the application receives a request to the specified route (endpoint) and HTTP method. In other words, the application “listens” for requests that match the specified route(s) and method(s), and when it detects a match, it calls the specified callback function.

req is an object containing information about the HTTP request that raised the event. In response to req, you use res to send back the desired HTTP response.
