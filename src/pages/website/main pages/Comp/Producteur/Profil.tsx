import React from 'react'
import ListProduits from './ListProduits';
import { Link, useLocation } from 'react-router-dom';
export default function Profil() {
  return (
  <div
  id="profil-section"
  className="mt-6   border-blue-700 border-2 bg-gray-50 p-4 sm:p-6 md:p-8 lg:p-10 w-full mb-16 max-w-7xl mx-auto rounded-lg shadow-2xl"
>
  <div className="flex flex-col md:flex-row items-center md:items-start mb-8 gap-4 md:gap-8">
    <div className="flex-1 text-center md:text-left">
      <h2 className="text-2xl  text-center sm:text-3xl md:text-4xl text-red-700 font-bold">
        NOM Prénom</h2>
  </div>
  <img src="profil.jpg" alt="Logo de l'entreprise" className="w-24 h-24 rounded-full" />
</div>
<div className="mx-4 sm:mx-8">
  <div className="flex flex-col md:flex-row justify-start text-lg sm:text-xl md:text-2xl gap-y-4 md:gap-x-8 mb-4">
    
    <div className="w-full md:w-1/2">
        <span className="font-semibold text-blue-700">
        Nom entreprise : <span className="font-normal text-gray-700">Nom de l'entreprise</span>
      </span>
    </div>
    <div className="w-full md:w-1/2">
      <span className="font-semibold text-blue-700">
        Capacité mensuelle :&nbsp; <span className="font-normal text-gray-700">5000 unités</span>
      </span>
    </div>
  </div>

 
   <div className="flex flex-col md:flex-row md:justify-between justify-start text-lg sm:text-xl md:text-2xl gap-4 mb-4">
  
    <div className="w-full md:w-1/2">
        <span className="font-semibold text-blue-700">
       Activité principale :&nbsp; <span className="font-normal text-gray-700">Fabrication de produits industriels</span>
      </span>
    </div>
    <div className="w-full md:w-1/2">
      <span className="font-semibold text-blue-700">
       Capacité anuelle  :&nbsp; <span className="font-normal  text-gray-700">6000 unités</span>
      </span>
    </div>
  </div>


   <div className="flex flex-col md:flex-row md:justify-between  justify-start text-lg sm:text-xl md:text-2xl gap-4 mb-4">

    <div className="w-full md:w-1/2">
        <span className="font-semibold text-blue-700">
       No de registre/NIF :&nbsp; <span className="font-normal  text-gray-700">1234568752/NIF:1254698</span>
      </span>
    </div>
    <div className="w-full md:w-1/2">
  <span className="font-semibold text-blue-700">
       Marché ciblés :&nbsp; <span className="font-normal  text-gray-700">local , Export Europe , Export Afrique</span>
      </span>
    </div>
  </div>


    <div className="flex flex-col md:flex-row md:justify-between justify-start text-lg sm:text-xl md:text-2xl gap-4 mb-4">
   
    <div className="w-full md:w-1/2">
        <span className="font-semibold text-blue-700">
        Adresse compléte :&nbsp; <span className="font-normal  text-gray-700">123 Rue de l'industrie , Alger , Algérie</span>
      </span>
    </div>
    <div className="w-full md:w-1/2">

  <div>
    <span className="font-semibold text-blue-700">
      Certification :&nbsp;
    </span>
    <input
      type="file"
      accept="application/pdf"
      className="block w-auto text-sm text-gray-700 
                 file:mr-4 file:py-2 file:px-4
                 file:rounded-full file:border-0
                 file:text-sm file:font-semibold
                 file:bg-blue-50 file:text-blue-700
                 hover:file:bg-blue-100"
    />
  </div>


  <div>
    <span className="font-semibold text-blue-700">
      Fiche technique :&nbsp;
    </span>
    <input
      type="file"
      accept="application/pdf"
      className="block w-auto text-sm text-gray-700 
                 file:mr-4 file:py-2 file:px-4
                 file:rounded-full file:border-0
                 file:text-sm file:font-semibold
                 file:bg-blue-50 file:text-blue-700
                 hover:file:bg-blue-100"
    />
  </div>
</div>

  </div>


</div>


         
<Link  to="/ListProduits" className={location.pathname === '/ListProduits' ? 'active' : ''}>
<button   
   className="inline-flex items-center justify-center h-12 gap-2 px-6 text-sm font-medium tracking-wide text-white transition duration-300 rounded focus-visible:outline-none whitespace-nowrap bg-blue-700 hover:bg-blue-500 focus:bg-blue-500 disabled:cursor-not-allowed disabled:shadow-none">


  <span>Voir Les Produits</span>
</button>
</Link>
</div>

  )
}
