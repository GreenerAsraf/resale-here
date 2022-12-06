import React from 'react';
import { Link } from 'react-router-dom';
import './BannerItem.css'

const BannerItem = ({slide}) => {
    const {image, id, prev, next} = slide;
    return (
        <div id={`slide${id}`} className="carousel-item relative w-full">
        <div className='carousel-img'>
            <img src={image} alt="" className="w-full rounded-xl" />
        </div>
        <div className="absolute flex justify-end transform -translate-y-1/2 left-24 top-1/4">
            <h1 className='lg:text-6xl sm:text-sm font-bold text-white'>
               Resale Your Laptop<br />
                Buy Desired Quality laptop <br />
                with affordable price
            </h1>
        </div>
        
        <div className="absolute flex justify-start transform -translate-y-1/2 w-2/5 left-24 top-3/4">
            <button className="btn btn-warning mr-5">  <Link to = 'products'>Learn More</Link></button>
            <button className="btn btn-outline btn-warning">
                <Link to = 'login'>Sign in</Link>
            </button>
        </div>
        <div className="absolute flex justify-end transform -translate-y-1/2 left-5 right-5 bottom-0">
            <a href={`#slide${prev}`} className="btn btn-circle mr-5">❮</a>
            <a href={`#slide${next}`} className="btn btn-circle">❯</a>
        </div>
    </div>

);
};

export default BannerItem;