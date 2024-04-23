
const Main = () => {
  return (
    <section id='main' className="mt-[134px] bg-[#5491fb] h-auto pt-16 pb-16 px-12 text-white flex justify-between">
        <div className="w-[50%]">
          <h1 className="font-bold text-[40px] leading-[1.3] tracking-wide">Your Online Presence Is Secure With OTTIATECH </h1>
          <p className="mt-6 text-black text-xl">Ottiatech ensures your satisfaction while providing top-notch services at a very reliable rate.</p>
          <div className="mt-10 flex align-middle">
            <button className="bg-[#0AB9FD] py-4 px-7 rounded mr-20 hover:opacity-90 ease-in-out">Get Started</button>
            <button className="bg-[#0AB9FD] py-4 px-9 rounded hover:opacity-90 ease-in-out">Sign In</button>
          </div>
        </div>
        <div className="w-[48%]">
          <img src="./src/assets/home right.png" id="animate-image"/>
        </div>
    </section>
  )
}

export default Main