import { useState, useEffect } from 'react';
import { HiMenu } from 'react-icons/hi';
import { AiOutlineClose } from 'react-icons/ai';
import logo from "/src/assets/national_park_logo.png";

const Header = () => {
    const [isMobile, setIsMobile] = useState(false);
    const [toggleMenu, setToggleMenu] = useState(false);
  
    useEffect(() => {
      const handleResize = () => {
        setIsMobile(window.innerWidth <= 768);
      };
  
      handleResize();
  
      window.addEventListener('resize', handleResize);
      return () => window.removeEventListener('resize', handleResize);
    }, []);
  
    const toggleDropdown = () => {
      setToggleMenu(!toggleMenu);
    };
  
  return (
    <nav>
      <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
        <a href="/" className="flex items-center">
          <img src={logo} width={50} className="mr-3" alt="infinityLuxLogo" />
          <span className="self-center text-2xl font-semibold whitespace-nowrap">
          </span>
        </a>
        <div className="flex md:order-2">
          <a href="/contact"></a>
            {isMobile ? (
              <button
                onClick={toggleDropdown}
                type="button"
                className="inline-flex items-center p-2 text-sm text-gray-500 rounded-lg md:hidden
                 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200"
                aria-controls="navbar-cta"
                aria-expanded={toggleMenu}
                >
                {toggleMenu ? <AiOutlineClose /> : <HiMenu />}
              </button>
            ) : null}
        </div>
        {isMobile && toggleMenu ? (

          <div className="w-full md:hidden">
            <ul className="navBar-mobile">
              <li>
                <a href="/home"
                  className="navBar-links"
                >
                  Home
                </a>
              </li>
              <li>
                <a href="/about"
                  className="navBar-links"
                >
                  About
                </a>
              </li>
              <li>
                <a href="/services"
                  className="navBar-links"
                >
                  Services
                </a>
              </li>
              <li>
                <a href="/contact"
                  className="navBar-links"
                >
                  Contact
                </a>
              </li>
            </ul>
          </div>

        ) : (
          <div className="items-center justify-between hidden w-full md:flex md:w-auto md:order-1" id="navbar-cta">
            <ul className="flex font-medium p-4 md:p-0 mt-4 border border-gray-100 rounded-lg md:flex-row md:space-x-8 
                          md:mt-0 md:border-0">
              <li>
                <a href="/home"
                  className="navBar-links"
                  aria-current="page"
                >
                  Home
                </a>
              </li>
              <li>
                <a href="/about"
                  className="navBar-links"
                >
                  About
                </a>
              </li>
              <li>
                <a href="/services"
                  className="navBar-links"
                >
                  Services
                </a>
              </li>
              <li>
                <a href="/contact"
                  className="navBar-links"
                >
                  Contact
                </a>
              </li>
            </ul>
          </div>
        )}
      </div>
    </nav>
  )
}

export default Header