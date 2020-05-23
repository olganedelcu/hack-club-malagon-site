import React from "react"
import { Link } from 'gatsby'

import Layout from'../components/layout'

const IndexPage = () => {
  return (
    <Layout>
       <h1>Hello,</h1>
      <p>I'm Olga Nedelcu</p>
      <Link to="./contact.js">Contact me!</Link><br />
      <Link to="./blog">Blog<span role="img">🤗</span></Link><br />
      <Link to="./about"><span role="img">🧐</span>About</Link><br />
    </Layout>
  )
}


export default IndexPage
