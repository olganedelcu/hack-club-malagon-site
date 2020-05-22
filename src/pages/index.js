import React from "react"
import { Link } from 'gatsby'

const IndexPage = () => {
  return (
    <div>
      <h1>Hello,</h1>
      <p>I'm Olga Nedelcu</p>
      <Link to="./contact.js">Contact me!</Link><br />
      <Link to="./blog">Blog🤗</Link><br />
      <Link to="./about">🧐About</Link><br />
    </div>
  )
}
export default IndexPage