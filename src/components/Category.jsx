import React from 'react';
import { NavLink, useLoaderData } from 'react-router-dom';

const Category = ({allData}) => {
    return (
    <div>
        <div role="tablist" className="tabs-boxed flex flex-col lg:mr-14 bg-white p-5">
            {
                allData.map((category) => (
                    <NavLink 
                    key={category.id} 
                    role="tab" 
                    className={({isActive}) =>`my-2 pl-3 py-2 bg-categoryBg rounded-3xl text-[#09080F99] font-semibold
                     ${isActive ? 'bg-purple-700 text-white rounded-3xl' : '' }
                     ${category.name ? 'All Product' : ''}`} 
                    to={`card/${category.name}`}>
                    <p className='text-left '>{category.name}</p>
                    </NavLink>
                ))
            }
        </div>
    </div>
    );
};

export default Category;