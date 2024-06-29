// import { AiOutlineClose } from "react-icons/ai"
import { FaHome } from "react-icons/fa"

const Dashboard = () => {

    return (
      <section className=" bg-slate-200 h-[100vh]">
        <div id="sidebar" className=" w-[23%] text-center px-5 py-10 leading-10 h-[100vh] bg-[#114db3] text-white ">
          <div className="">
            <div className="flex items-center justify-center">
              <img src="./src/assets/companyLogo.png" className=" w-20 h-20 rounded-full " /> 
              <span className=" font-extrabold tracking-widest text-2xl ml-3">OTTIATECH</span>
            </div>
            {/* <AiOutlineClose size={40} /> */}
          </div>

          <ul className=" mt-8">
            <li className="flex items-center justify-center"> <FaHome size={24} /><a href="#" className=" font-extrabold tracking-widest ml-2 mt-1">HOME</a></li>
          </ul>
        </div>
        <div id="main-content"></div>
      </section>
    )
  }
  
  export default Dashboard
  