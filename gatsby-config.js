module.exports = {
  siteMetadata: {
    title: 'Lewis Flude',
  },
  plugins: [
    'gatsby-plugin-react-helmet',
    'gatsby-plugin-sass',
    {
      resolve: `gatsby-plugin-google-fonts`,
      options: {
        fonts: [
          `IBM+Plex+Mono`,
        ]
      }
    }
  ],
  
}
