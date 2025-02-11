import { useState } from 'react';
import { SearchField } from 'react-aria-components';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="relative flex items-center justify-between w-full">
      <button
        className="md:hidden text-black focus:outline-none"
        onClick={toggleMenu}
        aria-label="Toggle menu"
      >
        <svg
          className="w-6 h-6"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M4 6h16M4 12h16m-7 6h7"
          ></path>
        </svg>
      </button>
      <ul
        className={`list-none flex flex-col md:flex-row justify-center items-center gap-4 md:gap-16 md:static bg-white md:bg-transparent w-full md:w-auto transition-all duration-300 ease-in-out ${
          isOpen ? 'top-12 left-0' : 'top-[-200px] left-0'
        }`}
      >
        <li>
          <a href="PageAccueil.html" className="font-roboto text-black">
            Accueil
          </a>
        </li>
        <li>
          <a href="CeQueLonPropose.html" className="font-roboto text-black">
            Offres
          </a>
        </li>
        <li>
          <a href="qui sommes nous.html" className="font-roboto text-black">
            A propos
          </a>
        </li>
        <li>
          <a href="#" className="font-roboto text-black">
            Partenaires
          </a>
        </li>
      </ul>
      <div className="hidden md:flex items-center ml-auto">
        <SearchField
          className="relative"
          aria-label="Search"
        >
          <input
            type="text"
            className="border border-gray-300 rounded-full py-2 px-4 focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="Rechercher..."
          />
          <button
            type="submit"
            className="absolute right-2 top-1/2 transform -translate-y-1/2 text-gray-500 hover:text-gray-700 focus:outline-none"
          >
            <svg
              className="w-5 h-5"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M21 21l-4.35-4.35M17 10a7 7 0 11-14 0 7 7 0 0114 0z"
              ></path>
            </svg>
          </button>
        </SearchField>
      </div>
    </nav>
  );
};

export default Navbar;