import React, { useContext, useEffect, useState } from 'react';
import { Link, useLoaderData } from 'react-router-dom';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import { clearAllStoredProducts, getStoredWishlist, getStoreProduct, removeCartProduct } from '../utils/StoreData';
import CartData from '../components/CartData';
import WIshlist from '../components/WIshlist';
import { StateContext } from '../utils/AllContext';

const Dashboard = () => {

    const {data, setData, countProduct} = useContext(StateContext)

    //set data for tabs
    
    const [product, setProduct] = useState([])
    const [wishlist, setWishlist] = useState([])
    const [sort, setSort] = useState('')

    //tab active styles


    // fetch data
    const allProducts = useLoaderData()

    // calculate total price
    const totalCost = product.reduce((total, item) => total + item.price, 0);

    // filter the products id and set it in local storage
    useEffect(() => {
        const storedProduct = getStoreProduct();
        const productId = storedProduct.map(id => parseInt(id));
        const product = allProducts.filter(product => productId.includes(product.id));
        setProduct(product);  

        const storedWishlist = getStoredWishlist();
        const wishlistIds = storedWishlist.map(id => parseInt(id));
        const wishlistItems = allProducts.filter(product => wishlistIds.includes(product.id));
        setWishlist(wishlistItems);
        

    }, [allProducts]);

    //sort data
    const handelSortData = (sortType) => {
        setSort(sortType)

        if(sortType){
            const sortedProduct = [...product].sort((a, b) => b.price - a.price)
            setProduct(sortedProduct)
            }
        }

     // remove all cart items
     const removeItemHandel = (id) => {
        removeCartProduct(id)
       setProduct(product.filter(item => item.id!== id))
       const removeItem = getStoreProduct()
       countProduct(removeItem.length )
    }   

    const handelClearData = () => {
        clearAllStoredProducts();
        setProduct([]);
        countProduct(0)
    }
    

    return (
        <div>
             <div className=''>
                <div className='text-center lg:mt-10 space-y-4 bg-primary text-white pt-10 pb-24'>
                <h1 className='text-4xl font-bold'>Dashboard</h1>
                <p className='w-1/2 mx-auto'>Welcome to your personalized dashboard! Here, you can get a comprehensive overview of your activities, track key metrics, and manage your account efficiently.</p>
                {/* <button className='rounded-3xl border w-32 h-10'>Cart</button>
                <button className='rounded-3xl bg-white text-primary font-bold w-32 h-10 ml-3'>Wishlist</button> */}
            </div>
            <Tabs>
            <TabList className="flex justify-center z-50 -mt-[12vh]">
            <Tab 
            className='rounded-3xl border w-32 h-10 grid place-items-center cursor-pointer text-black'
            selectedClassName='text-purple-700 bg-white font-bold'                
            >
            Cart
            </Tab>
            <Tab 
            className='rounded-3xl border w-32 h-10 ml-3 grid place-items-center cursor-pointer text-black'
            selectedClassName='text-purple-700 bg-white font-bold '                
            >
                Wishlist
            </Tab>
            </TabList>


                {/* tab item 1 */}
                    <div>
                    <TabPanel className=" px-32 mt-20">
                    <div className=' flex justify-between items-center mb-16'>
                        <h1 className='text-3xl font-bold'>Cart</h1>
                        <div className='flex items-center space-x-4'>
                            <h1 className='font-bold text-2xl'>Total Cost: $ {totalCost} </h1>
                            <button className='rounded-3xl border border-primary w-40 h-10  cursor-pointer flex items-center justify-center'
                            onClick={handelSortData}
                            ><h1 className='mr-3
                            '>Sort by Price</h1>
                            <img className='w-[25px]' src="https://i.ibb.co.com/gzWtt2h/filter.png" alt="" />
                            </button>
                            <button
                             onClick={()=>document.getElementById('my_modal_1').showModal()}
                             disabled={getStoreProduct().length == 0}
                             className='rounded-3xl border bg-gradient-to-b from-[#862eda] via-[#a33de4] to-[#e464e4] text-white w-32 h-10 grid place-items-center cursor-pointer'>Purchase</button>
                        </div>
                    </div>
                    <div className='gap-5'>
                    {
                        product.map(product => <CartData key={product.id} product={product} removeItemHandel={removeItemHandel}/>)
                    }
                    </div>

                    {/* modal content  */}
                    <dialog id="my_modal_1" className="modal">
                    <div className="modal-box text-center space-y-2">
                        <img className='w-[100px] mx-auto' src="https://cdn-icons-png.flaticon.com/512/7518/7518748.png" alt="" />
                        <h3 className="font-extrabold text-2xl">Payment Successfully</h3>
                        <p className="text-grayText">Thanks for purchasing.</p>
                        <p className="text-grayText">Total: ${totalCost}</p>
                        <div className="modal-action justify-center">
                        <form method="dialog">
                            
                            <Link to="/" onClick={handelClearData} className="btn w-full">Close</Link>
                        </form>
                        </div>
                    </div>
                    </dialog>
                </TabPanel>




                    {/* this is for wishlist */}
                <TabPanel>
                    <div className=' px-32 mt-10'>
                    <h1 className='text-3xl font-bold'>WishList</h1>
                    <div className='mt-10'>
                        {
                            wishlist.map(product => <WIshlist key={product.id} product={product}/>)
                        }
                    </div>
                    </div>
                </TabPanel>
                    </div>
            </Tabs>
        </div>
        </div>
    );
};

export default Dashboard;