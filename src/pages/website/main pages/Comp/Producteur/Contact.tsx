import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import ProducteurEspace  from './ProducteurEspace';
import { Link, useLocation } from 'react-router-dom';
import Profil from './Profil';
import NavBarproducteur from './NavBarproducteur';
export default function Contact() {
  const [showFullDescription, setShowFullDescription] = useState(false);
 const navigate = useNavigate();

  const handleVoirProfil = () => {
       navigate('/ProducteurEspace')
  };

  const location = useLocation();
  const fullText =(
       <>
      KLEER INFINI est une entreprise innovante spécialisé dans  la fabrication de produits industriels 
      de haute qualité. Depuis sa création , elle s'engage à fournir des solutions
      durables et performante pour répondre aux besoins des marchés locaux et internationaux. Avec 
      une équipe d'experts et des installations modernes , KLEER INFINI garantit une excellence 
      opérationnelle et une satisfaction client optimale
      
    </>)
  const shortText =
   (
    <>
      KLEER INFINI est une entreprise innovante spécialisé dans
      la fabrication de produits industriels de haute
      qualité. Depuis sa création , elle s'engage à fournir des solutions
    </>
  );
return (
  <>
  <NavBarproducteur />
  <div className="min-h-screen flex flex-col">
    <main className="flex-grow">
      <div className="mt-10  border-blue-700 border-2 bg-gray-50 p-10 w-full max-w-7xl mx-auto rounded-lg shadow-2xl overflow-x-auto">
        <div className="space-y-6">
          {/* TÉLÉPHONE */}
          <div className="flex flex-wrap">
            <span className="w-32 font-semibold text-blue-700 text-xl">Téléphone :</span>
            <span className="text-gray-700 flex-1 text-xl ml-15">+213 123 456 789</span>
          </div>

          {/* DESCRIPTION JUSTIFIÉE */}
          <div className="flex flex-wrap items-start">
            <span className="w-32 font-semibold text-blue-700 text-xl">Description :</span>
            <div className="flex-1 text-gray-700 text-xl leading-relaxed">
              <div className="flex items-center gap-2 ml-15">
                <p className="text-justify m-0">
                  {showFullDescription ? fullText : shortText}
                </p>
                <button
                  onClick={() => setShowFullDescription(!showFullDescription)}
                  className="text-blue-700 ml-15 font-medium hover:underline focus:outline-none text-xl"
                >
                  {showFullDescription ? 'Afficher moins' : 'Voir plus'}
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* ESPACE + BOUTON */}
        <div className="p-5" />
         <Link to="/ProducteurEspace" className={location.pathname === '/ProducteurEspace' ? 'active' : ''}>
        
        <div
         
          className="inline-flex items-center justify-center h-12 gap-10 px-10 ml-96 text-sm font-medium tracking-wide text-white transition duration-300 rounded focus-visible:outline-none whitespace-nowrap bg-blue-700 hover:bg-blue-500 focus:bg-blue-500 disabled:cursor-not-allowed disabled:shadow-none"
        >
          <span className="text-xl">Voir Profil</span>
        </div></Link>
      </div>
    </main>
  </div>
  <footer className="bg-gradient-to-r from-blue-900 via-blue-900 to-red-900 shadow-lg w-full text-white text-center p-6 text-xl">
    @ 2025 KLEER INFINI. Tous droits réservés
  </footer></>
);


}