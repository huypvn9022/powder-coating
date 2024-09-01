import React from 'react'
import { about } from '../assets'
import { FaCheck } from "react-icons/fa";

const Service = () => {
  return (
    <section className='container py-20'>
        <div className='grid grid-cols-1 lg:grid-cols-2 items-center gap-20'>
            <div>
                <h4 className='uppercase font-medium mb-[1rem]'>about us</h4>
                <h2 className='text-[3rem] font-semibold leading-[3.3rem] mb-[1rem] capitalize'>Chúng tôi chuyên cung cấp các dịch vụ về <span className='text-yellow-500'>sơn tĩnh điện</span></h2>
                <p className='mb-[1rem] text-[1.25rem]'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Non quos similique suscipit. Consectetur eaque perferendis dolore aliquam fuga optio labore placeat quasi inventore? Sapiente nulla amet vel ipsum reprehenderit. Doloribus.</p>
                <ul className='text-[1.25rem] mb-[1rem]'>
                  <li className='flex items-center gap-2'><FaCheck className='text-yellow-500' /> Gia công chất lượng </li>
                  <li className='flex items-center gap-2'><FaCheck className='text-yellow-500' /> Giá thành thi công tốt nhất thị trường </li>
                  <li className='flex items-center gap-2'><FaCheck className='text-yellow-500' /> Dịch vụ chăm sóc tốt </li>
                </ul>
                <button className='bg-yellow-400 px-6 py-3 uppercase font-medium text-[1.125rem]'>tìm hiểu thêm</button>
            </div>
            <div>
                <img src={about} alt="about" className=''/>    
            </div>
        </div>
    </section>
  )
}

export default Service