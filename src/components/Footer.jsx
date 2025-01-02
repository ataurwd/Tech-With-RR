import React from 'react';

const Footer = () => {
    return (
        <div className='bg-white p-10 z-50'>
            <div className='text-center lg:mt-10 space-y-4'>
                <h1 className='text-4xl font-bold'>ElectroMart</h1>
                <p className='text-grayText'>Leading the way in cutting-edge technology and innovation.</p>
            </div>
            <div className='border-b-2 w-2/3 mx-auto my-5'></div>
            <footer>
        <div className="flex flex-col md:flex-row justify-around py-10 text-center w-3/4 mx-auto">
            {/* Services Column */}
            <nav>
            



            <h6 className="font-bold mb-2">Product Support</h6>
            <a className="block hover:underline">Order Tracking</a>
            <a className="block hover:underline">Shipping & Delivery</a>
            <a className="block hover:underline">Returns</a>
            </nav>

            {/* Company Column */}
            <nav>
            <a className="block hover:underline">About us</a>
            <a className="block hover:underline">Contact</a>
            <a className="block hover:underline">Jobs</a>
            </nav>

            {/* Legal Column */}
            <nav>
            <a className="block hover:underline">Terms of use</a>
            <a className="block hover:underline">Privacy policy</a>
            <a className="block hover:underline">Cookie policy</a>
            </nav>
        </div>
        </footer>


        </div>
    );
};

export default Footer;