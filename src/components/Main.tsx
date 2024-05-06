
const Main = (props) => {
  return (
    <section id='main' className="items-center mt-[134px] bg-[#5491fb] h-auto pt-16 pb-16 px-4 sm:px-6 lg:px-8 text-white flex flex-col-reverse lg:flex-row justify-between">
      <div className="w-full lg:w-[55%] lg:px-7 px-12 ">
        <h1 className="font-bold text-3xl sm:text-4xl lg:text-5xl leading-[1.3] tracking-wide">Your Online Presence Is Secure With {props.comName}</h1>
        <p className="mt-6 text-black text-lg sm:text-xl">Ottiatech ensures your satisfaction while providing top-notch services at a very reliable rate.</p>
        <div className="mt-10 flex flex-col sm:flex-row items-center">
          <button className="bg-[#0AB9FD] text-xl py-3 px-6 sm:py-4 sm:px-7 rounded mb-4 sm:mb-0 mr-0 sm:mr-4 hover:opacity-90 transition duration-300 ease-in-out w-40">{props.register}</button>
          <button className="bg-[#0AB9FD] text-xl py-3 px-6 sm:py-4 sm:px-9  rounded hover:opacity-90 transition duration-300 ease-in-out w-36">{props.login}</button>
        </div>
      </div>
      <div id="mainImg" className="w-full md:w-[66%] mt-10 sm:mt-0 px-20">
        <img src="./src/assets/home right.png" id="animate-image" className="w-full "/>
      </div>
    </section>
  )
}

export default Main