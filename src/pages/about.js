import React from 'react'
import { Link } from 'gatsby'

const Title = () => {
    return (
        <div>
            <h1>About me</h1>
            <p>Like the lyrics let's talk about me baby!</p>
            <Link to="./contact">Contact</Link>
        </div>
    )
}

export default Title 