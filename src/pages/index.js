import React from "react"
import { Link } from 'gatsby'

import Head from '../components/head'
import Layout from'../components/layout'

const IndexPage = () => {
  return (
    <div>
      <Layout>
      <Head title="Home"/>
      <h1>What is Hack Club?</h1>
      <p>Hack Club is a global network of programming clubs where members learn to code through tinkering and building projects.</p>
      <h2>What's Hack Club Malagón?</h2>
      
      
      <p>Nowadays learning to program is like getting a super power‍🚀: switched from consumer to creator.<br /> Suddenly, computers become a tool for creating.
      You have never had a better time to do it; Anywhere in the world, anyone with a laptop and wifi can learn to create an application. Building things has never been so globally democratized!</p>
      <h2>Objective and motivation</h2>
      <p>The goal of Hack Club is to help you become a hacker. "Hacker" is someone with the ability to solve problems, has ambition and wants to explore the world of knowledge.
      </p>
    </Layout>
    </div>  
  )
}


export default IndexPage
