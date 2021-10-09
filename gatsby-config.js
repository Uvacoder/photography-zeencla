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
          cloudName: `iarenotamnot`,
          apiKey: `474614758638643`,
          apiSecret: `zro75o_Ij8abg4fCFOfCpR4ogSg`,
          resourceType: `image`,
          context: true,
          tags: true,
          maxResults: 50
        }
    } ,
    'gatsby-plugin-postcss'
  ]
}
