"use client"

import { useState } from "react"
import { Link } from "react-router-dom"
import Navbar from "./Comp/NavBar"
import {
  User,
  MapPin,
  CreditCard,
  Package,
  Heart,
  Settings,
  LogOut,
  Edit,
  ShoppingBag,
  Bell,
  ChevronRight,
} from "lucide-react"

export default function Profile() {
  const [activeTab, setActiveTab] = useState("informations")

  // Données utilisateur fictives
  const user = {
    id: "user123",
    nom: "Thomas Dubois",
    email: "thomas.dubois@example.com",
    telephone: "+33 6 12 34 56 78",
    dateInscription: "12 mars 2022",
    avatar: "/placeholder.svg?height=200&width=200",
    adresses: [
      {
        id: "adr1",
        nom: "Domicile",
        rue: "15 Rue des Lilas",
        codePostal: "75011",
        ville: "Paris",
        pays: "France",
        defaut: true,
      },
      {
        id: "adr2",
        nom: "Bureau",
        rue: "42 Avenue des Champs-Élysées",
        codePostal: "75008",
        ville: "Paris",
        pays: "France",
        defaut: false,
      },
    ],
    paiements: [
      {
        id: "pay1",
        type: "Carte",
        numero: "•••• •••• •••• 4242",
        expiration: "09/25",
        defaut: true,
      },
      {
        id: "pay2",
        type: "PayPal",
        email: "thomas.dubois@example.com",
        defaut: false,
      },
    ],
    commandes: [
      {
        id: "cmd1",
        date: "15 avril 2023",
        montant: 124.5,
        statut: "Livré",
        produits: [
          { id: "prod1", nom: "Huile d'Olive Extra Vierge", quantite: 2, prix: 42.5 },
          { id: "prod2", nom: "Miel de Montagne", quantite: 1, prix: 39.5 },
        ],
      },
      {
        id: "cmd2",
        date: "3 mars 2023",
        montant: 87.25,
        statut: "Livré",
        produits: [
          { id: "prod3", nom: "Fromage Traditionnel", quantite: 1, prix: 32.75 },
          { id: "prod4", nom: "Confiture Artisanale", quantite: 2, prix: 27.25 },
        ],
      },
      {
        id: "cmd3",
        date: "28 mai 2023",
        montant: 156.0,
        statut: "En cours de livraison",
        produits: [
          { id: "prod5", nom: "Vin Rouge Millésimé", quantite: 1, prix: 78.0 },
          { id: "prod6", nom: "Chocolats Assortis", quantite: 2, prix: 39.0 },
        ],
      },
    ],
    favoris: [
      { id: "fav1", nom: "Huile d'Olive Extra Vierge", prix: 21.25, image: "/placeholder.svg?height=100&width=100" },
      { id: "fav2", nom: "Miel de Montagne", prix: 39.5, image: "/placeholder.svg?height=100&width=100" },
      { id: "fav3", nom: "Vin Rouge Millésimé", prix: 78.0, image: "/placeholder.svg?height=100&width=100" },
    ],
    notifications: [
      { id: "notif1", message: "Votre commande #CMD3 est en cours de livraison", date: "Aujourd'hui", lue: false },
      { id: "notif2", message: "Nouvelle promotion sur les produits laitiers", date: "Hier", lue: false },
      { id: "notif3", message: "Votre commande #CMD2 a été livrée", date: "3 mars 2023", lue: true },
    ],
  }

  // Formater le prix en euros
  const formaterPrix = (prix) => {
    return new Intl.NumberFormat("fr-FR", { style: "currency", currency: "EUR" }).format(prix)
  }

  return (
    <>

      <div className="container mx-auto px-4 py-8">
        <div className="mb-8">
          <Link to="/homepage/client" className="text-white hover:text-gray-300 flex items-center">
            <svg
              className="w-5 h-5 mr-2"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 19l-7-7m0 0l7-7m-7 7h18"></path>
            </svg>
            Retour à l'accueil
          </Link>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          {/* Sidebar - Profil et Navigation */}
          <div className="lg:col-span-1">
            <div className="bg-white rounded-lg shadow-lg p-6 mb-6">
              <div className="flex flex-col items-center mb-6">
                <div className="relative mb-4">
                  <img
                    src={user.avatar || "/placeholder.svg"}
                    alt={user.nom}
                    className="w-24 h-24 rounded-full object-cover border-4 border-blue-100"
                  />
                  <button className="absolute bottom-0 right-0 bg-blue-500 text-white p-1.5 rounded-full hover:bg-blue-600 transition-colors">
                    <Edit className="w-4 h-4" />
                  </button>
                </div>
                <h2 className="text-xl font-bold text-gray-800">{user.nom}</h2>
                <p className="text-gray-500 text-sm">{user.email}</p>
                <p className="text-gray-500 text-xs mt-1">Membre depuis {user.dateInscription}</p>
              </div>

              <nav className="space-y-1">
                <button
                  onClick={() => setActiveTab("informations")}
                  className={`w-full flex items-center px-4 py-3 rounded-lg transition-colors ${
                    activeTab === "informations" ? "bg-blue-50 text-blue-700" : "text-gray-700 hover:bg-gray-50"
                  }`}
                >
                  <User className="w-5 h-5 mr-3" />
                  <span>Informations personnelles</span>
                </button>

                <button
                  onClick={() => setActiveTab("commandes")}
                  className={`w-full flex items-center px-4 py-3 rounded-lg transition-colors ${
                    activeTab === "commandes" ? "bg-blue-50 text-blue-700" : "text-gray-700 hover:bg-gray-50"
                  }`}
                >
                  <Package className="w-5 h-5 mr-3" />
                  <span>Mes commandes</span>
                </button>

                <button
                  onClick={() => setActiveTab("adresses")}
                  className={`w-full flex items-center px-4 py-3 rounded-lg transition-colors ${
                    activeTab === "adresses" ? "bg-blue-50 text-blue-700" : "text-gray-700 hover:bg-gray-50"
                  }`}
                >
                  <MapPin className="w-5 h-5 mr-3" />
                  <span>Mes adresses</span>
                </button>

                <button
                  onClick={() => setActiveTab("paiements")}
                  className={`w-full flex items-center px-4 py-3 rounded-lg transition-colors ${
                    activeTab === "paiements" ? "bg-blue-50 text-blue-700" : "text-gray-700 hover:bg-gray-50"
                  }`}
                >
                  <CreditCard className="w-5 h-5 mr-3" />
                  <span>Moyens de paiement</span>
                </button>

                <button
                  onClick={() => setActiveTab("favoris")}
                  className={`w-full flex items-center px-4 py-3 rounded-lg transition-colors ${
                    activeTab === "favoris" ? "bg-blue-50 text-blue-700" : "text-gray-700 hover:bg-gray-50"
                  }`}
                >
                  <Heart className="w-5 h-5 mr-3" />
                  <span>Mes favoris</span>
                </button>

                <button
                  onClick={() => setActiveTab("notifications")}
                  className={`w-full flex items-center px-4 py-3 rounded-lg transition-colors ${
                    activeTab === "notifications" ? "bg-blue-50 text-blue-700" : "text-gray-700 hover:bg-gray-50"
                  }`}
                >
                  <Bell className="w-5 h-5 mr-3" />
                  <span>Notifications</span>
                  {user.notifications.filter((n) => !n.lue).length > 0 && (
                    <span className="ml-auto bg-red-500 text-white text-xs rounded-full px-2 py-1">
                      {user.notifications.filter((n) => !n.lue).length}
                    </span>
                  )}
                </button>

                <button
                  onClick={() => setActiveTab("parametres")}
                  className={`w-full flex items-center px-4 py-3 rounded-lg transition-colors ${
                    activeTab === "parametres" ? "bg-blue-50 text-blue-700" : "text-gray-700 hover:bg-gray-50"
                  }`}
                >
                  <Settings className="w-5 h-5 mr-3" />
                  <span>Paramètres</span>
                </button>

                <button className="w-full flex items-center px-4 py-3 rounded-lg text-red-600 hover:bg-red-50 transition-colors">
                  <LogOut className="w-5 h-5 mr-3" />
                  <span>Déconnexion</span>
                </button>
              </nav>
            </div>
          </div>

          {/* Contenu principal */}
          <div className="lg:col-span-3">
            <div className="bg-white rounded-lg shadow-lg p-6">
              {/* Informations personnelles */}
              {activeTab === "informations" && (
                <div>
                  <h2 className="text-2xl font-bold text-gray-800 mb-6">Informations personnelles</h2>

                  <form className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <label htmlFor="nom" className="block text-sm font-medium text-gray-700 mb-1">
                          Nom complet
                        </label>
                        <input
                          type="text"
                          id="nom"
                          defaultValue={user.nom}
                          className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500"
                        />
                      </div>

                      <div>
                        <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                          Adresse e-mail
                        </label>
                        <input
                          type="email"
                          id="email"
                          defaultValue={user.email}
                          className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500"
                        />
                      </div>

                      <div>
                        <label htmlFor="telephone" className="block text-sm font-medium text-gray-700 mb-1">
                          Numéro de téléphone
                        </label>
                        <input
                          type="tel"
                          id="telephone"
                          defaultValue={user.telephone}
                          className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500"
                        />
                      </div>

                      <div>
                        <label htmlFor="dateNaissance" className="block text-sm font-medium text-gray-700 mb-1">
                          Date de naissance
                        </label>
                        <input
                          type="date"
                          id="dateNaissance"
                          className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500"
                        />
                      </div>
                    </div>

                    <div>
                      <h3 className="text-lg font-semibold text-gray-800 mb-3">Changer le mot de passe</h3>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div>
                          <label htmlFor="currentPassword" className="block text-sm font-medium text-gray-700 mb-1">
                            Mot de passe actuel
                          </label>
                          <input
                            type="password"
                            id="currentPassword"
                            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500"
                          />
                        </div>

                        <div>
                          <label htmlFor="newPassword" className="block text-sm font-medium text-gray-700 mb-1">
                            Nouveau mot de passe
                          </label>
                          <input
                            type="password"
                            id="newPassword"
                            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500"
                          />
                        </div>

                        <div>
                          <label htmlFor="confirmPassword" className="block text-sm font-medium text-gray-700 mb-1">
                            Confirmer le mot de passe
                          </label>
                          <input
                            type="password"
                            id="confirmPassword"
                            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500"
                          />
                        </div>
                      </div>
                    </div>

                    <div className="flex justify-end">
                      <button
                        type="submit"
                        className="px-6 py-2 bg-blue-500 text-white font-medium rounded-lg hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50 transition-colors"
                      >
                        Enregistrer les modifications
                      </button>
                    </div>
                  </form>
                </div>
              )}

              {/* Commandes */}
              {activeTab === "commandes" && (
                <div>
                  <h2 className="text-2xl font-bold text-gray-800 mb-6">Mes commandes</h2>

                  {user.commandes.length > 0 ? (
                    <div className="space-y-6">
                      {user.commandes.map((commande) => (
                        <div key={commande.id} className="border border-gray-200 rounded-lg overflow-hidden">
                          <div className="bg-gray-50 px-6 py-4 flex flex-col md:flex-row md:items-center md:justify-between">
                            <div>
                              <p className="text-sm text-gray-500">Commande #{commande.id}</p>
                              <p className="font-medium">{commande.date}</p>
                            </div>
                            <div className="mt-2 md:mt-0 flex flex-col md:flex-row md:items-center gap-2 md:gap-4">
                              <p className="font-bold text-blue-600">{formaterPrix(commande.montant)}</p>
                              <span
                                className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${
                                  commande.statut === "Livré"
                                    ? "bg-green-100 text-green-800"
                                    : "bg-blue-100 text-blue-800"
                                }`}
                              >
                                {commande.statut}
                              </span>
                              <Link
                                to={`/commandes/${commande.id}`}
                                className="text-blue-500 hover:text-blue-700 flex items-center text-sm"
                              >
                                Détails
                                <ChevronRight className="w-4 h-4 ml-1" />
                              </Link>
                            </div>
                          </div>
                          <div className="p-6">
                            <h3 className="text-sm font-medium text-gray-700 mb-3">Produits</h3>
                            <div className="space-y-3">
                              {commande.produits.map((produit) => (
                                <div key={produit.id} className="flex justify-between items-center">
                                  <div className="flex items-center">
                                    <div className="w-12 h-12 bg-gray-100 rounded-md flex items-center justify-center mr-4">
                                      <ShoppingBag className="w-6 h-6 text-gray-400" />
                                    </div>
                                    <div>
                                      <p className="font-medium">{produit.nom}</p>
                                      <p className="text-sm text-gray-500">Quantité: {produit.quantite}</p>
                                    </div>
                                  </div>
                                  <p className="font-medium">{formaterPrix(produit.prix)}</p>
                                </div>
                              ))}
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  ) : (
                    <div className="text-center py-12">
                      <Package className="w-16 h-16 mx-auto text-gray-300 mb-4" />
                      <h3 className="text-lg font-medium text-gray-700 mb-2">Aucune commande</h3>
                      <p className="text-gray-500 mb-6">Vous n'avez pas encore passé de commande.</p>
                      <Link
                        to="/products"
                        className="inline-flex items-center px-6 py-3 bg-blue-500 text-white font-medium rounded-lg hover:bg-blue-600 transition-colors"
                      >
                        Découvrir nos produits
                      </Link>
                    </div>
                  )}
                </div>
              )}

              {/* Adresses */}
              {activeTab === "adresses" && (
                <div>
                  <div className="flex justify-between items-center mb-6">
                    <h2 className="text-2xl font-bold text-gray-800">Mes adresses</h2>
                    <button className="px-4 py-2 bg-blue-500 text-white font-medium rounded-lg hover:bg-blue-600 transition-colors flex items-center">
                      <span className="mr-2">+</span> Ajouter une adresse
                    </button>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {user.adresses.map((adresse) => (
                      <div
                        key={adresse.id}
                        className={`border rounded-lg p-6 relative ${adresse.defaut ? "border-blue-500" : "border-gray-200"}`}
                      >
                        {adresse.defaut && (
                          <span className="absolute top-4 right-4 bg-blue-100 text-blue-800 text-xs font-medium px-2.5 py-0.5 rounded-full">
                            Par défaut
                          </span>
                        )}
                        <h3 className="font-bold text-lg mb-1">{adresse.nom}</h3>
                        <p className="text-gray-700 mb-4">{adresse.rue}</p>
                        <p className="text-gray-700">
                          {adresse.codePostal} {adresse.ville}
                        </p>
                        <p className="text-gray-700 mb-4">{adresse.pays}</p>

                        <div className="flex gap-3 mt-4">
                          <button className="text-blue-500 hover:text-blue-700 text-sm font-medium">Modifier</button>
                          {!adresse.defaut && (
                            <>
                              <span className="text-gray-300">|</span>
                              <button className="text-blue-500 hover:text-blue-700 text-sm font-medium">
                                Définir par défaut
                              </button>
                            </>
                          )}
                          <span className="text-gray-300">|</span>
                          <button className="text-red-500 hover:text-red-700 text-sm font-medium">Supprimer</button>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* Moyens de paiement */}
              {activeTab === "paiements" && (
                <div>
                  <div className="flex justify-between items-center mb-6">
                    <h2 className="text-2xl font-bold text-gray-800">Moyens de paiement</h2>
                    <button className="px-4 py-2 bg-blue-500 text-white font-medium rounded-lg hover:bg-blue-600 transition-colors flex items-center">
                      <span className="mr-2">+</span> Ajouter un moyen de paiement
                    </button>
                  </div>

                  <div className="space-y-4">
                    {user.paiements.map((paiement) => (
                      <div
                        key={paiement.id}
                        className={`border rounded-lg p-6 flex items-center justify-between ${paiement.defaut ? "border-blue-500" : "border-gray-200"}`}
                      >
                        <div className="flex items-center">
                          <div className="w-12 h-12 bg-gray-100 rounded-full flex items-center justify-center mr-4">
                            {paiement.type === "Carte" ? (
                              <CreditCard className="w-6 h-6 text-gray-600" />
                            ) : (
                              <svg
                                className="w-6 h-6"
                                viewBox="0 0 24 24"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                              >
                                <path
                                  d="M7.5 4H16.5C17.12 4 17.67 4.02 18.16 4.09C20.79 4.38 21.5 5.62 21.5 9V15C21.5 18.38 20.79 19.62 18.16 19.91C17.67 19.98 17.12 20 16.5 20H7.5C6.88 20 6.33 19.98 5.84 19.91C3.21 19.62 2.5 18.38 2.5 15V9C2.5 5.62 3.21 4.38 5.84 4.09C6.33 4.02 6.88 4 7.5 4Z"
                                  stroke="#4B5563"
                                  strokeWidth="1.5"
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                />
                                <path
                                  d="M21.5 9L12 15L2.5 9"
                                  stroke="#4B5563"
                                  strokeWidth="1.5"
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                />
                              </svg>
                            )}
                          </div>
                          <div>
                            <h3 className="font-medium">{paiement.type}</h3>
                            {paiement.type === "Carte" ? (
                              <p className="text-gray-500">
                                {paiement.numero} • Exp: {paiement.expiration}
                              </p>
                            ) : (
                              <p className="text-gray-500">{paiement.email}</p>
                            )}
                            {paiement.defaut && (
                              <span className="inline-flex items-center mt-1 px-2.5 py-0.5 rounded-full text-xs font-medium bg-blue-100 text-blue-800">
                                Par défaut
                              </span>
                            )}
                          </div>
                        </div>

                        <div className="flex gap-3">
                          {!paiement.defaut && (
                            <button className="text-blue-500 hover:text-blue-700 text-sm font-medium">
                              Définir par défaut
                            </button>
                          )}
                          <button className="text-red-500 hover:text-red-700 text-sm font-medium">Supprimer</button>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* Favoris */}
              {activeTab === "favoris" && (
                <div>
                  <h2 className="text-2xl font-bold text-gray-800 mb-6">Mes favoris</h2>

                  {user.favoris.length > 0 ? (
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                      {user.favoris.map((favori) => (
                        <div key={favori.id} className="border border-gray-200 rounded-lg overflow-hidden">
                          <img
                            src={favori.image || "/placeholder.svg"}
                            alt={favori.nom}
                            className="w-full h-40 object-cover"
                          />
                          <div className="p-4">
                            <h3 className="font-medium mb-1">{favori.nom}</h3>
                            <p className="text-blue-600 font-bold mb-3">{formaterPrix(favori.prix)}</p>
                            <div className="flex gap-2">
                              <button className="flex-1 px-3 py-2 bg-blue-500 text-white text-sm font-medium rounded hover:bg-blue-600 transition-colors">
                                Ajouter au panier
                              </button>
                              <button className="px-3 py-2 border border-gray-300 text-gray-700 text-sm font-medium rounded hover:bg-gray-50 transition-colors">
                                Supprimer
                              </button>
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  ) : (
                    <div className="text-center py-12">
                      <Heart className="w-16 h-16 mx-auto text-gray-300 mb-4" />
                      <h3 className="text-lg font-medium text-gray-700 mb-2">Aucun favori</h3>
                      <p className="text-gray-500 mb-6">Vous n'avez pas encore ajouté de produits à vos favoris.</p>
                      <Link
                        to="/products"
                        className="inline-flex items-center px-6 py-3 bg-blue-500 text-white font-medium rounded-lg hover:bg-blue-600 transition-colors"
                      >
                        Découvrir nos produits
                      </Link>
                    </div>
                  )}
                </div>
              )}

              {/* Notifications */}
              {activeTab === "notifications" && (
                <div>
                  <div className="flex justify-between items-center mb-6">
                    <h2 className="text-2xl font-bold text-gray-800">Notifications</h2>
                    {user.notifications.filter((n) => !n.lue).length > 0 && (
                      <button className="text-blue-500 hover:text-blue-700 text-sm font-medium">
                        Marquer tout comme lu
                      </button>
                    )}
                  </div>

                  {user.notifications.length > 0 ? (
                    <div className="space-y-4">
                      {user.notifications.map((notification) => (
                        <div
                          key={notification.id}
                          className={`p-4 rounded-lg ${notification.lue ? "bg-white border border-gray-200" : "bg-blue-50 border border-blue-100"}`}
                        >
                          <div className="flex justify-between">
                            <p className={`${notification.lue ? "text-gray-700" : "text-gray-900 font-medium"}`}>
                              {notification.message}
                            </p>
                            <p className="text-sm text-gray-500">{notification.date}</p>
                          </div>
                          {!notification.lue && (
                            <button className="mt-2 text-blue-500 hover:text-blue-700 text-sm">Marquer comme lu</button>
                          )}
                        </div>
                      ))}
                    </div>
                  ) : (
                    <div className="text-center py-12">
                      <Bell className="w-16 h-16 mx-auto text-gray-300 mb-4" />
                      <h3 className="text-lg font-medium text-gray-700 mb-2">Aucune notification</h3>
                      <p className="text-gray-500">Vous n'avez pas de notifications pour le moment.</p>
                    </div>
                  )}
                </div>
              )}

              {/* Paramètres */}
              {activeTab === "parametres" && (
                <div>
                  <h2 className="text-2xl font-bold text-gray-800 mb-6">Paramètres</h2>

                  <div className="space-y-8">
                    <div>
                      <h3 className="text-lg font-semibold text-gray-800 mb-4">Préférences de notification</h3>
                      <div className="space-y-3">
                        <div className="flex items-center justify-between">
                          <div>
                            <p className="font-medium">Notifications par e-mail</p>
                            <p className="text-sm text-gray-500">
                              Recevoir des e-mails concernant vos commandes et compte
                            </p>
                          </div>
                          <label className="relative inline-flex items-center cursor-pointer">
                            <input type="checkbox" className="sr-only peer" defaultChecked />
                            <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-blue-500"></div>
                          </label>
                        </div>

                        <div className="flex items-center justify-between">
                          <div>
                            <p className="font-medium">Notifications promotionnelles</p>
                            <p className="text-sm text-gray-500">Recevoir des offres et promotions par e-mail</p>
                          </div>
                          <label className="relative inline-flex items-center cursor-pointer">
                            <input type="checkbox" className="sr-only peer" />
                            <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-blue-500"></div>
                          </label>
                        </div>
                      </div>
                    </div>

                    <div>
                      <h3 className="text-lg font-semibold text-gray-800 mb-4">Langue et région</h3>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div>
                          <label htmlFor="langue" className="block text-sm font-medium text-gray-700 mb-1">
                            Langue
                          </label>
                          <select
                            id="langue"
                            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500"
                            defaultValue="fr"
                          >
                            <option value="fr">Français</option>
                            <option value="en">English</option>
                            <option value="es">Español</option>
                            <option value="de">Deutsch</option>
                          </select>
                        </div>

                        <div>
                          <label htmlFor="devise" className="block text-sm font-medium text-gray-700 mb-1">
                            Devise
                          </label>
                          <select
                            id="devise"
                            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500"
                            defaultValue="eur"
                          >
                            <option value="eur">Euro (€)</option>
                            <option value="usd">Dollar américain ($)</option>
                            <option value="gbp">Livre sterling (£)</option>
                          </select>
                        </div>
                      </div>
                    </div>

                    <div>
                      <h3 className="text-lg font-semibold text-gray-800 mb-4">Confidentialité</h3>
                      <div className="space-y-3">
                        <div className="flex items-center justify-between">
                          <div>
                            <p className="font-medium">Historique de navigation</p>
                            <p className="text-sm text-gray-500">
                              Autoriser le site à enregistrer votre historique de navigation
                            </p>
                          </div>
                          <label className="relative inline-flex items-center cursor-pointer">
                            <input type="checkbox" className="sr-only peer" defaultChecked />
                            <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-blue-500"></div>
                          </label>
                        </div>
                      </div>
                    </div>

                    <div className="pt-4 border-t border-gray-200">
                      <h3 className="text-lg font-semibold text-red-600 mb-4">Zone de danger</h3>
                      <button className="px-6 py-2 bg-red-500 text-white font-medium rounded-lg hover:bg-red-600 focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-opacity-50 transition-colors">
                        Supprimer mon compte
                      </button>
                      <p className="mt-2 text-sm text-gray-500">
                        Cette action est irréversible et supprimera toutes vos données personnelles.
                      </p>
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
