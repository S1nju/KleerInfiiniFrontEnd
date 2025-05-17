"use client"

import { useState } from "react"
import { Link } from "react-router-dom"
import Loading from "../../loading/loading.tsx"
import Cookie from "cookie-universal"
import Navbar from "./Components/NavBar.tsx"

export default function RegisterClient() {
  const [form, setform] = useState({
    nom: "",
    societe: "",
    secteurActivite: "",
    languePreferee: "",
    email: "",
    password: "",
    confirmPassword: "",
  })
  const [errtxt, seterrtxt] = useState("")
  const [loading, setloading] = useState(false)
  const [showPassword, setShowPassword] = useState(false)
  const [showConfirmPassword, setShowConfirmPassword] = useState(false)

  const cookie = Cookie()

  function check(e: any) {
    setform({ ...form, [e.target.name]: e.target.value })
  }

  return (
    <div className="flex flex-col items-center justify-center bg-blue-900">
      <Navbar></Navbar>

      <div className="bg-white shadow-xl/30 flex flex-col justify-center items-center rounded-2xl p-5 m-4 md:m-10 w-full max-w-4xl">
        <h2 className="text-4xl text-blue-700">Inscription Client</h2>

        <form className="flex w-full flex-col flex-wrap">
          {/* Section Information Personnelle */}
          <div className="mt-6 self-start">
            <p className="text-2xl text-blue-900">Information Personnelle</p>
            <div className="bg-blue-900 w-full h-0.5 m-2"></div>
          </div>

          <section className="flex flex-wrap gap-2 w-full">
            {/* Nom */}
            <div className="relative my-6 w-full md:w-[calc(50%-0.5rem)]">
              <input
                id="id-nom"
                type="text"
                name="nom"
                placeholder="Nom"
                value={form.nom}
                className="peer relative h-12 w-full border-b border-slate-200 px-4 pl-12 text-slate-500 placeholder-transparent outline-none transition-all autofill:bg-white invalid:border-pink-500 invalid:text-pink-500 focus:border-blue-500 focus:outline-none invalid:focus:border-pink-500 focus-visible:outline-none disabled:cursor-not-allowed disabled:bg-slate-50 disabled:text-slate-400"
                onChange={check}
                required
              />
              <label
                htmlFor="id-nom"
                className="absolute left-2 -top-2 z-[1] cursor-text px-2 text-xs text-slate-400 transition-all before:absolute before:top-0 before:left-0 before:z-[-1] before:block before:h-full before:w-full before:bg-white before:transition-all peer-placeholder-shown:top-3 peer-placeholder-shown:left-10 peer-placeholder-shown:text-base peer-autofill:-top-2 peer-required:after:text-pink-500 peer-required:after:content-['\00a0*'] peer-invalid:text-pink-500 peer-focus:-top-2 peer-focus:left-2 peer-focus:cursor-default peer-focus:text-xs peer-focus:text-blue-500 peer-invalid:peer-focus:text-pink-500 peer-disabled:cursor-not-allowed peer-disabled:text-slate-400 peer-disabled:before:bg-transparent"
              >
                Nom
              </label>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="absolute top-3 left-4 h-6 w-6 stroke-slate-400 peer-disabled:cursor-not-allowed"
                fill="none"
                aria-hidden="true"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth="1.5"
                aria-labelledby="title-nom description-nom"
                role="graphics-symbol"
              >
                <title id="title-nom">User icon</title>
                <desc id="description-nom">Icon for user name</desc>
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                />
              </svg>
              <small className="absolute flex w-full justify-between px-4 py-1 text-xs text-slate-400 transition peer-invalid:text-pink-500">
                <span>Veuillez entrer votre nom</span>
              </small>
            </div>

            {/* Société */}
            <div className="relative my-6 w-full md:w-[calc(50%-0.5rem)]">
              <input
                id="id-societe"
                type="text"
                name="societe"
                placeholder="Société"
                value={form.societe}
                className="peer relative h-12 w-full border-b border-slate-200 px-4 pl-12 text-slate-500 placeholder-transparent outline-none transition-all autofill:bg-white invalid:border-pink-500 invalid:text-pink-500 focus:border-blue-500 focus:outline-none invalid:focus:border-pink-500 focus-visible:outline-none disabled:cursor-not-allowed disabled:bg-slate-50 disabled:text-slate-400"
                onChange={check}
              />
              <label
                htmlFor="id-societe"
                className="absolute left-2 -top-2 z-[1] cursor-text px-2 text-xs text-slate-400 transition-all before:absolute before:top-0 before:left-0 before:z-[-1] before:block before:h-full before:w-full before:bg-white before:transition-all peer-placeholder-shown:top-3 peer-placeholder-shown:left-10 peer-placeholder-shown:text-base peer-autofill:-top-2 peer-required:after:text-pink-500 peer-required:after:content-['\00a0*'] peer-invalid:text-pink-500 peer-focus:-top-2 peer-focus:left-2 peer-focus:cursor-default peer-focus:text-xs peer-focus:text-blue-500 peer-invalid:peer-focus:text-pink-500 peer-disabled:cursor-not-allowed peer-disabled:text-slate-400 peer-disabled:before:bg-transparent"
              >
                Société
              </label>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="absolute top-3 left-4 h-6 w-6 stroke-slate-400 peer-disabled:cursor-not-allowed"
                fill="none"
                aria-hidden="true"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth="1.5"
                aria-labelledby="title-societe description-societe"
                role="graphics-symbol"
              >
                <title id="title-societe">Building icon</title>
                <desc id="description-societe">Icon for company</desc>
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"
                />
              </svg>
              <small className="absolute flex w-full justify-between px-4 py-1 text-xs text-slate-400 transition peer-invalid:text-pink-500">
                <span>Nom de votre société (optionnel)</span>
              </small>
            </div>
          </section>

          {/* Section Coordonnées */}
          <div className="mt-6 self-start">
            <p className="text-2xl text-blue-900">Coordonnées</p>
            <div className="bg-blue-900 w-full h-0.5 m-2"></div>
          </div>

          <section className="flex flex-wrap gap-2 w-full">
            {/* Secteur d'activité */}
            <div className="relative my-6 w-full md:w-[calc(50%-0.5rem)]">
              <select
                id="id-secteur"
                name="secteurActivite"
                value={form.secteurActivite}
                onChange={check}
                required
                className="peer relative h-10 w-full appearance-none border-b border-slate-200 bg-white px-4 text-sm text-slate-500 outline-none transition-all autofill:bg-white focus:border-blue-500 focus-visible:outline-none focus:focus-visible:outline-none disabled:cursor-not-allowed disabled:bg-slate-50 disabled:text-slate-400"
              >
                <option value="" disabled selected></option>
                <option value="agriculture">Agriculture</option>
                <option value="industrie">Industrie</option>
                <option value="services">Services</option>
                <option value="commerce">Commerce</option>
                <option value="autre">Autre</option>
              </select>
              <label
                htmlFor="id-secteur"
                className="pointer-events-none absolute top-2.5 left-2 z-[1] px-2 text-sm text-slate-400 transition-all before:absolute before:top-0 before:left-0 before:z-[-1] before:block before:h-full before:w-full before:bg-white before:transition-all peer-required:after:text-pink-500 peer-required:after:content-['\00a0*'] peer-valid:-top-2 peer-valid:text-xs peer-focus:-top-2 peer-focus:text-xs peer-focus:text-blue-500 peer-disabled:cursor-not-allowed peer-disabled:text-slate-400 peer-disabled:before:bg-transparent"
              >
                Secteur d'activité
              </label>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="pointer-events-none absolute top-2.5 right-2 h-5 w-5 fill-slate-400 transition-all peer-focus:fill-blue-500 peer-disabled:cursor-not-allowed"
                viewBox="0 0 20 20"
                fill="currentColor"
                aria-labelledby="title-secteur description-secteur"
                role="graphics-symbol"
              >
                <title id="title-secteur">Arrow Icon</title>
                <desc id="description-secteur">Arrow icon of the select list.</desc>
                <path
                  fillRule="evenodd"
                  d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                  clipRule="evenodd"
                />
              </svg>
              <small className="absolute flex w-full justify-between px-4 py-1 text-xs text-slate-400 transition">
                <span>Veuillez choisir votre secteur d'activité</span>
              </small>
            </div>

            {/* Langue préférée */}
            <div className="relative my-6 w-full md:w-[calc(50%-0.5rem)]">
              <select
                id="id-langue"
                name="languePreferee"
                value={form.languePreferee}
                onChange={check}
                required
                className="peer relative h-10 w-full appearance-none border-b border-slate-200 bg-white px-4 text-sm text-slate-500 outline-none transition-all autofill:bg-white focus:border-blue-500 focus-visible:outline-none focus:focus-visible:outline-none disabled:cursor-not-allowed disabled:bg-slate-50 disabled:text-slate-400"
              >
                <option value="" disabled selected></option>
                <option value="francais">Français</option>
                <option value="anglais">Anglais</option>
                <option value="arabe">Arabe</option>
              </select>
              <label
                htmlFor="id-langue"
                className="pointer-events-none absolute top-2.5 left-2 z-[1] px-2 text-sm text-slate-400 transition-all before:absolute before:top-0 before:left-0 before:z-[-1] before:block before:h-full before:w-full before:bg-white before:transition-all peer-required:after:text-pink-500 peer-required:after:content-['\00a0*'] peer-valid:-top-2 peer-valid:text-xs peer-focus:-top-2 peer-focus:text-xs peer-focus:text-blue-500 peer-disabled:cursor-not-allowed peer-disabled:text-slate-400 peer-disabled:before:bg-transparent"
              >
                Langue préférée
              </label>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="pointer-events-none absolute top-2.5 right-2 h-5 w-5 fill-slate-400 transition-all peer-focus:fill-blue-500 peer-disabled:cursor-not-allowed"
                viewBox="0 0 20 20"
                fill="currentColor"
                aria-labelledby="title-langue description-langue"
                role="graphics-symbol"
              >
                <title id="title-langue">Arrow Icon</title>
                <desc id="description-langue">Arrow icon of the select list.</desc>
                <path
                  fillRule="evenodd"
                  d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                  clipRule="evenodd"
                />
              </svg>
              <small className="absolute flex w-full justify-between px-4 py-1 text-xs text-slate-400 transition">
                <span>Veuillez choisir votre langue préférée</span>
              </small>
            </div>

            {/* Email */}
            <div className="relative my-6 w-full">
              <input
                id="id-email"
                type="email"
                name="email"
                placeholder="Email"
                value={form.email}
                className="peer relative h-12 w-full border-b border-slate-200 px-4 pl-12 text-slate-500 placeholder-transparent outline-none transition-all autofill:bg-white invalid:border-pink-500 invalid:text-pink-500 focus:border-blue-500 focus:outline-none invalid:focus:border-pink-500 focus-visible:outline-none disabled:cursor-not-allowed disabled:bg-slate-50 disabled:text-slate-400"
                onChange={check}
                required
              />
              <label
                htmlFor="id-email"
                className="absolute left-2 -top-2 z-[1] cursor-text px-2 text-xs text-slate-400 transition-all before:absolute before:top-0 before:left-0 before:z-[-1] before:block before:h-full before:w-full before:bg-white before:transition-all peer-placeholder-shown:top-3 peer-placeholder-shown:left-10 peer-placeholder-shown:text-base peer-autofill:-top-2 peer-required:after:text-pink-500 peer-required:after:content-['\00a0*'] peer-invalid:text-pink-500 peer-focus:-top-2 peer-focus:left-2 peer-focus:cursor-default peer-focus:text-xs peer-focus:text-blue-500 peer-invalid:peer-focus:text-pink-500 peer-disabled:cursor-not-allowed peer-disabled:text-slate-400 peer-disabled:before:bg-transparent"
              >
                Email
              </label>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="absolute top-3 left-4 h-6 w-6 stroke-slate-400 peer-disabled:cursor-not-allowed"
                fill="none"
                aria-hidden="true"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth="1.5"
                aria-labelledby="title-email description-email"
                role="graphics-symbol"
              >
                <title id="title-email">Email icon</title>
                <desc id="description-email">Icon for email</desc>
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                />
              </svg>
              <small className="absolute flex w-full justify-between px-4 py-1 text-xs text-slate-400 transition peer-invalid:text-pink-500">
                <span>Veuillez entrer votre adresse email</span>
              </small>
            </div>

            {/* Mot de passe */}
            <div className="relative my-6 w-full md:w-[calc(50%-0.5rem)]">
              <input
                id="id-password"
                type={showPassword ? "text" : "password"}
                name="password"
                placeholder="Mot de passe"
                value={form.password}
                className="peer relative h-12 w-full border-b border-slate-200 px-4 pl-12 pr-12 text-slate-500 placeholder-transparent outline-none transition-all autofill:bg-white invalid:border-pink-500 invalid:text-pink-500 focus:border-blue-500 focus:outline-none invalid:focus:border-pink-500 focus-visible:outline-none disabled:cursor-not-allowed disabled:bg-slate-50 disabled:text-slate-400"
                onChange={check}
                required
              />
              <label
                htmlFor="id-password"
                className="absolute left-2 -top-2 z-[1] cursor-text px-2 text-xs text-slate-400 transition-all before:absolute before:top-0 before:left-0 before:z-[-1] before:block before:h-full before:w-full before:bg-white before:transition-all peer-placeholder-shown:top-3 peer-placeholder-shown:left-10 peer-placeholder-shown:text-base peer-autofill:-top-2 peer-required:after:text-pink-500 peer-required:after:content-['\00a0*'] peer-invalid:text-pink-500 peer-focus:-top-2 peer-focus:left-2 peer-focus:cursor-default peer-focus:text-xs peer-focus:text-blue-500 peer-invalid:peer-focus:text-pink-500 peer-disabled:cursor-not-allowed peer-disabled:text-slate-400 peer-disabled:before:bg-transparent"
              >
                Mot de passe
              </label>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="absolute top-3 left-4 h-6 w-6 stroke-slate-400 peer-disabled:cursor-not-allowed"
                fill="none"
                aria-hidden="true"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth="1.5"
                aria-labelledby="title-password description-password"
                role="graphics-symbol"
              >
                <title id="title-password">Lock icon</title>
                <desc id="description-password">Icon for password</desc>
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"
                />
              </svg>
              <button
                type="button"
                className="absolute right-3 top-3 text-slate-400"
                onClick={() => setShowPassword(!showPassword)}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={1.5}
                >
                  {showPassword ? (
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M13.875 18.825A10.05 10.05 0 0112 19c-4.478 0-8.268-2.943-9.543-7a9.97 9.97 0 011.563-3.029m5.858.908a3 3 0 114.243 4.243M9.878 9.878l4.242 4.242M9.88 9.88l-3.29-3.29m7.532 7.532l3.29 3.29M3 3l3.59 3.59m0 0A9.953 9.953 0 0112 5c4.478 0 8.268 2.943 9.543 7a10.025 10.025 0 01-4.132 5.411m0 0L21 21"
                    />
                  ) : (
                    <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                  )}
                </svg>
              </button>
              <small className="absolute flex w-full justify-between px-4 py-1 text-xs text-slate-400 transition peer-invalid:text-pink-500">
                <span>Minimum 8 caractères</span>
              </small>
            </div>

            {/* Confirmer mot de passe */}
            <div className="relative my-6 w-full md:w-[calc(50%-0.5rem)]">
              <input
                id="id-confirm-password"
                type={showConfirmPassword ? "text" : "password"}
                name="confirmPassword"
                placeholder="Confirmer le mot de passe"
                value={form.confirmPassword}
                className="peer relative h-12 w-full border-b border-slate-200 px-4 pl-12 pr-12 text-slate-500 placeholder-transparent outline-none transition-all autofill:bg-white invalid:border-pink-500 invalid:text-pink-500 focus:border-blue-500 focus:outline-none invalid:focus:border-pink-500 focus-visible:outline-none disabled:cursor-not-allowed disabled:bg-slate-50 disabled:text-slate-400"
                onChange={check}
                required
              />
              <label
                htmlFor="id-confirm-password"
                className="absolute left-2 -top-2 z-[1] cursor-text px-2 text-xs text-slate-400 transition-all before:absolute before:top-0 before:left-0 before:z-[-1] before:block before:h-full before:w-full before:bg-white before:transition-all peer-placeholder-shown:top-3 peer-placeholder-shown:left-10 peer-placeholder-shown:text-base peer-autofill:-top-2 peer-required:after:text-pink-500 peer-required:after:content-['\00a0*'] peer-invalid:text-pink-500 peer-focus:-top-2 peer-focus:left-2 peer-focus:cursor-default peer-focus:text-xs peer-focus:text-blue-500 peer-invalid:peer-focus:text-pink-500 peer-disabled:cursor-not-allowed peer-disabled:text-slate-400 peer-disabled:before:bg-transparent"
              >
                Confirmer le mot de passe
              </label>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="absolute top-3 left-4 h-6 w-6 stroke-slate-400 peer-disabled:cursor-not-allowed"
                fill="none"
                aria-hidden="true"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth="1.5"
                aria-labelledby="title-confirm-password description-confirm-password"
                role="graphics-symbol"
              >
                <title id="title-confirm-password">Lock icon</title>
                <desc id="description-confirm-password">Icon for confirm password</desc>
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"
                />
              </svg>
              <button
                type="button"
                className="absolute right-3 top-3 text-slate-400"
                onClick={() => setShowConfirmPassword(!showConfirmPassword)}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={1.5}
                >
                  {showConfirmPassword ? (
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M13.875 18.825A10.05 10.05 0 0112 19c-4.478 0-8.268-2.943-9.543-7a9.97 9.97 0 011.563-3.029m5.858.908a3 3 0 114.243 4.243M9.878 9.878l4.242 4.242M9.88 9.88l-3.29-3.29m7.532 7.532l3.29 3.29M3 3l3.59 3.59m0 0A9.953 9.953 0 0112 5c4.478 0 8.268 2.943 9.543 7a10.025 10.025 0 01-4.132 5.411m0 0L21 21"
                    />
                  ) : (
                    <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                  )}
                </svg>
              </button>
              <small className="absolute flex w-full justify-between px-4 py-1 text-xs text-slate-400 transition peer-invalid:text-pink-500">
                <span>Veuillez confirmer votre mot de passe</span>
              </small>
            </div>
          </section>

          <button className="inline-flex items-center justify-center h-10 gap-2 px-5 text-sm font-medium tracking-wide text-white transition duration-300 rounded whitespace-nowrap bg-blue-500 hover:bg-blue-600 focus:bg-blue-700 focus-visible:outline-none disabled:cursor-not-allowed disabled:border-blue-300 disabled:bg-blue-300 disabled:shadow-none mt-6">
            {loading ? (
              <>
                <Loading></Loading>
              </>
            ) : (
              <span>S'inscrire</span>
            )}
          </button>
        </form>

        <p className="mt-6">
          Vous avez déjà un compte?{" "}
          <Link to="/login" className="text-blue-400">
            <b>Se connecter</b>
          </Link>
        </p>
      </div>
    </div>
  )
}
