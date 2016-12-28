# Node Express/MongoDB + React/Redux App - Zwitter
A basic clone of Twitter (Boilerplate App) using - Node, Express, MongoDB, React and Redux using **create-react-app** with separate **API** `(express+mongo)` and **Frontend** `(react+redux)` folders. Uses Google's Material Design UI (`material-ui` package).

## Features
- List all tweets
- Post a tweet
- Login / Register

## Running
- Clone repo `git clone git@github.com:atulmy/node-express-react-redux-zwitter.git zwitter`
- Install NPM modules for **api** `cd api` and `npm install`
- Install NPM modules for **frontend** `cd frontend` and `npm install`
- Run **api** server `cd api` and `npm start` (runs on port 3001)
- Run **frontend** server `cd frontend` and `npm start` (runs on port 3000, should automatically open `localhost:3000` in your browser)

## Packages Used

### API
- **bcrypt** (Library to help you hash passwords)
- **body-parser** (Parse incoming request bodies)
- **cookie-parser** (Parse Cookie header)
- **express** (Fast, unopinionated, minimalist web framework)
- **jsonwebtoken** (JSON Web Token implementation)
- lodash (Modular utilities)
- moment (Parse, validate, manipulate, and display dates)
- **mongoose** (MongoDB object modeling tool)

### Frontend
- classnames (A simple utility for conditionally joining classNames together)
- **immutability-helper** (Mutate a copy of data without changing the original source)
- **material-ui** (React Components that Implement Google's Material Design)
- moment (Parse, validate, manipulate, and display dates)
- **react** (Library for building user interfaces)
- **react-addons-css-transition-group** (React CSSTransitionGroup add-on)
- **react-dom** (React package for working with the DOM)
- **react-redux** (Official React bindings for Redux)
- **react-router** (v4, A complete routing library for React)
- **react-tap-event-plugin** (Facebook's TapEventPlugin)
- **redux** (Predictable state container for JavaScript apps)
- redux-devtools-extension (Redux DevTools extension)
- **redux-thunk** (Thunk middleware for Redux)

## Screenshots
![screenshot](http://atulmy.com/attachments/images/node-express-react-redux-zwitter.png)

## Authors

Atul Yadav - [GitHub](https://github.com/atulmy) &bull; [Twitter](https://twitter.com/atulmy)
## License

Copyright (c) 2016 Atul Yadav http://github.com/atulmy

The MIT License (http://www.opensource.org/licenses/mit-license.php)

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
