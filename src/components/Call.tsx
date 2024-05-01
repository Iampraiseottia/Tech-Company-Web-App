
const Call = () => {
  return (
    <section id="call" className="bg-[#3f6ab3] pt-16 w-auto h-96 mb-10 my-12 text-white text-center">
        <h1 className="text-[40px] font-bold tracking-wider pb-10">Call To Action</h1>
        <marquee direction="left" className="text-2xl"><strong>OTTIATECH</strong> Has The Perfect Solution OF What You Are Looking For.</marquee>
        <div className="mt-10 flex flex-col sm:flex-row items-center sm:justify-center sm:pl-14">
            <button className="bg-transparent py-3 px-6 sm:py-4 sm:px-7 rounded-full mb-4 sm:mb-0 mr-0 sm:mr-8  transition duration-300 ease-in-out w-52 border-2 hover:bg-white hover:text-blue-800 hover:font-bold">Get Started</button>
            <button className="bg-transparent py-3 px-6 sm:py-4 sm:px-9 rounded-full  transition duration-300 ease-in-out w-52 border-2 hover:bg-white hover:font-bold hover:text-blue-800">Sign In</button>
        </div>
    </section>
    
    )
}

export default Call