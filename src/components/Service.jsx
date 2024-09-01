import React from 'react'
import { service1, service2, service3 } from '../assets'

const Service = () => {
    return (
        <section className='container'>
            <h4 className='uppercase font-medium text-yellow-400'>Services</h4>
            <div className='flex justify-between items-end mb-[2rem]'>
                <h2 className='text-[2rem] font-semibold leading-9 uppercase'>Dịch vụ sơn</h2>
                <button className="text-[14px] underline font-medium hover:text-blue-500 flex items-center">
                    Tìm hiểu thêm
                </button>
            </div>
            <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10'>
                <div className='rounded-xl border border-b-orange overflow-hidden'>
                    <img src={service1} alt="service" />
                    <div className='p-[1rem]'>
                        <h2 className='text-[1.625rem] font-medium leading-8 mb-[1rem]'>Sơn Sắt</h2>
                        <p className='text-[1.188rem] mb-[1rem]'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo aperiam velit illum placeat, consequuntur distinctio ex vel. Suscipit hic, quo soluta mollitia sequi quibusdam quae tempore incidunt molestiae eligendi at.</p>
                        <button className=' text-[14px] underline font-medium hover:text-blue-500'>Tìm hiểu thêm </button>
                    </div>
                </div>
                <div className='rounded-xl border border-b-orange overflow-hidden'>
                    <img src={service2} alt="service" />
                    <div className='p-[1rem]'>
                        <h2 className='text-[1.625rem] font-medium leading-8 mb-[1rem]'>Sơn Thép</h2>
                        <p className='text-[1.188rem] mb-[1rem]'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo aperiam velit illum placeat, consequuntur distinctio ex vel. Suscipit hic, quo soluta mollitia sequi quibusdam quae tempore incidunt molestiae eligendi at.</p>
                        <button className=' text-[14px] underline font-medium hover:text-blue-500'>Tìm hiểu thêm </button>
                    </div>
                </div>
                <div className='rounded-xl border border-b-orange overflow-hidden'>
                    <img src={service3} alt="service" />
                    <div className='p-[1rem]'>
                        <h2 className='text-[1.625rem] font-medium leading-8 mb-[1rem]'>Sơn Inox</h2>
                        <p className='text-[1.188rem] mb-[1rem]'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo aperiam velit illum placeat, consequuntur distinctio ex vel. Suscipit hic, quo soluta mollitia sequi quibusdam quae tempore incidunt molestiae eligendi at.</p>
                        <button className=' text-[14px] underline font-medium hover:text-blue-500'>Tìm hiểu thêm </button>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Service