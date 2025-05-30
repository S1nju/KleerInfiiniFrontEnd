import { useState } from 'react';
import SlideBar from './SlideBar';
import Navbardashbord from './Navbardashbord';

import SuiviInteractions from './SuiviInteractions';
import SuiviPaiements from './SuiviPaiements';
import Statis from './Statis';

export default function Dashboard() {
  const [section, setSection] = useState('accueil');

  const renderSection = () => {
    switch (section) {
      case 'interactions':
        return <SuiviInteractions />;
      case 'paiements' :
        return <SuiviPaiements />;
      case 'stats' :
        return <Statis />
      case 'accueil':
      default:
        return (
          <>
            <h1 className="text-2xl font-bold mb-4">Bienvenue sur le tableau de bord</h1>
            <p className="text-gray-700">
              Ici vous pouvez gérer les utilisateurs, produits, interactions, paiements et plus encore.
            </p>
          </>
        );
    }
  };

  return (
    <div className="flex h-screen">
      <SlideBar onSelectSection={setSection} /> 
      <div className="flex flex-col flex-1">
        <Navbardashbord />
        <main className="p-6 bg-gray-100 flex-1 overflow-y-auto">{renderSection()}</main>
      </div>
    </div>
  );
}
