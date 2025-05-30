import React from 'react';

export default function Navbardashbord() {
  return (
    <div className="bg-white shadow-amber-100 p-4 flex justify-end">
  <button className="flex items-center bg-white border border-red-600 text-red-600 px-4 py-2 rounded cursor-pointer hover:bg-red-50 transition">
  <svg
    className="w-5 h-5 mr-2"
    fill="none"
    stroke="currentColor"
    strokeWidth={2}
    viewBox="0 0 24 24"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a2 2 0 01-2 2H5a2 2 0 01-2-2V7a2 2 0 012-2h6a2 2 0 012 2v1"
    />
  </svg>
  Déconnexion
</button>

    </div>
  );
}
