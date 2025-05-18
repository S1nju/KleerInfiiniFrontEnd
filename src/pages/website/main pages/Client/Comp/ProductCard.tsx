import React from 'react'
import { Link } from 'react-router-dom'
import RatingBasicBasic from './RatingBasicBasic';
interface Product {
  productname:string;
  roductdesc:string;
  price:number;
  image:string;
  alt:string;
}


function ProductCard({props}:{props:Product}) {
  return (
<>

 {/*<!-- Component: E-commerce card --> */}
 <div className="overflow-hidden rounded w-80 m-2 bg-white text-slate-500 shadow-lg ">
        {/*  <!-- Image --> */}
        <figure>
          <img
            src={props.image}
            alt="card image"
            className="aspect-video w-full"
          />
        </figure>
        {/*  <!-- Body--> */}
        <div className="p-6">
          <header className="mb-4 flex gap-2 items-center justify-between">
            <div>
            <h3 className="text-xl font-medium text-slate-700">
              <Link to="product/1">
             {props.productname}
              </Link>

            </h3>
            <p className=" text-slate-400">  {props.price} DA</p>
            </div>
            <div>
            <RatingBasicBasic></RatingBasicBasic>
            </div>
          </header>
          <p>
          {props.roductdesc}
          </p>
        </div>
        {/*  <!-- Action base sized basic button --> */}
        <div className="flex justify-center gap-2 p-6 pt-0">
          <button className="inline-flex h-10 w-full items-center justify-center gap-2 whitespace-nowrap rounded bg-blue-500 px-5 text-sm font-medium tracking-wide text-white transition duration-300 hover:bg-blue-600 focus:bg-blue-700 focus-visible:outline-none disabled:cursor-not-allowed disabled:border-blue-300 disabled:bg-blue-300 disabled:shadow-none">
            <span><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512"><path fill="#ffffff" d="M0 24C0 10.7 10.7 0 24 0L69.5 0c22 0 41.5 12.8 50.6 32l411 0c26.3 0 45.5 25 38.6 50.4l-41 152.3c-8.5 31.4-37 53.3-69.5 53.3l-288.5 0 5.4 28.5c2.2 11.3 12.1 19.5 23.6 19.5L488 336c13.3 0 24 10.7 24 24s-10.7 24-24 24l-288.3 0c-34.6 0-64.3-24.6-70.7-58.5L77.4 54.5c-.7-3.8-4-6.5-7.9-6.5L24 48C10.7 48 0 37.3 0 24zM128 464a48 48 0 1 1 96 0 48 48 0 1 1 -96 0zm336-48a48 48 0 1 1 0 96 48 48 0 1 1 0-96zM252 160c0 11 9 20 20 20l44 0 0 44c0 11 9 20 20 20s20-9 20-20l0-44 44 0c11 0 20-9 20-20s-9-20-20-20l-44 0 0-44c0-11-9-20-20-20s-20 9-20 20l0 44-44 0c-11 0-20 9-20 20z"/></svg>
            </span>

          </button>
          <button className="inline-flex h-10 w-full items-center justify-center gap-2 whitespace-nowrap rounded bg-blue-500 px-5 text-sm font-medium tracking-wide text-white transition duration-300 hover:bg-blue-600 focus:bg-blue-700 focus-visible:outline-none disabled:cursor-not-allowed disabled:border-blue-300 disabled:bg-blue-300 disabled:shadow-none">
            <span><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512"><path fill="#ffffff" d="M0 48V487.7C0 501.1 10.9 512 24.3 512c5 0 9.9-1.5 14-4.4L192 400 345.7 507.6c4.1 2.9 9 4.4 14 4.4c13.4 0 24.3-10.9 24.3-24.3V48c0-26.5-21.5-48-48-48H48C21.5 0 0 21.5 0 48z"/></svg></span>
          </button>
        </div>
      </div>
      {/*<!-- End E-commerce card --> */}

</>
  )
}

export default ProductCard