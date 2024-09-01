import React from 'react'
import { about, badge, discount, customer, team1, team2, team3, facebook, zalo } from '../assets'

const AboutUsDetail = () => {
  return (
    <section>
      <div className='about-us flex flex-col items-center justify-center h-full text-center'>
        <div className='container'>
          <h2 className='text-2xl sm:text-4xl font-bold text-white capitalize mb-[1rem]'>về chúng tôi</h2>
          <p className='text-white font-semibold text-[1.1rem]'><span className='hover:text-yellow-500 cursor-pointer'>Home</span> - About</p>
        </div>
      </div>
      <div className='container py-10'>
        <div className='grid grid-cols-1 lg:grid-cols-2 items-center gap-20'>
          <div>
            <p className='text-[1.8rem] font-medium'>Chào mừng đến với <span className='text-yellow-500'>Thiên Thịnh</span> </p>
            <h2 className='text-[3rem] font-semibold leading-[3.3rem] mb-[1rem] capitalize'>Chúng tôi có nhiều năm kinh nghiệm về lĩnh vực <span className='text-yellow-500'>sơn tĩnh điện</span></h2>
            <p className='text-[1.25rem]'>Công ty chúng tôi là đơn vị có nhiều năm kinh nghiệm về dịch vụ sơn tĩnh điện chất lượng cao. Với nhiều năm kinh nghiệm và sự tận tâm trong từng sản phẩm, chúng tôi tự hào mang đến cho khách hàng những giải pháp sơn phủ bề mặt hoàn hảo nhất, đáp ứng mọi yêu cầu khắt khe về thẩm mỹ và độ bền.</p>
            <p className='text-[1.25rem] mb-[1rem]'>Đa dạng dịch vụ sơn tĩnh điện: Sơn sắt, sơn thép, sơn inox ...</p>
            <button className='bg-yellow-400 px-6 py-3 uppercase font-medium text-[1.125rem]'>tìm hiểu thêm</button>
          </div>
          <div>
            <img src={about} alt="about" className='w-full h-full object-cover' />
          </div>
        </div>
      </div>
      <div className='container py-10'>
        <div className='text-center'>
          <h2 className='text-[2rem] font-medium leading-9 mb-[2rem] uppercase'> <span className='text-yellow-500'>sứ mệnh</span> và <span className='text-yellow-500'>giá trị</span> </h2>
        </div>
        <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10'>
          <div className='border-2 p-5 rounded-xl flex flex-col justify-center items-center'>
            <img src={badge} alt="badge" className='w-20 h-20 mb-[1rem]' />
            <h2 className='text-[1.5rem] font-bold mb-[1rem]'>Chất lượng vượt trội</h2>
            <p className='text-[1.1rem] text-center'>Chúng tôi cam kết mang đến sản phẩm sơn tĩnh điện với chất lượng tốt nhất, đảm bảo bề mặt hoàn thiện bền đẹp và chính xác.</p>
          </div>
          <div className='border-2 p-5 rounded-xl flex flex-col justify-center items-center'>
            <img src={discount} alt="discount" className='w-20 h-20 mb-[1rem]' />
            <h2 className='text-[1.5rem] font-bold mb-[1rem]'>Giá thành cạnh tranh</h2>
            <p className='text-[1.1rem] text-center'>Cung cấp dịch vụ với giá cả hợp lý và cạnh tranh nhất, mang lại giá trị tối ưu cho khách hàng mà không làm giảm chất lượng.</p>
          </div>
          <div className='border-2 p-5 rounded-xl flex flex-col justify-center items-center'>
            <img src={customer} alt="customer" className='w-20 h-20 mb-[1rem]' />
            <h2 className='text-[1.5rem] font-bold mb-[1rem]'>Dịch vụ khách hàng tốt</h2>
            <p className='text-[1.1rem] text-center'>Đội ngũ của chúng tôi luôn sẵn sàng hỗ trợ và tư vấn tận tình, đảm bảo mọi nhu cầu và yêu cầu của khách hàng được đáp ứng nhanh chóng và hiệu quả.</p>
          </div>
        </div>
      </div>
      <div className='container py-10'>
        <div className='text-center'>
          <h2 className='text-[2rem] font-medium leading-9 mb-[2rem] uppercase'> <span className='text-yellow-500'>Đội ngũ</span> của chúng tôi</h2>
        </div>
        <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10'>
          <div className='flex flex-col items-center justify-center border py-5'>
            <img src={team1} alt="team1" className='mb-[1rem]' />
            <h2 className='font-bold text-[1.5rem]'>Jonathan Scott</h2>
            <p className='text-[1.2rem]'>Project Manager</p>
            <p className='text-[1.2rem] mb-[1rem]'>abc@gmail.com</p>
            <div className='flex gap-5'>
              <div className='border border-blue-400 p-2 rounded-full'>
                <img src={facebook} alt="facebook" className='w-8 h-8' />
              </div>
              <div className='border border-blue-400 p-2 rounded-full'>
                <img src={zalo} alt="zalo" className='w-8 h-8' />
              </div>
            </div>
          </div>
          <div className='flex flex-col items-center justify-center border py-5'>
            <img src={team2} alt="team1" className='mb-[1rem]' />
            <h2 className='font-bold text-[1.5rem]'>Jonathan Scott</h2>
            <p className='text-[1.2rem]'>Project Manager</p>
            <p className='text-[1.2rem] mb-[1rem]'>abc@gmail.com</p>
            <div className='flex gap-5'>
              <div className='border border-blue-400 p-2 rounded-full'>
                <img src={facebook} alt="facebook" className='w-8 h-8' />
              </div>
              <div className='border border-blue-400 p-2 rounded-full'>
                <img src={zalo} alt="zalo" className='w-8 h-8' />
              </div>
            </div>
          </div>
          <div className='flex flex-col items-center justify-center border py-5'>
            <img src={team3} alt="team1" className='mb-[1rem]' />
            <h2 className='font-bold text-[1.5rem]'>Jonathan Scott</h2>
            <p className='text-[1.2rem]'>Project Manager</p>
            <p className='text-[1.2rem] mb-[1rem]'>abc@gmail.com</p>
            <div className='flex gap-5'>
              <div className='border border-blue-400 p-2 rounded-full'>
                <img src={facebook} alt="facebook" className='w-8 h-8' />
              </div>
              <div className='border border-blue-400 p-2 rounded-full'>
                <img src={zalo} alt="zalo" className='w-8 h-8' />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default AboutUsDetail