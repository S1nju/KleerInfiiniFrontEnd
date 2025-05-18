import React from 'react'
import ProductCard from './Comp/ProductCard'
import CarouselControlsInside from './Comp/CarouselControlsInside';
import PaginationPrimaryHelperText from './Comp/Pagination';
interface Product {
  productname:string;
  roductdesc:string;
  price:number;
  image:string;
  alt:string;
}
const Products:Product[]=[{
  productname:"product1",
  roductdesc:"loremdjknvjkdsnvjkdsnvjnvjkndfjnvjknvjdfnvjkdfnvjnfvj",
  price:15,
  image:'',
  alt:"productphoto",

},
{
  productname:"product1",
  roductdesc:"loremdjknvjkdsnvjkdsnvjnvjkndfjnvjknvjdfnvjkdfnvjnfvj",
  price:15,
  image:'',
  alt:"productphoto",

},
{
  productname:"product1",
  roductdesc:"loremdjknvjkdsnvjkdsnvjnvjkndfjnvjknvjdfnvjkdfnvjnfvj",
  price:15,
  image:'',
  alt:"productphoto",

},
{
  productname:"product1",
  roductdesc:"loremdjknvjkdsnvjkdsnvjnvjkndfjnvjknvjdfnvjkdfnvjnfvj",
  price:15,
  image:'',
  alt:"productphoto",

},
{
  productname:"product1",
  roductdesc:"loremdjknvjkdsnvjkdsnvjnvjkndfjnvjknvjdfnvjkdfnvjnfvj",
  price:15,
  image:'',
  alt:"productphoto",

},
{
  productname:"product1",
  roductdesc:"loremdjknvjkdsnvjkdsnvjnvjkndfjnvjknvjdfnvjkdfnvjnfvj",
  price:15,
  image:'',
  alt:"productphoto",

}


]
function Produit() {

const ProductsRender = Products.map((item,index)=><ProductCard key={index} props={item}></ProductCard>)

  return (
    <div >
      <section className='m-5'>
<p className="text-2xl text-start w-full text-white">
            Les Meilleures Offres
             </p>
            <div className="bg-white w-full h-0.5 m-2"></div>
        <CarouselControlsInside></CarouselControlsInside>
      </section>

          <section className='flex flex-wrap justify-center gap-2 bg-white p-5 rounded-3xl shadow-lg m-5'>
             <p className="text-2xl text-start w-full text-blue-900">
                Recommandé pour vous
             </p>
            <div className="bg-blue-900 w-full h-0.5 m-2"></div>
{ProductsRender}

<PaginationPrimaryHelperText></PaginationPrimaryHelperText>
</section>
      <section className='flex flex-wrap justify-center gap-2 bg-white p-5 rounded-3xl shadow-lg m-5'>
             <p className="text-2xl text-start w-full text-blue-900">
              Nouveaux Produits
             </p>
            <div className="bg-blue-900 w-full h-0.5 m-2"></div>
{ProductsRender}

<PaginationPrimaryHelperText></PaginationPrimaryHelperText>
</section>
    </div>
  )
}

export default Produit