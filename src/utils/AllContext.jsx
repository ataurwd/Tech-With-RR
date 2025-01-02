import React, { createContext, useState } from 'react';

// eslint-disable-next-line react-refresh/only-export-components
export const StateContext = createContext(null)

const AllContext = ({children}) => {
    const [data, setData] = useState({});
    const [count , setCount] = useState(0);
    const [wishCount, setWishCount] = useState(0)
    const addWishlistCount = id => {
        setWishCount(id)
    }
    const countProduct = (id) => {
        setCount(id);
    }
    const info ={
        data, setData, countProduct, count, addWishlistCount, wishCount,
    }
    return (
        <StateContext.Provider value={info}>
            {children}
        </StateContext.Provider>
    );
};

export default AllContext;