import React from 'react';
import { Link } from 'react-scroll';

const Navbar: React.FC = () => {
  return (
    <nav className='fixed w-full bg-secondary shadow z-50'>
      <div className='container mx-auto px-6 py-4 flex justify-between items-center text-primary'>
        <Link to='home' smooth={true} duration={500} className='text-2xl font-bold cursor-pointer'>
          EL
        </Link>
        <div className='flex space-x-6'>
          {['about', 'technologies', 'projects', 'contact'].map((section) => (
            <Link
              key={section}
              to={section}
              smooth={true}
              duration={500}
              className='cursor-pointer capitalize hover:scale-110 transform transition duration-300'
            >
              {section}
            </Link>
          ))}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
