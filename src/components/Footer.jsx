import React from 'react'
import { IoIosArrowForward } from "react-icons/io";
import { FaFacebookF } from "react-icons/fa";
import { contactInfoBars, navlinks, socialIcons } from '../constants'

const Footer = () => {
    return (
        <section className='bg-[#001f3f] py-20'>
            <div className='container grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-20 justify-between pb-[2rem]'>
                <div>
                    <h1 className='text-[1.6rem] font-bold text-white'>THIEN<span className='text-yellow-300'>THINH.</span> </h1>
                    <p className='text-[1.188rem] text-white'>Là công ty chuyên về các lĩnh vực sơn tĩnh điện. Dịch vụ chăm sóc và chất lượng luôn đảm bảo.</p>
                </div>
                <div>
                    <h2 className='text-[1.625rem] font-bold text-white'>Liên hệ</h2>
                    <div>
                        {contactInfoBars.map((item, index) => (
                            <div key={index} className='flex items-center mb-[0.5rem] gap-2'>
                                <item.icon className='text-[1.4rem] text-yellow-500' />
                                <p className='text-[1.188rem] text-white'>{item.text}</p>
                            </div>
                        ))}
                    </div>
                </div>
                <div>
                    <h2 className='text-[1.625rem] font-bold text-white'>Công ty</h2>
                    <div className='grid grid-cols-2'>
                        {navlinks.map((item, index) => (
                            <div key={index} className='flex items-center mb-[0.5rem]'>
                                <IoIosArrowForward className='text-yellow-500' />
                                <p className='text-[1.188rem] text-white'>{item.title}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
            <hr className='text-white pb-[2rem]' />
            <div className='container grid grid-cols-1 lg:grid-cols-2 items-center'>
                <div>
                    <p className='text-[1.188rem] text-white'>All rights reserved Copyrights 2024.</p>
                </div>
                <div className='flex justify-end gap-5'>
                    {socialIcons.map(item => (
                        <div key={item.id} className='border bg-white p-2 rounded-full'>
                            <img src={item.icon} alt="zalo" className='w-8 h-8' />
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}

export default Footer