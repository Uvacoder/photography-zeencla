/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.com/docs/gatsby-config/
 */

require('dotenv').config();

module.exports = {
plugins:[
    {
        resolve: `gatsby-source-cloudinary`,
        options: {
          cloudName: process.env.CLOUDINARY_CLOUD_NAME,
          apiKey: process.env.CLOUDINARY_API_KEY,
          apiSecret: process.env.CLOUDINARY_API_SECRET,
          resourceType: `image`,
          context: true,
          tags: true,
          maxResults: 50
        }
    } ,
    'gatsby-plugin-postcss'
  ]
}
