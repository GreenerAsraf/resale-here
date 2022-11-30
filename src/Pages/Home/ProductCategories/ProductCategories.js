import React from 'react';
import lenovo from '../../../image/lenova-laptop-500x500.jpg';
import dell from '../../../image/dell-laptop-1000x1000.webp';
import asus from '../../../image/asus-laptop-15-x509jb-10th-.jpg';
import { Link, useLoaderData } from 'react-router-dom';
import Laptops from '../../Laptops/Laptops';

const ProductCategories = () => {
  // const category = useLoaderData();

  // console.log(category);
    const categories = [
        { id: '01', Brand:"Lenovo",img:lenovo, description: "Used Lenovo Laptop will give you budget friendly Laptop with Quality Product. This product is QC Pass means you will have 30 days replacement warranty"},
        { id: '02',Brand:"Asus", img: asus ,description: "Used Asus Laptop will give you budget friendly Laptop with Quality Product. This product is QC Pass means you will have 30 days replacement warranty"},
        { id: '03',Brand:"Dell",img:dell, description: "Used Dell Laptop will give you budget friendly Laptop with Quality Product. This product is QC Pass means you will have 30 days replacement warranty"},
]
    return (
       <div>
            <p  className='text-3xl text-secodary text-center'>We offer in these Three Categories</p>
             <div className=' m-12 flex justify-center items-center shadow-xl '>
              
        {  
              categories.map(laptop => <Laptops
              key = {categories.id}
              laptop ={laptop}>
              </Laptops>
              
        )}
        </div>
      
      </div>

    );
};

export default ProductCategories;