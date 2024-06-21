import React from 'react'
import { FaArrowRight } from 'react-icons/fa'
import { useNavigate } from 'react-router-dom'

const TermsCondition = () => {

  const navigate = useNavigate();
  
  return (
    <section className=' bg-slate-200 text-center py-16 w-full h-[100vh]'>
      <h1 className=' text-2xl font-extrabold tracking-wider text-blue-700'>
        Terms and Condition of OTTIATECH        
      </h1>
      <ul className=' mt-8 px-36 leading-9'>
        <li className=' relative'> <FaArrowRight className=' absolute top-3' /> Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sunt optio magnam minus quam esse velit vitae molestias recusandae quia quos nulla, quaerat tempora officiis ut illo! Voluptatum asperiores praesentium non.</li>
        <li className=' relative'> <FaArrowRight className=' absolute top-3' /> Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sunt optio magnam minus quam esse velit vitae molestias recusandae quia quos nulla, quaerat tempora officiis ut illo! Voluptatum asperiores praesentium non.</li>
        <li className=' relative'> <FaArrowRight className=' absolute top-3' /> Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sunt optio magnam minus quam esse velit vitae molestias recusandae quia quos nulla, quaerat tempora officiis ut illo! Voluptatum asperiores praesentium non.</li>
        <li className=' relative'> <FaArrowRight className=' absolute top-3' /> Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sunt optio magnam minus quam esse velit vitae molestias recusandae quia quos nulla, quaerat tempora officiis ut illo! Voluptatum asperiores praesentium non.</li>
        <li className=' relative'> <FaArrowRight className=' absolute top-3' /> Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sunt optio magnam minus quam esse velit vitae molestias recusandae quia quos nulla, quaerat tempora officiis ut illo! Voluptatum asperiores praesentium non.</li>
      </ul>
      <p className=' font-extrabold mb-6 mt-5'>
        By clicking on the ACCEPT bottom below you completely and whole heartedly accept to all the terms and conditions mentioned above
      </p>
      <button className="h-14 mb-2 w-[84%] text-center bg-blue-700 text-white border-2 hover:border-4 hover:bg-white hover:text-blue-700 hover:opacity-90 ease-in-out hover:border-blue-700 rounded-[6px] text-[20px] font-extrabold tracking-wider" onClick={() => navigate("/register")}>ACCEPT </button>
      </section>
  )
}

export default TermsCondition