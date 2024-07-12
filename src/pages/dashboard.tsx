// import { AiOutlineClose } from "react-icons/ai"
import { useState } from "react"
import { FaChalkboardTeacher, FaCloud, FaHome, FaReceipt, FaPray, FaSignOutAlt, FaStore} from "react-icons/fa"
import { useNavigate } from "react-router-dom";

const Dashboard = () => {

  const [popupVisibility, setPopupVisibility] = useState(false);

  const openPopup = () => {
    setPopupVisibility(true);
  }

  const closePopup = () => {
    setPopupVisibility(false)
  }

  const navigate = useNavigate();

    return (
      <section className=" bg-slate-200 h-[100vh] relative" >
        <div id="sidebar" className=" w-[23%] text-center px-5 py-10 leading-10 h-[100vh] bg-[#114db3] text-white fixed">
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
            <li className=" hover:opacity-80 ease-in-out flex items-center justify-center mt-5"> <FaReceipt size={24} /><a href="#" className=" font-extrabold tracking-widest ml-2 mt-1">All Transactions</a></li>
            <button className=" ml-12 mt-6 h-auto w-auto bg-white text-blue-700 px-12 rounded cursor-pointer hover:opacity-90 ease-in-out  text-xl font-extrabold py-2 flex items-center justify-center " onClick={openPopup}><FaSignOutAlt className=" mr-2" /> Logout</button>
          </ul>
        </div>

        {popupVisibility && (
          <div id="pop_up_logout" className=" w-[500px] ml-[520px] px-12 pt-[70px] bg-[#114db3] text-white rounded h-64 absolute top-44 shadow-2xl">
            <h1 className=" font-extrabold tracking-wider text-xl text-center">
              Do You Want To Log Out?
            </h1>
            <div className=" flex justify-center mt-4 items-center">
              <button className="border-[#fff]  mt-5 mr-4 mb-4 border-2  py-3 px-7 font-bold rounded-3xl hover:bg-white hover:border-white hover:opacity-90 hover:text-[#114db3] w-40" onClick={() => navigate("/home")}><a href="#"> Confirm </a></button>
              <button className="border-[#fff] mt-5 mb-4 border-2  py-3 px-7 font-bold rounded-3xl hover:bg-white hover:border-white hover:text-[#114db3] hover:opacity-90 w-40" onClick={closePopup} ><a href="#"> Cancel </a></button>
            </div>
        </div>
        )}
      </section>
    )
  }
  
  export default Dashboard
  