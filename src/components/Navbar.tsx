import {AiOutlineClose, AiOutlineMenu} from 'react-icons/ai'
import { useState } from 'react'
import { sectionID } from './sectionID'

const Navbar = (props) => {

  const [nav, setNav] = useState(false)

  const handleNav = () => {
    setNav(!nav)
  }

  return (
    <section id='header' >
        <div className='bg-[#37517e] hidden md:flex justify-between items-center h-auto py-10 text-white px-9 fixed z-10 top-0 w-full'>
          <div className="flex items-center flex-shrink-0">   
              <img src="./src/assets/companyLogo.png" className="rounded-full h-14 w-14" />
              <h1 className='font-bold text-2xl pl-3 tracking-wider hover:select-none'>{props.comName}</h1>
          </div>
          <nav className='flex-shrink-0'>
              <ul className="flex items-center">
                  <li><a href="#header" className="text-[gold] text-[22px] px-3 hover:opacity-80" id="Home">{props.home}</a></li>
                  <li><a href="#About" className="text-xl px-3 hover:opacity-80">{props.about}</a></li>
                  <li><a href="#Service" className="text-xl px-3 hover:opacity-80">{props.service}</a></li>
                  <li><a href="#Team" className="text-xl px-3 hover:opacity-80">{props.team}</a></li>
                  <li><a href="#Testimony" className="text-xl px-3 hover:opacity-80">{props.testimony}</a></li>
                  <li><a href="#" className="text-xl px-3 mr-3 hover:opacity-80">{props.contact}</a></li>
                  <button className="border-[#47b2e4] border-2  py-3 px-7 font-bold rounded-3xl hover:bg-blue-600 hover:border-blue-600 hover:opacity-90"><a href="">{props.login}</a></button>
              </ul>
          </nav>
        </div>

        <div className='bg-[#37517e] md:hidden items-center h-auto py-10 text-white px-9 fixed z-10 top-0 w-full'>
          <div className="pt-3 flex justify-between items-center">
            <div className="flex items-center">   
              <img src="./src/assets/companyLogo.png" className="rounded-full h-14 w-14" />
              <h1 className='font-bold text-2xl pl-3 tracking-wider hover:select-none'>{props.comName}</h1>
            </div>
            <div onClick={handleNav} className='block md:hidden'>
              {!nav ? <AiOutlineClose size={20} /> : <AiOutlineMenu size={20}/>}
              
            </div>
          </div>

          <nav className={!nav ? 'mt-7 ease-in-out duration-500 block md:hidden' : 'fixed left-[-100%]'}>
              <ul className="flex flex-col items-center">
                  <li className="border-b-gray-400 border-b w-96 text-center"><a href="#header" className="text-[gold] text-[22px] px-3 hover:opacity-80" id="Home">{props.home}</a></li>
                  <li className="mt-2 border-b-gray-400 border-b w-96 text-center"><a href="#About" className="text-xl hover:opacity-80">{props.about}</a></li>
                  <li className="mt-4 border-b border-b-gray-400 w-96 text-center"><a href="#" className="text-xl  hover:opacity-80">{props.service}</a></li>
                  <li className="mt-4 border-b border-b-gray-400 w-96 text-center"><a href="#" className="text-xl  hover:opacity-80">{props.team}</a></li>
                  <li className="mt-4 border-b border-b-gray-400 w-96 text-center"><a href="#" className="text-xl  hover:opacity-80">{props.testimony}</a></li>
                  <li className="mt-4 border-b border-b-gray-400 w-96 text-center"><a href="#" className="text-xl  mr-3 hover:opacity-80">{props.contact}</a></li>
                  <button className="border-[#47b2e4] mt-5 mb-4 border-2  py-3 px-7 font-bold rounded-3xl hover:bg-blue-600 hover:border-blue-600 hover:opacity-90"><a href="#">{props.login}</a></button>
              </ul>
          </nav>
        </div>
    </section>
  )
}

export default Navbar
