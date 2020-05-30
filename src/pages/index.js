import React from "react"
import { Link } from 'gatsby'

import Layout from'../components/layout'

const IndexPage = () => {
  return (
    <div>
      <Layout>
      <h1>Hello,</h1>
      <p>I'm Olga Nedelcu</p>
      <Link to="/contact">Contact me!</Link>
      <Link to="/blog">Blog🤗</Link>
      <Link to="/about">🧐About</Link>
    </Layout>
    </div>
    
  )
}


export default IndexPage
