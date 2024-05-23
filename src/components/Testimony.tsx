
const Testimony = (props) => {

    return (
      <section id="Testimony" className="bg-slate-200 text-center py-20 mt-32">
        <div className="flex justify-center items-center mx-20">
            <h1 className="h-15 w-12 pt-1 bg-white text-blue-800 font-bold text-[40px] mr-3">T</h1>
            <h1 className="h-15 w-12 pt-1 bg-white text-blue-800 font-bold text-[40px] mr-3">E</h1>
            <h1 className="h-15 w-12 pt-1 bg-white text-blue-800 font-bold text-[40px] mr-3">S</h1>
            <h1 className="h-15 w-12 pt-1 bg-white text-blue-800 font-bold text-[40px] mr-3">T</h1>
            <h1 className="h-15 w-12 pt-1 bg-white text-blue-800 font-bold text-[40px] mr-3">I</h1>
            <h1 className="h-15 w-12 pt-1 bg-white text-blue-800 font-bold text-[40px] mr-3">M</h1>
            <h1 className="h-15 w-12 pt-1 bg-white text-blue-800 font-bold text-[40px] mr-3">O</h1>
            <h1 className="h-15 w-12 pt-1 bg-white text-blue-800 font-bold text-[40px] mr-3">N</h1>
            <h1 className="h-15 w-12 pt-1 bg-white text-blue-800 font-bold text-[40px] mr-3">Y</h1>
        </div>
        <div className="mt-10 mx-10 flex flex-col-reverse md:flex-row md:justify-evenly justify-center items-center">
            <div className="mt-[-40px] mr-2 bg-white px-3 leading-7 shadow-2xl h-auto flex flex-col w-[365px] py-9 items-center text-center rounded hover:translate-y-[-4%] transition duration-500">
                <img src="./src/assets/service1.png" className="rounded-full w-40 h-40" />
                <h2 className="pt-5 font-extrabold  text-blue-700 text-xl pb-1">{props.tes1}</h2>
                <p className="tracking-wider pb-2"><em>{props.posGM}, {props.GMComp}</em></p>
                <p><i>WOW!!!, {props.comName} is just the best amongst all tech companies in all the services offered</i></p>
                <div className="flex justify-between items-center mt-5">
                    <img src="./src/assets/star.jpg" className="w-8 mr-2 h-8 rounded-full hover:cursor-pointer hover:opacity-80  hover:translate-y-[-2%] transition duration-500" />
                    <img src="./src/assets/star.jpg" className="w-8 mr-2 h-8 rounded-full hover:cursor-pointer hover:opacity-80  hover:translate-y-[-2%] transition duration-500" />
                    <img src="./src/assets/star.jpg" className="w-8 mr-2 h-8 rounded-full hover:cursor-pointer hover:opacity-80  hover:translate-y-[-2%] transition duration-500" />
                    <img src="./src/assets/star.jpg" className="w-9 mr-2 h-9 rounded-full hover:cursor-pointer hover:opacity-80  hover:translate-y-[-2%] transition duration-500" />
                    <img src="./src/assets/star2.png" className="w-9 mr-2 h-9 rounded-full hover:cursor-pointer hover:opacity-80  hover:translate-y-[-2%] transition duration-500" />
                </div>
            </div>
            <div className="mt-10 mr-2 bg-white px-3 leading-7 shadow-2xl h-auto mb-20  flex flex-col w-[365px] py-9 items-center text-center rounded hover:translate-y-[-4%] transition duration-500">
                <img src="./src/assets/service2.png" className="rounded-full w-40 h-40" />
                <h2 className="pt-5 pb-1 font-extrabold  text-blue-700 text-xl">{props.tes2}</h2>
                <p className="tracking-wider pb-2"><em>{props.posAM} {props.AmComp}</em></p>
                <p><i>{props.comName} is a pure definition of top-notch & most essentially customer satisfaction</i></p>
                <div className="flex justify-evenly items-center mt-5">
                    <img src="./src/assets/star.jpg" className="w-8 mr-2 h-8 rounded-full hover:cursor-pointer hover:opacity-80  hover:translate-y-[-2%] transition duration-500" />
                    <img src="./src/assets/star.jpg" className="w-8 mr-2 h-8 rounded-full hover:cursor-pointer hover:opacity-80  hover:translate-y-[-2%] transition duration-500" />
                    <img src="./src/assets/star.jpg" className="w-8 mr-2 h-8 rounded-full hover:cursor-pointer hover:opacity-80  hover:translate-y-[-2%] transition duration-500" />
                    <img src="./src/assets/star.jpg" className="w-9 mr-2 h-9 rounded-full hover:cursor-pointer hover:opacity-80  hover:translate-y-[-2%] transition duration-500" />
                    <img src="./src/assets/star.jpg" className="w-9 mr-2 h-9 rounded-full hover:cursor-pointer hover:opacity-80  hover:translate-y-[-2%] transition duration-500" />
                </div>
            </div>
            <div className="mr-2 bg-white px-3 leading-7 mb-10 shadow-2xl h-auto flex flex-col w-[365px] py-9 items-center text-center rounded hover:translate-y-[-4%] transition duration-500">
                <img src="./src/assets/service5.png" className="rounded-full w-40 h-40" />
                <h2 className="pt-5 pb-1 font-extrabold  text-blue-700 text-xl">{props.tes3}</h2>
                <p className="tracking-wider pb-2"><em>{props.posHM}, {props.HMComp}</em></p>
                <p><i>Fantabulous!, {props.comName} is the most accurate and reliable tech company out there</i></p>
                <div className="flex justify-evenly items-center mt-5">
                    <img src="./src/assets/star.jpg" className="w-8 mr-2 h-8 rounded-full hover:cursor-pointer hover:opacity-80  hover:translate-y-[-2%] transition duration-500" />
                    <img src="./src/assets/star.jpg" className="w-8 mr-2 h-8 rounded-full hover:cursor-pointer hover:opacity-80  hover:translate-y-[-2%] transition duration-500" />
                    <img src="./src/assets/star.jpg" className="w-8 mr-2 h-8 rounded-full hover:cursor-pointer hover:opacity-80  hover:translate-y-[-2%] transition duration-500" />
                    <img src="./src/assets/star2.png" className="w-9 mr-2 h-9 rounded-full hover:cursor-pointer hover:opacity-80  hover:translate-y-[-2%] transition duration-500" />
                    <img src="./src/assets/star2.png" className="w-9 mr-2 h-9 rounded-full hover:cursor-pointer hover:opacity-80  hover:translate-y-[-2%] transition duration-500" />
                </div>
            </div>
        </div>

      </section>
    )
  }
  
  export default Testimony
  