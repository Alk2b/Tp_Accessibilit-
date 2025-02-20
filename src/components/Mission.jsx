import contour from '@/assets/images/contour.png';

const Mission = () => {
  return (
    <section 
      className="py-16 px-4 text-center"
      aria-labelledby="mission-title"
      role="region"
    >
      <div className="container mx-auto max-w-7xl">
        <div className="relative max-w-4xl mx-auto" role="presentation">
          <img 
            className="w-full h-auto mx-auto"
            src={contour}
            alt="" 
            aria-hidden="true"
            role="presentation"
          />
          <div 
            className="absolute inset-0 flex flex-col items-center justify-center px-8"
            aria-live="polite"
          >
            <h2 
              id="mission-title"
              className="text-3xl md:text-4xl font-italiana mb-6 text-black"
            >
              Notre mission
            </h2>
            <p className="font-inter text-black text-center text-lg md:text-xl leading-7 max-w-3xl">
              Bienvenue sur notre{' '}
              <a 
                href="https://www.adecco.fr/medical/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#FF6B6B] hover:text-[#FF5555] focus:outline-none focus:ring-2 focus:ring-[#FF6B6B] focus:ring-offset-2 rounded-sm inline-flex items-center"
                aria-label="Visiter la plateforme Adecco Medical (s'ouvre dans un nouvel onglet)"
              >
                plateforme
                <span className="sr-only"> (s'ouvre dans un nouvel onglet)</span>
              </a>{' '}
              dédiée à la santé, où chaque mission est une opportunité 
              de faire une différence dans le domaine médical. Explorez nos possibilités et découvrez 
              comment nous simplifions la recherche et la participation à des missions pour les 
              professionnels de la santé engagés
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Mission;