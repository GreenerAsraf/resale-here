import { useQuery } from '@tanstack/react-query';
import React, { useEffect, useState } from 'react';

const Laptops = ({laptop}) => {

    const {_id, Brand,description} = laptop;
    // const [Details] = laptop;
    console.log(laptop);

    // console.log(_id, Brand,description);
    // const [laptops , setLaptops] = useState([]);

    // const {data : todos = [] }  = useQuery({
    //     querykey: ["todos"],
    //     queryFn: async()=>{
    //         const res = await fetch(`https://jsonplaceholder.typicode.com/todos`);
    //         // const res = await fetch('laptops.json');
    //         const data = await res.json();
    //         return data;
    //     }
    // })

    return (
        <div>
            <div className="card w-96 bg-primary text-primary-content">
  <div className="card-body">
    <h2 className="card-title">{Brand}</h2>
    <p>{description}</p>
    <div className="card-actions justify-center">
      <button className="btn">Buy Now</button>
    </div>
  </div>
</div>
        </div>
    );
};

export default Laptops;