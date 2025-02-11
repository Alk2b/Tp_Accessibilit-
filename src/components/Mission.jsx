import contour from '@/assets/images/contour.png';

const Mission = () => {
    return (
      <section className="relative p-5 text-center">
        <div className="flex flex-col items-center mt-12">
          <div className="">
            <img 
              className="max-w-[90%] mx-auto h-auto"
              src={contour}
              alt="Contour décoratif" 
              aria-hidden="true"
            />
            <div className="absolute inset-0 flex flex-col items-center justify-center px-8">
              <h1 className="text-3xl font-italiana mb-8 text-black">Notre mission</h1>
              <p className="font-inter text-black text-center text-lg leading-6 max-w-3xl">
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