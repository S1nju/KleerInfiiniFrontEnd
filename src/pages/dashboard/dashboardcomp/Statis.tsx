import React, { useRef } from 'react';
import { LineChart, Line, CartesianGrid, XAxis, YAxis, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import jsPDF from 'jspdf';
import html2canvas from 'html2canvas';

const dataMois = [
  { mois: 'Jan', paiements: 800, demandes: 600 },
  { mois: 'Fév', paiements: 1000, demandes: 800 },
  { mois: 'Mar', paiements: 1200, demandes: 1000 },
  { mois: 'Avr', paiements: 1500, demandes: 1200 },
  { mois: 'Mai', paiements: 1800, demandes: 1400 },
  { mois: 'Juin', paiements: 2100, demandes: 1700 },
  { mois: 'Juil', paiements: 2400, demandes: 2000 },
  { mois: 'Août', paiements: 2700, demandes: 2300 },
  { mois: 'Sept', paiements: 2900, demandes: 2500 },
  { mois: 'Oct', paiements: 3100, demandes: 2700 },
  { mois: 'Nov', paiements: 3300, demandes: 2900 },
  { mois: 'Déc', paiements: 3500, demandes: 3100 },
];

export default function Statis() {
  const chartRef = useRef(null);

  const exportPDF = () => {
    if (!chartRef.current) return;
    console.log('Export PDF déclenché');

    html2canvas(chartRef.current).then((canvas) => {
      const imgData = canvas.toDataURL('image/png');
      const pdf = new jsPDF('landscape');
      const imgProps = pdf.getImageProperties(imgData);
      const pdfWidth = pdf.internal.pageSize.getWidth();
      const pdfHeight = (imgProps.height * pdfWidth) / imgProps.width;
      pdf.addImage(imgData, 'PNG', 0, 10, pdfWidth, pdfHeight);
      pdf.save('rapport-activite.pdf');
    });
  };

  return (
    <div className="p-6 bg-gray-100 min-h-screen">
      <div className="flex justify-start mb-4">
        <button
          onClick={exportPDF}
          className="bg-blue-900 font-medium text-1xl text-white px-4 py-2 rounded hover:bg-blue-800 transition"
        >
          Exporter le rapport PDF
        </button>
      </div>

      <div className="bg-blue-900 text-white font-bold text-2xl px-4 py-2 rounded-t w-full">
        Activité par Période
      </div>

    <div ref={chartRef} style={{ backgroundColor: 'white', height: 400 }}>

        <ResponsiveContainer width="100%" height="100%">
          <LineChart data={dataMois}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="mois" />
            <YAxis domain={[500, 3500]} tickCount={7} />
            <Tooltip />
            <Legend />
            <Line
              type="monotone"
              dataKey="demandes"
              name="Demandes"
              stroke="#2563eb"
              strokeWidth={3}
              dot={{ r: 4, stroke: '#2563eb', strokeWidth: 2, fill: 'white' }}
              activeDot={{ r: 6 }}
            />
            <Line
              type="monotone"
              dataKey="paiements"
              name="Paiements"
              stroke="#dc2626"
              strokeWidth={3}
              dot={{ r: 4, stroke: '#dc2626', strokeWidth: 2, fill: 'white' }}
              activeDot={{ r: 6 }}
            />
          </LineChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}
