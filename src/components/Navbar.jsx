import { NavLink } from "react-router-dom";

import { logo } from "../assets/images";

const Navbar = () => {
  const resumeUrl = import.meta.env.VITE_RESUME_URL || "/resume.pdf";
  return (
    <header className='header'>
      <NavLink to='/'>
        <img src={logo} alt='logo' className='w-18 h-18 object-contain' />
      </NavLink>
      <nav className='flex text-lg gap-7 font-medium'>
        <NavLink to='/about' className={({ isActive }) => isActive ? "text-blue-600" : "text-black" }>
          About
        </NavLink>
        <NavLink to='/projects' className={({ isActive }) => isActive ? "text-blue-600" : "text-black"}>
          Projects
        </NavLink>
        <NavLink to='/certificates' className={({ isActive }) => isActive ? "text-blue-600" : "text-black"}>
          Certificates
        </NavLink>
        <a href={resumeUrl} target='_blank' rel='noreferrer' className='text-black hover:text-blue-600'>
          Download Resume
        </a>
      </nav>
    </header>
  );
};

export default Navbar;
