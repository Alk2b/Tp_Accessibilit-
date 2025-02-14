import { Button } from "react-aria-components";
import comp1 from "@/assets/images/comp1.png";
import image17 from "@/assets/images/image17.png";

const Hero = () => {
  return (
    <section
      className="pt-38 pb-8 px-4 min-h-[90vh]"
      aria-label="Hero section"
    >
      <div className="container mx-auto max-w-7xl">
        <div className="relative mb-8" role="presentation">
          <img
            className="w-full max-w-4xl mx-auto h-auto object-cover rounded-lg "
            src={comp1}
            alt="Équipe de professionnels de santé collaborant dans un environnement médical"
            role="img"
          />
          <div className="relative mt-6">
            <img
              className="w-full max-w-4xl mx-auto h-auto "
              src={image17}
              alt="Professionnels de santé en interaction avec des patients"
              role="img"
            />
            <div
              className="absolute inset-0 flex flex-col items-center justify-center bg-white/40 backdrop-blur-sm rounded-lg"
              role="complementary"
              aria-label="Message principal"
            >
              <div className="mx-auto max-w-4xl px-6 flex flex-col items-center">
                <h1 className="text-3xl md:text-4xl lg:text-5xl font-newsreader text-black mb-6 text-center">
                  Alinia, des{" "}
                  <span className="font-nothing-you-could-do text-[#FF6B6B]">
                    professionnel
                  </span>{" "}
                  de la santé, des{" "}
                  <span className="font-nothing-you-could-do text-[#FF6B6B]">
                    facilitateurs
                  </span>
                </h1>
                <p className="text-xl md:text-2xl font-inter text-black mb-8 text-center">
                  et des{" "}
                  <span className="font-nothing-you-could-do text-[#FF6B6B]">
                    bénéficiaires
                  </span>{" "}
                  de soins de qualité axés sur la croissance organique
                </p>
                <Button
                  onPress={() => (window.location.href = "/register")}
                  className="bg-[#FF6B6B] text-white px-8 py-4 rounded-full text-lg 
                    font-medium shadow-lg hover:bg-[#FF5555] transition-all duration-300
                    focus:outline-none focus:ring-2 focus:ring-[#FF6B6B] focus:ring-offset-2
                    transform hover:scale-105 mx-auto"
                  aria-label="S'inscrire à nos services"
                >
                  S&apos;inscrire
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;