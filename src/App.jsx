import { useState } from 'react'
import './App.css'
import Navbar from './componentns/Navbar'
import Manager from './componentns/Manager'
import Footer from './componentns/Footer'

export default function App() {
  return (
    <>
      <div className="absolute inset-0 -z-10 h-[100vh] w-full items-center px-5 py-24 [background:radial-gradient(150%_150%_at_80%_10%,#010211_50%,#33e_120%)]"></div>
        <Navbar />
        <div className='min-h-[82vh]'>
          <Manager />
        </div>
        <Footer />
  
    </>
  );
}
