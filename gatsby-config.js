var proxy = require('http-proxy-middleware')

module.exports = {
  siteMetadata: {
    title: 'Gatsby with styled components',
  },
  plugins: [
    'gatsby-plugin-styled-components',
    {
      resolve: 'gatsby-plugin-typography',
      options: {
        pathToConfigModule: 'src/utils/typography.js',
      },
    },
    {
      resolve: 'gatsby-plugin-google-analytics',
      options: {
        trackingId: 'UA-XXXXXXX-2',
      },
    },
    'gatsby-plugin-react-helmet',
    'gatsby-plugin-offline',
  ],
  developMiddleware: app => {
    app.use(
      '/.netlify/functions/',
      proxy({
        target: 'http://localhost:9000',
        pathRewrite: { '^/.netlify/functions': '' },
        changeOrigin: true,
      })
    )
  },
}
