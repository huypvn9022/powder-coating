import React from 'react'
import { product1, product2, product3 } from '../assets'

const ProductDetail = () => {
  return (
    <section>
      <div className='services flex flex-col items-center justify-center h-full text-center'>
        <div className='container'>
          <h2 className='text-2xl sm:text-4xl font-bold text-white capitalize mb-[1rem]'>Sản phẩm sơn</h2>
          <p className='text-white font-semibold text-[1.1rem]'><span className='hover:text-yellow-500 cursor-pointer'>Home</span> - Product</p>
        </div>
      </div>
      <div className='container py-20'>
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
          <div className='rounded-xl border border-b-orange overflow-hidden'>
            <img src={product3} alt="product" />
            <h2 className='text-center text-[1.1rem] font-semibold uppercase shadow-lg py-5'>powder coating</h2>
          </div>
          <div className='rounded-xl border border-b-orange overflow-hidden'>
            <img src={product3} alt="product" />
            <h2 className='text-center text-[1.1rem] font-semibold uppercase shadow-lg py-5'>powder coating</h2>
          </div>
          <div className='rounded-xl border border-b-orange overflow-hidden'>
            <img src={product3} alt="product" />
            <h2 className='text-center text-[1.1rem] font-semibold uppercase shadow-lg py-5'>powder coating</h2>
          </div>
        </div>
      </div>
    </section>
  )
}

export default ProductDetail