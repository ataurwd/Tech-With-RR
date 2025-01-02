import React, { useContext, useEffect, useState } from 'react';
import { useLoaderData, useParams } from 'react-router-dom';
import { CiHeart } from "react-icons/ci";
import { IoCartOutline } from "react-icons/io5";
import { addToStoredProduct, addToStoredWishlist, getStoredWishlist, getStoreProduct } from '../utils/StoreData';
import RatingComponent from './RatingComponent.jsx';
import { StateContext } from '../utils/AllContext.jsx';
import { toast } from 'react-toastify';
// import Stars from './RatingComponent'

const ProductDetails = () => {
    const [disabledButtons, setDisabledButtons] = useState([]);

    const {data, setData, countProduct, addWishlistCount} = useContext(StateContext)
    // const [data, setData] = useState({});

    // get id from params
    const { id } = useParams();
    // const idNumber = parseInt(id)

    // fetch data from API
    const addData = useLoaderData(); 
    const {product_title, product_image, price, availability, description, Specification ,rating} = data; 

    useEffect(() => {
        const product = addData.find(d => d.id === Number(id));
        if (product) {
            setData(product);
        }
        
        const getItem = getStoreProduct();
        countProduct(getItem.length || 0);
    }, [id, addData, setData, countProduct]);
    


// Updated addToCart function
const addToCart = (id) => {
    const dataGet =  getStoreProduct();
    const isExist = dataGet.find(d => d === id);

    if (isExist) { 
        return toast.error("This Product is already in your cart", {
            position: "top-center"
        });
    }

    addToStoredProduct(id); 
    countProduct(dataGet.length + 1); 
}


    //wishlist add to cart functionality
    const handelWishlist = (id) => {
        const dataGet = getStoredWishlist();
        const isExist = dataGet.find(d => d === id);
    
        if (isExist) {
            setDisabledButtons((prev) => [...prev, id]);
            return;
        }
    
        addToStoredWishlist(id);
        addWishlistCount(dataGet.length + 1);
        setDisabledButtons((prev) => [...prev, id]);
    };

    

    return (
        <div className='lg:h-[780px] md:h-[600px]'>
            <div className='z-0 relative text-center lg:mt-10 space-y-4 bg-primary text-white lg:h-96 md:h-40 pb-3
            '>
                <h1 className='text-4xl font-bold pt-10'>Product Details</h1>
                <p className='text-grayText lg:w-1/2 mx-auto md:w-[60%] w-[80%] text-white'>Explore the latest gadgets that will take your experience to the next level. From smart devices to the coolest accessories, we have it all!</p>
            </div>
            {/* product details */}
            <div className='z-50 lg:w-[80%] md:w-full h-auto mb-20 mx-auto bg-white lg:flex md:flex gap-10 rounded-3xl lg:shadow-2xl lg:absolute lg:top-[45%] lg:left-[10%] lg:right-[10%] overflow-hidden p-5'>
                <div>
                    <img className='w-[380px] h-[400px]' src={product_image} alt="" />
                </div>
                <div className='space-y-3 p-5 lg:mb-10'>
                    <h1 className='text-2xl font-semibold'>{product_title}</h1>
                    <p className='text-xl font-semibold'>Price: {price} $</p>
                    {
                        availability ? <div className="badge badge-success badge-outline">In Stoke</div>
                         : <div className="badge badge-error badge-outline">Stoke Out</div>
                    }
                    <p className='text-grayText'>{description}</p>
                    
                    {/* for Specification item */}
                    <h1 className='text-black font-bold '>Specification</h1>
                    <ol>
                        {Specification && Specification.map((item, index) => (
                            <li key={index}>{index + 1}. {item}</li>
                        ))}
                    </ol>
                        {
                            rating && <RatingComponent rating={rating}/>
                        }

                    <div className='flex items-center gap-3'>
                        <button className='flex items-center bg-primary px-4 py-2 rounded-3xl
                         text-white space-x-2'>
                            <span className='font-semibold'
                             onClick={() => addToCart(id)}
                            >Add To Card</span>
                            <IoCartOutline size={24}/>
                        </button>
                        <button 
                        onClick={() => handelWishlist(id)} 
                        disabled={disabledButtons.includes(id)} 
                        className={`flex items-center border-2 border-primary px-2 py-2 rounded-3xl space-x-2 
                            ${disabledButtons.includes(id) ? 'opacity-50 cursor-not-allowed' : ''}`}
                    >
                        <CiHeart size={24} />
                    </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProductDetails;
