import { React, useState, useEffect, useRef } from "react"

const Team = (props) => {

    
    const [isVisible, setIsVisible] = useState(false);
    const teamRef = useRef(null);
    
    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    setIsVisible(entry.isIntersecting)
                });
            },
            {
                rootMargin: '0px',
                threshold: 0.5,
            }
        );

        if(teamRef.current){
            observer.observe(teamRef.current);
        }

        return () => {
            if(teamRef.current){
                observer.unobserve(teamRef.current);
            }
        };
    }, []);
    
    
    return (
      
        <section id="Team" className="bg-slate-200 py-20 mt-32 text-center">
             <div ref={teamRef} style={{opacity: isVisible ? 1 : 0, transition: 'opacity 0.5s'}}>
                <div className="">
                    <h1 className="text-[37px] font-bold tracking-widest text-[#37517e]">
                        {props.teamTitle}
                    </h1>
                    <div className="flex justify-center mt-2 mb-10 items-center">
                        <hr className="w-12 h-[2px] bg-slate-600" />
                        <hr className="w-16 h-1 bg-blue-700" />
                        <hr className="w-12 h-[2px] bg-slate-600" />
                    </div>
                </div>
                <p className="tracking-widest text-[17px] pt-8 px-7 leading-8">
                    <strong>{props.comName}</strong> <i> has a very committed, purpose driven, talented and very obsessed with the delivery of precise, accurate and above all top-notch services to you our most honoured customer</i>
                </p>
             </div>

            <div className="mt-14 mx-10 flex flex-col-reverse lg:flex-row sm:justify-evenly justify-center">
                <div id="darkshadow" className="flex flex-col sm:flex sm:flex-row bg-white leading-7 shadow-2xl sm:px-7 h-auto w-auto py-9 items-center text-center rounded hover:translate-y-[-4%] transition duration-500 ">
                    <div className="">
                        <img src="./src/assets/team-1.jpg" className="rounded-full w-40 h-40" />
                    </div>
                    <div className="mt-5 ml-8 text-left w-[65%]">
                        <h1 className="text-2xl font-extrabold text-blue-800 tracking-wider pb-3"> {props.CEO}</h1>
                        <p className="tracking-wider pb-2"><em>{props.posCEO}, <strong>CEO</strong></em></p>
                        <hr className="w-20 ml-20 pb-5" />
                        <p className="">Supervises, coordinates and controls all the activities, tasks and projects of the company.</p>
                        <div className="flex justify-evenly items-center mt-5">
                            <img src="./src/assets/facebook.jpeg" className="w-8 h-8 rounded-full hover:cursor-pointer hover:opacity-80  hover:translate-y-[-2%] transition duration-500" />
                            <img src="./src/assets/ig.jpeg" className="w-8 h-8 rounded-full hover:cursor-pointer hover:opacity-80  hover:translate-y-[-2%] transition duration-500" />
                            <img src="./src/assets/whatsapp.png" className="w-8 h-8 rounded-full hover:cursor-pointer hover:opacity-80  hover:translate-y-[-2%] transition duration-500" />
                            <img src="./src/assets/email.png" className="w-9 h-9 rounded-full hover:cursor-pointer hover:opacity-80  hover:translate-y-[-2%] transition duration-500" />
                        </div>
                    </div>
                </div>
                <div id="darkshadow" className="flex flex-col  sm:flex sm:flex-row bg-white leading-7 shadow-2xl sm:px-7 h-auto w-auto py-9 items-center text-center rounded hover:translate-y-[-4%] transition duration-500 ">
                    <div className="">
                        <img src="./src/assets/team-4.jpg" className="rounded-full w-40 h-40" />
                    </div>
                    <div className="mt-5 ml-8 text-left w-[65%]">
                        <h1 className="text-2xl font-extrabold text-blue-800 tracking-wider pb-3">{props.GM}</h1>
                        <p className="tracking-wider pb-2"><em>{props.posGM}, <strong>GM</strong></em></p>
                        <hr className="w-20 ml-20 pb-5" />
                        <p className="">Coordinates and controls all the activities, tasks and projects of the company.</p>
                        <div className="flex justify-evenly items-center mt-5">
                            <img src="./src/assets/facebook.jpeg" className="w-8 h-8 rounded-full hover:cursor-pointer hover:opacity-80  hover:translate-y-[-2%] transition duration-500" />
                            <img src="./src/assets/ig.jpeg" className="w-8 h-8 rounded-full hover:cursor-pointer hover:opacity-80  hover:translate-y-[-2%] transition duration-500" />
                            <img src="./src/assets/whatsapp.png" className="w-8 h-8 rounded-full hover:cursor-pointer hover:opacity-80  hover:translate-y-[-2%] transition duration-500" />
                            <img src="./src/assets/email.png" className="w-9 h-9 rounded-full hover:cursor-pointer hover:opacity-80  hover:translate-y-[-2%] transition duration-500" />
                        </div>
                    </div>
                </div>
            </div>
            <div className="mt-14 mx-10 flex flex-col-reverse lg:flex-row sm:justify-evenly justify-center">
                <div id="darkshadow" className="flex flex-col sm:flex sm:flex-row bg-white leading-7 shadow-2xl sm:px-7 h-auto w-auto py-9 items-center text-center rounded hover:translate-y-[-4%] transition duration-500 ">
                    <div className="">
                        <img src="./src/assets/team-2.jpg" className="rounded-full w-40 h-40" />
                    </div>
                    <div className="mt-5 ml-8 text-left w-[65%]">
                        <h1 className="text-2xl font-extrabold text-blue-800 tracking-wider pb-3">{props.MM}</h1>
                        <p className="tracking-wider pb-2"><em>{props.posMM}, <strong>MM</strong></em></p>
                        <hr className="w-20 ml-20 pb-5" />
                        <p className="">Supervises, coordinates and controls inflow of customers in the company.</p>
                        <div className="flex justify-evenly items-center mt-5">
                            <img src="./src/assets/facebook.jpeg" className="w-8 h-8 rounded-full hover:cursor-pointer hover:opacity-80  hover:translate-y-[-2%] transition duration-500" />
                            <img src="./src/assets/ig.jpeg" className="w-8 h-8 rounded-full hover:cursor-pointer hover:opacity-80  hover:translate-y-[-2%] transition duration-500" />
                            <img src="./src/assets/whatsapp.png" className="w-8 h-8 rounded-full hover:cursor-pointer hover:opacity-80  hover:translate-y-[-2%] transition duration-500" />
                            <img src="./src/assets/email.png" className="w-9 h-9 rounded-full hover:cursor-pointer hover:opacity-80  hover:translate-y-[-2%] transition duration-500" />
                        </div>
                    </div>
                </div>
                <div id="darkshadow" className="flex flex-col  sm:flex sm:flex-row bg-white leading-7 shadow-2xl sm:px-7 h-auto w-auto py-9 items-center text-center rounded hover:translate-y-[-4%] transition duration-500 ">
                    <div className="">
                        <img src="./src/assets/team-3.jpg" className="rounded-full w-40 h-40" />
                    </div>
                    <div className="mt-5 ml-8 text-left w-[65%]">
                        <h1 className="text-2xl font-extrabold text-blue-800 tracking-wider pb-3">{props.AM}</h1>
                        <p className="tracking-wider pb-2"><em>{props.posAM}, <strong>AM</strong></em></p>
                        <hr className="w-20 ml-20 pb-5" />
                        <p className="">Supervises, coordinates and controls accounts and records of the company.</p>
                        <div className="flex justify-evenly items-center mt-5">
                            <img src="./src/assets/facebook.jpeg" className="w-8 h-8 rounded-full hover:cursor-pointer hover:opacity-80  hover:translate-y-[-2%] transition duration-500" />
                            <img src="./src/assets/ig.jpeg" className="w-8 h-8 rounded-full hover:cursor-pointer hover:opacity-80  hover:translate-y-[-2%] transition duration-500" />
                            <img src="./src/assets/whatsapp.png" className="w-8 h-8 rounded-full hover:cursor-pointer hover:opacity-80  hover:translate-y-[-2%] transition duration-500" />
                            <img src="./src/assets/email.png" className="w-9 h-9 rounded-full hover:cursor-pointer hover:opacity-80  hover:translate-y-[-2%] transition duration-500" />
                        </div>
                    </div>
                </div>
            </div>
            <div className="mt-14 mx-10 flex flex-col-reverse lg:flex-row sm:justify-evenly justify-center">
                <div id="darkshadow" className="flex flex-col sm:flex sm:flex-row bg-white leading-7 shadow-2xl sm:px-7 h-auto w-auto py-9 items-center text-center rounded hover:translate-y-[-4%] transition duration-500 ">
                    <div className="">
                        <img src="./src/assets/team-5.png" className="rounded-full w-40 h-40" />
                    </div>
                    <div className="mt-5 ml-8 text-left w-[65%]">
                        <h1 className="text-2xl font-extrabold text-blue-800 tracking-wider pb-3">{props.PM}</h1>
                        <p className="tracking-wider pb-2"><em>{props.posPM}, <strong>PM</strong></em></p>
                        <hr className="w-20 ml-20 pb-5" />
                        <p className="">Supervises, coordinates and controls all the projects and tasks of the company.</p>
                        <div className="flex justify-evenly items-center mt-5">
                            <img src="./src/assets/facebook.jpeg" className="w-8 h-8 rounded-full hover:cursor-pointer hover:opacity-80  hover:translate-y-[-2%] transition duration-500" />
                            <img src="./src/assets/ig.jpeg" className="w-8 h-8 rounded-full hover:cursor-pointer hover:opacity-80  hover:translate-y-[-2%] transition duration-500" />
                            <img src="./src/assets/whatsapp.png" className="w-8 h-8 rounded-full hover:cursor-pointer hover:opacity-80  hover:translate-y-[-2%] transition duration-500" />
                            <img src="./src/assets/email.png" className="w-9 h-9 rounded-full hover:cursor-pointer hover:opacity-80  hover:translate-y-[-2%] transition duration-500" />
                        </div>
                    </div>
                </div>
                <div id="darkshadow" className="flex flex-col  sm:flex sm:flex-row bg-white leading-7 shadow-2xl sm:px-7 h-auto w-auto py-9 items-center text-center rounded hover:translate-y-[-4%] transition duration-500 ">
                    <div className="">
                        <img src="./src/assets/team-6.png" className="rounded-full w-40 h-40" />
                    </div>
                    <div className="mt-5 ml-8 text-left w-[65%]">
                        <h1 className="text-2xl font-extrabold text-blue-800 tracking-wider pb-3">{props.CDO}</h1>
                        <p className="tracking-wider pb-2"><em>{props.posCDO}, <strong>CDO</strong></em></p>
                        <hr className="w-20 ml-20 pb-5" />
                        <p className="">Supervises, coordinates and enforce all laws and rules both in and out of the company.</p>
                        <div className="flex justify-evenly items-center mt-5">
                            <img src="./src/assets/facebook.jpeg" className="w-8 h-8 rounded-full hover:cursor-pointer hover:opacity-80  hover:translate-y-[-2%] transition duration-500" />
                            <img src="./src/assets/ig.jpeg" className="w-8 h-8 rounded-full hover:cursor-pointer hover:opacity-80  hover:translate-y-[-2%] transition duration-500" />
                            <img src="./src/assets/whatsapp.png" className="w-8 h-8 rounded-full hover:cursor-pointer hover:opacity-80  hover:translate-y-[-2%] transition duration-500" />
                            <img src="./src/assets/email.png" className="w-9 h-9 rounded-full hover:cursor-pointer hover:opacity-80  hover:translate-y-[-2%] transition duration-500" />
                        </div>
                    </div>
                </div>
            </div>
        </section>
      
      )
  }
  
  
  export default Team