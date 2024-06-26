import {AiOutlineClose, AiOutlineMenu} from 'react-icons/ai'
import { useEffect, useState } from 'react'
import { sectionIDs } from './sectionIDs'
import { Link } from "react-router-dom"
import { useNavigate } from 'react-router-dom'


const Navbar = (props) => {

  const [nav, setNav] = useState(false)

  const handleNav = () => {
    setNav(!nav)
  }

  // Tract active link and scroll 

  const [activeLink, setActiveLink] = useState();
  const [isScroll, setIsScroll] = useState(false);

  // smooth scroll
  const scrollToSection = (sectionID) => {
    const element = document.getElementById(sectionID);

    if(element){
      const marginTop = 120;
      const scrollToY = element.getBoundingClientRect().top + window.scrollY - marginTop;
      window.scrollTo({ top: scrollToY, behavior: "smooth"});
    
    }
  }

  // function to detect active section

  const determineActiveSection= () => {
    for(let i = sectionIDs.length -1; i >= 0; i--){
      const section = document.getElementById(sectionIDs[i]);
      if(section){
        const reac = section.getBoundingClientRect();
        if(reac.top <= 120 && reac.bottom >= 120){
          setActiveLink(sectionIDs[i]);
          break
        }
      }
    }
  }

  useEffect(() => {
    const handleScroll = () => {
      if(window.scrollY > 360){
        setIsScroll(true);
      }else{
        setIsScroll(false);
      }

      //Calling the determining function while scroll
      determineActiveSection();
    }

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    }
  }, [isScroll])


  const navigate = useNavigate();

  return (
    <section id='Home' >
        <div className='bg-[#37517e] hidden md:flex justify-between items-center h-auto py-10 text-white px-9 fixed z-10 top-0 w-full'>
          <div className="flex items-center flex-shrink-0">   
              <img src="./src/assets/companyLogo.png" className="rounded-full h-14 w-14" />
              <h1 className='font-bold text-2xl pl-3 tracking-wider hover:select-none'>{props.comName}</h1>
          </div>
    
          <nav className='flex-shrink-0 ease-in-out'>
            <ul className='flex items-center'>
              {
                sectionIDs.map((sectionID, i) => (
                  <li key={i} onClick={() => scrollToSection(sectionID)} className="text-xl px-3 mr-3 hover:opacity-80 tracking-wider ease-in-out gap-2" >
                    <Link to="/" className={activeLink == sectionID ? "active" : ""}> {sectionID} </Link>
                  </li>
                ))
              }

              <button className="border-[#47b2e4] border-2  py-3 px-7 font-bold rounded-3xl hover:bg-blue-600 hover:border-blue-600 hover:opacity-90" onClick={ () => navigate('/login')}><a href="">{props.login}</a></button>

            </ul>
          </nav>
        </div>

        <div className='bg-[#37517e] lg:hidden items-center h-auto py-10 text-white px-9 fixed z-10 top-0 w-full'>
          <div className="pt-3 flex justify-between items-center">
            <div className="flex items-center">   
              <img src="./src/assets/companyLogo.png" className="rounded-full h-14 w-14" />
              <h1 className='font-bold text-2xl pl-3 tracking-wider hover:select-none'>{props.comName}</h1>
            </div>
            <div onClick={handleNav} className='block lg:hidden cursor-pointer'>
              {!nav ? <AiOutlineClose size={20} /> : <AiOutlineMenu size={20}/>}
              
            </div>
          </div>

          <nav className={!nav ? 'mt-7 ease-in-out duration-500 block lg:hidden' : 'fixed left-[-100%]'}>

              <ul className='flex flex-col items-center'>
                {
                  sectionIDs.map((sectionID, i) => (
                    <li key={i} onClick={() => scrollToSection(sectionID)} className="border-b-gray-400 border-b w-96 text-center leading-10" >
                      <Link to="/" className={activeLink == sectionID ? "active" : ""}> {sectionID} </Link>
                    </li>
                  ))
                }
                  <button className="border-[#47b2e4] mt-5 mb-4 border-2  py-3 px-7 font-bold rounded-3xl hover:bg-blue-600 hover:border-blue-600 hover:opacity-90" onClick={() => navigate('/login')}><a href="#">{props.login}</a></button>

              </ul>
          </nav>
        </div>
    </section>
  )
}

export default Navbar
