import React, { useState } from 'react'
import { NavItems } from './NavItems'

function Header() {
    const [isOpen, setIsOpen] = useState(false)

    return (
        <header className="header">
            <nav className="navbar">
                <a className="brand" href="#">Medixx</a>
                <input type="checkbox" id="nav" className="hidden" />
                <label for="nav" className="nav-toggle">
                    <span></span>
                    <span></span>
                    <span></span>
                </label>
                <div className="wrapper">
                    <ul className="menu">
                        { NavItems.map((items) => {
                            return (
                                <li className={items.className}><a href="#">{items.title}</a></li>
                            )
                        })}
                    </ul>
                </div>
            </nav>
        </header>
    )
}

export default Header
