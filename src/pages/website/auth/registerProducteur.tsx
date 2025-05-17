
import { useState } from "react"
import { Link } from "react-router-dom"
import Loading from "../../loading/loading.tsx"
import Cookie from "cookie-universal"
import Navbar from "./Components/NavBar.tsx"

export default function RegisterProducteur() {
  const [form, setform] = useState({
    nomEntreprise: "",
    ActivitePrincipal: "",
    NIF: "",
    DescritionDeEntreprise: "",
    CapaciteDeProductionM: "",
    CapaciteDeProductionA: "",
    MarchesCibles: "",
  })
  const [errtxt, seterrtxt] = useState("")
  const [loading, setloading] = useState(false)
  const [loading2, setloading2] = useState(false)
  const [showPassword, setShowPassword] = useState(false)

  const cookie = Cookie()

  function check(e: any) {
    setform({ ...form, [e.target.name]: e.target.value })
  }

  return (
    <div className="flex flex-col items-center justify-center bg-blue-900">
      <Navbar></Navbar>

      <div className="bg-white shadow-xl/30 flex flex-col justify-center items-center rounded-2xl p-5 m-4 md:m-10 w-full max-w-4xl">
        <h2 className="text-4xl text-blue-700">Inscription Producteur</h2>

        <form className="flex w-full flex-col flex-wrap">
          <div className="mt-6 self-start">
            <p className="text-2xl text-blue-900">Information de l'Entreprise</p>
            <div className="bg-blue-900 w-full h-0.5 m-2"></div>
          </div>

          <section className="flex flex-wrap gap-2 w-full">
            {/* Nom de l'entreprise */}
            <div className="relative my-6 w-full md:w-[calc(50%-0.5rem)]">
              <input
                id="id-l12"
                type="text"
                name="nomEntreprise"
                placeholder="Nom de l'entreprise"
                value={form.nomEntreprise}
                className="peer relative h-12 w-full border-b border-slate-200 px-4 pl-12 text-slate-500 placeholder-transparent outline-none transition-all autofill:bg-white invalid:border-pink-500 invalid:text-pink-500 focus:border-blue-500 focus:outline-none invalid:focus:border-pink-500 focus-visible:outline-none disabled:cursor-not-allowed disabled:bg-slate-50 disabled:text-slate-400"
                onChange={check}
                required
              />
              <label
                htmlFor="id-l12"
                className="absolute left-2 -top-2 z-[1] cursor-text px-2 text-xs text-slate-400 transition-all before:absolute before:top-0 before:left-0 before:z-[-1] before:block before:h-full before:w-full before:bg-white before:transition-all peer-placeholder-shown:top-3 peer-placeholder-shown:left-10 peer-placeholder-shown:text-base peer-autofill:-top-2 peer-required:after:text-pink-500 peer-required:after:content-['\00a0*'] peer-invalid:text-pink-500 peer-focus:-top-2 peer-focus:left-2 peer-focus:cursor-default peer-focus:text-xs peer-focus:text-blue-500 peer-invalid:peer-focus:text-pink-500 peer-disabled:cursor-not-allowed peer-disabled:text-slate-400 peer-disabled:before:bg-transparent"
              >
                Nom de l'entreprise
              </label>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="absolute top-3 left-4 h-6 w-6 stroke-slate-400 peer-disabled:cursor-not-allowed"
                fill="none"
                aria-hidden="true"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth="1.5"
                aria-labelledby="title-5 description-5"
                role="graphics-symbol"
              >
                <title id="title-5">Building icon</title>
                <desc id="description-5">Icon for company name</desc>
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"
                />
              </svg>
              <small className="absolute flex w-full justify-between px-4 py-1 text-xs text-slate-400 transition peer-invalid:text-pink-500">
                <span>veuillez entrer le Nom de l'entreprise</span>
              </small>
            </div>

            {/* Activité Principale */}
            <div className="relative my-6 w-full md:w-[calc(50%-0.5rem)]">
              <select
                id="id-02"
                name="ActivitePrincipal"
                value={form.ActivitePrincipal}
                onChange={check}
                required
                className="peer relative h-10 w-full appearance-none border-b border-slate-200 bg-white px-4 text-sm text-slate-500 outline-none transition-all autofill:bg-white focus:border-blue-500 focus-visible:outline-none focus:focus-visible:outline-none disabled:cursor-not-allowed disabled:bg-slate-50 disabled:text-slate-400"
              >
                <option value="" disabled selected></option>
                <option value="1">Option 1</option>
                <option value="2">Option 2</option>
                <option value="3">Option 3</option>
              </select>
              <label
                htmlFor="id-02"
                className="pointer-events-none absolute top-2.5 left-2 z-[1] px-2 text-sm text-slate-400 transition-all before:absolute before:top-0 before:left-0 before:z-[-1] before:block before:h-full before:w-full before:bg-white before:transition-all peer-required:after:text-pink-500 peer-required:after:content-['\00a0*'] peer-valid:-top-2 peer-valid:text-xs peer-focus:-top-2 peer-focus:text-xs peer-focus:text-blue-500 peer-disabled:cursor-not-allowed peer-disabled:text-slate-400 peer-disabled:before:bg-transparent"
              >
                Select an option
              </label>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="pointer-events-none absolute top-2.5 right-2 h-5 w-5 fill-slate-400 transition-all peer-focus:fill-blue-500 peer-disabled:cursor-not-allowed"
                viewBox="0 0 20 20"
                fill="currentColor"
                aria-labelledby="title-02 description-02"
                role="graphics-symbol"
              >
                <title id="title-02">Arrow Icon</title>
                <desc id="description-02">Arrow icon of the select list.</desc>
                <path
                  fillRule="evenodd"
                  d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                  clipRule="evenodd"
                />
              </svg>
              <small className="absolute flex w-full justify-between px-4 py-1 text-xs text-slate-400 transition">
                <span>Veuillez choisir l'activité principale</span>
              </small>
            </div>

            {/* NIF */}
            <div className="relative my-6 w-full">
              <input
                id="id-l1"
                type="text"
                name="NIF"
                placeholder="N de regitre de commerce / NIF"
                value={form.NIF}
                className="peer relative h-12 w-full border-b border-slate-200 px-4 pl-12 text-slate-500 placeholder-transparent outline-none transition-all autofill:bg-white invalid:border-pink-500 invalid:text-pink-500 focus:border-blue-500 focus:outline-none invalid:focus:border-pink-500 focus-visible:outline-none disabled:cursor-not-allowed disabled:bg-slate-50 disabled:text-slate-400"
                onChange={check}
                required
              />
              <label
                htmlFor="id-l1"
                className="absolute left-2 -top-2 z-[1] cursor-text px-2 text-xs text-slate-400 transition-all before:absolute before:top-0 before:left-0 before:z-[-1] before:block before:h-full before:w-full before:bg-white before:transition-all peer-placeholder-shown:top-3 peer-placeholder-shown:left-10 peer-placeholder-shown:text-base peer-autofill:-top-2 peer-required:after:text-pink-500 peer-required:after:content-['\00a0*'] peer-invalid:text-pink-500 peer-focus:-top-2 peer-focus:left-2 peer-focus:cursor-default peer-focus:text-xs peer-focus:text-blue-500 peer-invalid:peer-focus:text-pink-500 peer-disabled:cursor-not-allowed peer-disabled:text-slate-400 peer-disabled:before:bg-transparent"
              >
                NIF
              </label>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="absolute top-3 left-4 h-6 w-6 stroke-slate-400 peer-disabled:cursor-not-allowed"
                fill="none"
                aria-hidden="true"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth="1.5"
                aria-labelledby="title-5 description-5"
                role="graphics-symbol"
              >
                <title id="title-5">Document icon</title>
                <desc id="description-5">Icon for registration number</desc>
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                />
              </svg>
              <small className="absolute flex w-full justify-between px-4 py-1 text-xs text-slate-400 transition peer-invalid:text-pink-500">
                <span>N de regitre de commerce / NIF</span>
              </small>
            </div>
          </section>

          <div className="mt-6 self-start">
            <p className="text-2xl text-blue-900">Détails de l'Entreprise</p>
            <div className="bg-blue-900 w-full h-0.5 m-2"></div>
          </div>

          <section className="flex flex-wrap gap-2 items-center w-full">
            {/* Description */}
            <div className="relative my-6 w-full">
              <textarea
                id="id-l1214"
                name="DescritionDeEntreprise"
                placeholder="description de l'entreprise"
                value={form.DescritionDeEntreprise}
                cols={80}
                rows={10}
                className="peer relative w-full border-b border-slate-200 px-4 pl-12 text-slate-500 placeholder-transparent outline-none transition-all autofill:bg-white invalid:border-pink-500 invalid:text-pink-500 focus:border-blue-500 focus:outline-none invalid:focus:border-pink-500 focus-visible:outline-none disabled:cursor-not-allowed disabled:bg-slate-50 disabled:text-slate-400"
                onChange={check}
                required
              />
              <label
                htmlFor="id-l1214"
                className="absolute left-2 -top-2 z-[1] cursor-text px-2 text-xs text-slate-400 transition-all before:absolute before:top-0 before:left-0 before:z-[-1] before:block before:h-full before:w-full before:bg-white before:transition-all peer-placeholder-shown:top-3 peer-placeholder-shown:left-10 peer-placeholder-shown:text-base peer-autofill:-top-2 peer-required:after:text-pink-500 peer-required:after:content-['\00a0*'] peer-invalid:text-pink-500 peer-focus:-top-2 peer-focus:left-2 peer-focus:cursor-default peer-focus:text-xs peer-focus:text-blue-500 peer-invalid:peer-focus:text-pink-500 peer-disabled:cursor-not-allowed peer-disabled:text-slate-400 peer-disabled:before:bg-transparent"
              >
                Description
              </label>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="absolute top-3 left-4 h-6 w-6 stroke-slate-400 peer-disabled:cursor-not-allowed"
                fill="none"
                aria-hidden="true"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth="1.5"
                aria-labelledby="title-5 description-5"
                role="graphics-symbol"
              >
                <title id="title-5">Text icon</title>
                <desc id="description-5">Icon for description</desc>
                <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h7" />
              </svg>
              <small className="absolute flex w-full justify-between px-4 py-1 text-xs text-slate-400 transition peer-invalid:text-pink-500">
                <span>Description de l'entreprise</span>
              </small>
            </div>

            {/* Capacité mensuelle */}
            <div className="relative my-6 w-full md:w-[calc(50%-0.5rem)]">
              <input
                id="id-l121"
                type="number"
                name="CapaciteDeProductionM"
                placeholder="Capacite De Production Mois"
                value={form.CapaciteDeProductionM}
                className="peer relative h-12 w-full border-b border-slate-200 px-4 pl-12 text-slate-500 placeholder-transparent outline-none transition-all autofill:bg-white invalid:border-pink-500 invalid:text-pink-500 focus:border-blue-500 focus:outline-none invalid:focus:border-pink-500 focus-visible:outline-none disabled:cursor-not-allowed disabled:bg-slate-50 disabled:text-slate-400"
                onChange={check}
                required
              />
              <label
                htmlFor="id-l121"
                className="absolute left-2 -top-2 z-[1] cursor-text px-2 text-xs text-slate-400 transition-all before:absolute before:top-0 before:left-0 before:z-[-1] before:block before:h-full before:w-full before:bg-white before:transition-all peer-placeholder-shown:top-3 peer-placeholder-shown:left-10 peer-placeholder-shown:text-base peer-autofill:-top-2 peer-required:after:text-pink-500 peer-required:after:content-['\00a0*'] peer-invalid:text-pink-500 peer-focus:-top-2 peer-focus:left-2 peer-focus:cursor-default peer-focus:text-xs peer-focus:text-blue-500 peer-invalid:peer-focus:text-pink-500 peer-disabled:cursor-not-allowed peer-disabled:text-slate-400 peer-disabled:before:bg-transparent"
              >
                Capacite par mois
              </label>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="absolute top-3 left-4 h-6 w-6 stroke-slate-400 peer-disabled:cursor-not-allowed"
                fill="none"
                aria-hidden="true"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth="1.5"
                aria-labelledby="title-5 description-5"
                role="graphics-symbol"
              >
                <title id="title-5">Chart icon</title>
                <desc id="description-5">Icon for monthly capacity</desc>
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M7 12l3-3 3 3 4-4M8 21l4-4 4 4M3 4h18M4 4h16v12a1 1 0 01-1 1H5a1 1 0 01-1-1V4z"
                />
              </svg>
              <small className="absolute flex w-full justify-between px-4 py-1 text-xs text-slate-400 transition peer-invalid:text-pink-500">
                <span>Capacite De Production mensuelle</span>
              </small>
            </div>

            {/* Capacité annuelle */}
            <div className="relative my-6 w-full md:w-[calc(50%-0.5rem)]">
              <input
                id="id-l15"
                type="number"
                name="CapaciteDeProductionA"
                placeholder="Capacite De Production Annuelle"
                value={form.CapaciteDeProductionA}
                className="peer relative h-12 w-full border-b border-slate-200 px-4 pl-12 text-slate-500 placeholder-transparent outline-none transition-all autofill:bg-white invalid:border-pink-500 invalid:text-pink-500 focus:border-blue-500 focus:outline-none invalid:focus:border-pink-500 focus-visible:outline-none disabled:cursor-not-allowed disabled:bg-slate-50 disabled:text-slate-400"
                onChange={check}
                required
              />
              <label
                htmlFor="id-l15"
                className="absolute left-2 -top-2 z-[1] cursor-text px-2 text-xs text-slate-400 transition-all before:absolute before:top-0 before:left-0 before:z-[-1] before:block before:h-full before:w-full before:bg-white before:transition-all peer-placeholder-shown:top-3 peer-placeholder-shown:left-10 peer-placeholder-shown:text-base peer-autofill:-top-2 peer-required:after:text-pink-500 peer-required:after:content-['\00a0*'] peer-invalid:text-pink-500 peer-focus:-top-2 peer-focus:left-2 peer-focus:cursor-default peer-focus:text-xs peer-focus:text-blue-500 peer-invalid:peer-focus:text-pink-500 peer-disabled:cursor-not-allowed peer-disabled:text-slate-400 peer-disabled:before:bg-transparent"
              >
                Capacite par annee
              </label>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="absolute top-3 left-4 h-6 w-6 stroke-slate-400 peer-disabled:cursor-not-allowed"
                fill="none"
                aria-hidden="true"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth="1.5"
                aria-labelledby="title-5 description-5"
                role="graphics-symbol"
              >
                <title id="title-5">Calendar icon</title>
                <desc id="description-5">Icon for annual capacity</desc>
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
                />
              </svg>
              <small className="absolute flex w-full justify-between px-4 py-1 text-xs text-slate-400 transition peer-invalid:text-pink-500">
                <span>Capacite De Production Annuelle</span>
              </small>
            </div>

            {/* Marchés cibles */}
            <div className="relative my-6 w-full md:w-60">
              <select
                id="id-021"
                name="MarchesCibles"
                value={form.MarchesCibles}
                onChange={check}
                required
                className="peer relative h-10 w-full appearance-none border-b border-slate-200 bg-white px-4 text-sm text-slate-500 outline-none transition-all autofill:bg-white focus:border-blue-500 focus-visible:outline-none focus:focus-visible:outline-none disabled:cursor-not-allowed disabled:bg-slate-50 disabled:text-slate-400"
              >
                <option value="" disabled selected></option>
                <option value="1">Option 1</option>
                <option value="2">Option 2</option>
                <option value="3">Option 3</option>
              </select>
              <label
                htmlFor="id-021"
                className="pointer-events-none absolute top-2.5 left-2 z-[1] px-2 text-sm text-slate-400 transition-all before:absolute before:top-0 before:left-0 before:z-[-1] before:block before:h-full before:w-full before:bg-white before:transition-all peer-required:after:text-pink-500 peer-required:after:content-['\00a0*'] peer-valid:-top-2 peer-valid:text-xs peer-focus:-top-2 peer-focus:text-xs peer-focus:text-blue-500 peer-disabled:cursor-not-allowed peer-disabled:text-slate-400 peer-disabled:before:bg-transparent"
              >
                Marches Cibles
              </label>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="pointer-events-none absolute top-2.5 right-2 h-5 w-5 fill-slate-400 transition-all peer-focus:fill-blue-500 peer-disabled:cursor-not-allowed"
                viewBox="0 0 20 20"
                fill="currentColor"
                aria-labelledby="title-02 description-02"
                role="graphics-symbol"
              >
                <title id="title-02">Arrow Icon</title>
                <desc id="description-02">Arrow icon of the select list.</desc>
                <path
                  fillRule="evenodd"
                  d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                  clipRule="evenodd"
                />
              </svg>
              <small className="absolute flex w-full justify-between px-4 py-1 text-xs text-slate-400 transition">
                <span>Marches Cibles</span>
              </small>
            </div>
          </section>

          <div className="flex flex-col sm:flex-row gap-4 mt-6 w-full">
            <button className="inline-flex items-center justify-center h-10 gap-2 px-5 text-sm font-medium tracking-wide text-white transition duration-300 rounded whitespace-nowrap bg-blue-500 hover:bg-blue-600 focus:bg-blue-700 focus-visible:outline-none disabled:cursor-not-allowed disabled:border-blue-300 disabled:bg-blue-300 disabled:shadow-none w-full">
              {loading ? (
                <>
                  <Loading></Loading>
                </>
              ) : (
                <span>S'inscrire</span>
              )}
            </button>

            <button
              onClick={() => setloading2(true)}
              className="inline-flex items-center justify-center h-10 gap-2 px-5 text-sm font-medium tracking-wide text-white transition duration-300 rounded whitespace-nowrap bg-red-500 hover:bg-red-600 focus:bg-red-700 focus-visible:outline-none disabled:cursor-not-allowed disabled:border-red-300 disabled:bg-red-300 disabled:shadow-none w-full"
            >
              {loading2 ? (
                <>
                  <Loading></Loading>
                </>
              ) : (
                <div className="flex items-center justify-center gap-2">
                  <i className="fa-brands fa-google-plus"></i>
                  <span>Login with Google</span>
                </div>
              )}
            </button>
          </div>
        </form>

        <p className="mt-6">
          ou bien{" "}
          <Link to="/signup" className="text-blue-400">
            <b>Créer un compte</b>
          </Link>
        </p>
      </div>
    </div>
  )
}
