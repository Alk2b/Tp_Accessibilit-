import logo from '@/assets/images/logo.png';

const Footer = () => {
  return (
    <footer className="bg-[#90ADE1] py-12 px-4">
      <div className="container mx-auto max-w-7xl">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
          <div className="lg:col-span-2">
            <div className="flex items-start gap-4"> {/* Added flex container */}
              <img 
                src={logo} 
                alt="Logo Alinia" 
                className="w-12 h-12" // Removed mb-4
              />
              <div className="space-y-2">
                <p className="font-inter">© 2021 All rights reserved</p>
                <p className="font-inter">Mentions légales</p>
                <p className="font-inter">Conditions générales d&apos;utilisation</p>
                <p className="font-inter">Politique de protection des données</p>
                <p className="font-inter">Banque et opérations de services bancaires</p>
              </div>
            </div>
          </div>
          
          {['Pages', 'Social', 'Contact'].map((title) => (
            <div key={title} className="space-y-4">
              <h3 className="font-inria-serif font-bold text-lg">{title}</h3>
              <div className="space-y-2">
                {title === 'Pages' && (
                  <>
                    <p className="font-inter">Nos clients</p>
                    <p className="font-inter">Solutions</p>
                    <p className="font-inter">Opportunités d&apos;emploi</p>
                    <p className="font-inter">Ressources</p>
                    <p className="font-inter">Nouveautés</p>
                  </>
                )}
                {title === 'Social' && (
                  <>
                    <p className="font-inter">LinkedIn</p>
                    <p className="font-inter">Instagram</p>
                    <p className="font-inter">YouTube</p>
                    <p className="font-inter">Twitter</p>
                  </>
                )}
                {title === 'Contact' && (
                  <>
                    <p className="font-inter">Email</p>
                    <p className="font-inter">FAQ</p>
                    <p className="font-inter">Unsubscribe</p>
                    <p className="font-inter">Écrivez-nous</p>
                  </>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </footer>
  );
};

export default Footer;