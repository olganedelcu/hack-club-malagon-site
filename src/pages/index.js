import React from "react"


import Head from '../components/head'
import Layout from '../components/layout'
import styledIndex from './index.module.scss'

const IndexPage = () => {
  return (
    <div>
      <Layout>
        <Head title="Home" />
        <h1>What is <b>Hack Club</b>😍 ?</h1>
        <p>Hack Club is a global network of programming clubs where members learn to code through tinkering and building projects.</p>
        <p>Link to webpage: <a className={styledIndex.a} href="https://hackclub.com" target="_blank" rel="noreferrer" >🔗Hack Club</a></p>
        <h2>✨What's Hack Club Malagón?</h2>
        <p>Nowadays learning to program is like getting a <b>super power‍</b>🚀: switched from consumer to creator.<br /> Suddenly, computers💻 become a tool for creating.
      You have never had a better time to do it; Anywhere in the world, anyone with a laptop and wifi can learn to create an application. Building things has never been so globally democratized!</p>
        <h2>🏆Objective and motivation</h2>
        <p>The goal of Hack Club is to help you become a <b>hacker👩‍💻</b>. <br />"Hacker" is someone with the ability to solve problems, has ambition and wants to explore the world of knowledge.
      </p>
        <p><i>"We believe in a world where each young person has the power to be the change they want to see around them. At Hack Club , we want to make it happen"
        </i></p>
        <h2>🎒What’s made inside Hack Clubs?</h2>
        <p>Taking a look inside any Hack Club meeting, you will find people working on their
        computers and  building their own projects (websites, games, etc.)🙈 🙉 🙊 . Some students will
        be collaborating together, while others will be developing them independently. These
        students are creating what they want to see in the world without any restrictions😊.<br /> The
        environment inside this club is a friendly, inclusive, and productive one. Whether you’re
        a first-time coder, or you are an expert, Hack Club welcomes students of all levels💯. If
        you don’t know how to code but want to create something, this club is a very good place
        to get started. If you’re an expert, you can grow your skills here by learning new coding
        languages and sharing your projects to inspire others. Outside club meetings, you will
        find fliers promoting the club and club events that are open to all!<br />
        Be welcome to sing up!😍
      </p>
        <h2>🏫Sessions</h2>
        <p>The sessions last 1.5h.<br />In each students will share advances, technological knowledge, applications and future tech goals!Each student is provided with a computer so he/she can work freerly🤓</p>
      </Layout>
    </div>
  )
}


export default IndexPage
