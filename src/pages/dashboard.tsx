// import { AiOutlineClose } from "react-icons/ai"
import { FaChalkboardTeacher, FaCloud, FaHome, FaOutdent, FaPray, FaSignOutAlt, FaStore} from "react-icons/fa"

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

          <ul className=" mt-5">
            <li className=" hover:opacity-80 ease-in-out flex items-center justify-center text-orange-400"> <FaHome size={24} /><a href="#" className=" font-extrabold tracking-widest ml-2 mt-1">Dashboard</a></li>
            <li className=" hover:opacity-80 ease-in-out flex items-center mt-2 justify-center"> <FaChalkboardTeacher size={24} /><a href="#" className=" font-extrabold tracking-widest ml-2 mt-1">App Development</a></li>
            <li className=" hover:opacity-80 ease-in-out flex items-center justify-center"> <FaCloud size={24} /><a href="#" className=" font-extrabold tracking-widest ml-2 mt-1">Cloud Computing</a></li>
            <li className=" hover:opacity-80 ease-in-out flex items-center justify-center"> <FaPray size={24} /><a href="#" className=" font-extrabold tracking-widest ml-2 mt-1">Digital Payments</a></li>
            <li className=" hover:opacity-80 ease-in-out flex items-center justify-center"> <FaStore size={24} /><a href="#" className=" font-extrabold tracking-widest ml-2 mt-1">E-commerce</a></li>
            <li className=" hover:opacity-80 ease-in-out flex items-center justify-center"> <FaCloud size={24} /><a href="#" className=" font-extrabold tracking-widest ml-2 mt-1">Data Analysis</a></li>
            <li className=" hover:opacity-80 ease-in-out flex items-center justify-center"> <FaPray size={24} /><a href="#" className=" font-extrabold tracking-widest ml-2 mt-1">Streaming</a></li>
            <li className=" hover:opacity-80 ease-in-out flex items-center justify-center mt-5"> <FaStore size={24} /><a href="#" className=" font-extrabold tracking-widest ml-2 mt-1">All Transactions</a></li>
            <button className=" ml-12 mt-6 h-auto w-auto bg-white text-blue-700 px-12 rounded cursor-pointer hover:opacity-90 ease-in-out  text-xl font-extrabold py-2 flex items-center justify-center "><FaSignOutAlt className=" mr-2" /> Logout</button>
          </ul>
        </div>
        <div id="main-content"></div>
      </section>
    )
  }
  
  export default Dashboard
  