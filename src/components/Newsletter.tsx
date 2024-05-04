
const Newsletter = () => {

    return (
      <section id="Newsletter" className=" my-24 bg-slate-200 py-16 text-center">
        <h1 className="text-[37px] font-bold tracking-widest text-blue-800">
          Join Our Newsletter ❤️
        </h1>
        <p className="md:px-14 tracking-widest text-[17px] pt-5 px-7 leading-8">Subscribe To <i><strong>Ottiatech</strong> To Get The Updates On Latest Developments</i></p>
        <div className="">
          <input type="email" name="email" placeholder="Email Address" className="mt-8 border-2 border-slate-200 rounded-full focus:outline-blue-500  h-14 px-10 w-96  py-4 text-[15px]" />
          <button className=" mt-8 border h-14 w-60 rounded-full hover:opacity-95 ease-in-out hover:cursor-pointer bg-blue-600 text-white font-bold text-[17px] tracking-wider md:ml-[-50px]">Send Message</button>
        </div>
      </section>
    )
  }
  
  export default Newsletter
  