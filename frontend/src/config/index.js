// Configurations for Frontend
const NODE_ENV = (process.env.NODE_ENV === 'production') ? 'production' : 'development'

let config = {
  url: {}
}

if (NODE_ENV === 'production') {
  config.url.api = 'https://api.node-express-react-redux-zwitter.demo.atulmy.com/' // Change this URL according to your live server
} else {
  config.url.api = '/'
}

export default config
