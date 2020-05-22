import React from 'react'
import { Links, Link } from 'gatsby'

const Header = () => {
    return (
        <header>
            <h1>Olga Nedelcu</h1>
            <nav>
                <ul>
                    <li>
                        <Links to="./about">About</Links>
                    </li>
                    <li>
                        <Link to="/">Home</Link>
                    </li>
                    <li>
                        <Links to="./blog">Blog</Links>
                    </li>
                    <li>
                        <Links to="./contact">Contact</Links>
                    </li>
                </ul>
            </nav>
        </header>
    )
}

export default Header