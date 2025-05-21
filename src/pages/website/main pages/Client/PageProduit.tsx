
import { useState } from "react"
import { Link } from "react-router-dom"

export default function PageProduit() {
  const [quantite, setQuantite] = useState(1)
  const [estFavori, setEstFavori] = useState(false)

  // Données du produit (normalement récupérées depuis une API)
  const produit = {
    id: 1,
    nom: "Huile d'Olive Extra Vierge Bio",
    description:
      "Cette huile d'olive extra vierge est produite à partir d'olives biologiques cultivées dans le sud de la France. Pressée à froid pour préserver toutes ses qualités nutritionnelles et son goût exceptionnel. Idéale pour assaisonner vos salades ou finaliser vos plats.",
    prix: 18.5,
    notation: 4.7,
    nombreAvis: 124,
    stock: 25,
    images: [
      "/placeholder.svg?height=600&width=600",
      "/placeholder.svg?height=600&width=600",
      "/placeholder.svg?height=600&width=600",
    ],
    producteur: {
      id: 42,
      nom: "Domaine des Oliviers",
      localisation: "Provence, France",
      depenseTotal: 12450.75,
      image: "/placeholder.svg?height=100&width=100",
      nombreProduits: 15,
      dateInscription: "2020-05-12",
    },
  }

  const augmenterQuantite = () => {
    if (quantite < produit.stock) {
      setQuantite(quantite + 1)
    }
  }

  const diminuerQuantite = () => {
    if (quantite > 1) {
      setQuantite(quantite - 1)
    }
  }

  const basculerFavori = () => {
    setEstFavori(!estFavori)
  }

  const ajouterAuPanier = () => {
    alert(`${quantite} ${produit.nom} ajouté(s) au panier`)
    // Logique pour ajouter au panier
  }

  // Fonction pour afficher les étoiles de notation
  const afficherEtoiles = (note:any) => {
    const etoiles = []
    const noteEntiere = Math.floor(note)
    const fraction = note - noteEntiere

    // Étoiles pleines
    for (let i = 0; i < noteEntiere; i++) {
      etoiles.push(
        <svg key={`full-${i}`} className="h-5 w-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118l-2.8-2.034c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
        </svg>,
      )
    }

    // Étoile partielle si nécessaire
    if (fraction > 0) {
      etoiles.push(
        <svg key="partial" className="h-5 w-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
          <defs>
            <linearGradient id="partialFill">
              <stop offset={`${fraction * 100}%`} stopColor="currentColor" />
              <stop offset={`${fraction * 100}%`} stopColor="#D1D5DB" />
            </linearGradient>
          </defs>
          <path
            fill="url(#partialFill)"
            d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118l-2.8-2.034c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"
          />
        </svg>,
      )
    }

    // Étoiles vides
    for (let i = Math.ceil(note); i < 5; i++) {
      etoiles.push(
        <svg key={`empty-${i}`} className="h-5 w-5 text-gray-300" fill="currentColor" viewBox="0 0 20 20">
          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118l-2.8-2.034c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
        </svg>,
      )
    }

    return etoiles
  }

  // Formater le prix en euros
  const formaterPrix = (prix:any) => {
    return prix+" DA"
  }

  return (
    <>

      <main className="container mx-auto px-4 py-8">
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
            Retour aux produits
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          {/* Galerie d'images */}
          <div className="bg-white rounded-lg overflow-hidden shadow-lg">
            <img
              src={produit.images[0] || "/placeholder.svg"}
              alt={produit.nom}
              className="w-full h-auto object-cover"
            />
            <div className="flex mt-4 px-4 pb-4 space-x-2 overflow-x-auto">
              {produit.images.map((image, index) => (
                <img
                  key={index}
                  src={image || "/placeholder.svg"}
                  alt={`${produit.nom} - vue ${index + 1}`}
                  className="w-20 h-20 object-cover rounded-md cursor-pointer border-2 border-transparent hover:border-blue-500"
                />
              ))}
            </div>
          </div>

          {/* Informations produit */}
          <div className="bg-white rounded-lg p-6 shadow-lg">
            <div className="flex justify-between items-start">
              <h1 className="text-2xl font-bold text-gray-800 mb-2">{produit.nom}</h1>
              <button
                onClick={basculerFavori}
                className={`p-2 rounded-full ${estFavori ? "text-red-500" : "text-gray-400 hover:text-red-500"} transition-colors`}
                aria-label={estFavori ? "Retirer des favoris" : "Ajouter aux favoris"}
              >
                <svg
                  className="w-6 h-6"
                  fill={estFavori ? "currentColor" : "none"}
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
                  ></path>
                </svg>
              </button>
            </div>

            <div className="flex items-center mb-4">
              <div className="flex mr-2">{afficherEtoiles(produit.notation)}</div>
              <span className="text-gray-600">
                {produit.notation} ({produit.nombreAvis} avis)
              </span>
            </div>

            <div className="text-2xl font-bold text-blue-600 mb-4">{formaterPrix(produit.prix)}</div>

            <div className="mb-6">
              <h2 className="text-lg font-semibold mb-2">Description</h2>
              <p className="text-gray-700">{produit.description}</p>
            </div>

            <div className="mb-6">
              <h2 className="text-lg font-semibold mb-2">Disponibilité</h2>
              <p className={`${produit.stock > 0 ? "text-green-600" : "text-red-600"}`}>
                {produit.stock > 0 ? `En stock (${produit.stock} disponibles)` : "Rupture de stock"}
              </p>
            </div>

            <div className="mb-6">
              <h2 className="text-lg font-semibold mb-2">Quantité</h2>
              <div className="flex items-center">
                <button
                  onClick={diminuerQuantite}
                  disabled={quantite <= 1}
                  className="w-10 h-10 rounded-l-lg bg-gray-200 flex items-center justify-center hover:bg-gray-300 disabled:opacity-50"
                >
                  <svg
                    className="w-4 h-4"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M20 12H4"></path>
                  </svg>
                </button>
                <input
                  type="number"
                  value={quantite}
                  onChange={(e) =>
                    setQuantite(Math.min(Math.max(1, Number.parseInt(e.target.value) || 1), produit.stock))
                  }
                  className="w-16 h-10 text-center border-t border-b border-gray-300"
                  min="1"
                  max={produit.stock}
                />
                <button
                  onClick={augmenterQuantite}
                  disabled={quantite >= produit.stock}
                  className="w-10 h-10 rounded-r-lg bg-gray-200 flex items-center justify-center hover:bg-gray-300 disabled:opacity-50"
                >
                  <svg
                    className="w-4 h-4"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 4v16m8-8H4"></path>
                  </svg>
                </button>
              </div>
            </div>

            <button
              onClick={ajouterAuPanier}
              className="w-full py-3 px-6 bg-blue-600 text-white font-semibold rounded-lg shadow-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50 transition-colors"
            >
              Ajouter au panier
            </button>
          </div>
        </div>

        {/* Profil du producteur */}
        <div className="bg-white rounded-lg p-6 shadow-lg mb-12">
          <h2 className="text-xl font-bold text-gray-800 mb-4">Profil du Producteur</h2>

          <div className="flex flex-col md:flex-row items-start gap-6">
            <div className="flex-shrink-0">
              <img
                src={produit.producteur.image || "/placeholder.svg"}
                alt={produit.producteur.nom}
                className="w-24 h-24 rounded-full object-cover border-2 border-blue-500"
              />
            </div>

            <div className="flex-grow">
              <h3 className="text-lg font-semibold">{produit.producteur.nom}</h3>
              <p className="text-gray-600 mb-2">{produit.producteur.localisation}</p>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-4">
                <div className="bg-gray-50 p-3 rounded-lg">
                  <p className="text-sm text-gray-500">Montant total dépensé</p>
                  <p className="text-lg font-semibold">{formaterPrix(produit.producteur.depenseTotal)}</p>
                </div>

                <div className="bg-gray-50 p-3 rounded-lg">
                  <p className="text-sm text-gray-500">Nombre de produits</p>
                  <p className="text-lg font-semibold">{produit.producteur.nombreProduits}</p>
                </div>

                <div className="bg-gray-50 p-3 rounded-lg">
                  <p className="text-sm text-gray-500">Membre depuis</p>
                  <p className="text-lg font-semibold">
                    {new Date(produit.producteur.dateInscription).toLocaleDateString("fr-FR", {
                      year: "numeric",
                      month: "long",
                    })}
                  </p>
                </div>
              </div>

              <div className="mt-4">
                <Link
                  to={`/producteur/${produit.producteur.id}`}
                  className="text-blue-500 hover:text-blue-700 font-medium"
                >
                  Voir tous les produits de ce producteur
                </Link>
              </div>
            </div>
          </div>
        </div>

        {/* Produits similaires - optionnel */}
        <div className="bg-white rounded-lg p-6 shadow-lg">
          <h2 className="text-xl font-bold text-gray-800 mb-4">Vous pourriez aussi aimer</h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {/* Produits similaires ici */}
            {[1, 2, 3, 4].map((item) => (
              <div key={item} className="bg-white rounded-lg overflow-hidden shadow border">
                <img
                  src="/placeholder.svg?height=200&width=300"
                  alt="Produit similaire"
                  className="w-full h-48 object-cover"
                />
                <div className="p-4">
                  <h3 className="font-semibold text-gray-800 mb-1">Produit similaire {item}</h3>
                  <div className="flex items-center mb-2">
                    <div className="flex">
                      {[1, 2, 3, 4, 5].map((star) => (
                        <svg key={star} className="h-4 w-4 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118l-2.8-2.034c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                        </svg>
                      ))}
                    </div>
                    <span className="text-xs text-gray-500 ml-1">(42)</span>
                  </div>
                  <p className="text-blue-600 font-bold">{formaterPrix(12.99)}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </main>
    </>
  )
}
