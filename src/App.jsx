import React from 'react';
import { Navbar, Home, AboutUsDetail, ServiceDetail, ProductDetail, BlogDetail, ContactDetail, Footer } from './components';
import { Routes, Route } from 'react-router-dom';

const App = () => {
  return (
    <div className='overflow-x-hidden'>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/about-us' element={<AboutUsDetail />} />
        <Route path='/services' element={<ServiceDetail />} />
        <Route path='/products' element={<ProductDetail />} />
        <Route path='/blogs' element={<BlogDetail />} />
        <Route path='/contacts' element={<ContactDetail />}/>
      </Routes>
      <Footer />
    </div>
  );
}

export default App;