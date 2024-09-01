import React from 'react'
import { styles } from '../styles';
import { contactInfoBars, socialIcons } from '../constants';

const ContactInfoBar = () => {
    return (
        <section className='container bg-black'>
            <div className={`${styles.flexBetween} leading-10 text-white`}>
                <div className='flex gap-10'>
                    {contactInfoBars.map(item => (
                        <div key={item.id} className={`${styles.flexCenter} gap-2`}>
                            <item.icon size={18} className='text-orange'/>
                            <p className='text-[14px]'>{item.text}</p>
                        </div>
                    ))}
                </div>
                <div className='flex gap-5 leading-1 '>
                    {socialIcons.map(item => (
                        <item.icon key={item.icon} size={20} />
                    ))}
                </div>
            </div>
        </section>
    )
}

export default ContactInfoBar
