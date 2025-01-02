import React from 'react';
import { Link } from 'react-router-dom';

const Card = ({item}) => {
    const {product_title, product_image, price, id} = item; 
    return (
        <div className="card bg-base-100 shadow-xl pt-5">
        <figure>
            <img className='w-[200px]'
            src={product_image} />
        </figure>
        <div className="card-body">
            <h2 className="card-title">{product_title}</h2>
            <p className='font-bold'>Price:$ {price}</p>
            <div className="card-actions justify-start">
            <Link to={`/product/${id}`}
             className="rounded-3xl border-2 border-primary px-3 py-1 text-primary">View Details</Link>
            </div>
        </div>
        </div>
    );
};

export default Card;