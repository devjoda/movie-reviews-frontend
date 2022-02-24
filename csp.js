module.exports = {
  dev: {
    'default-src': "'self'", // can be either a string or an array.
    'style-src': ["'self'", 'https://*.google.com'],
    'connect-src': ["'self'", 'https://joda-movie-reviews-backend.herokuapp.com/'],
  },
  prod: {
    'default-src': "'self'", // can be either a string or an array.
    'style-src': ["'self'", 'https://*.google.com'],
    'connect-src': ["'self'", 'https://joda-movie-reviews-backend.herokuapp.com/'],
  },
}
