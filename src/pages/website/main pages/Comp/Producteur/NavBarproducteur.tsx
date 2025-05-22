import React, { useEffect } from 'react'
import MenuIcon from "@mui/icons-material/Menu";
import { Box, Menu as MuiMenu, MenuItem, IconButton, Button, Container } from "@mui/material";
import { useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';

import Contact from './Contact';
import ListProduits from './ListProduits';
import Messages from './Messages'; 
import Profil from "./Profil";
export default function NavBarproducteur() {
     const [showContact, setShowContact] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false); 
const [showHistorique, setShowHistorique] = useState(false);
const [showMessages, setShowMessages] = useState(false);
 const navigate = useNavigate();

 useEffect(() => {
  if (showContact) {
    navigate('/Contact');
    setShowContact(false); 
  }
}, [navigate, showContact]);

  const location = useLocation();
  const Menu = [
    { id: 1, name: "Contact", action: () => setShowContact(true) },
    { id: 2, name: 'Historique', action: () => setShowHistorique(true)},
    { id: 3, name: "Messages", action: () => setShowMessages(true) },
    { id: 4, name: "Déconnexion", path: "/" },
  ];


  const handleItemClick = (item) => {
    if (item.action) item.action();
    setMenuOpen(false);
  }; 
  return (


 
    
   
<Box className="bg-gradient-to-r from-blue-900 via-blue-900 to-red-900 shadow-lg p-4">



      
      {/* === Logo + Titre === */}
      <div className="mb-2 mt-2 pt-2 flex flex-row md:flex-row items-center justify-center gap-4">
        <h2 className="text-5xl font-bold text-BLACK">KLEER</h2>
        <img src="logo.jpg" alt="Logo" className="w-20 h-20 rounded-lg" />
        <p className="text-4xl text-white  underline">INFINI</p>
      </div>

     
      <div className="flex flex-row md:flex-row justify-between items-center w-full bg-blue-800 rounded-lg py-5 px-4">
        <h1 className="text-white text-3xl mb-4 md:mb-0">Espace Producteur</h1>

      
        <div className="hidden md:flex gap-8 items-center font-medium text-1xl">
          {Menu.map((item) =>
            item.path ? (
              <Link
                key={item.id}
                to={item.path}
                className="text-white text-xl cursor-pointer hover:scale-105 transition-all"
              >
                {item.name}
              </Link>
            ) : (
              <div
                key={item.id}
                onClick={() => handleItemClick(item)}
                className="text-white text-xl cursor-pointer hover:scale-105 transition-all"
              >
                {item.name}
              </div>
            )
          )}
        </div>

    
        <div className="md:hidden">
          <IconButton onClick={() => setMenuOpen(!menuOpen)} className="text-white">
            <MenuIcon />
          </IconButton>
        </div>
      </div>

   
      {menuOpen && (
        <div className="flex flex-col gap-4 mt-4 md:hidden bg-blue-800 p-4 rounded-lg">
          {Menu.map((item) =>
            item.path ? (
              <Link
                key={item.id}
                to={item.path}
                onClick={() => setMenuOpen(false)}
                className="text-white text-lg hover:underline"
              >
                {item.name}
              </Link>
            ) : (
              <div
                key={item.id}
                onClick={() => handleItemClick(item)}
                className="text-white text-lg hover:underline cursor-pointer"
              >
                {item.name}
              </div>
            )
          )}
        </div>
      )}
       {showContact && <Contact />}
{showHistorique && (
  <div
    className="fixed  mt-35 inset-0 z-20 flex items-center justify-center w-screen h-screen bg-transparent"
    role="dialog"
    aria-modal="true"
    tabIndex={-1}
    aria-labelledby="header-3a content-3a"
  >
    <div
      className="flex mb-110 w-[95%] max-w-[1600px] flex-col gap-6 overflow-hidden rounded bg-white p-0 text-slate-500 shadow-xl shadow-slate-700/10"
      role="document"
    >
  
      <header
        id="header-3a"
        className="flex items-center   gap-4 px-6 py-4 bg-blue-900 text-white"
      >
        <h3 className="font-bold text-2xl">Historique des interactions</h3>
      </header>

  
      <div id="content-3a" className="flex-1 overflow-auto p-6">
      
    

      <div className="w-full overflow-x-auto rounded-md  shadow-md">
  <table className="min-w-full text-sm text-left border-collapse">
          <thead className="bg-blue-900  rounded text-white font-bold text-xl">
            <tr >
              <th className=" px-3 py-2 text-left">Client</th>
              <th className=" px-3 py-2 text-left">Téléphone</th>
                  <th className=" px-3 py-2 text-left">Email</th>
                      <th className=" px-3 py-2 text-left">Produit</th>
                          <th className=" px-3 py-2 text-left">Montant</th>
                              <th className=" px-3 py-2 text-left">Statut</th>
                                  <th className=" px-3 py-2 text-left">Date</th>
            </tr>
          </thead>
          <tbody className="text-gray-900 text-xl">
            <tr  className="border-b border-gray-200">
              <td className=" px-3 py-2">Ahmed Benali </td>
              <td className="px-3 py-2">+213 123 45 789 </td>
               <td className=" px-3 py-2">ahmed@gmail.com </td>
                <td className=" px-3 py-2">Prouit A  </td>
                 <td className=" px-3 py-2">10000 DA </td>
                  <td className="px-2 py-1 bg-green-600 mt-1 text-white rounded-md inline-block">payé </td>
                   <td className=" px-3 py-2"> 20/04/2025</td>
            </tr>
               <tr  className="border-b border-gray-200">
              <td className=" px-3 py-2">Fatima Zahra </td>
              <td className="px-3 py-2">+213 987 654 321 </td>
               <td className=" px-3 py-2">fatima@gmail.com </td>
                <td className=" px-3 py-2">Prouit B  </td>
                 <td className=" px-3 py-2">1500 DA </td>
                   <td className="px-2 py-1 bg-yellow-500 mt-1 text-white rounded-md inline-block">en attente </td>
                   <td className=" px-3 py-2"> 22/04/2025</td>
            </tr>
             <tr  className="border-b border-gray-200">
              <td className=" px-3 py-2">Mohammed Amine </td>
              <td className="px-3 py-2">+213 555 123 456  </td>
               <td className=" px-3 py-2">mohammed@gmail.com </td>
                <td className=" px-3 py-2">Prouit C  </td>
                 <td className=" px-3 py-2">8000 DA </td>
                 <td className="px-2 py-1 bg-red-600 text-white rounded-md inline-block">
  Expiré
</td>
                   <td className=" px-3 py-2"> 15/04/2025</td>
            </tr>
          </tbody>  <tbody>
          
          </tbody>
        </table>
</div>
       
     <div className="flex justify-end mt-4">
  <button
    onClick={() => setShowHistorique(false)}
    className="px-4 py-2 bg-blue-900 text-white text-sm font-bold rounded hover:bg-blue-700 transition"
  >
    Fermer
  </button>
</div>
      </div>
    </div>
  </div>
)}
{showMessages && (
   <div
    className="fixed  mt-35 inset-0 z-20 flex items-center justify-center w-screen h-screen bg-transparent"
    role="dialog"
    aria-modal="true"
    tabIndex={-1}
    aria-labelledby="header-3a content-3a"
  >
   <div
      className="flex mb-110 w-[95%] max-w-[1600px] flex-col gap-6 overflow-hidden rounded bg-white p-0 text-slate-500 shadow-xl shadow-slate-700/10"
      role="document"
    >
             <header
        id="header-3a"
        className="flex items-center   gap-4 px-6 py-4 bg-blue-900 text-white"
      >
        <h3 className="font-bold text-2xl">Notifications de messages</h3>
      </header>
      <Messages />
      <div className="flex justify-end mt-1">
        <button
    onClick={() => setShowMessages(false)}
    className="px-4 py-2 mr-10 mb-4 bg-blue-900 text-white text-sm font-bold rounded hover:bg-blue-700 transition"
  >
    Fermer
  </button></div>
    </div>
  </div>
)}



      <h6 className="text-white  ml-4 mt-4 mb-4">
        Découvrez nos nouveaux produits industriels certifiés ISO | Offre spéciale : -10% sur les commandes avant le 30/05/2025
      </h6>

 
   
    </Box>
  
  )
}
