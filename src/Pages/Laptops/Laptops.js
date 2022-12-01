import { useQuery } from '@tanstack/react-query';
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const Laptops = ({laptop}) => {

    const {id, Brand,description,img} = laptop;
    // const [Details] = laptop;
    return (
        <div>
            <div className="card w-96 bg-primary text-primary-content m-12">
            <figure><img src={img} alt="Shoes" /></figure>
  <div className="card-body">
    <h2 className="card-title">{Brand}</h2>
    <p>{description}</p>
    <div className="card-actions justify-center">
      <button className="btn"><Link to='products'>Click to Buy</Link></button>
    </div>
  </div>
</div>
        </div>
    );
};

export default Laptops;