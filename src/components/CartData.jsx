import React from 'react';
import { useLocation } from 'react-router-dom';

const CartData = ({product, removeItemHandel}) => {
    const {pathname} = useLocation()
    const {product_title, product_image, price, description, id} = product; 
    return (
        <div className='bg-white px-10 grid grid-cols-6 gap-10 my-10 rounded-xl py-3 place-items-center'>
                    <div className='col-span-2'>
                        <img className='w-[200px]' src={product_image} alt="" />
                    </div>
                    <div className='space-y-3 col-span-3 justify-start'>
                        <h1 className='font-bold text-3xl'>{product_title}</h1>
                        <p className='text-grayText'>{description}</p>
                        <p className='font-bold'>Price: ${price}</p>
                    </div>
                    {pathname === '/dashboard' && <img onClick={() => removeItemHandel(id)} className='w-10 h-10  bg-yellow-300 p-2 rounded-full cursor-pointer'
                                src="https://icons.veryicon.com/png/o/miscellaneous/mahealth-pro/delete-295.png"/>}
            </div>
    );
};

export default CartData;