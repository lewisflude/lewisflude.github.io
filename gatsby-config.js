module.exports = {
  siteMetadata: {
    title: 'Lewis Flude',
  },
  pathPrefix: '/lewisflude.github.io',
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
