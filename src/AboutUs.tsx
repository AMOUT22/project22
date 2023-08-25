import React, { useState } from 'react';
import Valeurs from './Valeurs';
import Footer from './Footer';

const AboutUs = () => {
  const [expanded, setExpanded] = useState(false);

  const toggleExpand = () => {
    setExpanded(!expanded);
  };

  const content = (
    <div className="text-gray-700">
      <p className="mb-4">
        Bienvenue chez Diar Al Ghalia, l'agence immobilière de référence à Casablanca, dédiée à vous offrir des services immobiliers exceptionnels avec un engagement envers l'excellence et la satisfaction client.
      </p>
      <p className="mb-4">
        Si vous cherchez à acheter votre appartement ou votre garage de commerce à Casablanca, nous sommes là pour vous offrir les meilleurs choix, et vous guider à chaque étape du processus avec notre expertise, et notre connaissance approfondie du marché immobilier local.
      </p>
      <p>Chez Diar Al Ghalia, nous comprenons que chaque individu et chaque famille a des besoins et des préférences uniques en matière de logement. C'est pourquoi notre portefeuille immobilier soigneusement conçu offre une variété d'options.</p>
<p>Diar Al Ghalia est bien plus qu'une simple agence immobilière, c'est une équipe passionnée et dévouée d'experts en immobilier qui se consacrent à réaliser vos rêves de propriété. Notre entreprise est idéalement située au cœur de Casablanca, ce qui nous permet de servir efficacement les besoins immobiliers variés de nos clients dans toute la ville et ses environs.
</p>
<p>Chaque bien que nous proposons est choisi avec soin pour son emplacement stratégique, ses caractéristiques modernes et ses finitions de qualité supérieure. Notre équipe expérimentée est à votre disposition pour vous guider à travers notre sélection variée, en vous offrant des conseils professionnels pour vous aider à prendre la meilleure décision d'achat.
</p>    
<p>Si vous êtes prêt à faire le premier pas vers une acquisition immobilière réussie à Casablanca, n'hésitez pas à contacter Diar Al Ghalia. Que vous cherchiez votre future résidence, ou un garage pour votre commerce, nous sommes là pour vous accompagner à chaque étape du processus. Visitez notre site web, appelez-nous ou venez nous rendre visite dans nos locaux pour discuter de vos besoins et découvrir comment nous pouvons vous aider à réaliser vos rêves immobiliers.</p>  
    </div>
  );

  const truncatedContent = `${content.props.children[0].props.children.slice(0, 200)}...`;

  return (
    <div className=" p-6 bg-white shadow-md rounded-md">
      <Valeurs />

        <h1 className='text-center text-4xl md:text-4xl font-bold'>About Us</h1>
      {expanded ? (
        <>
          {content}
          <button onClick={toggleExpand} className="text-blue-500 hover:underline">
            Voir moins
          </button>
        </>
      ) : (
        <>
          <p className="mb-4">
            {expanded ? content : truncatedContent}
          </p>
          <button onClick={toggleExpand} className="text-blue-500 hover:underline">
            Voir plus
          </button>
        </>
      )}
      <Footer />
    </div>
  );
};

export default AboutUs;
