import React from 'react'
import { Link } from 'gatsby'

import Layout from '../components/layout'
import Head from '../components/head'


const Title = () => {
    return (
        <div>
            <Layout>
                <Head title="About"/>
                <h1>About Us</h1>
                <p>Hack Club Malagón is a club were students gather and beautiful things happen</p>
                <Link to="./contact">Contact us</Link>
                <br />
            </Layout>
        </div>
    )
}

export default Title 