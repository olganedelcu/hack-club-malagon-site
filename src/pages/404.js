import React from 'react'
import { Link } from 'gatsby'

import Head from '../components/head'
import Layout from '../components/layout'


const NotFound = () => {
    return(
        <Layout>
            <Head title="Not Found"/>
            <h1>Page not found</h1>
            <p><Link to="/">Head home</Link></p>
        </Layout>
    )
}

export default NotFound