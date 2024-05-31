import { React,  useState, useRef, useEffect } from "react";
import { useNavigate } from "react-router-dom";

const Footer = (props) => {

  
  const [isVisible, setIsVisible] = useState(false);
  const footRef = useRef(null);

  useEffect(() => {
    const footObsever = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          setIsVisible(entry.isIntersecting);
        });
      },
      {
        rootMargin: '0px',
        threshold: 0.5,
      },
    );

    if(footRef.current){
      footObsever.observe(footRef.current);
    }

    return () => {
      if (footRef.current){
        footObsever.unobserve(footRef.current);
      }
    }
  }, [])


    const navigate = useNavigate();

    return (
      <section ref={footRef} style={{opacity: isVisible ? 1 : 0 , transition: 'opacity 0.5s'}} id="Footer" className="flex flex-col justify-center text-center items-center leading-7">

      <div className="mx-10">
        
      <div className="mb-5 sm:hidden">
          <h1 className="text-3xl font-extrabold tracking-wider text-blue-800">{props.comName}</h1>
          <p className="mt-3">{props.quater}, <br /> {props.city}, <br /> {props.region}, <br /> {props.country} <br /> <strong>{props.footEmail}</strong><br /> <strong>{props.footNum}</strong></p>
        </div>
        <div className="mb-5 sm:hidden">
          <h1 className="text-2xl font-extrabold tracking-wider text-blue-800">{props.title1}</h1>
          <ul>
            <li className="mt-3 hover:cursor-pointer hover:opacity-90 hover:text-blue-500 ease-in-out"><a href="#header">{props.home}</a></li>
            <li className="hover:cursor-pointer hover:opacity-90 hover:text-blue-500 ease-in-out"><a href="#About">{props.about}</a></li>
            <li className="hover:cursor-pointer hover:opacity-90 hover:text-blue-500 ease-in-out"><a href="#Service">{props.service} </a></li>
            <li className="hover:cursor-pointer hover:opacity-90 hover:text-blue-500 ease-in-out"><a href="#Team">{props.team} </a></li>
            <li className="hover:cursor-pointer hover:opacity-90 hover:text-blue-500 ease-in-out"><a href="#Testimony">{props.testimony}</a></li>
            <li className="hover:cursor-pointer hover:opacity-90 hover:text-blue-500 ease-in-out"><a href="#Contact">{props.contact}</a></li>
            <li className="hover:cursor-pointer hover:opacity-90 hover:text-blue-500 ease-in-out"><a href="#Contact" onClick={() => navigate('/register')}>Get Started</a></li>
            <li className="hover:cursor-pointer hover:opacity-90 hover:text-blue-500 ease-in-out"><a href="#Contact" onClick={() => navigate('/login')}>Sign In</a></li>
          </ul>
        </div>

        <div className="mt-5 sm:flex sm:justify-evenly md:hidden hidden">
          <div className="mb-5">
            <h1 className="text-3xl font-extrabold tracking-wider text-blue-800">{props.comName}</h1>
            <p className="mt-3">{props.quater}, <br /> {props.city}, <br /> {props.region}, <br /> {props.country} <br /> <strong>{props.footEmail}</strong><br /> <strong>{props.footNum}</strong></p>
          </div>
          <div className="mb-5 ml-24">
            <h1 className="text-2xl font-extrabold tracking-wider text-blue-800">{props.title1}</h1>
            <ul>
              <li className="mt-3 hover:cursor-pointer hover:opacity-90 hover:text-blue-500 ease-in-out"><a href="#header">{props.home}</a></li>
              <li className="hover:cursor-pointer hover:opacity-90 hover:text-blue-500 ease-in-out"><a href="#About">{props.about}</a></li>
              <li className="hover:cursor-pointer hover:opacity-90 hover:text-blue-500 ease-in-out"><a href="#Service">{props.service} </a></li>
              <li className="hover:cursor-pointer hover:opacity-90 hover:text-blue-500 ease-in-out"><a href="#Team">{props.team} </a></li>
              <li className="hover:cursor-pointer hover:opacity-90 hover:text-blue-500 ease-in-out"><a href="#Testimony">{props.testimony}</a></li>
              <li className="hover:cursor-pointer hover:opacity-90 hover:text-blue-500 ease-in-out"><a href="#Contact">{props.contact}</a></li>
            </ul>
          </div>
        </div>

        <div className="mb-5 sm:hidden ">
          <h1 className="text-2xl font-extrabold tracking-wider text-blue-800">{props.title2}</h1>
          <ul>
            <li className="mt-3 hover:cursor-pointer hover:opacity-90 hover:text-blue-500 ease-in-out"><a href="#Service">{props.AD}</a></li>
            <li className="hover:cursor-pointer hover:opacity-90 hover:text-blue-500 ease-in-out"><a href="#Service">{props.cloud}</a></li>
            <li className="hover:cursor-pointer hover:opacity-90 hover:text-blue-500 ease-in-out"><a href="#Service">{props.DP}</a></li>
            <li className="hover:cursor-pointer hover:opacity-90 hover:text-blue-500 ease-in-out"><a href="#Service">{props.EC}</a></li>
            <li className="hover:cursor-pointer hover:opacity-90 hover:text-blue-500 ease-in-out"><a href="#Service">{props.AD}</a></li>
            <li className="hover:cursor-pointer hover:opacity-90 hover:text-blue-500 ease-in-out"><a href="#Service">{props.stream}</a></li>
          </ul>
        </div>
        <div className="px-10 sm:hidden">
          <h1 className="text-2xl font-extrabold tracking-wider text-blue-800">{props.title3}</h1>
          <p className="mt-3">You can reach out to us on social media and development an unforgettable 🔥 network you won't want to forget in a hurry 🥰.</p><br />
          <div className="flex">
            <img src="./src/assets/in.PNG" className="h-14 hover:mt-[-1px] hover:cursor-pointer ease-in-out " />
            <img src="./src/assets/fb.PNG" className="h-14 hover:mt-[-1px] hover:cursor-pointer ease-in-out" />
            <img src="./src/assets/instagram.PNG" className="h-14 hover:mt-[-1px] hover:cursor-pointer ease-in-out" />
            <img src="./src/assets/tweet.PNG" className="h-14 hover:mt-[-1px] hover:cursor-pointer ease-in-out" />
            <img src="./src/assets/social.PNG" className="h-14 hover:mt-[-1px] hover:cursor-pointer ease-in-out" />
          </div>
        </div>

        <div className="mt-5 sm:flex sm:justify-evenly hidden md:hidden">
          <div className="mb-5">
           <h1 className="text-2xl font-extrabold tracking-wider text-blue-800">{props.title2}</h1>
            <ul>
              <li className="mt-3 hover:cursor-pointer hover:opacity-90 hover:text-blue-500 ease-in-out"><a href="#Service">{props.AD}</a></li>
              <li className="hover:cursor-pointer hover:opacity-90 hover:text-blue-500 ease-in-out"><a href="#Service">{props.cloud}</a></li>
              <li className="hover:cursor-pointer hover:opacity-90 hover:text-blue-500 ease-in-out"><a href="#Service">{props.DP}</a></li>
              <li className="hover:cursor-pointer hover:opacity-90 hover:text-blue-500 ease-in-out"><a href="#Service">{props.EC}</a></li>
              <li className="hover:cursor-pointer hover:opacity-90 hover:text-blue-500 ease-in-out"><a href="#Service">{props.AD}</a></li>
              <li className="hover:cursor-pointer hover:opacity-90 hover:text-blue-500 ease-in-out"><a href="#Service">{props.stream}</a></li>
            </ul>
          </div>
          <div className="px-10 sm:w-[50%]">
            <h1 className="text-2xl font-extrabold tracking-wider text-blue-800">{props.title3}</h1>
            <p className="mt-3">You can reach out to us on social media and development an unforgettable 🔥 network you won't want to forget in a hurry 🥰.</p><br />
            <div className="flex">
              <img src="./src/assets/in.PNG" className="h-14 hover:mt-[-1px] hover:cursor-pointer ease-in-out " />
              <img src="./src/assets/fb.PNG" className="h-14 hover:mt-[-1px] hover:cursor-pointer ease-in-out" />
              <img src="./src/assets/instagram.PNG" className="h-14 hover:mt-[-1px] hover:cursor-pointer ease-in-out" />
              <img src="./src/assets/tweet.PNG" className="h-14 hover:mt-[-1px] hover:cursor-pointer ease-in-out" />
              <img src="./src/assets/social.PNG" className="h-14 hover:mt-[-1px] hover:cursor-pointer ease-in-out" />
            </div>
          </div>
        </div>

        <div className="flex justify-between items-center md:ml-[-20px] mr-[-20px]">
          <div className="mb-5 md:block hidden mr-12 md:w-[25%]">
            <h1 className="text-3xl font-extrabold tracking-wider text-blue-800">{props.comName}</h1>
            <p className="mt-3">{props.quater}, <br /> {props.city}, <br /> {props.region}, <br /> {props.country} <br /> <strong>{props.footEmail}</strong><br /> <strong>{props.footNum}</strong></p>
          </div>
          <div className="mb-5 md:block hidden mr-4 md:w-[20%]">
            <h1 className="text-2xl font-extrabold tracking-wider text-blue-800">{props.title1}</h1>
            <ul>
              <li className="mt-3 hover:cursor-pointer hover:opacity-90 hover:text-blue-500 ease-in-out"><a href="#header">{props.home}</a></li>
              <li className="hover:cursor-pointer hover:opacity-90 hover:text-blue-500 ease-in-out"><a href="#About">{props.about}</a></li>
              <li className="hover:cursor-pointer hover:opacity-90 hover:text-blue-500 ease-in-out"><a href="#Service">{props.service} </a></li>
              <li className="hover:cursor-pointer hover:opacity-90 hover:text-blue-500 ease-in-out"><a href="#Team">{props.team} </a></li>
              <li className="hover:cursor-pointer hover:opacity-90 hover:text-blue-500 ease-in-out"><a href="#Testimony">{props.testimony}</a></li>
              <li className="hover:cursor-pointer hover:opacity-90 hover:text-blue-500 ease-in-out"><a href="#Contact">{props.contact}</a></li>
              <li className="hover:cursor-pointer hover:opacity-90 hover:text-blue-500 ease-in-out"><a href="#Contact" onClick={() => navigate('/register')}>Get Started</a></li>
              <li className="hover:cursor-pointer hover:opacity-90 hover:text-blue-500 ease-in-out"><a href="#Contact" onClick={() => navigate('/login')}>Sign In</a></li>
            </ul>
          </div>
          <div className="mb-5 md:block hidden md:w-[20%]">
            <h1 className="text-2xl font-extrabold tracking-wider text-blue-800">{props.title2}</h1>
            <ul>
              <li className="mt-3 hover:cursor-pointer hover:opacity-90 hover:text-blue-500 ease-in-out"><a href="#Service">{props.AD}</a></li>
              <li className="hover:cursor-pointer hover:opacity-90 hover:text-blue-500 ease-in-out"><a href="#Service">{props.cloud}</a></li>
              <li className="hover:cursor-pointer hover:opacity-90 hover:text-blue-500 ease-in-out"><a href="#Service">{props.DP}</a></li>
              <li className="hover:cursor-pointer hover:opacity-90 hover:text-blue-500 ease-in-out"><a href="#Service">{props.EC}</a></li>
              <li className="hover:cursor-pointer hover:opacity-90 hover:text-blue-500 ease-in-out"><a href="#Service">{props.AD}</a></li>
              <li className="hover:cursor-pointer hover:opacity-90 hover:text-blue-500 ease-in-out"><a href="#Service">{props.stream}</a></li>
            </ul>
          </div>
          <div className="md:block px-10 hidden md:w-[35%]">
            <h1 className="text-2xl font-extrabold tracking-wider text-blue-800">{props.title3}</h1>
            <p className="mt-3">You can reach out to us on social media and development an unforgettable 🔥 network you won't want to forget in a hurry 🥰.</p><br />
            <div className="flex">
              <img src="./src/assets/in.PNG" className="h-14 hover:mt-[-1px] hover:cursor-pointer ease-in-out " />
              <img src="./src/assets/fb.PNG" className="h-14 hover:mt-[-1px] hover:cursor-pointer ease-in-out" />
              <img src="./src/assets/instagram.PNG" className="h-14 hover:mt-[-1px] hover:cursor-pointer ease-in-out" />
              <img src="./src/assets/tweet.PNG" className="h-14 hover:mt-[-1px] hover:cursor-pointer ease-in-out" />
              <img src="./src/assets/social.PNG" className="h-14 hover:mt-[-1px] hover:cursor-pointer ease-in-out" />
            </div>
          </div>
        </div>

      </div>


        <div className="mt-14 h-16 w-full bg-[#37517e] text-white flex justify-between">
          <p className="pt-4 tracking-widest pl-8">@Copyright <em>{props.comName}</em> , All Rights Reserved</p> <br />
          <p className="pt-4 mr-8"><em className="text text-orange-400 tracking-wider">Designed by: </em><strong className="tracking-widest font-extrabold">{props.CEO}</strong></p>
        </div>
      </section>
  
    )
  }
  
  export default Footer
  