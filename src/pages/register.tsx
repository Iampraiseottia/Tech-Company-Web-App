import { useRef, useState } from "react"
import { FaUser, FaRegAddressBook, FaPhone, FaFlag, FaLock } from "react-icons/fa"
import { useNavigate } from "react-router-dom";
import ReCAPTCHA from "react-google-recaptcha";


const SignUp = () => {

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


  const regNumber = useRef();

  const onMouseEnterNumber = () => {
    regNumber.current.focus();
  }

  const onMouseLeaveNumber = () => {
    regNumber.current.blur();
  }

  const regCountry = useRef();

  const onMouseEnterCountry = () => {
    regCountry.current.focus();
  }

  const onMouseLeaveCountry = () => {
    regCountry.current.blur();
  }

  const regPassword = useRef();

  const onMouseEnterPassword = () => {
    regPassword.current.focus();
  }

  const onMouseLeavePassword = () => {
    regPassword.current.blur();
  }


  const navigate = useNavigate();

  const [isChecked, setIsChecked] = useState(false);
  
  const handleCheckBoxChange = () => {
    setIsChecked(!isChecked)
  }


  const onChange = () => {
    console.log("Welcome");
  }


  return (
      <section className=" text-white flex justify-center items-center" id="Register">
        <div id="regMain" className=" py-4 px-10 rounded-[12px]">
          <h1 className=" text-3xl font-extrabold text-center tracking-wider">Register Here!!!</h1>
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
            <label className=" text-white text-xl font-semibold tracking-wider mr-[67px]">Number:</label>
            <input ref={regNumber} onMouseEnter={onMouseEnterNumber} onMouseLeave={onMouseLeaveNumber} className=" py-2 pl-8 pr-12 text-[15.5px] bg-transparent text-white border-2 rounded-[30px] w-[350px] focus:outline-blue-500 " type="number" placeholder="Phone Number" name="phone-number" id="NumberReg" />
            <FaPhone className=" absolute top-3 right-7" />
          </div>
          <div className=" relative mt-6 ">
            <label className=" text-white text-xl font-semibold tracking-wider mr-16">Country:</label>
            <input ref={regCountry} onMouseEnter={onMouseEnterCountry} onMouseLeave={onMouseLeaveCountry} className=" py-2 pl-8 pr-12 text-[15.5px] bg-transparent text-white border-2 rounded-[30px] w-[350px] focus:outline-blue-500 " type="text" placeholder="Country " name="country" id="CountryReg" />
            <FaFlag className=" absolute top-3 right-7" />
          </div>
          <div className=" relative mt-6 ">
            <label className=" text-white text-xl font-semibold tracking-wider mr-12">Password:</label>
            <input ref={regPassword} onMouseEnter={onMouseEnterPassword} onMouseLeave={onMouseLeavePassword} className=" py-2 pl-8 pr-12 text-[15.5px] bg-transparent text-white border-2 rounded-[30px] w-[350px] focus:outline-blue-500 " type="password" placeholder="Password " name="password" id="passwordReg" />
            <FaLock className=" absolute top-3 right-7" />
          </div>
          <ReCAPTCHA
            sitekey="6Le-SP4pAAAAAH8JmDiFy19jz0tkHzSeL7JfJg-b"
            onChange={onChange} className="mt-3"
          />
          
          <div className=" flex items-center justify-center  my-1 ">
            <input type="checkbox" checked={isChecked} onChange={handleCheckBoxChange} id="checkbox" className=" h-10 mr-2" />
            <p className=" tracking-wider text-[15.5px]">Accept <span onClick={() => {navigate("/TermsCondition")}} className=" hover:text-orange-100 hover:cursor-pointer hover:underline">Terms and Conditions </span>of OTTIATECH</p>
          </div>
          <button id="registerBtn"  className={isChecked ? "h-12 mb-2 w-[100%] text-center bg-transparent border-2 hover:bg-white hover:text-blue-700 hover:opacity-90 ease-in-out hover:border-blue-700 rounded-[6px] text-2xl font-extrabold tracking-wider" : "h-12 mb-2 w-[100%] text-center bg-transparent border-2 hover:opacity-50 ease-in-out  rounded-[6px] text-2xl font-extrabold tracking-wider opacity-50"}>REGISTER </button>
          <p className=" text-right tracking-wider text-[15.5px]">Already Have An Account. <span onClick={() => {navigate("/login")}} className=" text-[17px] hover:text-orange-100 hover:cursor-pointer hover:underline">Log In</span></p>
        </div>
      </section>
    )
  }
  
  export default SignUp
  