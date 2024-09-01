import React from 'react'
import { process } from '../assets';
import { FaTools } from "react-icons/fa";
import { FaPaintBrush } from "react-icons/fa";
import { FaFireAlt } from "react-icons/fa";
import { FaCheckCircle } from "react-icons/fa";
import { FaBoxOpen } from "react-icons/fa";
import { FaPlay } from "react-icons/fa";
import { video } from '../assets';
import VideoPlayer from './VideoPlayer';
import { useState } from 'react';

const Process = () => {

  const [isPlaying, setIsPlaying] = useState(false)


  return (
    <section className='container py-10'>
      <div className='text-center'>
        <h4 className='uppercase font-medium text-yellow-400'>services</h4>
        <h2 className='text-[2rem] font-semibold leading-9 mb-[2rem] uppercase'>Quy trình <span className='text-yellow-500'>sơn tĩnh điện</span> </h2>
      </div>
      <div className='grid grid-cols-1 lg:grid-cols-2 gap-20 items-center'>
        <div className=''>
          <div className='flex relative pb-7'>
            <div className='h-full w-10 absolute inset-0 flex items-center justify-center'>
              <div className='h-full w-1 bg-gray-200 pointer-events-none'></div>
            </div>
            <div className='flex-shrink-0 w-10 h-10 rounded-full bg-indigo-500 inline-flex justify-center items-center text-white z-10'>
              <FaTools />
            </div>
            <div className='flex-grow pl-4'>
              <h2 className='text-[1.2rem] font-semibold'>Bước 1: <span className='text-yellow-500'>Chuẩn bị bề mặt</span> </h2>
              <p className='text-[1.1rem] text-justify'>Bề mặt vật liệu được làm sạch bằng các phương pháp như phun cát, mài nhẵn, hoặc tẩy rửa để loại bỏ dầu mỡ, bụi bẩn, và các tạp chất khác, giúp lớp sơn bám dính tốt hơn.</p>
            </div>
          </div>
          <div className='flex relative pb-7'>
            <div className='w-10 h-full absolute inset-0 flex items-center justify-center'>
              <div className='w-1 h-full bg-gray-200 poiter-events-none'></div>
            </div>
            <div className='flex-shrink-0 w-10 h-10 rounded-full bg-indigo-500 inline-flex items-center justify-center z-10 text-white'>
              <FaPaintBrush />
            </div>
            <div className='pl-4'>
              <h2 className='text-[1.2rem] font-semibold'>Bước 2: <span className='text-yellow-500'>Phủ lớp sơn tĩnh điện</span> </h2>
              <p className='text-[1.1rem] text-justify'>Bột sơn tĩnh điện được phun lên bề mặt vật liệu bằng súng phun tĩnh điện. Bột sơn được tích điện dương, còn bề mặt vật liệu được tích điện âm, giúp bột sơn bám chắc lên bề mặt.</p>
            </div>
          </div>

          <div className='flex relative pb-7'>
            <div className='absolute w-10 h-full flex justify-center items-center'>
              <div className='w-1 h-full bg-gray-200 pointer-events-none'></div>
            </div>
            <div className='w-10 h-10 rounded-full bg-indigo-500 flex-shrink-0 flex items-center justify-center z-10 text-white'>
              <FaFireAlt />
            </div>
            <div className='pl-4'>
              <h2 className='text-[1.2rem] font-semibold'>Bước 3: <span className='text-yellow-500'>Sấy khô</span> </h2>
              <p className='text-[1.1rem] text-justify'>Vật liệu sau khi được phủ sơn tĩnh điện sẽ được đưa vào lò sấy ở nhiệt độ cao từ 160°C đến 200°C trong một khoảng thời gian nhất định để sơn chảy ra và tạo thành lớp phủ bền vững.
              </p>
            </div>
          </div>
          <div className='flex relative pb-7'>
            <div className='absolute w-10 h-full flex items-center justify-center'>
              <div className='w-1 h-full bg-gray-200'></div>
            </div>
            <div className='flex-shrink-0 w-10 h-10 bg-indigo-500 rounded-full flex items-center justify-center text-white z-10'>
              <FaCheckCircle />
            </div>
            <div className='pl-4'>
              <h2 className='text-[1.2rem] font-semibold'>Bước 4: <span className='text-yellow-500'>Kiểm tra chất lượng</span> </h2>
              <p className='text-[1.1rem] text-justify'>Sản phẩm sau khi sấy khô sẽ được kiểm tra kỹ lưỡng để đảm bảo lớp sơn bám đều, không có lỗi như bong tróc, rỗ bề mặt, hoặc không đều màu.</p>
            </div>
          </div>
          <div className='flex relative'>
            <div className='absolute w-10 h-full flex items-center justify-center'>
              <div className='w-1 h-full bg-gray-200'></div>
            </div>
            <div className='w-10 h-10 bg-indigo-500 rounded-full text-white flex-shrink-0 flex items-center justify-center z-10'>
              <FaBoxOpen />
            </div>
            <div className='pl-4'>
              <h2 className='text-[1.2rem] font-semibold'>Bước 5: <span className='text-yellow-500'>Đóng gói và vận chuyển</span> </h2>
              <p className='text-[1.1rem] text-justify'>Sản phẩm sau khi đạt yêu cầu sẽ được đóng gói cẩn thận để tránh hư hỏng trong quá trình vận chuyển đến tay khách hàng.</p>
            </div>
          </div>
        </div>
        <div className='flex justify-center'>
          <div className='relative'>
            <img src={process} alt="video" className='w-full h-full object-cover' />
            <div className='absolute bg-gray-700 inset-0 opacity-50'></div>
            <div onClick={() => setIsPlaying(true)} className='absolute inset-0 m-auto w-16 h-16 rounded-full btn-animation flex items-center justify-center'>
              <FaPlay className='absolute inset-0 m-auto text-white w-5 h-5' />
            </div>
          </div>
        </div>
      </div>
     
      <VideoPlayer 
        isPlaying={isPlaying}
        setIsPlaying={setIsPlaying}
        video={video}
      />

    </section>
  )
}

export default Process