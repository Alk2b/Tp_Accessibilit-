import { useState } from 'react';
import { SearchField } from 'react-aria-components';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav 
      className="relative flex items-center justify-between w-full"
      role="navigation"
      aria-label="Navigation principale"
    >
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
        className={`list-none flex flex-col md:flex-row justify-center items-center gap-4 md:gap-16 
          md:static bg-white md:bg-transparent w-full md:w-auto transition-all duration-300 ease-in-out
          ${isOpen ? 'absolute top-12 left-0 p-4 shadow-lg rounded-lg' : 'hidden md:flex'}`}
        role="menubar"
      >
        {[
          { href: "/", label: "Accueil" },
          { href: "CeQueLonPropose.html", label: "Offres" },
          { href: "qui sommes nous.html", label: "A propos" },
          { href: "#", label: "Partenaires" }
        ].map(({ href, label }) => (
          <li key={label} role="none">
            <a 
              href={href} 
              className="font-roboto text-black hover:text-[#FF6B6B] transition-colors duration-200"
              role="menuitem"
            >
              {label}
            </a>
          </li>
        ))}
      </ul>

      <div className="hidden md:flex items-center ml-auto">
        <SearchField
          className="relative"
          aria-label="Search"
        >
          <input
            type="text"
            className="border border-gray-300 rounded-full py-2 px-4 focus:outline-none focus:ring-2 focus:ring-[#FF6B6B]"
            placeholder="Rechercher..."
          />
          <button
            type="submit"
            className="absolute right-2 top-1/2 transform -translate-y-1/2 text-gray-500 hover:text-[#FF6B6B] focus:outline-none"
            aria-label="Lancer la recherche"
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