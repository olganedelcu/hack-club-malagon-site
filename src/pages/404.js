import React from 'react'
import { Link } from 'gatsby'

import Head from '../components/head'
import Layout from '../components/layout'


const NotFound = () => {
    return(
        <Layout>
            <Head title="Not Found"/>
            <h1>Page not found</h1>
            <p>Please try to serch for something else</p>
            <p><Link to="/"><b>Head home</b></Link></p>
        </Layout>
    )
}

export default NotFound