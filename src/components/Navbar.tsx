
const Navbar = () => {
  return (
    <section id='header' className='bg-[#37517e] flex justify-between items-center h-auto py-10 text-white px-9 fixed z-10 top-0 w-full'>
        <div className="flex items-center">   
            <img src="./src/assets/companyLogo.png" className="rounded-full h-14 w-14" />
            <h1 className='font-bold text-2xl pl-3 tracking-wider hover:select-none'>OTTIATECH</h1>
        </div>
        <nav >
            <ul className="flex items-center">
                <li><a href="#header" className="text-[gold] text-[22px] px-3 hover:opacity-80" id="Home">Home</a></li>
                <li><a href="#About" className="text-xl px-3 hover:opacity-80">About</a></li>
                <li><a href="#" className="text-xl px-3 hover:opacity-80">Service</a></li>
                <li><a href="#" className="text-xl px-3 hover:opacity-80">Team</a></li>
                <li><a href="#" className="text-xl px-3 hover:opacity-80">Testimony</a></li>
                <li><a href="#" className="text-xl px-3 mr-3 hover:opacity-80">Contact</a></li>
                <button className="border-[#47b2e4] border-2  py-3 px-7 font-bold rounded-3xl hover:bg-blue-600 hover:border-blue-600 hover:opacity-90"><a href="">Sign In</a></button>
            </ul>
        </nav>
    </section>
  )
}

export default Navbar
