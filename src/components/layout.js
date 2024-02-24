import * as React from 'react'
import { Link } from 'gatsby'
import { container, heading, navLinks, navLinkItems, navLinkText } from './layout.module.css'

const Layout = ({ pageTitle, children }) => {
    return (
        <div className={container}>
            <nav>
                <ul className={navLinks}>
                    <li className={navLinkItems}>
                        <Link className={navLinkText} to='/'>
                            Home
                        </Link>
                    </li>
                    <li className={navLinkItems}>
                        <Link className={navLinkText} to='/about'>
                            About
                        </Link>
                    </li>
                </ul>
            </nav>
            <main>
                <h1 className={heading}>{pageTitle}</h1>
                {children}
            </main>
        </div>
    )
}

export default Layout