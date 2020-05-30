import React from 'react'


import Header from './header'
import Footer from './footer'
import '../styles/index.scss'
import layoutStyles from './layout.module.scss'


const Layout = (props) => {
    return (
        <div className={layoutStyles}>
            <Header />
            {props.children}
            <Footer />
        </div>
    )
}

export default Layout