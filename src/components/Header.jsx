import logo from '@/assets/images/logo.png';

const Header = () => {
  return (
    <header className="p-5 flex justify-center items-center">
      <div className="shadow-lg p-2 rounded-lg">
        <div className="flex items-center">
          <div className="flex items-center">
            <img
              src={logo}
              alt="Logo Alinia"
              className="w-[60px]"
            />
            <span className="font-pt-serif text-[#699BF7] ml-2 text-5xl">
              ALINIA
            </span>
          </div>
          <nav>
            <ul className="list-none flex justify-center items-center gap-24">
              <li>
                <a href="PageAccueil.html" className="font-roboto text-black">
                  Page d&apos;accueil
                </a>
              </li>
              <li>
                <a
                  href="CeQueLonPropose.html"
                  className="font-roboto text-black"
                >
                  Ce que l&apos;on propose
                </a>
              </li>
              <li>
                <a
                  href="qui sommes nous.html"
                  className="font-roboto text-black"
                >
                  Qui sommes-nous
                </a>
              </li>
              <li>
                <a href="#" className="font-roboto text-black">
                  Établissements partenaires
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
        </div>
      </div>
    </header>
  );
};

export default Header;
