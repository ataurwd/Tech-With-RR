import React from 'react';

const WIshlist = ({product}) => {
    const {product_title, product_image, price, description} = product; 
    return (
        <div>
            <div className='bg-white px-10 flex items-center gap-10 my-10 rounded-xl py-3'>
            <div>
                <img className='w-[200px]' src={product_image} alt="" />
            </div>
            <div className='space-y-3'>
                <h1 className='font-bold text-3xl'>{product_title}</h1>
                <p className='font-bold'>Description: <span className='text-grayText'>{description}</span></p>
                <p className='font-bold'>Price: ${price}</p>
                <button className='px-5 py-2 bg-primary rounded-3xl text-white'>Add To Cart</button>
            </div>
        </div>
        </div>
    );
};

export default WIshlist;