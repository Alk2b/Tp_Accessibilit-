import { Link } from "react-router-dom";
import logo from "@/assets/images/logo.png";

const Footer = () => {
  return (
    <footer className="bg-[#90ADE1] py-12 px-4">
      <div className="container mx-auto max-w-7xl">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
          <div className="lg:col-span-2">
            <div className="flex items-start gap-4">
              <img src={logo} alt="Logo Alinia" className="w-12 h-12" />
              <div className="space-y-2">
                <p className="font-inter">
                  © {new Date().getFullYear()} Tous droits réservés
                </p>
              </div>
            </div>
          </div>

          {["Pages", "Contact"].map((title) => (
            <div key={title} className="space-y-4">
              <h3 className="font-inria-serif font-bold text-lg">{title}</h3>
              <div className="space-y-2">
                {title === "Pages" && (
                  <>
                    <Link to="/mentions-legales" className="font-inter">
                      Mentions légales
                    </Link>
                    <br />
                    <Link
                      to="/declaration-accessibilite"
                      className="font-inter"
                    >
                      Déclaration d&apos;accessibilité
                    </Link>
                  </>
                )}
                {title === "Contact" && (
                  <>
                    <p className="font-inter">Email</p>
                    <p className="font-inter">FAQ</p>
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
