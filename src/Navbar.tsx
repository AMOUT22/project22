import React, { useState, useRef } from 'react';
import logo from "./logo.png";
import frenchflag from "./french.png";
import engkishflag from "./english.png";
import { Link } from 'react-router-dom';


function Navbar() {

  const [open, setOpen] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [language, setLanguage] = useState('french'); 
  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  const toggleLanguage = () => {
    setLanguage(prevLanguage => (prevLanguage === 'english' ? 'french' : 'english'));
  };
  const closeNavbar = () => {
    setOpen(false);
  };
  return (
    <nav className='sticky top-0 bg-[#FEFEFE] h-21 z-50'>
      <div className=' flex items-center font-medium justify-around '>
        <div className=' z-50 p-5 md:w-auto w-full flex justify-between '>
          <img src={logo} alt="logo" className='md:cursor-pointer h-9' />
          <div className='text-3xl md:hidden' onClick={() => setOpen(!open)}>
            {open ? (
              <>
                <i className="fa-solid fa-xmark text-[#005BAF]  "></i>
              </>
            ) : (
              <i className="fa-solid fa-bars text-[#005BAF] "></i>
            )}
          </div>
        </div>
        <ul className='hover:underline md:flex hidden cursor-pointer flex items-center gap-8 text-xs text-[#ffffff]'>
          <li className='py-7 px-3 inline-block text-gray-800 hover:text-blue-500 transition duration-300 ease-in-out transform hover:scale-110'>
            <Link to="/"> Acceuil</Link>
          </li>
          <li className='py-7 px-3 text-sminline-block text-gray-800 hover:text-blue-500 transition duration-300 ease-in-out transform hover:scale-110'>
            <button className='flex items-center space-x-2 focus:outline-none' onClick={toggleDropdown}>
            <Link to="/proposition"> Achat</Link>
              <span></span>
              <svg
                className={`h-4  w-4 transform ${isDropdownOpen ? 'rotate-180' : ''} transition-transform`}
                xmlns='http://www.w3.org/2000/svg'
                viewBox='0 0 20 20'
                fill='currentColor'
              >
                
                <path
                  fillRule='evenodd'
                  d='M6.293 7.293a1 1 0 011.414 0L10 9.586l2.293-2.293a1 1 0 111.414 1.414l-3 3a1 1 0 01-1.414 0l-3-3a1 1 0 010-1.414z'
                  clipRule='evenodd'
                />
              </svg>
            </button>
            {isDropdownOpen && (
              <div className=' dropp absolute top-8 left-0 bg-[#ffffff] border mt-6 border-gray-300 shadow-lg rounded-md p-2  w-40 h-22 space-y-2 text-[#000000]'>
                <a href='' className='block text-gray-800 hover:text-blue-500'>
                 <Link to="/proposition"> Appartements</Link>
                </a>
                <a href='#' className='block text-gray-800 hover:text-blue-500'>
                  <Link to="/proposition"> Garages </Link>
                </a>
              </div>
            )}
          </li>
          <li className='py-7 px-3 inline-block text-gray-800 hover:text-blue-500 transition duration-300 ease-in-out transform hover:scale-110'>
            <Link to='/aboutus'>A propos de nous</Link>
          </li>
          <li className='py-7 px-3 inline-block text-gray-800 hover:text-blue-500 transition duration-300 ease-in-out transform hover:scale-110'>
             <Link to="/valeurs">Agents</Link>
          </li>
        </ul>
        <div className='md:flex hidden'>
          
          <div className='ml-4 flex items-center'>
            <button onClick={toggleLanguage} className='focus:outline-none'>
              {language === 'english' ? (
                <>
                <img src={engkishflag} alt="English Flag" width="24" height="24" />
                <p className="text-sm">ENG</p></>
                ) : (
                  <>
                    <img src={frenchflag} alt="French Flag" width="24" height="24" />
                    <p className="text-sm">FR</p>
                  </>
              )}
            </button>
            
          </div>
          <button className='bg-[#005BAF] text-[#FFFFFF] mx-6 text-xs text-white py-2 px-6 rounded-md '>
             <Link to="/contact">CONTACTER NOUS</Link>
          </button>
        </div>
      </div>

      <ul   className={`cursor-pointer
        md:hidden bg-[#F4F8FD] text-[#005BAF] fixed w-full top-0 overflow-y-auto bottom-0 py-24 pl-4
        duration-500 ${open ? "left-0" : "left-[-100%] "}
        `}>                
                    <li className='py-7 px-3 '> <Link to="/" onClick={closeNavbar}> Acceuil</Link></li>
                    
                    <li className='py-7 px-3 text-sminline-block text-gray-800 hover:text-blue-500  transform '>
            <button className='flex items-center space-x-2 focus:outline-none' onClick={toggleDropdown}>
              <Link to="/proposition" onClick={closeNavbar}> Achat</Link>
              <svg
                className={`h-4 w-4 transform ${isDropdownOpen ? 'rotate-180' : ''} transition-transform`}
                xmlns='http://www.w3.org/2000/svg'
                viewBox='0 0 20 20'
                fill='currentColor'
              >
                <path
                  fillRule='evenodd'
                  d='M6.293 7.293a1 1 0 011.414 0L10 9.586l2.293-2.293a1 1 0 111.414 1.414l-3 3a1 1 0 01-1.414 0l-3-3a1 1 0 010-1.414z'
                  clipRule='evenodd'
                />
              </svg>
            </button>
            {isDropdownOpen && (
              <div className='absolute top-8 left-0 bg-[#ffffff] border mt-6 border-gray-300 shadow-lg rounded-md p-2 mt-4 w-40 h-22 space-y-2 text-[#000000]'>
                <a href='#' className='block text-gray-800 hover:text-blue-500'>
                  Appartements
                </a>
                <a href='#' className='block text-gray-800 hover:text-blue-500'>
                  Garages
                </a>
              </div>
            )}
          </li>

                    <li className='py-7 px-3 hover:text-blue-500'> <Link to="/aboutus" onClick={closeNavbar}>A propos de nous</Link> </li>
                    <li className='py-7 px-3 hover:text-blue-500'> Agents</li> 
                    <div className='ml-4 flex items-center'>
                        <button onClick={toggleLanguage} className='focus:outline-none'>
                          {language === 'english' ? (
                            <>
                            <img src={engkishflag} alt="English Flag" width="24" height="24" />
                            <p>ENG</p></>
                            ) : (
                              <>
                                <img src={frenchflag} alt="French Flag" width="24" height="24" />
                                <p>FR</p>
                              </>
                          )}
                        </button></div>
                    <div className='py-5 '>
              <button className="bg-[#005BAF] text-[#FFFFFF] font-bold py-2 px-6 rounded">NOUS CONTACTER</button>
           </div>
              </ul>
    </nav>
  );
}

export default Navbar;
