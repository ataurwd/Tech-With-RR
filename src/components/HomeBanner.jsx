import React from 'react';
import { useNavigate } from 'react-router-dom';

const HomeBanner = () => {

    const navigate = useNavigate()
    const handelShopNow = () => {
        navigate('/dashboard')
    }
    return (
    <header>
    <div className='text-center bg-primary text-white h-[650px] mx-5 my-5 rounded-xl'>
                <div className=' space-y-5 pt-28'>
                <h1 className='text-5xl font-bold leading-[60px]'>Upgrade Your Tech Accessorize with <br /> Gadget Heaven Accessories</h1>
                <p className='w-1/2 mx-auto'>Explore the latest gadgets that will take your experience to the next level. From smart devices to the coolest accessories, we have it all!</p>
                <button onClick={handelShopNow} className='bg-white text-primary font-bold px-8 py-2 rounded-3xl'>Shop Now</button>
                </div>
            </div>
            <div  className='w-[70%]  mx-auto border-2 p-5 rounded-xl shadow-xl z-50 -mt-[40vh]'>
                <img className='rounded-xl h-[500px] w-full' src="https://i.ibb.co.com/pzMkNZV/banner.jpg" alt="" />
            </div>
    </header>
    );
};

export default HomeBanner;