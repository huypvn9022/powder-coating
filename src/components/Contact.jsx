import React from 'react'

const Contact = () => {
  return (
    <section className='container mb-20'>
      <div className='w-full lg:max-w-[60%] m-auto'>
        <h4 className='text-center uppercase font-medium'>Contact</h4>
        <h2 className='text-center text-[3rem] font-semibold leading-[3.3rem] mb-[1rem] capitalize'> <span className='text-yellow-500'>Liên hệ</span></h2>
        <p className='text-[1.188rem] mb-[1rem]'>Nếu bạn có thắc mắc nào hãy liên hệ ngay. Chúng tôi sẽ phản hồi trong thời gian sớm nhất</p>
        <input placeholder='Họ tên' type="text" id="name" name="name" className="text-[1.1rem] w-full bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 outline-none text-gray-700 py-3 px-3 leading-8 transition-colors duration-200 ease-in-out mb-[1rem]" />
        <input placeholder='Email' type="text" id="name" name="name" className="text-[1.1rem] w-full bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 outline-none text-gray-700 py-3 px-3 leading-8 transition-colors duration-200 ease-in-out mb-[1rem]" />
        <textarea placeholder='Nội dung liên hệ' id="message" name="message" className="text-[1.1rem] w-full bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 h-32 outline-none text-gray-700 py-3 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out mb-[1rem]"></textarea>
        <button className='bg-yellow-400 px-6 py-3 uppercase font-medium text-[1.125rem]'>Gửi ngay</button>
      </div>
    </section>
  )
}

export default Contact