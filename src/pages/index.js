import React from "react"
import { Link } from 'gatsby'

import Footer from '../pages/components/footer'
import Header from '../pages/components/header'

const IndexPage = () => {
  return (
    <div>
      <Header/>
      <h1>Hello,</h1>
      <p>I'm Olga Nedelcu</p>
      <Link to="./contact.js">Contact me!</Link><br />
      <Link to="./blog">Blog🤗</Link><br />
      <Link to="./about">🧐About</Link><br />
      <Footer />
    </div>
  )
}
export default IndexPage