import React from 'react'
import { IoIosArrowForward } from "react-icons/io";
import { blog1, blog2, blog3 } from '../assets'
import { MdKeyboardArrowRight } from "react-icons/md";

const Blog = () => {
    return (
        <section className='container py-10'>
            <h4 className='uppercase font-medium text-yellow-400'>BLOG</h4>
            <div className='flex justify-between items-end mb-[1rem]'>
                <h2 className='text-[2rem] font-semibold leading-9 uppercase'>Tin tức</h2>
                <button className="text-[14px] underline font-medium hover:text-blue-500 flex items-center">
                    Tìm hiểu thêm
                </button>
            </div>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10'>
                <div className='rounded-xl border border-b-orange overflow-hidden'>
                    <img src={blog1} alt="blog" />
                    <div className='p-4'>
                        <h2 className='text-[1.625rem] font-medium leading-8 mb-[1rem]'>Composite Materials - Applications for the Future</h2>
                        <p className='text-[1.188rem] mb-[1rem]'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dignissimos corrupti nisi sed iusto consequatur maxime ducimus quam in laudantium facilis quos obcaecati error atque amet, blanditiis alias tenetur voluptatem eius?</p>
                        <hr className='mb-[1rem]' />
                        <button className='flex items-center text-[14px] underline font-medium hover:text-blue-500'>Đọc thêm</button>
                    </div>
                </div>
                <div className='rounded-xl border border-b-orange overflow-hidden'>
                    <img src={blog2} alt="blog" />
                    <div className='p-4'>
                        <h2 className='text-[1.625rem] font-medium leading-8 mb-[1rem]'>Composite Materials - Applications for the Future</h2>
                        <p className='text-[1.188rem] mb-[1rem]'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dignissimos corrupti nisi sed iusto consequatur maxime ducimus quam in laudantium facilis quos obcaecati error atque amet, blanditiis alias tenetur voluptatem eius?</p>
                        <hr className='mb-[1rem]' />
                        <button className='flex items-center text-[14px] underline font-medium hover:text-blue-500'>Đọc thêm</button>
                    </div>
                </div>
                <div className='rounded-xl border border-b-orange overflow-hidden'>
                    <img src={blog3} alt="blog" />
                    <div className='p-4'>
                        <h2 className='text-[1.625rem] font-medium leading-8 mb-[1rem]'>Composite Materials - Applications for the Future</h2>
                        <p className='text-[1.188rem] mb-[1rem]'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dignissimos corrupti nisi sed iusto consequatur maxime ducimus quam in laudantium facilis quos obcaecati error atque amet, blanditiis alias tenetur voluptatem eius?</p>
                        <hr className='mb-[1rem]' />
                        <button className='flex items-center text-[14px] underline font-medium hover:text-blue-500'>Đọc thêm</button>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Blog