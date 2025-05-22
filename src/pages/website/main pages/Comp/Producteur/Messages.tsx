import React, { useState, useEffect } from "react";

export default function Messages() {
  const [messages, setMessages] = useState([]);
  const [selectedMessage, setSelectedMessage] = useState(null);
  const [reply, setReply] = useState("");

  useEffect(() => {
    const fakeMessages = [
      { id: 1, content: "Bonjour, je suis intéressé par vos produits" },
      { id: 2, content: "Je suis intéressé par vos Produits." },
    ];
    setMessages(fakeMessages);
  }, []);

  const handleReplySend = () => {
    console.log("Réponse envoyée à:", selectedMessage);
    console.log("Contenu:", reply);
    alert("Message envoyé !");
    setSelectedMessage(null);
    setReply("");
  };

  return (
    <div className="p-6 max-w-4xl mx-auto">
      <h2 className="text-xl font-semibold mb-4">Messages reçus</h2>
      
      <div className="grid md:grid-cols-2 gap-6">
      
        <ul className="space-y-2">
          {messages.map((msg) => (
            <li
              key={msg.id}
              className={`p-4 border rounded shadow cursor-pointer ${
                selectedMessage?.id === msg.id ? "bg-blue-100" : "bg-white hover:bg-gray-100"
              }`}
              onClick={() => setSelectedMessage(msg)}
            >
              {msg.content}
            </li>
          ))}
        </ul>

      
        {selectedMessage && (
          <div className="bg-white border rounded shadow p-4">
            <h3 className="text-lg font-semibold mb-2">Message sélectionné</h3>
            <p className="mb-4">{selectedMessage.content}</p>

            <textarea
              className="w-full border p-2 rounded mb-4"
              rows="4"
              placeholder="Écrire une réponse..."
              value={reply}
              onChange={(e) => setReply(e.target.value)}
            />

            <div className="flex justify-end gap-2">
              <button
                onClick={() => setSelectedMessage(null)}
                className="bg-gray-300 hover:bg-gray-400 px-4 py-2 rounded"
              >
                Fermer
              </button>
              <button
                onClick={handleReplySend}
                className="bg-blue-900 text-white hover:bg-blue-700 px-4 py-2 rounded"
              >
                Envoyer
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
