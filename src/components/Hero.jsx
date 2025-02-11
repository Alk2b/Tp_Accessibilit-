import comp1 from '@/assets/images/comp1.png';
import image17 from '@/assets/images/image17.png';


const Hero = () => {
    return (
      <section className="relative p-5 text-center">
        <img 
          className="max-w-full mx-auto w-4/5 h-auto" 
          src={comp1} 
          alt="Image de professionnels de santé" 
        />
        <img 
          className="max-w-full mx-auto w-4/5 h-auto" 
          src={image17}
          alt="Image de professionnels de santé" 
        />
        <p className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-3xl font-newsreader mt-[-70px] text-black z-10 whitespace-nowrap shadow-md">
          Alinia, des <span className="font-nothing-you-could-do">professionnel</span> de la santé, des{' '}
          <span className="font-nothing-you-could-do">facilitateurs</span>
        </p>
        <p className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-2xl font-inter mt-10 text-black z-20 shadow-md">
          et des <span className="font-nothing-you-could-do">bénéficiaires</span> de soins de qualité axés sur la croissance organique
        </p>
        <a 
          href="Inscription.html" 
          className="bg-[#FF6B6BB5] text-white px-12 py-6 rounded-full absolute top-[60%] left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-lg shadow-lg"
        >
          S&apos;inscrire
        </a>
      </section>
    );
  };
  
  export default Hero;