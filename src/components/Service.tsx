import {  useEffect, useState, useRef } from "react"

const Service = (props) => {

    const [isVisible, setIsVisible] = useState(false);
    const serviceRef = useRef(null);

    useEffect(() => {
        const serviceObserver = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    setIsVisible(entry.isIntersecting);
                });
            },
            {
                rootMargin: '0px',
                threshold: 0.6,
            },
        )

        if(serviceRef.current){
            serviceObserver.observe(serviceRef.current);
        }

        return () => {
            if(serviceRef.current){
                serviceObserver.unobserve(serviceRef.current);
            }
        }
    }, []);

    return (

    <section id="Service"  className="bg-slate-200 py-20 text-center " >
        
        <div ref={serviceRef} style={{opacity: isVisible ? 1 : 0 , transition: 'opacity 0.6s'}}>
            <div className="flex justify-center items-center mx-20" ref={serviceRef} style={{opacity: isVisible ? 1 : 1 , transition: 'opacity 0.5s'}}>
                <h1 className="h-15 w-12 pt-1 bg-white text-blue-800 font-bold text-[40px] mr-3">S</h1>
                <h1 className="h-15 w-12 pt-1 bg-white text-blue-800 font-bold text-[40px] mr-3">E</h1>
                <h1 className="h-15 w-12 pt-1 bg-white text-blue-800 font-bold text-[40px] mr-3">R</h1>
                <h1 className="h-15 w-12 pt-1 bg-white text-blue-800 font-bold text-[40px] mr-3">V</h1>
                <h1 className="h-15 w-12 pt-1 bg-white text-blue-800 font-bold text-[40px] mr-3">I</h1>
                <h1 className="h-15 w-12 pt-1 bg-white text-blue-800 font-bold text-[40px] mr-3">C</h1>
                <h1 className="h-15 w-12 pt-1 bg-white text-blue-800 font-bold text-[40px] mr-3">E</h1>
            </div>
            <p className="tracking-widest text-[17px] pt-16 px-7 leading-8">
                <strong>{props.comName}</strong> <i> provides a variety of top-notch services which are delivered on time, very accurate & precise, very efficient & effective and also ensure customer satisfaction</i>
            </p>
        </div>

        <div className="mt-14 mx-10 flex flex-col-reverse md:flex-row md:justify-evenly justify-center items-center">
            <div className="lg:block md:hidden mt-[-40px] mr-2 bg-white px-3 leading-7 shadow-2xl h-[300px] flex flex-col w-[365px] py-9 items-center text-center rounded hover:translate-y-[-4%] transition duration-500">
                <img src="./src/assets/service1.png" className="rounded-full w-28 h-28 lg:ml-24" />
                <h2 className="py-4 font-extrabold  text-blue-700 text">{props.AD}</h2>
                <p><i>Develop the best and user friend mobile applications for Web, IOS & Android</i></p>
            </div>
            <div className="lg:block md:hidden mt-10 mr-2 bg-white px-3 leading-7 shadow-2xl h-[300px] mb-20  flex flex-col w-[365px] py-9 items-center text-center rounded hover:translate-y-[-4%] transition duration-500">
                <img src="./src/assets/service2.png" className="rounded-full w-28 h-28 lg:ml-24" />
                <h2 className="py-4 font-extrabold  text-blue-700 text">{props.cloud}</h2>
                <p><i>Providing platforms through the cloud, enabling remote access to cloud resources</i></p>
            </div>
            <div className="lg:block md:hidden mr-2 bg-white px-3 leading-7 mb-10 shadow-2xl h-[300px] flex flex-col w-[365px] py-9 items-center text-center rounded hover:translate-y-[-4%] transition duration-500">
                <img src="./src/assets/service5.png" className="rounded-full w-28 h-28 lg:ml-24" />
                <h2 className="py-4 font-extrabold  text-blue-700 text">{props.DP}</h2>
                <p><i>Provide secure and convenient payment solutions for online transactions</i></p>
            </div>
        </div>
        <div className="mt-14 mx-10 flex flex-col-reverse md:flex-row md:justify-evenly justify-center items-center">
            <div className="lg:block md:hidden mt-[-40px] mr-2 bg-white px-3 leading-7 shadow-2xl h-[300px] flex flex-col w-[365px] py-9 items-center text-center rounded hover:translate-y-[-4%] transition duration-500">
                <img src="./src/assets/service3.png" className="rounded-full w-28 h-28 lg:ml-24" />
                <h2 className="py-4 font-extrabold  text-blue-700 text">{props.EC}</h2>
                <p><i>Offering online platform for buying and selling various products & services</i></p>
            </div>
            <div className="lg:block md:hidden mt-10 mr-2 bg-white px-3 leading-7 shadow-2xl h-[300px] mb-20 flex flex-col w-[365px] py-9 items-center text-center rounded hover:translate-y-[-4%] transition duration-500">
                <img src="./src/assets/service4.png" className="rounded-full w-28 h-28 lg:ml-24" />
                <h2 className="py-4 font-extrabold  text-blue-700 text">{props.data}</h2>
                <p><i>Offering tools for collecting, analysis and deriving insights from large amounts of data</i></p>
            </div>
            <div className="lg:block md:hidden mr-2 bg-white px-3 leading-7 shadow-2xl h-[300px] mb-10 flex flex-col w-[365px] py-9 items-center text-center rounded hover:translate-y-[-4%] transition duration-500">
                <img src="./src/assets/service6.jpg" className="rounded-full w-28 h-28 lg:ml-24" />
                <h2 className="py-4 font-extrabold  text-blue-700 text">{props.stream}</h2>
                <p><i>Offering platforms for streaming and delivering digital media content such as movies.</i></p>
            </div>
        </div>


        <div id="service-try" className="mt-14 justify-evenly items-center px-3 hidden">
            <div className="lg:hidden mt-[-40px] mr-2 bg-white px-3 leading-7 shadow-2xl h-[300px] flex flex-col w-[365px] py-9 items-center text-center rounded hover:translate-y-[-4%] transition duration-500">
                <img src="./src/assets/service1.png" className="rounded-full w-28 h-28" />
                <h2 className="py-4 font-extrabold  text-blue-700 text">{props.AD}</h2>
                <p><i>Develop the best and user friend mobile applications for Web, IOS & Android</i></p>
            </div>
            <div className="lg:hidden mt-10 mr-2 bg-white px-3 leading-7 shadow-2xl h-[300px] mb-20  flex flex-col w-[365px] py-9 items-center text-center rounded hover:translate-y-[-4%] transition duration-500">
                <img src="./src/assets/service2.png" className="rounded-full w-28 h-28" />
                <h2 className="py-4 font-extrabold  text-blue-700 text">{props.cloud}</h2>
                <p><i>Providing platforms through the cloud, enabling remote access to cloud resources</i></p>
            </div>
        </div>

        <div id="service-try2" className="mt-14 justify-evenly items-center px-3 hidden">
            <div className=" lg:hidden mr-2 bg-white px-3 leading-7 mb-10 shadow-2xl h-[300px] flex flex-col w-[365px] py-9 items-center text-center rounded hover:translate-y-[-4%] transition duration-500">
                <img src="./src/assets/service5.png" className="rounded-full w-28 h-28" />
                <h2 className="py-4 font-extrabold  text-blue-700 text">{props.DP}</h2>
                <p><i>Provide secure and convenient payment solutions for online transactions</i></p>
            </div>
            <div className="lg:hidden mt-[-40px] mr-2 bg-white px-3 leading-7 shadow-2xl h-[300px] flex flex-col w-[365px] py-9 items-center text-center rounded hover:translate-y-[-4%] transition duration-500">
                <img src="./src/assets/service3.png" className="rounded-full w-28 h-28" />
                <h2 className="py-4 font-extrabold  text-blue-700 text">{props.EC} </h2>
                <p><i>Offering online platform for buying and selling various products & services</i></p>
            </div>
        </div>

        <div id="service-try3" className="mt-14 justify-evenly items-center px-3 hidden">
            <div className=" lg:hidden mt-10 mr-2 bg-white px-3 leading-7 shadow-2xl h-[300px] mb-20 flex flex-col w-[365px] py-9 items-center text-center rounded hover:translate-y-[-4%] transition duration-500">
                <img src="./src/assets/service4.png" className="rounded-full w-28 h-28" />
                <h2 className="py-4 font-extrabold  text-blue-700 text">{props.data}</h2>
                <p><i>Offering tools for collecting, analysis and deriving insights from large amounts of data</i></p>
            </div>
            <div className="lg:hidden mr-2 bg-white px-3 leading-7 shadow-2xl h-[300px] mb-10 flex flex-col w-[365px] py-9 items-center text-center rounded hover:translate-y-[-4%] transition duration-500">
                <img src="./src/assets/service6.jpg" className="rounded-full w-28 h-28" />
                <h2 className="py-4 font-extrabold  text-blue-700 text">{props.stream}</h2>
                <p><i>Offering platforms for streaming and delivering digital media content such as movies.</i></p>
            </div>
        </div>

    </section>
  )
}

export default Service