import contour from '@/assets/images/contour.png';

const Mission = () => {
    return (
      <section 
        className="p-5 text-center mb-30" 
        aria-labelledby="mission-title"
        role="region"
      >
        <div className="flex flex-col items-center gap-8 mt-8"> 
          <div 
            className="relative"
            role="presentation"
          >
            <img 
              className="max-w-[90%] mx-auto h-auto"
              src={contour}
              alt="" 
              aria-hidden="true"
              role="presentation"
            />
            <div 
              className="absolute inset-0 flex flex-col items-center justify-center px-8"
              aria-live="polite"
            >
              <h1 
                id="mission-title"
                className="text-3xl font-italiana mb-6 text-black" 
                tabIndex="0"
              >
                Notre mission
              </h1>
              <p 
                className="font-inter text-black text-center text-lg leading-6 max-w-3xl"
                tabIndex="0"
              >
                Bienvenue sur notre plateforme dédiée à la santé, où chaque mission est une opportunité 
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