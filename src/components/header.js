import React from 'react'
import { Link } from 'gatsby'

import headerStyles from './header.module.scss'

const Header = () => {
    return (
            <div className={headerStyles.header}>
                <h1>
                    <Link className={headerStyles.title} to="/">Olga Nedelcu</Link>
                </h1>
                <nav>
                    <ul className={headerStyles.navList}>
                        <li>
                            <Link to="/about" className={headerStyles.navItem} activeClassName={headerStyles.activeNavItem}>About</Link>
                        </li>
                        <li>
                            <Link to="/index" className={headerStyles.navItem} activeClassName={headerStyles.activeNavItem}>Home</Link>
                        </li>
                        <li>
                            <Link to="/blog" className={headerStyles.navItem} activeClassName={headerStyles.activeNavItem}>Blog</Link>
                        </li>
                        <li>
                            <Link to="/contact" className={headerStyles.navItem} activeClassName={headerStyles.activeNavItem}>Contact</Link>
                        </li>
                    </ul>
                </nav>
            </div>
    )
}

export default Header