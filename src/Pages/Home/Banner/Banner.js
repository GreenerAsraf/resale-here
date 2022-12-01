import React from 'react';
import img1 from '../../../image/asus-laptop-15-x509jb-10th-.jpg';
import img2 from '../../../image/dell-laptop-1000x1000.webp';
import img3 from '../../../image/lenova-laptop-500x500.jpg';
import img4 from '../../../image/lenovo.webp';
import BannerItem from './BannerItem/BannerItem';

const Banner = () => {
    const bannerData = [
        {
            image: img1,
            prev: 4,
            id: 1,
            next: 2
        },
        {
            image: img2,
            prev: 1,
            id: 2,
            next: 3
        },
        {
            image: img3,
            prev: 2,
            id: 3,
            next: 4
        },
        {
            image: img4,
            prev: 3,
            id: 4,
            next: 1
        },
    ]
    return (
        <div className="carousel w-full py-10">
             {
                bannerData.map(slide => <BannerItem
                    key={slide.id}
                    slide={slide}
                ></BannerItem>)
            }
        </div>
    );
};

export default Banner;