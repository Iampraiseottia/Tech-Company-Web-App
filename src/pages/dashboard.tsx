// import { AiOutlineClose } from "react-icons/ai"
import { useState } from "react"
import { FaChalkboardTeacher, FaCloud, FaHome, FaReceipt, FaPray, FaSignOutAlt, FaStore} from "react-icons/fa"
import { useNavigate } from "react-router-dom";

const Dashboard = () => {

  const [dashboardMain, setDashboardMain] = useState(true);

  const dashboardDisplay = () => {
    setDashboardMain(true);
    setDevEnvironment(false);
    setCloudComEnv(false);
    setDigitalPayEnv(false);
    setEComEnv(false);
    setDataAnaEnv(false);
    setStreamEnv(false);
    setAllTrans(false);
  }

  const [popupVisibility, setPopupVisibility] = useState(false);

  const openPopup = () => {
    setPopupVisibility(true);
  }

  const closePopup = () => {
    setPopupVisibility(false)
  }

  const navigate = useNavigate();

  const [devEnvironment, setDevEnvironment] = useState(false);

  const displayAppDev = () => {
    setDevEnvironment(true);
    setDashboardMain(false);
    setEComEnv(false);
    setCloudComEnv(false);
    setDigitalPayEnv(false);
    setDataAnaEnv(false);
    setStreamEnv(false);
    setAllTrans(false);
  }

  const [cloudComEnv, setCloudComEnv] = useState(false);

  const disCloud = () => {
    setCloudComEnv(true);
    setDashboardMain(false);
    setEComEnv(false);
    setDataAnaEnv(false);
    setDevEnvironment(false);
    setDigitalPayEnv(false);
    setAllTrans(false);
  }


  const [digitalPayEnv, setDigitalPayEnv] = useState(false);

  const disDigPay = () => {
    setDigitalPayEnv(true);
    setCloudComEnv(false);
    setDashboardMain(false);
    setDevEnvironment(false);
    setEComEnv(false);
    setDataAnaEnv(false);
    setStreamEnv(false);
    setAllTrans(false);
  }


  const [eComEnv, setEComEnv] = useState(false);

  const disECom = () => {
    setEComEnv(true);
    setCloudComEnv(false);
    setDashboardMain(false);
    setDevEnvironment(false);
    setDigitalPayEnv(false);
    setStreamEnv(false);
    setDataAnaEnv(false);
    setAllTrans(false);
  }

  const [dataAnaEnv, setDataAnaEnv] = useState(false);

  const disDataAna = () => {
    setDataAnaEnv(true);
    setEComEnv(false);
    setCloudComEnv(false);
    setDashboardMain(false);
    setDevEnvironment(false);
    setDigitalPayEnv(false);
    setStreamEnv(false);
  }

  const [streamEnv, setStreamEnv] = useState(false);

  const disStream = () => {
    setStreamEnv(true);
    setDataAnaEnv(false);
    setEComEnv(false);
    setCloudComEnv(false);
    setDashboardMain(false);
    setDevEnvironment(false);
    setDigitalPayEnv(false);
    setAllTrans(false);
  }

  const [allTrans, setAllTrans] = useState(false);

  const disAllTrans = () => {
    setAllTrans(true);
    setStreamEnv(false);
    setDataAnaEnv(false);
    setEComEnv(false);
    setCloudComEnv(false);
    setDashboardMain(false);
    setDevEnvironment(false);
    setDigitalPayEnv(false);
  }

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
            <li className=" hover:opacity-80 ease-in-out flex items-center justify-center text-orange-400" onClick={dashboardDisplay}> <FaHome size={24} /><a href="#" className=" font-extrabold tracking-widest ml-2 mt-1">Dashboard</a></li>
            <li className=" hover:opacity-80 ease-in-out flex items-center mt-2 justify-center" onClick={displayAppDev}> <FaChalkboardTeacher size={24} /><a href="#" className=" font-extrabold tracking-widest ml-2 mt-1">App Development</a></li>
            <li className=" hover:opacity-80 ease-in-out flex items-center justify-center" onClick={disCloud}> <FaCloud size={24} /><a href="#" className=" font-extrabold tracking-widest ml-2 mt-1">Cloud Computing</a></li>
            <li className=" hover:opacity-80 ease-in-out flex items-center justify-center" onClick={disDigPay}> <FaPray size={24} /><a href="#" className=" font-extrabold tracking-widest ml-2 mt-1">Digital Payments</a></li>
            <li className=" hover:opacity-80 ease-in-out flex items-center justify-center" onClick={disECom}> <FaStore size={24} /><a href="#" className=" font-extrabold tracking-widest ml-2 mt-1">E-commerce</a></li>
            <li className=" hover:opacity-80 ease-in-out flex items-center justify-center" onClick={disDataAna}> <FaCloud size={24} /><a href="#" className=" font-extrabold tracking-widest ml-2 mt-1">Data Analysis</a></li>
            <li className=" hover:opacity-80 ease-in-out flex items-center justify-center" onClick={disStream}> <FaPray size={24} /><a href="#" className=" font-extrabold tracking-widest ml-2 mt-1">Streaming</a></li>
            <li className=" hover:opacity-80 ease-in-out flex items-center justify-center mt-5" onClick={disAllTrans}> <FaReceipt size={24} /><a href="#" className=" font-extrabold tracking-widest ml-2 mt-1">All Transactions</a></li>
            <button className=" ml-12 mt-6 h-auto w-auto bg-white text-blue-700 px-12 rounded cursor-pointer hover:opacity-90 ease-in-out  text-xl font-extrabold py-2 flex items-center justify-center " onClick={openPopup}><FaSignOutAlt className=" mr-2" /> Logout</button>
          </ul>
        </div>

         {/* MAIN CONTENT DASHBOARD  */}
        {dashboardMain && (
          <div className=" ml-96 mr-5 pt-12">
          Dashboaed: Lorem ipsum dolor sit amet consectetur, adipisicing elit. Explicabo quam voluptatum sint ipsum praesentium unde quibusdam earum facilis perspiciatis labore, magni iste blanditiis. Vel ea eaque ipsum corrupti nobis impedit.

        </div>
        )}


        {/* LOGOUT POPUP  */}
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


        {/* APPLICATION DEVELOPMENT MAIN ENVIRONMENT  */}
        {devEnvironment && (
          <div className=" ml-96 pt-14">
            Application Development
          </div>
        )}



        {/* CLOUD COMPUTING MAIN ENVIRONMENT  */}
       {cloudComEnv && (
          <div className=" ml-96 pt-14">
            CLOud Computing
          </div>
        )}


         {/* Digital Payments MAIN ENVIRONMENT  */}
       {digitalPayEnv && (
          <div className=" ml-96 pt-14">
            Digital Payments
          </div>
        )}


         {/* E-Commerce MAIN ENVIRONMENT  */}
       {eComEnv && (
          <div className=" ml-96 pt-14">
            E-Commerce
          </div>
        )}


        {/*Data Analysis MAIN ENVIRONMENT  */}
       {dataAnaEnv && (
          <div className=" ml-96 pt-14">
           Data Analysis
          </div>
        )}


        {/* Streaming MAIN ENVIRONMENT  */}
       {streamEnv && (
          <div className=" ml-96 pt-14">
            Streaming
          </div>
        )}

         {/* All Transactions MAIN ENVIRONMENT  */}
       {allTrans && (
          <div className=" ml-96 pt-14">
            All Transactions
          </div>
        )}

      </section>
    )
  }
  
  export default Dashboard
  