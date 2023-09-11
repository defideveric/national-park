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
          <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">
          </span>
        </a>
        <div className="flex md:order-2">
        <a href="/contact"></a>
          {isMobile ? (
            <button
              onClick={toggleDropdown}
              type="button"
              className="inline-flex items-center p-2 text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
              aria-controls="navbar-cta"
              aria-expanded={toggleMenu}
            >
              {toggleMenu ? <AiOutlineClose /> : <HiMenu />}
            </button>
          ) : null}
        </div>
        {isMobile && toggleMenu ? (
          <div
            className="w-full md:hidden"
            id="navbar-cta"
          >
            <ul className="flex flex-col font-medium p-4 mt-4 border border-gray-100 rounded-lg bg-gray-50 space-y-2 dark:bg-gray-800 dark:border-gray-700">
              <li>
                <a href="/home"
                  className="block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100"
                >
                  Home
                </a>
              </li>
              <li>
                <a href="/about"
                  className="block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100"
                >
                  About
                </a>
              </li>
              <li>
                <a href="/services"
                  className="block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100"
                >
                  Services
                </a>
              </li>
              <li>
                <a href="/contact"
                  className="block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100"
                >
                  Contact
                </a>
              </li>
            </ul>
          </div>
        ) : (
          <div className="items-center justify-between hidden w-full md:flex md:w-auto md:order-1" id="navbar-cta">
            <ul className="flex font-medium p-4 md:p-0 mt-4 border border-gray-100 rounded-lg md:flex-row md:space-x-8 md:mt-0 md:border-0 dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
              <li>
                <a href="/home"
                  className="block py-2 pl-3 pr-4 text-blue-700"
                  aria-current="page"
                >
                  Home
                </a>
              </li>
              <li>
                <a href="/about"
                  className="block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100"
                >
                  About
                </a>
              </li>
              <li>
                <a href="/services"
                  className="block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100"
                >
                  Services
                </a>
              </li>
              <li>
                <a href="/contact"
                  className="block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100"
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