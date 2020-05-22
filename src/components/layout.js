import React from 'react'

import Header from './header'
import Footer from './footer'


const Layout = () => {
    return (
        <div>
            <Header />
            {props.children}
            <Footer />
        </div>
    )
}

export default Layout