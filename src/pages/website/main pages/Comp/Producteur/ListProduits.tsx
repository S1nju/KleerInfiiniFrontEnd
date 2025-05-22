import { useState } from 'react';
import ProducteurEspace from './ProducteurEspace';
import NavBarproducteur from './NavBarproducteur';

export default function ListProduits() {
  
  const produits = [
    { id: 1, nom: 'Produit 1' },
    { id: 2, nom: 'Produit 2' },
    { id: 3, nom: 'Produit 3' },
    { id: 4, nom: 'Produit 4' },
    { id: 5, nom: 'Produit 5' },
    { id: 6, nom: 'Produit 6' },
  ];


  const [showMoreMap, setShowMoreMap] = useState({});

  const handleToggle = (id) => {
    setShowMoreMap((prev) => ({
      ...prev,
      [id]: !prev[id],
    }));
  };

  return (
   <>
  <NavBarproducteur />
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 p-6">
      {produits.map((produit) => (
        <div
          key={produit.id}
          className="overflow-hidden bg-white rounded shadow-xl border border-blue-700 w-full text-slate-500 shadow-slate-200 max-w-md mx-auto"
        >
          <figure>
            <img src="car.jpg" alt={produit.nom} />
          </figure>

          <div className="p-6">
            <header className="mb-4 flex justify-between items-center">
              <div>
                <h3 className="text-3xl font-medium text-red-700">{produit.nom}</h3>
                <p className="text-slate-400 text-xl">
                  Description courte du produit...
                </p>
              </div>

              <button
                onClick={() => handleToggle(produit.id)}
                className="inline-flex items-center justify-center text-xl font-medium text-blue-600 bg-transparent hover:bg-blue-100 px-3 py-1 rounded-md"
              >
                {showMoreMap[produit.id] ? 'Voir moins' : 'Voir plus'}
              </button>
            </header>

            {showMoreMap[produit.id] && (
              <p className="mb-2">
               hxviuhxvbxjvbidufv  viuvfhiovdiov jvfbiduvbidfuv fvhidvhiduvfb
              </p>
            )}
          </div>

          <span className="ml-6 text-xl font-bold text-blue-700">
            Afficher les détails
          </span>

          <div className="ml-2 mb-4">
            <input
              id={`fiche-technique-${produit.id}`}
              type="file"
              accept="application/pdf"
              className="hidden"
            />
            <label
              htmlFor={`fiche-technique-${produit.id}`}
              className="cursor-pointer inline-block text-blue-700 underline ml-3 pb-2 text-xl"
            >
              Télécharger la fiche technique
            </label>
          </div>

          <div className="flex justify-end p-6 pt-0 gap-x-4 mt-5">
            <button className="inline-flex w-48 h-12 items-center justify-center text-xl gap-2 font-medium tracking-wide text-white transition duration-300 rounded bg-blue-700 hover:bg-blue-800 focus:bg-blue-600">
              <span>Modifier</span>
            </button>

            <button className="inline-flex w-48 h-12 items-center justify-center text-xl gap-2 font-medium tracking-wide text-white transition duration-300 rounded bg-red-500 hover:bg-red-800 focus:bg-red-600">
              <span>Supprimer</span>
            </button>
          </div>
        </div>
      ))}
    </div>
  <footer className="bg-gradient-to-r from-blue-900 via-blue-900 to-red-900 shadow-lg w-full text-white text-center p-6 text-xl">
    @ 2025 KLEER INFINI. Tous droits réservés
  </footer>
     </> 
  );
}
