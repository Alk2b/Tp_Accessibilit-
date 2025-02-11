import { Button } from "react-aria-components";
import comp1 from "@/assets/images/comp1.png";
import image17 from "@/assets/images/image17.png";

const Hero = () => {
  return (
    <section
      className="min-h-screen px-4 py-16 md:py-24 lg:py-8"
      aria-label="Hero section"
    >
      <div className="container mx-auto max-w-7xl">
        {/* Images Container with Overlay Content */}
        <div className="mb-16 md:mb-24" role="presentation">
          <img
            className="w-full max-w-4xl mx-auto h-auto object-cover"
            src={comp1}
            alt="Équipe de professionnels de santé collaborant dans un environnement médical"
            role="img"
          />
          <div className="relative text-center">
            <img
              className="w-full max-w-4xl mx-auto h-auto object-cover mt-4 md:mt-6"
              src={image17}
              alt="Professionnels de santé en interaction avec des patients"
              role="img"
            />

            {/* Overlay Content (Text + Button) */}
            <div
              className="absolute inset-0 flex flex-col items-center justify-center"
              role="complementary"
              aria-label="Message principal"
            >
              {/* Text Content */}
              <div className="mx-12">
                <h1 className="text-2xl md:text-3xl lg:text-4xl font-newsreader text-black p-2 rounded-lg">
                  Alinia, des{" "}
                  <span className="font-nothing-you-could-do">
                    professionnel
                  </span>{" "}
                  de la santé, des{" "}
                  <span className="font-nothing-you-could-do">
                    facilitateurs
                  </span>
                </h1>

                <p
                  className="text-xl md:text-2xl lg:text-3xl font-inter text-black max-w-3xl mx-auto p-2 rounded-lg"
                  aria-label="Description des bénéficiaires"
                >
                  et des{" "}
                  <span className="font-nothing-you-could-do">
                    bénéficiaires
                  </span>{" "}
                  de soins de qualité axés sur la croissance organique
                </p>
              </div>

              {/* CTA Button */}
              <Button
                onPress={() => (window.location.href = "Inscription.html")}
                className="inline-block bg-[#FF6B6BB5] text-white px-8 py-4 md:px-12 md:py-6 
                         rounded-full text-lg md:text-xl font-medium shadow-lg 
                         hover:bg-[#FF6B6B] transition-colors duration-300
                         focus:outline-none focus:ring-2 focus:ring-[#FF6B6B] focus:ring-offset-2
                         mt-8 md:mt-10"
                aria-label="S'inscrire à nos services"
              >
                S&apos;inscrire
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
