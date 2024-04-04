import React from 'react'
import './Nav.sass'

type NavProps = {}

const Nav: React.FC<NavProps> = (props) => {
    return (
        <nav className="main-nav container">
            <ul>
                <li className="all-brands"><a href="/all-brands">Все бренды</a></li>
                <li className="other-brands"><a href="/farfetch">Farfetch</a></li>
                <li className="other-brands"><a href="/asos">ASOS</a></li>
                <li className="other-brands"><a href="/zara">Zara</a></li>
                <li className="other-brands"><a href="/handm">H&M</a></li>
                <li className="other-brands"><a href="/massimo-dutti">Massimo Dutti</a></li>
            </ul>
        </nav>
    )
}

export default Nav