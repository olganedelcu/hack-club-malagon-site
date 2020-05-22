import React from 'react'
import { Link } from 'gatsby'
import Footer from '../pages/components/footer' 
import Header from '../pages/components/header'

const Title = () => {
    return (
        <div>
            <Header />
            <h1>About me</h1>
            <p>Like the lyrics let's talk about me baby!</p>
            <Link to="./contact">Contact</Link>
            <br />
            <Footer />
        </div>
    )
}

export default Title 