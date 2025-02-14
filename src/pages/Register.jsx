import logo from '@/assets/images/logo.png';
import rect6 from '@/assets/images/Rectangle6.png';
import rect7 from '@/assets/images/Rectangle7.png';

const Inscription = () => {
  return (
    <div className="min-h-screen bg-white font-inter">
      {/* Header */}
      <header className="py-4 px-6 shadow-sm">
        <div className="flex items-center gap-2">
          <img src={logo} alt="Logo de Lénia" className="w-12 h-12" />
          <h1 className="text-2xl font-newsreader">Lénia</h1>
        </div>
      </header>

      {/* Main Container */}
      <div className="container mx-auto max-w-2xl px-4 py-8">
        <div className="relative mb-8">
          <a 
            href="PageAccueil.html" 
            className="inline-flex items-center text-gray-600 hover:text-[#FF6B6B] transition-colors"
          >
            <span className="mr-2">&lt;</span> Retour
          </a>
          <img src={rect6} alt="" className="w-full mt-4" aria-hidden="true" />
        </div>

        <h2 className="text-3xl font-newsreader mb-6">Inscription</h2>
        
        <div className="mb-8">
          <p className="text-gray-600">
            Déjà un compte ? 
            <a href="Connexion.html" className="text-[#FF6B6B] hover:text-[#FF5555] ml-1">
              Se connecter
            </a>
          </p>
        </div>

        <form className="space-y-6">
          <div className="space-y-4">
            <input
              type="text"
              name="firstName"
              id="firstName"
              placeholder="Prénom"
              required
              className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#FF6B6B]"
            />

            <input
              type="text"
              name="lastName"
              id="lastName"
              placeholder="Nom"
              required
              className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#FF6B6B]"
            />

            <div className="flex gap-2">
              <select
                name="countryCode"
                id="countryCode"
                className="w-24 px-3 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#FF6B6B]"
              >
                <option value="+33">+33</option>
              </select>
              <input
                type="tel"
                name="phoneNumber"
                id="phoneNumber"
                placeholder="Numéro de téléphone"
                required
                className="flex-1 px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#FF6B6B]"
              />
            </div>

            <input
              type="email"
              name="email"
              id="email"
              placeholder="Adresse email"
              required
              className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#FF6B6B]"
            />

            <input
              type="password"
              name="password"
              id="password"
              placeholder="Mot de passe"
              required
              className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#FF6B6B]"
            />

            <input
              type="password"
              name="confirmPassword"
              id="confirmPassword"
              placeholder="Confirmer le mot de passe"
              required
              className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#FF6B6B]"
            />
          </div>

          <div className="flex items-start gap-2">
            <input
              type="checkbox"
              name="termsAndConditions"
              id="termsAndConditions"
              required
              className="mt-1"
            />
            <label htmlFor="termsAndConditions" className="text-sm text-gray-600">
              J&apos;accepte les{" "}
              <a href="#" className="text-[#FF6B6B] hover:text-[#FF5555]">
                conditions générales d&apos;utilisation
              </a>{" "}
              *
            </label>
          </div>

          <button
            type="submit"
            className="w-full bg-[#FF6B6B] text-white py-3 px-6 rounded-lg 
              hover:bg-[#FF5555] transition-colors duration-300
              focus:outline-none focus:ring-2 focus:ring-[#FF6B6B] focus:ring-offset-2"
          >
            Créer mon compte
          </button>
        </form>

        <img src={rect7} alt="" className="w-full mt-8" aria-hidden="true" />
      </div>
    </div>
  );
};

export default Inscription;