import { useState } from 'react';
import logo from '../../assets/b.jpg';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isProfileOpen, setIsProfileOpen] = useState(false);

  // Toggle mobile menu visibility
  const toggleMenu = () => { setIsMenuOpen(!isMenuOpen);};
  // Toggle profile dropdown
  const toggleProfileDropdown = () => {setIsProfileOpen(!isProfileOpen);};

  return (
    <nav className="bg-gray-700">
    <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
      <div className="relative flex h-16 items-center justify-between">
        {/* Logo Section */}
        <div className="flex flex-1 items-center justify-center sm:justify-start">
          <div className="flex shrink-0 items-center ">
              <img className="h-8 w-auto" src={logo} alt="Your Company" />
              <a
            href="#"
            className="px-2 font-inter font-bold text-lg text-gray-100 hover:bg-gray-700 hover:text-white"
          >
            BB Bats
          </a>
          </div>
        </div>

        {/* Hamburger Menu (Mobile Version) */}
        <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
          <button
            onClick={toggleMenu}
            type="button"
            className="relative inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
            aria-controls="mobile-menu"
            aria-expanded={isMenuOpen ? 'true' : 'false'}
          >
            <span className="sr-only">Open main menu</span>
            {/* Hamburger icon */}
            <svg
              className={`block h-6 w-6 ${isMenuOpen ? 'hidden' : 'block'}`}
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              aria-hidden="true"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
              />
            </svg>
            {/* Close icon */}
            <svg
              className={`h-6 w-6 ${isMenuOpen ? 'block' : 'hidden'}`}
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              aria-hidden="true"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>
        </div>
        
        {/* Menu Links (Desktop Version) */}
        <div
          className={`hidden sm:flex sm:ml-6 sm:space-x-4 sm:justify-center sm:items-center w-full ${
            isMenuOpen ? 'hidden' : 'block'
          }`}
        >
          <a
            href="#"
            className="rounded-md bg-gray-800 px-3 py-2 text-sm font-medium text-white"
            aria-current="page"
          >
            Customize Your Bat
          </a>
          <a
            href="#"
            className="rounded-md px-3 py-2 text-sm font-medium text-gray-300 hover:bg-slate-600 hover:text-white"
          >
            Cricket Bats
          </a>
          <a
            href="#"
            className="rounded-md px-3 py-2 text-sm font-medium text-gray-300 hover:bg-slate-600 hover:text-white"
          >
            About Us
          </a>
          <a
            href="#"
            className="rounded-md px-3 py-2 text-sm font-medium text-gray-300 hover:bg-slate-600 hover:text-white"
          >
            Contact Us
          </a>
          <a
            href="#"
            className="rounded-md px-3 py-2 text-sm font-medium text-gray-300 hover:bg-slate-600 hover:text-white"
          >
            Accessories
          </a>
      
          </div>
          
          
        {/* Profile Icon (Right Side) */}
        <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
          {/* Profile Dropdown Button */}
          <div className="relative">
            <button
              onClick={toggleProfileDropdown}
              type="button"
              className="relative flex items-center rounded-full bg-gray-800 text-sm focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800"
              id="user-menu-button"
              aria-expanded={isProfileOpen ? 'true' : 'false'}
              aria-haspopup="true"
            >
              <span className="sr-only">Open user menu</span>
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="white" class="size-7">
  <path fill-rule="evenodd" d="M18.685 19.097A9.723 9.723 0 0 0 21.75 12c0-5.385-4.365-9.75-9.75-9.75S2.25 6.615 2.25 12a9.723 9.723 0 0 0 3.065 7.097A9.716 9.716 0 0 0 12 21.75a9.716 9.716 0 0 0 6.685-2.653Zm-12.54-1.285A7.486 7.486 0 0 1 12 15a7.486 7.486 0 0 1 5.855 2.812A8.224 8.224 0 0 1 12 20.25a8.224 8.224 0 0 1-5.855-2.438ZM15.75 9a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0Z" clip-rule="evenodd" />
</svg>






            </button>

            {/* Dropdown Menu */}
            {isProfileOpen && (
              <div
                className="absolute right-0 z-10 mt-2 w-48 origin-top-right rounded-md bg-white py-1 shadow-lg ring-1 ring-black/5 focus:outline-none"
                role="menu"
                aria-orientation="vertical"
                aria-labelledby="user-menu-button"
              >
                <a
                  href="#"
                  className="block px-4 py-2 text-sm text-gray-700"
                  role="menuitem"
                >
                  Your Cart
                </a>
                
                <a
                  href="#"
                  className="block px-4 py-2 text-sm text-gray-700"
                  role="menuitem"
                >
                  Register Your Account
                </a>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>

    {/* Mobile Menu Overlay */}
    <div
      className={`fixed inset-0 z-10 bg-gray-800 bg-opacity-50 transition-opacity duration-300 ${
        isMenuOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'
      }`}
      onClick={toggleMenu}
    ></div>

    {/* Mobile Menu */}
    <div
      className={`fixed left-0 top-0 z-20 h-full w-64 bg-gray-900 text-white transform transition-transform duration-300 ease-in-out ${
        isMenuOpen ? 'translate-x-0' : '-translate-x-full'
      }`}
    >
      {/* Close Button (X) */}
      <button
        onClick={toggleMenu}
        className="absolute top-4 right-4 text-gray-400 hover:text-white"
      >
        <svg
          className="h-6 w-6"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          aria-hidden="true"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M6 18L18 6M6 6l12 12"
          />
        </svg>
      </button>

      {/* Menu Links */}
      <div className="space-y-1 px-2 pt-2 pb-3">
        <a
          href="#"
          className="block rounded-md bg-gray-900 px-3 py-2 text-base font-medium text-white"
          aria-current="page"
        >
          &nbsp;
        </a>
        <a
          href="#"
          className="block rounded-md bg-gray-900 px-3 py-2 text-base font-medium text-white"
          aria-current="page"
        >
          Customise Your Bat
        </a>
        <a
          href="#"
          className="block rounded-md px-3 py-2 text-base font-medium text-gray-300 hover:bg-gray-700 hover:text-white"
        >
          Cricket Bats
        </a>
        <a
          href="#"
          className="block rounded-md px-3 py-2 text-base font-medium text-gray-300 hover:bg-gray-700 hover:text-white"
        >
          About Us
        </a>
        <a
          href="#"
          className="block rounded-md px-3 py-2 text-base font-medium text-gray-300 hover:bg-gray-700 hover:text-white"
        >
          Contact Us
        </a>
        <a
          href="#"
          className="block rounded-md px-3 py-2 text-base font-medium text-gray-300 hover:bg-gray-700 hover:text-white"
        >
          Accessories
        </a>
      </div>
    </div>
  </nav>
  );
};

export default Navbar;
