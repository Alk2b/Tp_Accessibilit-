import logo from '@/assets/images/logo.png';

const Footer = () => {
    return (
      <footer className="flex p-5 bg-[#90ADE1] mt-12">
        <img src={logo} alt="Logo" className="left-12 w-12 h-12" />
        <div className="flex flex-col justify-center mr-[25%]">
          <p className="font-inter mb-2">© 2021 All rights reserved</p>
          <p className="font-inter mb-2">Mentions légales</p>
          <p className="font-inter mb-2">Conditions générales d&apos;utilisation</p>
          <p className="font-inter mb-2">Politique de protection des données</p>
          <p className="font-inter mb-2">Banque et opérations de services bancaires</p>
        </div>
        {['Pages', 'Social', 'Contact'].map((title) => (
          <div key={title} className="flex flex-col mr-12">
            <p className="font-inria-serif font-bold text-lg mb-2">{title}</p>
            {title === 'Pages' && (
              <>
                <p className="font-inter mb-2">Nos clients</p>
                <p className="font-inter mb-2">Solutions</p>
                <p className="font-inter mb-2">Opportunités d&apos;emploi</p>
                <p className="font-inter mb-2">Ressources</p>
                <p className="font-inter mb-2">Nouveautés</p>
              </>
            )}
            {title === 'Social' && (
              <>
                <p className="font-inter mb-2">LinkedIn</p>
                <p className="font-inter mb-2">Instagram</p>
                <p className="font-inter mb-2">YouTube!</p>
                <p className="font-inter mb-2">Twitter</p>
              </>
            )}
            {title === 'Contact' && (
              <>
                <p className="font-inter mb-2">Email!</p>
                <p className="font-inter mb-2">FAQ!</p>
                <p className="font-inter mb-2">Unsubscribe!</p>
                <p className="font-inter mb-2">Écrivez-nous!</p>
              </>
            )}
          </div>
        ))}
      </footer>
    );
  };
  
  export default Footer;