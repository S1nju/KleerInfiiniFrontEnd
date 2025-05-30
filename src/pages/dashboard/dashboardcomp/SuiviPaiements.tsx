import React, { useState } from 'react';
import {
  BarChart,
  Bar,
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  CartesianGrid,
  ResponsiveContainer,
} from 'recharts';

type Paiement = {
  id: string;
  client: string;
  montant: string;
  methode: string;
  date: string;
  statut: string;
};

const paiementsRecents: Paiement[] = [
  {
    id: '1',
    client: 'Ahmed Benali',
    montant: '1500',
    methode: 'Carte dhahabia',
    date: '25/05/2025',
    statut: 'Validé',
  },
];

const paiementsEnAttente: Paiement[] = [
  {
    id: '1',
    client: 'Mohamed Krim',
    montant: '1500',
    methode: 'Virement',
    date: '26/05/2025',
    statut: 'En attente',
  },
];


const dataMois = [
  { mois: 'Jan', abonnements: 30 },
  { mois: 'Fév', abonnements: 45 },
  { mois: 'Mar', abonnements: 50 },
  { mois: 'Avr', abonnements: 40 },
  { mois: 'Mai', abonnements: 60 },
  { mois: 'Juin', abonnements: 70 },
];

const dataSemaine = [
  { semaine: 'S1', abonnements: 10 },
  { semaine: 'S2', abonnements: 15 },
  { semaine: 'S3', abonnements: 20 },
  { semaine: 'S4', abonnements: 18 },
  { semaine: 'S5', abonnements: 25 },
];

export default function SuiviPaiements() {
  const [view, setView] = useState<'mois' | 'semaine'>('mois');

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-6">Suivi des Paiements</h1>

      {/* Diagramme */}
      <div className="bg-white p-4 rounded shadow mb-10">
        <h2 className="text-lg font-semibold mb-4">
          Taux d’abonnements par {view === 'mois' ? 'mois' : 'semaine'}
        </h2>

        <ResponsiveContainer width="100%" height={300}>
          {view === 'mois' ? (
            <BarChart data={dataMois}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="mois" />
              <YAxis />
              <Tooltip />
              <Bar dataKey="abonnements" fill="#3b82f6" /> 
            </BarChart>
          ) : (
            <LineChart data={dataSemaine}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="semaine" />
              <YAxis />
              <Tooltip />
              <Line
                type="monotone"
                dataKey="abonnements"
                stroke="#dc2626"
                strokeWidth={3}
                dot={{ r: 5, stroke: '#dc2626', strokeWidth: 2, fill: 'white' }}
                activeDot={{ r: 6 }}
              />
            </LineChart>
          )}
        </ResponsiveContainer>

        <div className="flex justify-center mt-6 space-x-4">
          <button
            onClick={() => setView('mois')}
            className={`px-4 py-2 rounded ${
              view === 'mois'
                ? 'bg-blue-900 text-white'
                : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
            }`}
          >
            Par Mois
          </button>
          <button
            onClick={() => setView('semaine')}
            className={`px-4 py-2 rounded ${
              view === 'semaine'
                ? 'bg-blue-900 text-white'
                : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
            }`}
          >
            Par Semaine
          </button>
        </div>
      </div>

      {/* Tableaux */}
      <div className="space-y-10">
      
        <div>
          <h2 className="text-lg font-semibold mb-2">Paiements Récents</h2>
          <table className="w-full bg-white font-medium shadow-md rounded-md overflow-hidden">
            <thead>
              <tr className="bg-blue-900 text-white text-left">
                <th className="p-3">ID</th>
                <th className="p-3">Client</th>
                <th className="p-3">Montant</th>
                <th className="p-3">Méthode</th>
                <th className="p-3">Date</th>
                <th className="p-3">Statut</th>
              </tr>
            </thead>
            <tbody>
              {paiementsRecents.map((p) => (
                <tr key={p.id} className="hover:bg-gray-50 border-b border-transparent">
                  <td className="p-3">{p.id}</td>
                  <td className="p-3">{p.client}</td>
                  <td className="p-3">{p.montant}</td>
                  <td className="p-3">{p.methode}</td>
                  <td className="p-3">{p.date}</td>
                  <td className="p-3">
                    <span className={`rounded px-2 py-1 text-white ${
                      p.statut === 'Validé' ? 'bg-green-700' : 'bg-yellow-500'
                    }`}>
                      {p.statut}
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

  
        <div>
          <h2 className="text-lg font-semibold mb-2">Paiements en Attente</h2>
          <table className="w-full bg-white font-medium shadow-md rounded-md overflow-hidden">
            <thead>
              <tr className="bg-blue-900 text-white text-left">
                <th className="p-3">ID</th>
                <th className="p-3">Client</th>
                <th className="p-3">Montant</th>
                <th className="p-3">Méthode</th>
                <th className="p-3">Date</th>
                <th className="p-3">Statut</th>
              </tr>
            </thead>
            <tbody>
              {paiementsEnAttente.map((p) => (
                <tr key={p.id} className="hover:bg-gray-50 border-b border-transparent">
                  <td className="p-3">{p.id}</td>
                  <td className="p-3">{p.client}</td>
                  <td className="p-3">{p.montant}</td>
                  <td className="p-3">{p.methode}</td>
                  <td className="p-3">{p.date}</td>
                  <td className="p-3">
                    <span className={`rounded px-2 py-1 text-white ${
                      p.statut === 'Validé' ? 'bg-green-600' : 'bg-yellow-500'
                    }`}>
                      {p.statut}
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}