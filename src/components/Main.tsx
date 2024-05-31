import { useNavigate } from "react-router-dom"

const Main = (props) => {

  const navigate = useNavigate();

  return (
    <section id='main' className="items-center mt-[134px]  h-auto pt-44 pb-16 px-4 sm:px-6 lg:px-10 text-white flex flex-col lg:flex-col justify-between">
     <div>
       <h1 className="text-center font-bold text-3xl sm:text-4xl lg:text-5xl leading-[1.3] tracking-wide">Your Online Presence Is Secure With {props.comName}</h1>
        <p className="text-[gold] text-center mt-14 mb-10 text-3xl lg:text-[25px] sm:text-xl">Ottiatech ensures your satisfaction while providing top-notch services at a very reliable rate.</p>
     </div>
      <div className="mt-10 flex flex-col sm:flex-row items-center">
        <button className="bg-[#0AB9FD] text-xl py-3 px-6 sm:py-4 sm:px-7 rounded mb-4 sm:mb-0 mr-0 sm:mr-4 hover:opacity-90 transition duration-300 ease-in-out w-40" onClick={() => navigate('/register')}>{props.register}</button>
        <button className="bg-[#0AB9FD] text-xl py-3 px-6 sm:py-4 sm:px-9  rounded hover:opacity-90 transition duration-300 ease-in-out w-36" onClick={() => navigate('/login')}>{props.login}</button>
      </div>
    </section>
  )
}

export default Main