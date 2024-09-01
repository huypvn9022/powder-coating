import React, { useState } from 'react'
import { IoIosArrowForward } from "react-icons/io";

const Hero = () => {
  return (
    <section className='hero flex flex-col items-center justify-center h-full text-center'>
      <div className='container'>
        <h2 className='text-4xl sm:text-6xl font-bold text-white capitalize'>dịch vụ <span className='text-yellow-500'>sơn tĩnh điện</span> chuyên nghiệp</h2>
        <p className='text-lg sm:text-2xl text-white opacity-90 my-4 max-w-[500px] m-auto capitalize'>mang lại lớp phủ cao, độ bền cao và bảo vệ tối ưu cho sản phẩm của bạn </p>
        <div className='flex items-center justify-center gap-5 lg:gap-10'>
          <button className='bg-yellow-400 text-white px-6 py-3 uppercase font-bold text-[0.9rem] flex items-center gap-2'>
            <p>tìm hiểu thêm</p>
            <IoIosArrowForward />
          </button>
          <button className='border text-white px-6 py-3 uppercase font-bold text-[0.9rem] flex items-center gap-2'>
            <p>liên hệ ngay</p>
            <IoIosArrowForward />
          </button>
        </div>
      </div>
    </section>
  )
}

export default Hero