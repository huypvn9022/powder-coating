import React, { useState } from 'react'
import { FaPlus, FaMinus } from "react-icons/fa6";

const FaqItem = ({ title, content, isOpen, onClick }) => {
  return (
    <div className={`border p-5 mb-5 ${isOpen ? 'border-yellow-500' : 'border'}`} onClick={onClick}>
      <div className='flex justify-between items-center'>
        <h2 className={`font-semibold text-[1.5rem] ${isOpen ? 'text-yellow-500' : 'text-black'}`}>{title}</h2>
        {isOpen ? <FaMinus /> : <FaPlus />}
      </div>
      {isOpen && (
        <div className='mt-3'>
          <p className='text-[1.2rem]'>{content}</p>
        </div>
      )}
    </div>
  );
}

const FAQ = ({ items }) => {
  const [open, setOpen] = useState(null)
  const handleToggle = (index) => {
    setOpen(open === index ? null : index)
  }
  return (
    <section className='container py-[2rem]'>
      <div className='grid grid-cols-1 lg:grid-cols-2 items-center gap-20'>
        <div>
          <h4 className='uppercase font-medium mb-[1rem]'>Question</h4>
          <h2 className='text-[3rem] font-semibold leading-[3.3rem] mb-[1rem] capitalize'>các câu hỏi thường gặp về <span className='text-yellow-500'>sơn tĩnh điện</span> </h2>
          <p className='mb-[1rem] text-[1.25rem]'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Non quos similique suscipit. Consectetur eaque perferendis dolore aliquam fuga optio labore placeat quasi inventore? Sapiente nulla amet vel ipsum reprehenderit. Doloribus.</p>
          <button className='bg-yellow-400 px-6 py-3 uppercase font-medium text-[1.125rem]'>contact us</button>
        </div>
        <div>
          {items.map((item, index) => (
            <FaqItem
              key={index}
              title={item.title}
              content={item.content}
              isOpen={open === index}
              onClick={() => handleToggle(index)}
            />
          ))}
        </div>
      </div>
    </section>
  )
}

export default FAQ