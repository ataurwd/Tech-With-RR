import React, { useEffect, useState } from 'react';
import { useLoaderData, useParams } from 'react-router-dom';
import Card from './Card';

const AllCards = () => {
    const [card, setCard] = useState([])
    const {categoryId} = useParams()
    const allCardData = useLoaderData();        
    // set card data
    // console.log(allCardData);

    useEffect(() => {
        setCard(allCardData.slice(0, 9))            
        if(categoryId){
            const newData = [...allCardData].filter(data => data.category === categoryId)
             setCard(newData)   
        }
        if(categoryId === 'All Product'){
            setCard(allCardData)
        }
    },[allCardData, categoryId])

    return (
        <div>
            <div className='grid lg:grid-cols-3 lg:gap-5 md:grid-cols-2 md:gap-5 grid-cols-1'>
            {
                card.length > 0 ? 
                (card.map((item) => <Card item={item} key={item.id}/>)) 
                : (<div className='font-bold text-3xl'>
                    data not found
                </div>)
            }
            </div>
        </div>
    );
};

export default AllCards;