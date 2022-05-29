import React, {useState, useEffect} from 'react'
import logo from '../../images/icon-dept.svg';
import Navigation from '../navigation/Navigation'
import { Link } from "react-router-dom";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scroll, setScroll] = useState(false);

  //Adds a class for the header when we start scrolling
  useEffect(() => {
    window.addEventListener("scroll", () => {
      setScroll(window.scrollY > 50);
    });
  }, []);

  return (
    <>
    <div className={`header ${isMenuOpen ? 'active' : ''} ${scroll && !isMenuOpen ? 'scroll' : ''}`} id='header'>
      <div className='header__wrapper container w100'>
        <div className='header__inner ptb-2 flex items-center'>
          <Link to="/"><img className='header__logo' src={logo} alt=''/></Link>
          <div onClick={()=>setIsMenuOpen(!isMenuOpen)}> 
            <div className='header__button'></div>
          </div>
        </div>
      </div>
    </div>
    <Navigation props={isMenuOpen}/>
    </>
  )
}

export default Header