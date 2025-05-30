
import React from 'react';


export default function SuiviInteractions() {
  return (
    <div>
      <h1 className="text-2xl font-bold mb-4">Suivi des Interactions</h1>

   
      <h2 className="text-2xl font-semibold mb-2">Demandes</h2>
        <table className="w-full bg-white font-medium shadow-md rounded-md overflow-hidden">
            <thead>
              <tr className="bg-blue-900 text-white text-left">
            <th className="p-3">ID</th>
            <th className="p-3">Client</th>
            <th className="p-3">Produit</th>
            <th className="p-3">Statut</th>
            <th className="p-3">Date</th>
            <th className="p-3">Actions</th>
          </tr>
        </thead>
        <tbody>
          <tr className="border-t">
 <td className="p-3">1</td>
            <td className="p-3">Ahmed Benali </td>
            <td className="p-3">Huile d'olive Bio </td>
            <td className="p-3">En attente </td>
            <td className="p-3">2025-04-30</td>
           
         <td className="p-3 space-x-2">
  <button className="bg-blue-700 text-white px-3 py-1 rounded-md hover:bg-blue-800 transition">
    Voir
  </button>
  <button className="bg-green-600 text-white px-3 py-1 rounded-md hover:bg-green-700 transition">
    Transférer
  </button>
</td>

          </tr>
        </tbody>
      </table>

    
      <h2 className="text-2xl font-semibold mb-2">Messages</h2>
      <table className="w-full bg-white font-medium shadow-md rounded-md overflow-hidden">
            <thead>
              <tr className="bg-blue-900 text-white text-left">
            <th className="p-3">ID</th>
            <th className="p-3">De</th>
            <th className="p-3">à</th>
            <th className="p-3">Message</th>
            <th className="p-3">Date</th>
            <th className="p-3 space-x-2">
Actions
</th>

          </tr>
        </thead>
        <tbody>
          <tr className="border-t">
            <td className="p-3">1</td>
            <td className="p-3">Ahmed Benali </td>
            <td className="p-3">AgriProd DZ</td>
            <td className="p-3">Intéréssé par 100L d'huile</td>
            <td className="p-3">30/07/2025</td>
        <td className="p-3 space-x-2">
           <button className="bg-blue-700 text-white px-3 py-1 rounded-md hover:bg-blue-800 transition">
    Intervenir
  </button>
  <button className="bg-red-600 text-white px-3 py-1 rounded-md hover:bg-red-700 transition">
   Bloquer
  </button></td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}

