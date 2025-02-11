import contour from '@/assets/images/contour.png';

const Mission = () => {
    return (
      <section className="relative p-5 text-center">
        <div className="flex flex-col items-center gap-12 mt-12">
          <h1 className="text-3xl font-italiana mt-12 text-black">Notre mission</h1>
          <p className="font-inter text-black text-center text-lg leading-6">
            Bienvenue sur notre plateforme dédiée à la santé, où chaque mission est une opportunité <br />
            de faire une différence dans le domaine médical. Explorez nos possibilités et découvrez<br /> 
            comment nous simplifions la recherche et la participation à des missions pour les <br />
            professionnels de la santé engagés
          </p>
          <img 
            className="max-w-[70%] mx-auto h-auto " 
            src={contour}
            alt="Image de professionnels de santé" 
          />
        </div>
      </section>
    );
  };
  
  export default Mission;