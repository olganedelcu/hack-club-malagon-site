import React from 'react'
import { Link, graphql, useStaticQuery } from 'gatsby'

import Layout from '../components/layout'
import blogStyles from './blog.module.scss'

const BlogContent = () => {
    const data = useStaticQuery(graphql`
    query {
        allContentfulBlogPost (sort: {fields: publishedDate ,order:DESC}) {
            edges {
              node {
                title
                slug
                publishedDate(formatString:"MMMM Do, YYYY")
                     }
                }
          }
    }
    `)
    return (
        <div>
            <Layout>
                <h1>Blog</h1>
                <ol className={blogStyles.posts}>
                    {data.allContentfulBlogPost.edges.map((edge) => {
                        return (
                            <li className={blogStyles.post}>
                                <Link to={`/blog/${edge.node.slug}`}>
                                    <h2>{edge.node.title} </h2>
                                    <p>{edge.node.publishedDate} </p>
                                </Link>
                            </li>
                        )
                    })}
                </ol>
            </Layout>
        </div>
    )
}
export default BlogContent
