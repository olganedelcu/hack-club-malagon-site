module.exports = {
  siteMetadata: {
    title: 'Hack Club Malagón',
    author:' Olga Nedelcu'
  },
  plugins:[
      'gatsby-plugin-sass',
      {
        resolve: 'gatsby-source-filesystem',
        options: {
          name: 'src',
          path: `${__dirname}/src/`
        }
      },
      'gatsby-transformer-remark'
  ]
}

