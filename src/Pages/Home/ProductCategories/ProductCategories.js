import React from 'react';
import lenovo from '../../../image/lenova-laptop-500x500.jpg';
import dell from '../../../image/dell-laptop-1000x1000.webp';
import asus from '../../../image/asus-laptop-15-x509jb-10th-.jpg';

const ProductCategories = () => {
    const categories = [
        { id: '01', name:"Lenovo",img:lenovo, description: "Used Lenovo Laptop will give you budget friendly Laptop with Quality Product. This product is QC Pass means you will have 30 days replacement warranty"},
        { id: '02',name:"Asus", img: asus ,description: "Used Asus Laptop will give you budget friendly Laptop with Quality Product. This product is QC Pass means you will have 30 days replacement warranty"},
        { id: '03',name:"Dell",img:dell, description: "Used Dell Laptop will give you budget friendly Laptop with Quality Product. This product is QC Pass means you will have 30 days replacement warranty"},
]
    return (
       <div>
            <p  className='text-3xl text-secodary text-center'>We offer in this Three Categories</p>
             <div className=' m-12 flex justify-center items-center shadow-xl'>
            
            {
                categories.map(category =><div>
                    
                    <div className="card w-96 m-4 bg-primary text-primary-content">
                    <figure><img src={category.img} alt="Shoes" /></figure>
          <div className="card-body">
            <h2 className="card-title">{category.name}</h2>
            <p>{category.description}</p>
            <div className="card-actions justify-center">
              <button className="btn">Buy Now</button>
            </div>
          </div>
        </div>
                    </div>

                )
            }
            
        </div>
       </div>
    );
};

export default ProductCategories;