import React from 'react';
import Invoice from '../../components/Invoice/Invoice';
import Products from '../../components/Products/Products';

const Home = () => {
    return (
        <>
            <div className='outer p-5 h-screen'>
                <div className='inner grid grid-cols-[450px,1fr] h-full gap-5'>
                    <Invoice />
                    <Products />
                </div>
            </div>
        </>
    );
};

export default Home;