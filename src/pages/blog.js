import React from 'react'
import { graphql , useStaticQuery } from 'gatsby'

import Layout from '../components/layout'


const BlogContent = () => {
    const data = useStaticQuery(graphql`
    query {
        allMarkdownRemark {
            edges {
                node {
                    frontmatter{
                        title
                        date
                    }
                }
            }
        }
    }
    `)
    return (
        <div>
            <Layout>
            <h1>Blog</h1>
            <ol>
                {data.allMarkdownRemark.edges.map((edge) => {
                    return (
                        <li>
                            <h2>{edge.node.frontmatter.title} </h2>
                            <p>{edge.node.frontmatter.date} </p>    
                        </li>
                    )
                })}
            </ol>
            </Layout>
        </div>
    )
}
export default BlogContent
