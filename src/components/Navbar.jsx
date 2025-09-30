import { NavLink } from "react-router-dom";
import { useState } from "react";
import { logo } from "../assets/images";

const Navbar = () => {
  const resumeUrl = import.meta.env.VITE_RESUME_URL || "/resume.pdf";
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
  };

  return (
    <header className='header'>
      <NavLink to='/' onClick={closeMobileMenu}>
        <img src={logo} alt='logo' className='w-18 h-18 object-contain' />
      </NavLink>

      {/* Desktop Navigation */}
      <nav className='hidden md:flex text-lg gap-7 font-medium'>
        <NavLink 
          to='/about' 
          className={({ isActive }) => isActive ? "text-blue-600" : "text-black hover:text-blue-600"}
        >
          About
        </NavLink>
        <NavLink 
          to='/projects' 
          className={({ isActive }) => isActive ? "text-blue-600" : "text-black hover:text-blue-600"}
        >
          Projects
        </NavLink>
        <NavLink 
          to='/certificates' 
          className={({ isActive }) => isActive ? "text-blue-600" : "text-black hover:text-blue-600"}
        >
          Certificates
        </NavLink>
        <a 
          href={resumeUrl} 
          target='_blank' 
          rel='noreferrer' 
          className='text-black hover:text-blue-600'
        >
          Download Resume
        </a>
      </nav>

      {/* Mobile Hamburger Button */}
      <button
        className='md:hidden flex flex-col gap-1.5 z-50'
        onClick={toggleMobileMenu}
        aria-label='Toggle menu'
      >
        <span className={`block w-6 h-0.5 bg-black transition-transform ${isMobileMenuOpen ? 'rotate-45 translate-y-2' : ''}`}></span>
        <span className={`block w-6 h-0.5 bg-black transition-opacity ${isMobileMenuOpen ? 'opacity-0' : ''}`}></span>
        <span className={`block w-6 h-0.5 bg-black transition-transform ${isMobileMenuOpen ? '-rotate-45 -translate-y-2' : ''}`}></span>
      </button>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className='md:hidden absolute top-full left-0 right-0 bg-white shadow-lg border-t border-gray-200 z-40'>
          <nav className='flex flex-col p-6 gap-4'>
            <NavLink 
              to='/about' 
              onClick={closeMobileMenu}
              className={({ isActive }) => `text-lg font-medium ${isActive ? "text-blue-600" : "text-black"}`}
            >
              About
            </NavLink>
            <NavLink 
              to='/projects' 
              onClick={closeMobileMenu}
              className={({ isActive }) => `text-lg font-medium ${isActive ? "text-blue-600" : "text-black"}`}
            >
              Projects
            </NavLink>
            <NavLink 
              to='/certificates' 
              onClick={closeMobileMenu}
              className={({ isActive }) => `text-lg font-medium ${isActive ? "text-blue-600" : "text-black"}`}
            >
              Certificates
            </NavLink>
            <a 
              href={resumeUrl} 
              target='_blank' 
              rel='noreferrer' 
              className='text-lg font-medium text-black'
              onClick={closeMobileMenu}
            >
              Download Resume
            </a>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Navbar;