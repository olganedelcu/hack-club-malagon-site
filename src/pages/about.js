import React from 'react'
import { Link } from 'gatsby'

import Layout from '../components/layout'

const Title = () => {
    return (
        <div>
            <Layout>
                <h1>About me</h1>
                <p>Like the lyrics let's talk about me baby!</p>
                <Link to="./contact">Contact</Link>
                <br />
            </Layout>
        </div>
    )
}

export default Title 