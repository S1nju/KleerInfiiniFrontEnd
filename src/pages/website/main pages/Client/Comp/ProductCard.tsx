"use client"

import { useState } from "react"
import { Link } from "react-router-dom"
import { ShoppingCart, Bookmark, ChevronLeft, ChevronRight } from "lucide-react"

interface Product {
  productname: string
  productdesc: string
  price: number
  images: string[]
  alt: string
  rating: number
}

// Simple Rating component
function RatingBasic({ rating }: { rating: number }) {
  return (
    <div className="flex items-center">
      {[...Array(5)].map((_, i) => (
        <svg
          key={i}
          className={`w-4 h-4 ${i < Math.floor(rating) ? "text-yellow-400" : "text-gray-300"}`}
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 20 20"
          fill="currentColor"
        >
          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118l-2.8-2.034c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
        </svg>
      ))}
      <span className="ml-1 text-sm text-gray-500">{rating.toFixed(1)}</span>
    </div>
  )
}

function ProductCard({ product }: { product: Product }) {
  const [currentImageIndex, setCurrentImageIndex] = useState(0)

  // Default image if no images are provided
  const images =
    product.images && product.images.length > 0 ? product.images : ["/placeholder.svg?height=300&width=400"]

  const nextImage = () => {
    setCurrentImageIndex((prevIndex) => (prevIndex === images.length - 1 ? 0 : prevIndex + 1))
  }

  const prevImage = () => {
    setCurrentImageIndex((prevIndex) => (prevIndex === 0 ? images.length - 1 : prevIndex - 1))
  }

  return (
    <div className="overflow-hidden rounded w-80 m-2 bg-white text-slate-500 shadow-lg hover:shadow-xl transition-shadow duration-300">
      {/* Image with Carousel */}
      <figure className="relative overflow-hidden group">
        <div className="aspect-video w-full overflow-hidden">
          <img
            src={images[currentImageIndex] || "/placeholder.svg"}
            alt={product.alt || product.productname}
            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
          />
        </div>

        {/* Carousel Navigation */}
        {images.length > 1 && (
          <>
            <button
              onClick={prevImage}
              className="absolute left-2 top-1/2 -translate-y-1/2 bg-white/80 rounded-full p-1 shadow-md opacity-0 group-hover:opacity-100 transition-opacity duration-300"
              aria-label="Previous image"
            >
              <ChevronLeft className="w-5 h-5 text-gray-700" />
            </button>
            <button
              onClick={nextImage}
              className="absolute right-2 top-1/2 -translate-y-1/2 bg-white/80 rounded-full p-1 shadow-md opacity-0 group-hover:opacity-100 transition-opacity duration-300"
              aria-label="Next image"
            >
              <ChevronRight className="w-5 h-5 text-gray-700" />
            </button>

            {/* Dots indicator */}
            <div className="absolute bottom-2 left-0 right-0 flex justify-center gap-1">
              {images.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentImageIndex(index)}
                  className={`w-2 h-2 rounded-full transition-colors ${
                    index === currentImageIndex ? "bg-blue-500" : "bg-white/70"
                  }`}
                  aria-label={`Go to image ${index + 1}`}
                />
              ))}
            </div>
          </>
        )}
      </figure>

      {/* Body */}
      <div className="p-6">
        <header className="mb-4 flex gap-2 items-center justify-between">
          <div>
            <h3 className="text-xl font-medium text-slate-700">
              <Link to={`produit/1`} className="hover:text-blue-500 transition-colors">
                {product.productname}
              </Link>
            </h3>
            <p className="text-slate-400">{product.price} DA</p>
          </div>
          <div>
            <RatingBasic rating={product.rating} />
          </div>
        </header>
        <p className="text-sm line-clamp-3">{product.productdesc}</p>
      </div>

      {/* Action buttons */}
      <div className="flex justify-center gap-2 p-6 pt-0">
        <button className="inline-flex h-10 w-full items-center justify-center gap-2 whitespace-nowrap rounded bg-blue-500 px-5 text-sm font-medium tracking-wide text-white transition duration-300 hover:bg-blue-600 focus:bg-blue-700 focus-visible:outline-none disabled:cursor-not-allowed disabled:border-blue-300 disabled:bg-blue-300 disabled:shadow-none">
          <ShoppingCart className="w-5 h-5" />
          <span className="hidden sm:inline">Ajouter au panier</span>
        </button>
        <button className="inline-flex h-10 w-full items-center justify-center gap-2 whitespace-nowrap rounded bg-blue-500 px-5 text-sm font-medium tracking-wide text-white transition duration-300 hover:bg-blue-600 focus:bg-blue-700 focus-visible:outline-none disabled:cursor-not-allowed disabled:border-blue-300 disabled:bg-blue-300 disabled:shadow-none">
          <Bookmark className="w-5 h-5" />
          <span className="hidden sm:inline">Favoris</span>
        </button>
      </div>
    </div>
  )
}

export default ProductCard
