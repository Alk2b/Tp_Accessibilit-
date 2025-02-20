import { Button } from "react-aria-components";
import comp1 from "@/assets/images/comp1.png";
import image17 from "@/assets/images/image17.png";

const Hero = () => {
  return (
    <>
      <section
        className="relative flex flex-col items-center justify-center min-h-screen px-4 sm:px-8 py-12 bg-gray-100 bg-cover bg-center"
        style={{ backgroundImage: `url(${image17})` }}
      >
        <div className="container mx-auto max-w-7xl flex flex-col items-center text-center relative z-10 p-10">
          {/* Overlay */}
          <div className="absolute inset-0 bg-white/60 backdrop-blur-md z-0 rounded-md"></div>

          {/* Texte */}
          <div className="flex flex-col items-center z-10">
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 leading-tight">
              Alinia, des <span className="text-[#FF6B6B]">professionnels</span>{" "}
              de la santé, des{" "}
              <span className="text-[#FF6B6B]">facilitateurs</span>
            </h1>
            <p className="mt-4 text-lg sm:text-xl text-gray-800">
              et des <span className="text-[#FF6B6B]">bénéficiaires</span> de
              soins de qualité axés sur la croissance organique.
            </p>
            <Button
              onPress={() => (window.location.href = "/register")}
              className="mt-6 bg-[#FF6B6B] text-white px-6 py-3 rounded-full text-lg font-medium shadow-md 
              hover:bg-[#FF5555] transition-transform duration-300 focus:outline-none 
              focus:ring-2 focus:ring-[#FF6B6B] focus:ring-offset-2 hover:scale-105 cursor-pointer"
              aria-label="S'inscrire à nos services"
            >
              S&apos;inscrire
            </Button>
          </div>
        </div>
      </section>

      {/* Image */}
      <div className="flex justify-center mt-8">
        <img src={comp1} className="max-w-full h-auto" />
      </div>
    </>
  );
};

export default Hero;
