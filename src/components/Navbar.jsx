const Navbar = () => {
    return (
      <nav>
        <ul className="list-none flex justify-center items-center gap-24 ">
          <li>
            <a href="PageAccueil.html" className="font-roboto text-black">
              Accueil
            </a>
          </li>
          <li>
            <a
              href="CeQueLonPropose.html"
              className="font-roboto text-black"
            >
              Offres
            </a>
          </li>
          <li>
            <a
              href="qui sommes nous.html"
              className="font-roboto text-black"
            >
              A propos
            </a>
          </li>
          <li>
            <a href="#" className="font-roboto text-black">
              Partenaires
            </a>
          </li>
          <li>
            <a
              href="Connexion.html"
              className="bg-[#699BF7] text-white px-4 py-3 rounded font-inter"
            >
              Se connecter
            </a>
          </li>
        </ul>
      </nav>
    );
  };
  
  export default Navbar;