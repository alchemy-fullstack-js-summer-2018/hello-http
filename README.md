Test HTTP Server
=====
This is an end-to-end (E2E) tested HTTP server written using Node.js and Chai/Chai-HTTP!

## Get Started
1. Fork and clone the repo.
1. Run `npm i` inside the directory to install all the necessary packages.
1. Run `npm run test:watch` to run the tests.
1. Run `node server.js` to start the server.
1. Navigate to `localhost:3000` to get started!

## API
* If method is `GET` and the URL (path) is `/happy-birthday/<name>`, response will be (in text/html):
```html
<html><body><p>Happy Birthday <strong>name</strong></p></body></html>
```
* If method is `GET` and the URL (path) specifies a custom value, like `/happy-birthday/<name>?custom=<message>`, response will be (in text/html):
```html
<html><body><p>Happy Birthday <strong>name</strong> message</p></body></html>
```
* If method is `GET` and the URL (path) is `/fact`, response will be (in JSON):
```js
{ fact: random cool fact about HTTP }
```