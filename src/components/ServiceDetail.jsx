import React from 'react'
import { service1, service2, service3 } from '../assets'

const ServiceDetail = () => {
  return (
    <section>
      <div className='services flex flex-col items-center justify-center h-full text-center'>
        <div className='container'>
          <h2 className='text-2xl sm:text-4xl font-bold text-white capitalize mb-[1rem]'>Dịch vụ sơn</h2>
          <p className='text-white font-semibold text-[1.1rem]'><span className='hover:text-yellow-500 cursor-pointer'>Home</span> - Services</p>
        </div>
      </div>
      <div className='container py-20'>
      <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10'>
                <div className='rounded-xl border border-b-orange overflow-hidden'>
                    <img src={service1} alt="service"  />
                    <div className='p-[1rem]'>
                        <h2 className='text-[1.625rem] font-medium leading-8 mb-[1rem]'>Sơn Sắt</h2>
                        <p className='text-[1.188rem] mb-[1rem]'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo aperiam velit illum placeat, consequuntur distinctio ex vel. Suscipit hic, quo soluta mollitia sequi quibusdam quae tempore incidunt molestiae eligendi at.</p>
                        <button className=' text-[14px] underline font-medium hover:text-blue-500'>Tìm hiểu thêm </button>
                    </div>
                </div>
                <div className='rounded-xl border border-b-orange overflow-hidden'>
                    <img src={service2} alt="service"  />
                    <div className='p-[1rem]'>
                        <h2 className='text-[1.625rem] font-medium leading-8 mb-[1rem]'>Sơn Thép</h2>
                        <p className='text-[1.188rem] mb-[1rem]'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo aperiam velit illum placeat, consequuntur distinctio ex vel. Suscipit hic, quo soluta mollitia sequi quibusdam quae tempore incidunt molestiae eligendi at.</p>
                        <button className=' text-[14px] underline font-medium hover:text-blue-500'>Tìm hiểu thêm </button>
                    </div>
                </div>
                <div className='rounded-xl border border-b-orange overflow-hidden'>
                    <img src={service3} alt="service"  />
                    <div className='p-[1rem]'>
                        <h2 className='text-[1.625rem] font-medium leading-8 mb-[1rem]'>Sơn Inox</h2>
                        <p className='text-[1.188rem] mb-[1rem]'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo aperiam velit illum placeat, consequuntur distinctio ex vel. Suscipit hic, quo soluta mollitia sequi quibusdam quae tempore incidunt molestiae eligendi at.</p>
                        <button className=' text-[14px] underline font-medium hover:text-blue-500'>Tìm hiểu thêm </button>
                    </div>
                </div>
                <div className='rounded-xl border border-b-orange overflow-hidden'>
                    <img src={service3} alt="service"  />
                    <div className='p-[1rem]'>
                        <h2 className='text-[1.625rem] font-medium leading-8 mb-[1rem]'>Sơn Inox</h2>
                        <p className='text-[1.188rem] mb-[1rem]'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo aperiam velit illum placeat, consequuntur distinctio ex vel. Suscipit hic, quo soluta mollitia sequi quibusdam quae tempore incidunt molestiae eligendi at.</p>
                        <button className=' text-[14px] underline font-medium hover:text-blue-500'>Tìm hiểu thêm </button>
                    </div>
                </div>
                <div className='rounded-xl border border-b-orange overflow-hidden'>
                    <img src={service3} alt="service"  />
                    <div className='p-[1rem]'>
                        <h2 className='text-[1.625rem] font-medium leading-8 mb-[1rem]'>Sơn Inox</h2>
                        <p className='text-[1.188rem] mb-[1rem]'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo aperiam velit illum placeat, consequuntur distinctio ex vel. Suscipit hic, quo soluta mollitia sequi quibusdam quae tempore incidunt molestiae eligendi at.</p>
                        <button className=' text-[14px] underline font-medium hover:text-blue-500'>Tìm hiểu thêm </button>
                    </div>
                </div>
            </div>
      </div>
    </section>
  )
}

export default ServiceDetail