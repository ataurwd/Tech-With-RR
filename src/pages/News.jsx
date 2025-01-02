import React from 'react';
import { useLoaderData } from 'react-router-dom';
import NewsCard from '../components/NewsCard';

const News = () => {
    const newsData = useLoaderData()
    return (
        <div>
            <div className='text-center lg:mt-10 space-y-4 bg-primary text-white py-20'>
                <h1 className='text-4xl font-bold'>ElectroMart
                 News</h1>
                <p className='w-1/2 mx-auto'>Where technology meets style: all the updates on phone accessories and more.</p>
            </div>
            <div className='px-32 mt-10 grid grid-cols-1 lg:grid-cols-3 place-items-center gap-10 pb-10'>
                {
                    newsData.map((item) => <NewsCard key={item.id} post={item}/>)
                }
            </div>
        </div>
    );
};

export default News;
