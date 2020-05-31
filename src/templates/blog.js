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

export const query = graphql`
  query($slug: String!){
    contentfulBlogPost(slug: {eq: $slug}) {
      title
      publishedDate(formatString: "MMMM Do, YYYY")
    }
  }
`

const Blog = (props) => {
  return (
    <div>
      <Layout>
       <h1>{props.data.contentfulBlogPost.title}</h1>
       <p>{props.data.contentfulBlogPost.publishedDate}</p>
      </Layout>
    </div>
  )
}

export default Blog