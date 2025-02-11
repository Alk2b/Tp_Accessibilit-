import comp1 from '@/assets/images/comp1.png';
import image17 from '@/assets/images/image17.png';

const Hero = () => {
  return (
    <section className="relative min-h-screen px-4 py-16 md:py-24 lg:py-32">
      <div className="container mx-auto max-w-7xl">
        {/* Images Container with Overlay Text */}
        <div className="relative mb-16 md:mb-24">
          <img 
            className="w-full max-w-4xl mx-auto h-auto object-cover"
            src={comp1} 
            alt="Image de professionnels de santé"
          />
          <div className="relative">
            {/* Image with overlay */}
            <img 
              className="w-full max-w-4xl mx-auto h-auto object-cover mt-4 md:mt-6"
              src={image17}
              alt="Image de professionnels de santé" 
            />
            
            {/* Overlay Text */}
            <div className="absolute inset-0 flex flex-col items-center justify-center space-y-6 md:space-y-8 px-4">
              <p className="text-2xl md:text-3xl lg:text-4xl font-newsreader text-black p-2 rounded-lg">
                Alinia, des{' '}
                <span className="font-nothing-you-could-do">professionnel</span>{' '}
                de la santé, des{' '}
                <span className="font-nothing-you-could-do">facilitateurs</span>
              </p>
              
              <p className="text-xl md:text-2xl lg:text-3xl font-inter text-black max-w-3xl mx-auto p-2 rounded-lg">
                et des{' '}
                <span className="font-nothing-you-could-do">bénéficiaires</span>{' '}
                de soins de qualité axés sur la croissance organique
              </p>
            </div>
          </div>
        </div>

        {/* CTA Button */}
        <div className="mt-12 md:mt-16 text-center">
          <a 
            href="Inscription.html" 
            className="inline-block bg-[#FF6B6BB5] text-white px-8 py-4 md:px-12 md:py-6 
                     rounded-full text-lg md:text-xl font-medium shadow-lg 
                     hover:bg-[#FF6B6B] transition-colors duration-300
                     focus:outline-none focus:ring-2 focus:ring-[#FF6B6B] focus:ring-offset-2"
          >
            S&apos;inscrire
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;