import { useContext } from 'react';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { StateContext } from './AllContext';



// Function to retrieve stored wishlist items
const getStoredWishlist = () => {
    const storedList = localStorage.getItem('wishlist');
    return storedList ? JSON.parse(storedList) : [];
}

// Function to add an item to the wishlist
const addToStoredWishlist = (id) => {
    const storedList = getStoredWishlist();
    if (storedList.includes(id)) {
        toast.error("This Product is already in your wishlist", {
            position: "top-center"
        });
        return;
    } else {
        storedList.push(id);
        localStorage.setItem('wishlist', JSON.stringify(storedList));
        toast.success("This Product has been added to your wishlist", {
            position: "top-center"
        });
    }
}

// Function to retrieve stored cart items
const getStoreProduct = () => {
    const storedList = localStorage.getItem('product');
    return storedList ? JSON.parse(storedList) : [];
}

// Function to add an item to the cart
const addToStoredProduct = (id) => {
    const storedList = getStoreProduct();
    if (storedList.includes(id)) {
        return;
    } else {
        storedList.push(id);
        localStorage.setItem('product', JSON.stringify(storedList));
        toast.success("This Product has been added to your cart", {
            position: "top-center"
        });
    }
}


// remove btn functionality
const removeCartProduct = (id) => {
    console.log(id)
    const data = getStoreProduct();
    const updatedData = data.filter(productId => Number(productId) !== id);
    console.log(updatedData)
    localStorage.setItem('product', JSON.stringify(updatedData));
    //     toast.success("Product removed from cart", {
    //     position: "top-right"
    // });
    // console.log(data)
}


// clear all cart items
const clearAllStoredProducts = () => {
    localStorage.removeItem('product');
    return [];
}

export { addToStoredProduct, getStoreProduct, addToStoredWishlist, getStoredWishlist, removeCartProduct ,clearAllStoredProducts};
