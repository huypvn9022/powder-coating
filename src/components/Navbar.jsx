import React, { useEffect, useState } from 'react'
import { styles } from '../styles';
import { IoSearch } from "react-icons/io5";
import { AiOutlineMenu } from "react-icons/ai";
import { MdClose } from "react-icons/md";
import { Routes, Route } from 'react-router-dom';
import { NavLink, Link, useLocation } from 'react-router-dom';

const Navbar = () => {
    const location = useLocation()
    const [toggle, setToggle] = useState(false)
    const [sticky, setSticky] = useState(false)
    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 50) {
                setSticky(true)
                if (toggle) {
                    setToggle(false)
                }
            } else {
                setSticky(false)
            }
        }
        window.addEventListener('scroll', handleScroll)
        return () => {
            window.removeEventListener('scroll', handleScroll)
        }
    }, [toggle])
    return (
        <section className={`z-[100] py-[1rem] fixed w-full left-0 right-0 ${sticky ? 'bg-[#001f3f]' : ''} ${toggle ? 'bg-[#001f3f]' : ''} `}>
            <div className={`${styles.flexBetween} container`}>
                <div>
                    <h1 className='text-[1.6rem] font-bold text-white'>THIEN<span className='text-yellow-300'>THINH.</span> </h1>
                </div>
                <div className='text-white'>
                    <ul className='hidden lg:flex gap-10 items-center font-semibold text-[1.1rem]'>
                        <li className={location.pathname === '/' ? 'active': ''}>
                            <NavLink to='/'>Home</NavLink>
                        </li>
                        <li className={location.pathname === '/about-us' ? 'active': ''}>
                            <NavLink to='/about-us'>About</NavLink>
                        </li>
                        <li className={location.pathname === '/services' ? 'active': ''}>
                            <NavLink to='/services'>Service</NavLink>
                        </li>
                        <li className={location.pathname === '/products' ? 'active': ''}>
                            <NavLink to='/products'>Product</NavLink>
                        </li>
                        <li className={location.pathname === '/blogs' ? 'active': ''}>
                            <NavLink to='/blogs'>Blog</NavLink>
                        </li>
                        <li className={location.pathname === '/contacts' ? 'active': ''}>
                            <NavLink to='/contacts'>Contact</NavLink>
                        </li>
                        {/* <NavLink to='/'>
                            <p>Home</p>
                        </NavLink>
                        <NavLink to='/about-us'>
                            <p>About</p>
                        </NavLink>
                        <NavLink to='/services'>
                            <p>Service</p>
                        </NavLink>
                        <NavLink to='/products'>
                            <p>Product</p>
                        </NavLink>
                        <NavLink to='/blogs'>
                            <p>Blog</p>
                        </NavLink>
                        <NavLink to='/contacts'>
                            <p>Contact</p>
                        </NavLink> */}
                        {/* <li><a href="#">Home</a></li>
                        <li><a href="#">About</a></li>
                        <li><a href="#">Service</a></li>
                        <li><a href="#">Product</a></li>
                        <li><a href="#">News</a></li>
                        <li><a href="#">Contact</a></li> */}
                    </ul>
                </div>
                <div className='block lg:hidden'>
                    <div
                        onClick={() => setToggle(!toggle)}
                        className='text-white text-[2rem]'
                    >
                        {toggle ? <MdClose /> : <AiOutlineMenu />}
                    </div>
                    <div className='w-full'>
                        {toggle && (
                            <div className='w-full h-dvh absolute top-full left-0 bg-[#001f3f] container text-[1.1rem] text-white flex flex-col gap-5 capitalize '>
                                <hr />
                                <NavLink to='/' onClick={() => setToggle(false)}>
                                    <p className='hover:text-yellow-500'>Home</p>
                                </NavLink>
                                <NavLink to='/about-us' onClick={() => setToggle(false)}>
                                    <p className='hover:text-yellow-500'>About</p>
                                </NavLink>
                                <NavLink to='/services' onClick={() => setToggle(false)}>
                                    <p className='hover:text-yellow-500'>Service</p>
                                </NavLink>
                                <NavLink to='/products' onClick={() => setToggle(false)}>
                                    <p className='hover:text-yellow-500'>Product</p>
                                </NavLink>
                                <NavLink to='/blogs' onClick={() => setToggle(false)}>
                                    <p className='hover:text-yellow-500'>Blog</p>
                                </NavLink>
                                <NavLink to='/contacts' onClick={() => setToggle(false)}>
                                    <p className='hover:text-yellow-500'>Contact</p>
                                </NavLink>
                                <div>

                                </div>
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Navbar
