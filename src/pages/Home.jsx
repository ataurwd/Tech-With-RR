import React from 'react';
import Category from '../components/Category';
import { Outlet, useLoaderData } from 'react-router-dom';
import HomeBanner from '../components/HomeBanner';

const Home = () => {
    const allData = useLoaderData();

    
    
    return (
        <div>
            <HomeBanner/>
            <div className='mt-32'>
            <h1 className='text-center text-5xl font-bold'>Explore Cutting-Edge Gadgets</h1>
            </div>
            <div className='grid grid-cols-4 my-10 lg:px-20'>
                <div>
                <Category allData={allData}/>
                </div>
                <div className='col-span-3'>
                <Outlet/>
                </div>
            </div>
        </div>

    );
};

export default Home;