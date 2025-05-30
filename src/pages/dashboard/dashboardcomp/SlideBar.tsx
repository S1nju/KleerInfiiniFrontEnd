import React, { useState } from 'react';
import {
  Dashboard,
  People,
  ShoppingCart,
  Chat,
  Payment,
  BarChart,
  KeyboardArrowLeft,
  KeyboardArrowRight,
} from '@mui/icons-material';


type SlideBarProps = {
  onSelectSection: (sectionKey: string) => void;
};

export default function SlideBar({ onSelectSection }: SlideBarProps) {
  const [isCollapsed, setIsCollapsed] = useState(false);

  const toggleSidebar = () => setIsCollapsed(!isCollapsed);

  const menuItems = [
    { key: 'dashboard', name: 'Tableau de bord', icon: <Dashboard /> },
    { key: 'users', name: 'Gestion des Utilisateurs', icon: <People /> },
    { key: 'products', name: 'Gestion des Produits', icon: <ShoppingCart /> },
    { key: 'interactions', name: 'Suivi des Interactions', icon: <Chat /> },
    { key: 'paiements', name: 'Suivi des Paiements', icon: <Payment /> },
    { key: 'stats', name: 'Statistiques', icon: <BarChart /> },
  ];

  return (
    <div className={`h-screen bg-blue-900 text-white p-4 ${isCollapsed ? 'w-20' : 'w-64'} transition-all duration-300`}>
      <div className="flex justify-end mb-6">
        <button onClick={toggleSidebar}>
          {isCollapsed ? <KeyboardArrowRight /> : <KeyboardArrowLeft />}
        </button>
      </div>

      <nav className="flex flex-col gap-3 mt-10">
        {menuItems.map((item) => (
          <button
            key={item.key}
            onClick={() => onSelectSection(item.key)}
            className="flex items-center  text-[18px] gap-3 px-2 py-2 rounded hover:bg-blue-400 transition text-left"
          >
            <span className="text-xl">{item.icon}</span>
            {!isCollapsed && <span>{item.name}</span>}
          </button>
        ))}
      </nav>
    </div>
  );
}
