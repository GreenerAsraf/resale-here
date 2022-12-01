import React from 'react';
import BookingModal from '../../BookingModal/BookingModal';
import Laptops from '../../Laptops/Laptops';
import Banner from '../Banner/Banner';
import ProductCategories from '../ProductCategories/ProductCategories';

const Home = () => {
    
    return (
        <div>
            <Banner></Banner>
            <ProductCategories></ProductCategories>
            {/* <BookingModal></BookingModal> */}
        </div>
    );
};

export default Home;