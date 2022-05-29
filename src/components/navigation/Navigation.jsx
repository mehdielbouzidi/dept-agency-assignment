import React from 'react'
import menuItems from '../../data/menu-items.json'
import { Link } from 'react-router-dom'

const MenuItems = () => {
  return (
      menuItems.map((item, index) => {
          return (
            <li key={index}><Link to={item.link}> {item.label} </Link></li>
          )
      })
  )
}

const Navigation = (isMenuOpen) => {
  return (
    <div className={`${isMenuOpen.props ? 'nav' : 'nav-hidden'}`}>
      <nav className='nav__content container'>
        <ul>
          <MenuItems/>        
        </ul>
      </nav>
    </div>
  )
}

export default Navigation