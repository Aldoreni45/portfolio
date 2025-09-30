import { Link } from "react-router-dom";
import { socialLinks } from "../constants";

const Footer = () => {
  return (
    <footer className='footer font-poppins'>
      <hr className='border-slate-200' />

      <div className='footer-container flex-col sm:flex-row gap-4 sm:gap-7'>
        <p className='text-center sm:text-left text-sm sm:text-base'>
          © 2025 <strong>Aldo Reni T</strong>. All rights reserved.
        </p>

        <div className='flex gap-4 justify-center items-center'>
          {socialLinks.map((link) => (
            <Link key={link.name} to={link.link} target='_blank'>
              <img
                src={link.iconUrl}
                alt={link.name}
                className='w-6 h-6 sm:w-7 sm:h-7 object-contain hover:scale-110 transition-transform'
              />
            </Link>
          ))}
        </div>
      </div>
    </footer>
  );
};

export default Footer;