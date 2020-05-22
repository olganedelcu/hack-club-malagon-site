import React from 'react'
import { Links } from 'gatsby'

const Header = () => {
    return (
        <div>
            <Links to="./about">About</Links>
            <Links to="./blog">Blog</Links>
            <Links to="./contact">Contact</Links>
        </div>
    )
}

export default Header