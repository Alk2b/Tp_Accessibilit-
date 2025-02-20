const Mission = () => {
  return (
    <section 
      className="py-8 md:py-16 px-4 text-center"
      aria-labelledby="mission-title"
      role="region"
    >
      <div className="container mx-auto max-w-7xl">
        <div className="bg-white rounded-lg p-6 md:p-8 lg:p-12 max-w-4xl mx-auto">
          <div className="border-4 border-dashed border-gray-600 rounded-lg p-6 md:p-8">
            <h2 
              id="mission-title"
              className="text-2xl md:text-3xl lg:text-4xl font-italiana mb-4 md:mb-6 text-black"
            >
              Notre mission
            </h2>
            <p className="font-inter text-black text-center text-base md:text-lg lg:text-xl leading-relaxed max-w-3xl mx-auto">
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