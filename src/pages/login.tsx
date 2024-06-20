import { useRef } from "react"
import { FaUser, FaRegAddressBook, FaLock, FaGoogle, FaGithub } from "react-icons/fa"
import { useNavigate } from "react-router-dom";


const SignIn = () => {

  const regFullName = useRef();

  const onMouseEnterFullName = () => {
    regFullName.current.focus();
  }

  const onMouseLeaveFullName = () => {
    regFullName.current.blur();
  }

  const regEmail = useRef();

  const onMouseEnterEmail = () => {
    regEmail.current.focus();
  }

  const onMouseLeaveEmail = () => {
    regEmail.current.blur();
  }


  const regPassword = useRef();

  const onMouseEnterPassword = () => {
    regPassword.current.focus();
  }

  const onMouseLeavePassword = () => {
    regPassword.current.blur();
  }


  const navigate = useNavigate();


  return (
    
    <section className=" text-white flex justify-center items-center" id="login">
        <div id="loginMain" className=" py-8 px-10 rounded-[12px]">
          <h1 className=" text-3xl font-extrabold text-center tracking-wider">Sign In Here!!!</h1>
          <div className=" relative mt-6 ">
            <label className=" text-white text-xl font-semibold tracking-wider mr-12">Full Name:</label>
            <input ref={regFullName} onMouseEnter={onMouseEnterFullName} onMouseLeave={onMouseLeaveFullName} className=" py-2 pl-8 pr-12 text-[15.5px] bg-transparent text-white border-2 rounded-[30px] w-[350px] focus:outline-blue-500 " type="text" placeholder="Full Name" name="Full_name" id="Full_Name" />
            <FaUser className=" absolute top-3 right-7" />
          </div>
          <div className=" relative mt-6 ">
            <label className=" text-white text-xl font-semibold tracking-wider mr-[85px]">Email :</label>
            <input ref={regEmail} onMouseEnter={onMouseEnterEmail} onMouseLeave={onMouseLeaveEmail} className=" py-2 pl-8 pr-12 text-[15.5px] bg-transparent text-white border-2 rounded-[30px] w-[350px] focus:outline-blue-500 " type="email" placeholder="Email Address" name="email" id="emailReg " />
            <FaRegAddressBook className=" absolute top-3 right-7" />
          </div>
          <div className=" relative mt-6 ">
            <label className=" text-white text-xl font-semibold tracking-wider mr-12">Password:</label>
            <input ref={regPassword} onMouseEnter={onMouseEnterPassword} onMouseLeave={onMouseLeavePassword} className=" py-2 pl-8 pr-12 text-[15.5px] bg-transparent text-white border-2 rounded-[30px] w-[350px] focus:outline-blue-500 " type="password" placeholder="Password " name="password" id="passwordReg" />
            <FaLock className=" absolute top-3 right-7" />
          </div>
         
          <button id="loginBtn"  className="h-12 mt-5 mb-2 w-[100%] text-center bg-transparent border-2 hover:bg-white hover:text-blue-700 hover:opacity-90 ease-in-out hover:border-blue-700 rounded-[6px] text-[20px] font-extrabold tracking-wider" >LOG IN </button>
          <p className=" text-right tracking-wider text-[15.5px]">Don't Have An Account. <span onClick={() => {navigate("/register")}} className=" text-[17px] hover:text-orange-100 hover:cursor-pointer hover:underline">Get Started</span></p>
          <p className=" text-center ml-[-140px] font-bold tracking-wider text-[20px]">OR</p>
          <div className=" flex items-center justify-between px-5">
          <button id="loginBtn"  className="h-12 mt-3 mb-2 w-[100%] text-center mr-3 bg-white text-blue-700 border-2 hover:bg-transparent hover:text-white hover:opacity-90 ease-in-out hover:border-white rounded-[6px] text-[19px] font-extrabold tracking-wider relative" >Log In With <FaGoogle className=" absolute top-3 right-5" /> </button>
          <button id="loginBtn"  className="h-12 mt-3 mb-2 w-[100%] text-center bg-transparent border-2 hover:bg-white hover:text-blue-700 hover:opacity-90 ease-in-out hover:border-blue-700 rounded-[6px] text-[18px] font-extrabold tracking-wider relative" >Log In With <FaGithub className=" absolute top-3 right-5" />   </button>
          </div>
        </div>
      </section>

  )
}

export default SignIn
