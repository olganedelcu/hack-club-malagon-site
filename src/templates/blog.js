import React from 'react'
import { graphql } from 'gatsby'

import Layout from '../components/layout'

// export const query = graphql`
// query (
//     $slug: String!
//   ) { 
//     markdownRemark (
//      fields: {
//        slug: {
//          eq: $slug
//        }
//      }
//    ) {
//      frontmatter {
//         title 
//        date
//      }
//       html
//    }
//  }
// `



const Blog = (props) => {
  return (
    <div>
      <Layout>
       
      </Layout>
    </div>
  )
}

export default Blog