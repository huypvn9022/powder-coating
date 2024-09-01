import React from 'react'
import { product1, product2, product3 } from '../assets'

const Product = () => {
    return (
        <section className='container py-[2rem]'>
            <h4 className='uppercase font-medium text-yellow-400'>Products</h4>
            <div className='flex justify-between items-end mb-[2rem]'>
                <h2 className='text-[2rem] font-semibold leading-9 uppercase'>Sản phẩm sơn</h2>
                <button className="text-[14px] underline font-medium hover:text-blue-500 flex items-center">
                    Tìm hiểu thêm
                </button>
            </div>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10'>
                <div className='rounded-xl border border-b-orange overflow-hidden'>
                    <img src={product1} alt="product" />
                    <h2 className='text-center text-[1.1rem] font-semibold uppercase shadow-lg py-5'>powder coating</h2>
                </div>
                <div className='rounded-xl border border-b-orange overflow-hidden'>
                    <img src={product2} alt="product" />
                    <h2 className='text-center text-[1.1rem] font-semibold uppercase shadow-lg py-5'>powder coating</h2>
                </div>
                <div className='rounded-xl border border-b-orange overflow-hidden'>
                    <img src={product3} alt="product" />
                    <h2 className='text-center text-[1.1rem] font-semibold uppercase shadow-lg py-5'>powder coating</h2>
                </div>
            </div>
        </section>
    )
}

export default Product