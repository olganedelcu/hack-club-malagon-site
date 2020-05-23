import React from 'react'
import { Link } from 'gatsby'

import './header.scss'

const Header = () => {
    return (
            <div>
                <h1>Olga Nedelcu</h1>
                <nav>
                    <ul>
                        <li>
                            <Link to="./about" className="link">About</Link>
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