import React, { useState } from 'react'
import { blog1, blog2, blog3 } from '../assets'
import { blogtests } from '../constants'

const BlogDetail = () => {

  const [visibleCount, setVisibleCount] = useState(3)

  const handleLoadMore = () => {
    setVisibleCount(prevCount => prevCount + 2)
  }

  return (
    <section>
      <div className='services flex flex-col items-center justify-center h-full text-center'>
        <div className='container'>
          <h2 className='text-2xl sm:text-4xl font-bold text-white capitalize mb-[1rem]'>Tin tức</h2>
          <p className='text-white font-semibold text-[1.1rem]'><span className='hover:text-yellow-500 cursor-pointer'>Home</span> - Tin tức</p>
        </div>
      </div>
      <div className='container grid grid-cols-1 lg:grid-cols-3 py-20 gap-10'>
        <div className='col-span-2 grid grid-cols-1 md:grid-cols-2 gap-10'>
          {blogtests.slice(0, visibleCount).map(blog => (
            <div key={blog.id} className='border'>
              <img src={blog.image} alt="blog" className='w-full h-[240px] object-cover' />
              <div className='p-4'>
                <h2 className='text-[1.4rem] font-medium leading-8'>{blog.title}</h2>
                <h2 className='text-[1.2rem] leading-8 mb-[0.5rem]'>{blog.description}</h2>
                <button className="text-[14px] underline font-medium hover:text-blue-500 flex items-center">
                  Đọc thêm
                </button>
              </div>
            </div>
          ))}

          {/* <div className='border overflow-hidden'>
            <img src={blog1} alt="blog" className='w-full h-[240px] object-cover' />
            <div className='p-4'>
              <h2 className='text-[1.625rem] font-medium leading-8 mb-[1rem]'>Composite Materials - Applications for the Future</h2>
              <p className='text-[1.188rem] mb-[1rem]'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dignissimos Applications....</p>
              <button className="text-[14px] underline font-medium hover:text-blue-500 flex items-center">
                    Đọc thêm
                </button>
            </div>
          </div>
          <div className='border overflow-hidden'>
            <img src={blog1} alt="blog" className='w-full h-[240px] object-cover' />
            <div className='p-4'>
              <h2 className='text-[1.625rem] font-medium leading-8 mb-[1rem]'>Composite Materials - Applications for the Future</h2>
              <p className='text-[1.188rem] mb-[1rem]'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dignissimos Applications....</p>
              <button className="text-[14px] underline font-medium hover:text-blue-500 flex items-center">
                    Đọc thêm
                </button>
            </div>
          </div>
          <div className='border overflow-hidden'>
            <img src={blog1} alt="blog" className='w-full h-[240px] object-cover' />
            <div className='p-4'>
              <h2 className='text-[1.625rem] font-medium leading-8 mb-[1rem]'>Composite Materials - Applications for the Future</h2>
              <p className='text-[1.188rem] mb-[1rem]'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dignissimos Applications....</p>
              <button className="text-[14px] underline font-medium hover:text-blue-500 flex items-center">
                    Đọc thêm
                </button>
            </div>
          </div>
          <div className='border overflow-hidden'>
            <img src={blog1} alt="blog" className='w-full h-[240px] object-cover' />
            <div className='p-4'>
              <h2 className='text-[1.625rem] font-medium leading-8 mb-[1rem]'>Composite Materials - Applications for the Future</h2>
              <p className='text-[1.188rem] mb-[1rem]'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dignissimos Applications....</p>
              <button className="text-[14px] underline font-medium hover:text-blue-500 flex items-center">
                    Đọc thêm
                </button>
            </div>
          </div> */}

          <button onClick={handleLoadMore} className=''>LOAD MORE</button>


        </div>
        <div className='flex flex-col gap-4'>
          <div className='bg-[#f7f8f9] py-5 px-5'>
            <h2 className='text-[1.2rem] font-semibold mb-[1rem]'>Tìm kiếm</h2>
            <input placeholder='Tìm kiếm ...' type="text" id="name" name="name" className="text-[1.1rem] w-full bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 outline-none text-gray-700 py-3 px-3 leading-8 transition-colors duration-200 ease-in-out mb-[1rem]" />
          </div>
          <div className='bg-[#f7f8f9] py-5 px-5'>
            <h2 className='text-[1.2rem] font-semibold mb-[1rem]'>Bài viết khác</h2>
            <div className='flex flex-col gap-4'>
              <div className='flex items-start gap-4'>
                <div className='w-1/3'>
                  <img src={blog1} alt="blog" className='w-full h-auto object-cover' />
                </div>
                <div className='w-2/3'>
                  <h2 className='text-[1.1rem] font-semibold'>What are Groundworkers and what do they do?</h2>
                  <p className='text-[#1d1d25]'>30 October 2019</p>
                </div>
              </div>
              <hr />
              <div className='flex items-start gap-4'>
                <div className='w-1/3'>
                  <img src={blog1} alt="blog" className='w-full h-auto object-cover' />
                </div>
                <div className='w-2/3'>
                  <h2 className='text-[1.1rem] font-semibold'>What are Groundworkers and what do they do?</h2>
                  <p className='text-[#1d1d25]'>30 October 2019</p>
                </div>
              </div>
              <hr />
              <div className='flex items-start gap-4'>
                <div className='w-1/3'>
                  <img src={blog1} alt="blog" className='w-full h-auto object-cover' />
                </div>
                <div className='w-2/3'>
                  <h2 className='text-[1.1rem] font-semibold'>What are Groundworkers and what do they do?</h2>
                  <p className='text-[#1d1d25]'>30 October 2019</p>
                </div>
              </div>
              <hr />
              <div className='flex items-start gap-4'>
                <div className='w-1/3'>
                  <img src={blog1} alt="blog" className='w-full h-auto object-cover' />
                </div>
                <div className='w-2/3'>
                  <h2 className='text-[1.1rem] font-semibold'>What are Groundworkers and what do they do?</h2>
                  <p className='text-[#1d1d25]'>30 October 2019</p>
                </div>
              </div>
              <hr />
              <div className='flex items-start gap-4'>
                <div className='w-1/3'>
                  <img src={blog1} alt="blog" className='w-full h-auto object-cover' />
                </div>
                <div className='w-2/3'>
                  <h2 className='text-[1.1rem] font-semibold'>What are Groundworkers and what do they do?</h2>
                  <p className='text-[#1d1d25]'>30 October 2019</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default BlogDetail