import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import rect6 from '@/assets/images/Rectangle 6.png';
import rect7 from '@/assets/images/Rectangle 7.png';

// Composant Toast pour afficher les notifications
const Toast = ({ message, type, onClose }) => {
  const bgColor = type === 'success' ? 'bg-green-50 border-green-500' : 'bg-red-50 border-red-500';
  const textColor = type === 'success' ? 'text-green-700' : 'text-red-700';

  return (
    <div 
      className={`${bgColor} border-l-4 p-4 mb-6`}
      role="alert"
      aria-live="polite"
    >
      <div className="flex justify-between items-center">
        <p className={textColor}>{message}</p>
        <button 
          onClick={onClose}
          className="text-gray-500 hover:text-gray-700"
          aria-label="Fermer la notification"
        >
          &times;
        </button>
      </div>
    </div>
  );
};

const Register = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    street: '',
    postalCode: '',
    city: '',
    phoneNumber: '',
    email: '',
    password: '',
    termsAccepted: false
  });
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }));
  };

  const validateForm = () => {
    const errors = [];
    if (!formData.firstName) errors.push('Le prénom est requis');
    if (!formData.lastName) errors.push('Le nom est requis');
    if (!formData.email) errors.push('L\'email est requis');
    if (!formData.password) errors.push('Le mot de passe est requis');
    if (!formData.termsAccepted) errors.push('Vous devez accepter les conditions d\'utilisation');
    
    if (formData.email && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      errors.push('Format d\'email invalide');
    }
    if (formData.postalCode && !/^\d{5}$/.test(formData.postalCode)) {
      errors.push('Le code postal doit contenir 5 chiffres');
    }

    return errors;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');
    setSuccess('');

    const validationErrors = validateForm();
    if (validationErrors.length > 0) {
      setError(validationErrors.join('. '));
      return;
    }

    try {
      // Simulation d'un appel API
      await new Promise((resolve) => setTimeout(resolve, 1000));
      setSuccess('Inscription réussie ! Vous allez être redirigé...');
      
      setTimeout(() => {
        navigate('/');
      }, 2000);
    } catch (err) {
      setError('Une erreur est survenue lors de l\'inscription. Veuillez réessayer.');
    }
  };

  return (
    <div className="min-h-screen bg-white font-inter pt-20">
      <main className="container mx-auto max-w-2xl px-4 py-8">
  <div className="space-y-4 mb-6">
    <button 
      onClick={() => navigate('/')}
      className="text-3xl font-newsreader text-gray-700 hover:text-[#FF6B6B] transition-colors"
    >
      <span className="mr-2" aria-hidden="true">&lt;</span> Retour
    </button>
    
    <div className="flex items-center justify-between">
      <h2 className="text-3xl font-newsreader text-gray-700">Inscription</h2>
      <img 
        src={rect6} 
        alt="" 
        className="w-32 h-auto" 
        aria-hidden="true" 
      />
    </div>
  </div>

        {/* Affichage des toasts */}
        {error && (
          <Toast 
            message={error} 
            type="error" 
            onClose={() => setError('')} 
          />
        )}

        {success && (
          <Toast 
            message={success} 
            type="success" 
            onClose={() => setSuccess('')} 
          />
        )}
        
        <form onSubmit={handleSubmit} className="space-y-6" noValidate>
          {/* Informations personnelles */}
          <div className="grid grid-cols-2 gap-4">
            <div>
              <label htmlFor="firstName" className="block text-sm font-medium text-gray-700 mb-1">
                Prénom <span className="text-red-500" aria-hidden="true">*</span>
              </label>
              <input
                type="text"
                name="firstName"
                id="firstName"
                value={formData.firstName}
                onChange={handleChange}
                required
                aria-required="true"
                className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#FF6B6B]"
              />
            </div>
            <div>
              <label htmlFor="lastName" className="block text-sm font-medium text-gray-700 mb-1">
                Nom <span className="text-red-500" aria-hidden="true">*</span>
              </label>
              <input
                type="text"
                name="lastName"
                id="lastName"
                value={formData.lastName}
                onChange={handleChange}
                required
                aria-required="true"
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
                  value={formData.street}
                  onChange={handleChange}
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
                    value={formData.postalCode}
                    onChange={handleChange}
                    pattern="[0-9]*"
                    maxLength="5"
                    inputMode="numeric"
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
                    value={formData.city}
                    onChange={handleChange}
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
                value={formData.phoneNumber}
                onChange={handleChange}
                className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#FF6B6B]"
              />
            </div>

            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                Email <span className="text-red-500" aria-hidden="true">*</span>
              </label>
              <input
                type="email"
                name="email"
                id="email"
                value={formData.email}
                onChange={handleChange}
                required
                aria-required="true"
                className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#FF6B6B]"
              />
            </div>

            <div>
              <label htmlFor="password" className="block text-sm font-medium text-gray-700 mb-1">
                Mot de passe <span className="text-red-500" aria-hidden="true">*</span>
              </label>
              <input
                type="password"
                name="password"
                id="password"
                value={formData.password}
                onChange={handleChange}
                required
                aria-required="true"
                className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#FF6B6B]"
              />
            </div>
          </div>

          <div className="flex items-start gap-2">
            <input
              type="checkbox"
              name="termsAccepted"
              id="termsAccepted"
              checked={formData.termsAccepted}
              onChange={handleChange}
              required
              aria-required="true"
              className="mt-1"
            />
            <label htmlFor="termsAccepted" className="text-sm text-gray-600">
              J&apos;accepte les{" "}
              <a href="#" className="text-[#FF6B6B] hover:text-[#FF5555]">
                conditions générales d&apos;utilisation
              </a>{" "}
              <span className="text-red-500" aria-hidden="true">*</span>
            </label>
          </div>

          <button
            type="submit"
            className="w-full bg-[#FF6B6B] text-white py-3 px-6 rounded-lg 
              hover:bg-[#FF5555] transition-colors duration-300
              focus:outline-none focus:ring-2 focus:ring-[#FF6B6B] focus:ring-offset-2
              disabled:opacity-50 disabled:cursor-not-allowed"
            disabled={success}
          >
            S&apos;inscrire
          </button>
        </form>

        <img 
          src={rect7} 
          alt="" 
          className="w-full max-w-sm mx-auto h-auto mt-8" 
          aria-hidden="true" 
        />
      </main>
    </div>
  );
};

export default Register;