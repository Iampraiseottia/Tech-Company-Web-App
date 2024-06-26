import { React, useRef, useState, useEffect } from "react"
import { useNavigate } from "react-router-dom"

const Call = (props) => {

    const [isVisible, setIsVisible] = useState(false);
    const callRef = useRef(null);

    useEffect(() => {
        const callObserver = new IntersectionObserver(
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

        if(callRef.current){
            callObserver.observe(callRef.current);
        }

        return () => {
            if(callRef.current){
                callObserver.unobserve(callRef.current);
            }
        }
    }, [])


    const navigate = useNavigate();

  return (
    <section ref={callRef} style={{opacity: isVisible ? 1.0 : 0, transition: 'opacity 0.5s'}} id="call" className="bg-[#3f6ab3] mb-48 pt-16 w-auto h-96 my-12 text-white text-center">
        <h1 className="text-[40px] font-bold tracking-wider pb-10">{props.callTitle}</h1>
        <marquee direction="left" className="text-2xl "><strong>{props.comName}</strong> Has The Perfect Solution OF What You Are Looking For.</marquee>
        <div className="mt-10 flex flex-col sm:flex-row items-center sm:justify-center sm:pl-14">
            <button className="bg-transparent py-3 px-6 sm:py-4 sm:px-7 rounded-full mb-4 sm:mb-0 mr-0 sm:mr-8  transition duration-300 ease-in-out w-52 border-2 hover:bg-white hover:text-blue-800 hover:font-bold" onClick={() => navigate('/register')}>{props.register}</button>
            <button className="bg-transparent py-3 px-6 sm:py-4 sm:px-9 rounded-full  transition duration-300 ease-in-out w-52 border-2 hover:bg-white hover:font-bold hover:text-blue-800" onClick={() => navigate('/login')}>{props.login}</button>
        </div>
    </section>
    
    )
}

export default Call