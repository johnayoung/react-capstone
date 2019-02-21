<h1 align="center"> 
  <br>
  <a href="https://warm-peak-72707.herokuapp.com/">
    <img src="./client/src/style/icons/icon-link.svg" width="200" height="200">
  </a>
  <br>
  API Hub
  <br>
</h1>

<h4 align="center">
  A (not so) Massive Online Repository for API Endpoints
</h4>

<p align="center">
  <a href="https://warm-peak-72707.herokuapp.com/">
    <img src="https://travis-ci.org/johnatspreadstreet/react-capstone.svg?branch=master"
         alt="Travis">
  </a>
</p>

<p align="center">
  <a href="#key-features">Key Features</a> •
  <a href="#preview">Preview</a> •
  <a href="#how-to-use">How To Use</a> •
  <a href="#api">API</a> •
  <a href="#the-stack">The Stack</a> •
  <a href="#a-special-thank-you">A Special Thank You</a> •
  <a href="#related">Related</a> •
  <a href="#license">License</a>
</p>

![screenshot](https://github.com/johnatspreadstreet/react-capstone/blob/master/client/src/style/assets/hero-browse-apis.gif?raw=true)

## Key Features

- Free!
- Search for public APIs
- Quickly and easily navigate query parameters
- GUI for adding endpoints for various Public APIs

## Preview

### Landing Page
![screenshot](https://github.com/johnatspreadstreet/react-capstone/blob/master/client/src/style/assets/landing-page.png?raw=true)

### Browse
![screenshot](https://github.com/johnatspreadstreet/react-capstone/blob/master/client/src/style/assets/browse.png?raw=true)

### Endpoint
![screenshot](https://github.com/johnatspreadstreet/react-capstone/blob/master/client/src/style/assets/endpoint.png?raw=true)

## How To Use

To clone and run this application, you'll need [Git](https://git-scm.com) and [Node.js](https://nodejs.org/en/download/) (which comes with [npm](http://npmjs.com)) installed on your computer. From your command line:

The application can be run in two different ways:
1. Back-end API only
2. Full application
3. Full application with proxy to back-end

Back-end API only
```bash
# Clone this repository
$ git clone https://github.com/johnatspreadstreet/react-capstone.git

# Go into the repository
$ cd react-capstone

# Install dependencies
$ npm install

# Run the backend api
$ npm start
```

Full application
```bash
# Clone this repository
$ git clone https://github.com/johnatspreadstreet/react-capstone.git

# Go into the repository
$ cd react-capstone

# Install dependencies
$ npm install
$ cd client/
$ npm install

# Run the backend api
$ npm start

# Run the front end React app
$ cd client/
$ npm start
```

Full application with proxy to back-end
```bash
# Clone this repository
$ git clone https://github.com/johnatspreadstreet/react-capstone.git

# Go into the repository
$ cd react-capstone

# Install dependencies
$ npm install
$ cd client/
$ npm install

# Make sure you are back in root directory, and run proxy build
$ cd ..
$ npm run proxy
```

Note: If you're using Linux Bash for Windows, [see this guide](https://www.howtogeek.com/261575/how-to-run-graphical-linux-desktop-applications-from-windows-10s-bash-shell/) or use `node` from the command prompt.

## API
API Documentation can be found at the following link: https://warm-peak-72707.herokuapp.com/api/docs

## The Stack

### Front-end
- React
- React-Router
- Redux
- Redux Thunk
- Redux Forms
- Axios
- Highlightjs
- Enzyme
- Jest
- Tailwindcss

### Back-end
- Express
- MongoDB
- Mongoose
- Mocha
- Chai

### Authentication
- JWT
- Passportjs
- Bcryptjs

## A Special Thank You
A very big thank you goes out to the following individuals who helped me create API Hub. It would not have been possible without you:

- [Capi Etheriel](https://github.com/barraponto)
- [Jesse Heaslip](https://github.com/funador)
- [Chris Klanac](https://github.com/cklanac)
- [Joe Turner](https://github.com/oampo)
- All my partners in crime in [Thinkful EI-27](https://github.com/thinkful-ei27)

## Related

To use the website as an Office Add-in, you must do the following:

1. Generate (or use a default) manifest.xml
2. Include the Office JS CDN script in public/index.html
3. Include an Office.onReady() function in the app's entry point
4. npm i office-addin-validator office-toolbox 
5. Include additional polyfills for IE11
6. Add script to package json 'set HTTPS=true&&npm run start'
7. Self-signed certificates for localhost

## License
Honestly, do whatever you want with it. Just give attribution.