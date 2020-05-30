import React from 'react'
import { Link } from 'gatsby'

import headerStyles from './header.module.scss'

const Header = () => {
    return (
            <div className={headerStyles.header}>
                <h1>Olga Nedelcu</h1>
                <nav>
                    <ul>
                        <li>
                            <Link to="./about" className={headerStyles.link} >About</Link>
                        </li>
                        <li>
                            <Link to="./index">Home</Link>
                        </li>
                        <li>
                            <Link to="./blog">Blog</Link>
                        </li>
                        <li>
                            <Link to="./contact">Contact</Link>
                        </li>
                    </ul>
                </nav>
            </div>
    )
}

export default Header