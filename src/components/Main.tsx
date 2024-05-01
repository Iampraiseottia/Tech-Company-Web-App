
const Main = () => {
  return (
    <section id='main' className=" mt-[134px] bg-[#5491fb] h-auto pt-16 pb-16 px-4 sm:px-6 lg:px-8 text-white flex flex-col-reverse sm:flex-row justify-between">
      <div className="w-full sm:w-[55%] px-4 ">
        <h1 className="font-bold text-3xl sm:text-4xl lg:text-5xl leading-[1.3] tracking-wide">Your Online Presence Is Secure With OTTIATECH</h1>
        <p className="mt-6 text-black text-lg sm:text-xl">Ottiatech ensures your satisfaction while providing top-notch services at a very reliable rate.</p>
        <div className="mt-10 flex flex-col sm:flex-row items-center">
          <button className="bg-[#0AB9FD] py-3 px-6 sm:py-4 sm:px-7 rounded mb-4 sm:mb-0 mr-0 sm:mr-4 hover:opacity-90 transition duration-300 ease-in-out w-36">Get Started</button>
          <button className="bg-[#0AB9FD] py-3 px-6 sm:py-4 sm:px-9  rounded hover:opacity-90 transition duration-300 ease-in-out w-36">Sign In</button>
        </div>
      </div>
      <div className="w-full sm:w-[46%] mt-10 sm:mt-0 px-6">
        <img src="./src/assets/home right.png" id="animate-image" className="w-full" alt="Right Image"/>
      </div>
    </section>
  )
}

export default Main