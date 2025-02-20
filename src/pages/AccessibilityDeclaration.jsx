const AccessibilityDeclaration = () => {
  return (
    <div className="min-h-screen bg-white font-inter pt-20">
      <main 
        className="container mx-auto max-w-2xl px-4 py-8"
        aria-labelledby="main-heading"
      >
        <h1 
          id="main-heading" 
          className="text-3xl font-newsreader mb-6"
        >
          Déclaration d&apos;accessibilité
        </h1>
        
        <section className="space-y-4">
          <p>
            Nous nous engageons à rendre notre site web accessible à tous, y compris aux personnes en situation de handicap. 
            Nous nous efforçons de respecter les normes d&apos;accessibilité et de fournir une expérience utilisateur optimale pour tous.
          </p>
          
          <h2 
            id="measures-heading" 
            className="text-2xl font-newsreader mb-4"
          >
            Mesures prises pour assurer l&apos;accessibilité
          </h2>
          
          <ul className="list-disc list-inside space-y-2" aria-labelledby="measures-heading">
            <li>Utilisation de balises ARIA pour améliorer la navigation et l&apos;interaction.</li>
            <li>Contraste de couleurs suffisant pour les textes et les éléments graphiques.</li>
            <li>Navigation au clavier pour toutes les fonctionnalités interactives.</li>
            <li>Descriptions alternatives pour les images et les éléments multimédias.</li>
          </ul>
          
          <h2 
            id="contact-heading" 
            className="text-2xl font-newsreader mb-4"
          >
            Retour d&apos;information et contact
          </h2>
          
          <p>
            Si vous rencontrez des difficultés d&apos;accessibilité sur notre site, veuillez nous contacter à l&apos;adresse suivante : {' '}
            <a 
              href="mailto:accessibilite@alinia.com" 
              className="text-blue-600 hover:underline focus:outline-none focus:ring-2 focus:ring-blue-500 rounded px-1"
            >
              accessibilite@alinia.com
            </a>. 
            Nous apprécions vos retours et nous nous efforcerons de résoudre les problèmes dans les meilleurs délais.
          </p>
        </section>
      </main>
    </div>
  );
};

export default AccessibilityDeclaration;