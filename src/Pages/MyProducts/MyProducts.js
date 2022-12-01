import React from 'react';
import { useLoaderData } from 'react-router-dom';

const MyProducts = () => {
    const products = useLoaderData();
    console.log(products);
    
    return (
        <div className='grid grid-cols-3 mt-6'>
            
            {
                products.map(product =><div
                key={product._id}
                >

              
            <div className="card w-full bg-base-100 shadow-xl">
  <figure><img src={product.image} alt="Shoes" /></figure>
  <div className="card-body">
    <h2 className="card-title">
   {product.name}
      <div className="badge badge-secondary">$ {product.price}</div>
    </h2>
    <p>{product.description}</p>
    <div className="card-actions justify-end">
      <div className="badge badge-outline">Location: {product.location}</div> 
      <div className="badge badge-outline"></div>
    </div>
    <input className='btn btn-accent w-full mt-4' value="Buy Now" type="submit" />
  </div>
</div>
</div>) }
        </div>
    );
};

export default MyProducts;