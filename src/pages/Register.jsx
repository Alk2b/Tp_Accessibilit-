import rect6 from '@/assets/images/Rectangle 6.png';
import rect7 from '@/assets/images/Rectangle 7.png';

const Register = () => {
  return (
    <div className="min-h-screen bg-white font-inter">

      <main className="container mx-auto max-w-2xl px-4 py-8">
        <div className="relative mb-8">
          <a 
            href="/"
            className="inline-flex items-center text-gray-600 hover:text-[#FF6B6B] transition-colors"
          >
            <span className="mr-2">&lt;</span> Retour
          </a>
          <img 
            src={rect6} 
            alt="" 
            className="w-full max-w-md mx-auto h-auto mt-4" 
            aria-hidden="true" 
          />
        </div>

        <h2 className="text-3xl font-newsreader mb-6">Inscription</h2>
        
        <form className="space-y-6">
          {/* Informations personnelles */}
          <div className="grid grid-cols-2 gap-4">
            <div>
              <label htmlFor="firstName" className="block text-sm font-medium text-gray-700 mb-1">
                Prénom *
              </label>
              <input
                type="text"
                name="firstName"
                id="firstName"
                required
                className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#FF6B6B]"
              />
            </div>
            <div>
              <label htmlFor="lastName" className="block text-sm font-medium text-gray-700 mb-1">
                Nom *
              </label>
              <input
                type="text"
                name="lastName"
                id="lastName"
                required
                className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#FF6B6B]"
              />
            </div>
          </div>

          {/* Groupe adresse */}
          <fieldset className="border rounded-lg p-4">
            <legend className="text-sm font-medium text-gray-700 px-2">Adresse</legend>
            <div className="space-y-4">
              <div>
                <label htmlFor="street" className="block text-sm font-medium text-gray-700 mb-1">
                  Numéro et rue
                </label>
                <input
                  type="text"
                  name="street"
                  id="street"
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#FF6B6B]"
                />
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label htmlFor="postalCode" className="block text-sm font-medium text-gray-700 mb-1">
                    Code postal
                  </label>
                  <input
                    type="text"
                    name="postalCode"
                    id="postalCode"
                    pattern="[0-9]*"
                    maxLength="5"
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#FF6B6B]"
                  />
                </div>
                <div>
                  <label htmlFor="city" className="block text-sm font-medium text-gray-700 mb-1">
                    Ville
                  </label>
                  <input
                    type="text"
                    name="city"
                    id="city"
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#FF6B6B]"
                  />
                </div>
              </div>
            </div>
          </fieldset>

          {/* Autres informations */}
          <div className="space-y-4">
            <div>
              <label htmlFor="phoneNumber" className="block text-sm font-medium text-gray-700 mb-1">
                Téléphone
              </label>
              <input
                type="tel"
                name="phoneNumber"
                id="phoneNumber"
                className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#FF6B6B]"
              />
            </div>

            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                Email *
              </label>
              <input
                type="email"
                name="email"
                id="email"
                required
                className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#FF6B6B]"
              />
            </div>

            <div>
              <label htmlFor="password" className="block text-sm font-medium text-gray-700 mb-1">
                Mot de passe *
              </label>
              <input
                type="password"
                name="password"
                id="password"
                required
                className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#FF6B6B]"
              />
            </div>
          </div>

          {/* ...existing code for terms and submit button... */}
        </form>

        <img 
          src={rect7} 
          alt="" 
          className="w-full max-w-md mx-auto h-auto mt-8" 
          aria-hidden="true" 
        />
      </main>
    </div>
  );
};

export default Register;