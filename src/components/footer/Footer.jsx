import React from 'react'
import logo from '../../images/icon-dept.svg'
import Twitter from '../../images/icon-twitter.svg'
import Facebook from '../../images/icon-fb.svg'
import Instagram from '../../images/icon-instagram.svg'
import menuItems from '../../data/menu-items.json'
import { Link } from 'react-router-dom'

const scrollToTop = () => {
    window.scrollTo(0, 0)
};

const MenuItems = () => {
    return (
        menuItems.map((item, index) => {
            return (
                item.footer ? <li key={index}><Link to={item.link}> {item.label} </Link></li> : null
            )
        })
    )
}

const Footer = () => {
    return (
        <footer className='footer flex'>
            <div className='footer__wrapper'>
                <div className='footer__inner container ptb-5'>
                    <nav className='footer__nav flex w100'>
                        <img src={logo} alt='' className='footer__logo'/>
                        <ul className='footer__menu'>
                            <MenuItems/>
                        </ul>
                        <ul className='footer__socials'>
                            <li><img src={Facebook} alt='Facebook'/></li>
                            <li><img src={Twitter} alt='Twitter'/></li>
                            <li><img src={Instagram} alt='Instagram'/></li>
                        </ul>
                    </nav>
                    <div className='footer__information flex'>
                        <ul>
                            <li>Chamber of Commerce: 63464101</li>
                            <li>VAT: NL 8552.47.502.B01</li>
                            <li>Terms and conditions</li>
                            <li>© 2018 Dept Agency</li>
                        </ul>
                    </div>
                </div>
            </div>
            <div className='footer__scroll-block flex items-center'>
                <Link to='/'><button className='footer__top-button' onClick={scrollToTop}>🠕 TOP</button></Link>
            </div>
        </footer>
    )
}

export default Footer