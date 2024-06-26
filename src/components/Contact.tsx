import React, {useState, useEffect, useRef} from "react"

const Contact = (props) => {

    const [message, setMessage] = useState();
    const [name, setName] = useState();
    const [email, setEmail] = useState();
    const [number, setNumber] = useState();
    const [city, setCity] = useState();
    const [country, setCountry] = useState();
    const [subject, setSubject] = useState();
    const [idea, setIdea] = useState();
    const [popupVisible, setPopupVisible] = useState(false);
    const nameRef = useRef();
    const emailRef = useRef();
    const numberRef = useRef();
    const cityRef = useRef();
    const countryRef = useRef();
    const subjectRef = useRef();
    const ideaRef = useRef();
    


    const submitHandler = () => {
        setMessage('Thanks For Contacting OTTIATECH. Your Request or Worry Would Be Settled As Soon As Possible');
        setName('');
        setEmail('');
        setCity('');
        setCountry('');
        setNumber('');
        setSubject('');
        setIdea('');
        setPopupVisible(true)
    }


    const closePopup = () => {
        setPopupVisible(false)
    }

    
    useEffect(() => {
        console.log('Full Name Rendered')
    }, [name]);

    const onMouseEnterNameInput = () => {
        nameRef.current.focus();

    }

    const onMouseLeaveNameInput = () => {
        nameRef.current.blur();

    }


    useEffect(() => {
        console.log('Email Address Rendered')
    }, [email]);

    const onMouseEnterEmailInput = () => {
        emailRef.current.focus();

    }

    const onMouseLeaveEmailInput = () => {
        emailRef.current.blur();

    }


    useEffect(() => {
        console.log('City Rendered Alongside Street')
    }, [city]);

    const onMouseEnterCityInput = () => {
        cityRef.current.focus();

    }

    const onMouseLeaveCityInput = () => {
        cityRef.current.blur();

    }


    useEffect(() => {
        console.log('Phone Number Rendered Alongside Zip Code')
    }, [number]);

    const onMouseEnterNumberInput = () => {
        numberRef.current.focus();

    }

    const onMouseLeaveNumberInput = () => {
        numberRef.current.blur();

    }


    useEffect(() => {
        console.log('Subject For Contacting Rendered')
    }, [subject]);

    const onMouseEnterSubjectInput = () => {
        subjectRef.current.focus();

    }

    const onMouseLeaveSubjectInput = () => {
        subjectRef.current.blur();

    }

    useEffect(() => {
        console.log('Message Explaining Idea Rendered')
    }, [idea]);

    const onMouseEnterIdeaInput = () => {
        ideaRef.current.focus();

    }

    const onMouseLeaveIdeaInput = () => {
        ideaRef.current.blur();

    }

    useEffect(() => {
        console.log('Country Of Origin Rendered')
    }, [country]);

    const onMouseEnterCountryInput = () => {
        countryRef.current.focus();

    }

    const onMouseLeaveCountryInput = () => {
        countryRef.current.blur();

    }


    return (
        <section id="Contact" className="bg-slate-200 py-20 mt-32 text-center">
            <div className="">
                <h1 className="text-[37px] font-bold tracking-widest text-[#37517e]">
                    {props.conTitle}
                </h1>
                <div className="flex justify-center mt-2 mb-10 items-center">
                    <hr className="w-12 h-[2px] bg-slate-600" />
                    <hr className="w-16 h-1 bg-blue-700" />
                    <hr className="w-12 h-[2px] bg-slate-600" />
                </div>
            </div>
            <p className="md:px-14 tracking-widest text-[17px] pt-5 px-7 leading-8"><em><strong> We are just a message away</strong></em>. <i>Reach out to <strong>{props.comName}</strong> amazing and brilliant team and ensure your worries or doubts about these amazing platform would be put to a calm and entricking rest</i></p>
            <div className="mt-14 flex flex-col lg:flex-row lg:justify-evenly justify-evenly items-center  ">
                <div id="con-left" className="bg-white py-7 mt-14 h-[690px] mb-12 mx-6 w-[445px] md:w-[600px] lg:w-[400px] border-t-4 border-b-4 border-t-blue-700 border-b-blue-700 shadow-2xl">
                    <div className="flex px-5 justify-evenly items-center mb-6">
                        <img src="./src/assets/location.png" className="h-20 w-auto" />
                        <div className="text-left ml-2">
                            <label className="text-2xl font-bold tracking-wider text-fuchsia-950">Location:</label>
                            <br />
                            <p className="tracking-wider">{props.location} </p>
                        </div>
                    </div>
                    <div className="flex px-5 justify-around items-center mb-6 ml-[-90px]">
                        <img src="./src/assets/email-con.png" className="h-[90px] w-auto" />
                        <div className="text-left ml-[-160px] ">
                            <label className="text-2xl font-bold tracking-wider text-fuchsia-950">Email Address:</label>
                            <br />
                            <p className="tracking-wider">{props.conEmail} </p>
                        </div>
                    </div>
                    <div className="flex px-5 justify-around items-center mb-6 ml-[-90px]">
                        <img src="./src/assets/phone.png" className="h-[90px] w-auto" />
                        <div className="text-left ml-[-160px]">
                            <label className="text-2xl font-bold tracking-wider text-fuchsia-950">Phone Number:</label>
                            <br />
                            <p className="tracking-wider">{props.conNum} </p>
                        </div>
                    </div>
                    <iframe id="iframe" className="lg:w-[350px] lg:ml-6 md:w-[500px] md:ml-14 mx-8 w-96 h-72" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3979.426148631475!2d9.303791573717996!3d4.13626674629469!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x10613123b50e6ff9%3A0x5cebc748ddb3786f!2sMalingo%20Junction%20Buea!5e0!3m2!1sen!2scm!4v1711582055010!5m2!1sen!2scm" allowFullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>            
                </div>
                <div id="bigger" className="bg-white mt-14 py-7  h-auto mb-12 mx-6 w-[445px] md:w-[600px] lg:w-[550px] lg:ml-[-10px] border-t-4 border-b-4 border-t-blue-700 border-b-blue-700 shadow-2xl">
                    <div className="text-left mx-10">
                        <label className="text-xl tracking-wider leading-9">Your Full Names: <br /> <input ref={nameRef} onMouseEnter={onMouseEnterNameInput} onMouseLeave={onMouseLeaveNameInput} onChange={(e => setName(e.target.value))} type="text" name="full-name" value={name} placeholder="Full Names" id="full-name" className="border-2 border-slate-200 rounded focus:outline-blue-500  w-full h-11 px-6 py-4 text-[15px] lg:w-[494px]" /></label>
                    </div>
                    <div className="text-left mx-10 flex flex-col lg:flex-row lg:justify-between">
                        <label className="text-xl tracking-wider leading-9 mt-3">Your Email Address: <br /> <input ref={emailRef} onChange={(e => setEmail(e.target.value))} type="email" value={email} placeholder="Email Address" name="email" onMouseEnter={onMouseEnterEmailInput} onMouseLeave={onMouseLeaveEmailInput} id="email" className="lg:w-[240px] lg:mr-3 border-2 border-slate-200 rounded focus:outline-blue-500 sm:w-72 md:w-[520px]  w-full h-11 px-6 py-4 text-[15px] " /></label>
                        <label className="text-xl tracking-wider leading-9 mt-3">Your Phone Number: <br /> <input ref={numberRef} onChange={(e => setNumber(e.target.value))} onMouseEnter={onMouseEnterNumberInput} onMouseLeave={onMouseLeaveNumberInput} type="tel" value={number} placeholder="Zip Code & Phone Number" name="phone" id="phone" className="lg:w-[240px] border-2 border-slate-200 rounded focus:outline-blue-500 md:w-[520px] sm:w-72 w-full h-11 px-6 py-4 text-[15px] " /></label>
                    </div>
                    <div className="text-left mx-10 flex flex-col lg:flex-row lg:justify-between">
                        <label className="text-xl tracking-wider leading-9 mt-3">Your Street & City: <br /> <input onMouseEnter={onMouseEnterCityInput} onMouseLeave={onMouseLeaveCityInput} ref={cityRef} onChange={(e => setCity(e.target.value))} type="text" value={city} placeholder="Street & City" name="city" id="city" className="border-2 border-slate-200 md:w-[520px] rounded focus:outline-blue-500  w-full lg:w-[240px] h-11 px-6 py-4 text-[15px] sm:w-72 " /></label>
                        <label className="text-xl tracking-wider leading-9 mt-3">Your Country: <br /> 
                            <select ref={countryRef} onMouseEnter={onMouseEnterCountryInput} onMouseLeave={onMouseLeaveCountryInput} onChange={(e => setCountry(e.target.value))} name="country" id="country" className="lg:w-[240px] md:w-[520px] border-2 border-slate-200 rounded focus:outline-blue-500  w-full h-11 px-6  text-[15px] sm:w-72 ml-2" value={country}>
                                <option value="Choose Your Country" >Choose Your Country</option>
                                <option value="Canada">Canada</option>
                                <option value="Cameroon">Cameroon</option>
                                <option value="USA">USA</option>
                                <option value="Germany">Germany</option>
                                <option value="Spain">Spain</option>
                                <option value="England"></option>
                            </select>
                        </label>
                    </div>
                    <div className="text-left mx-10 mt-4">
                        <label className="text-xl tracking-wider leading-9 ">Subject: <br /> <input ref={subjectRef} onMouseEnter={onMouseEnterSubjectInput} onMouseLeave={onMouseLeaveSubjectInput} onChange={(e => setSubject(e.target.value))} value={subject} type="text" name="subject" placeholder="Subject" id="subject" className="border-2 border-slate-200 lg:w-[490px] rounded focus:outline-blue-500  w-full h-11 px-6 py-4 text-[15px]" /></label>
                    </div>
                    <div className="text-left mx-10 mt-4">
                        <textarea placeholder="                 
                        
                        message" name="message" id="message" cols="45" rows="6" ref={ideaRef} onMouseEnter={onMouseEnterIdeaInput} onMouseLeave={onMouseLeaveIdeaInput} value={idea} onChange={(e => setIdea(e.target.value))} className="border-2 border-slate-200 rounded focus:outline-blue-500  w-full px-6 py-4 text-[15px] lg:w-[490px]" ></textarea>
                    </div>
                    <button onClick={submitHandler} className="md:w-[520px] mt-8 border h-12 w-96 rounded hover:opacity-95 ease-in-out hover:cursor-pointer bg-blue-600 text-white font-extrabold text-[16.5px]">Send Message</button>
                
                    {popupVisible && (
                        <div id="popup" className=" bg-yellow-200 tracking-widest h-72 w-[750px] absolute top-[7240px] left-72 px-12 text-xl font-extrabold shadow-2xl">
                        <img src="./src/assets/popup.PNG" className=" rounded-full h-44 ml-60 mt-[-70px] mb-7" />
                        <p className="">{message}</p>
                        <button onClick={closePopup} className="h-14 mt-5 text-green-600 bg-white w-96 hover:opacity-95 ease-in-out hover:bg-green-500 hover:ease-in-out hover:text-white">Close</button>
                    </div>
                    )}
                </div>
            </div>
      </section>
    )
  }
  
  export default Contact
  