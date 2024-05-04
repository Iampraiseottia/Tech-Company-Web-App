
const Contact = () => {

    return (
        <section id="Team" className="bg-slate-200 py-20 mt-32 text-center">
            <div className="">
                <h1 className="text-[37px] font-bold tracking-widest text-[#37517e]">
                    CONTACT US
                </h1>
                <div className="flex justify-center mt-2 mb-10 items-center">
                    <hr className="w-12 h-[2px] bg-slate-600" />
                    <hr className="w-16 h-1 bg-blue-700" />
                    <hr className="w-12 h-[2px] bg-slate-600" />
                </div>
            </div>
            <p className="tracking-widest text-[17px] pt-5 px-7 leading-8"><em><strong> We are just a message away</strong></em>. <i>Reach out to <strong>Ottiatech</strong> amazing and brilliant taem and ensure your worries or doubts about these amazing platform would be put to a calm and entricking rest</i></p>
            <div className="mt-14 flex justify-evenly items-center  ">
                <div className="bg-white py-7 mt-14 h-[690px] mb-12 mx-6 w-[445px] border-t-4 border-b-4 border-t-blue-700 border-b-blue-700 shadow-2xl">
                    <div className="flex px-5 justify-evenly items-center mb-6">
                        <img src="./src/assets/location.png" className="h-20 w-auto" />
                        <div className="text-left ml-2">
                            <label className="text-2xl font-bold tracking-wider text-fuchsia-950">Location:</label>
                            <br />
                            <p className="tracking-wider">Untared Malingo, Buea, Southwest, Cameroon</p>
                        </div>
                    </div>
                    <div className="flex px-5 justify-around items-center mb-6 ml-[-90px]">
                        <img src="./src/assets/email-con.png" className="h-[90px] w-auto" />
                        <div className="text-left ml-[-160px] ">
                            <label className="text-2xl font-bold tracking-wider text-fuchsia-950">Email Address:</label>
                            <br />
                            <p className="tracking-wider">ottiapraise50@gmail.com</p>
                        </div>
                    </div>
                    <div className="flex px-5 justify-around items-center mb-6 ml-[-90px]">
                        <img src="./src/assets/phone.png" className="h-[90px] w-auto" />
                        <div className="text-left ml-[-160px]">
                            <label className="text-2xl font-bold tracking-wider text-fuchsia-950">Phone Number:</label>
                            <br />
                            <p className="tracking-wider">+237 682 394 856</p>
                        </div>
                    </div>
                    <iframe className="mx-8 w-96 h-72" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3979.426148631475!2d9.303791573717996!3d4.13626674629469!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x10613123b50e6ff9%3A0x5cebc748ddb3786f!2sMalingo%20Junction%20Buea!5e0!3m2!1sen!2scm!4v1711582055010!5m2!1sen!2scm" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>            
                </div>
                <div className="bg-white mt-14 py-7  h-auto mb-12 mx-6  lg:w-[70%] w-[445px] border-t-4 border-b-4 border-t-blue-700 border-b-blue-700 shadow-2xl">
                    <div className="text-left mx-10">
                        <label className="text-xl tracking-wider leading-9">Your Full Names: <br /> <input type="text" name="full-name" placeholder="Full Names" id="full-name" className="border-2 border-slate-200 rounded focus:outline-blue-500  w-full h-11 px-6 py-4 text-[15px] " /></label>
                    </div>
                    <div className="text-left mx-10 flex flex-col sm:flex-row sm:justify-between">
                        <label className="text-xl tracking-wider leading-9 mt-3">Your Email Address: <br /> <input type="email" placeholder="Email Address" name="email" id="email" className="border-2 border-slate-200 rounded focus:outline-blue-500 sm:w-72  w-full h-11 px-6 py-4 text-[15px] " /></label>
                        <label className="text-xl tracking-wider leading-9 mt-3">Your Phone Number: <br /> <input type="tel" placeholder="Zip Code & Phone Number" name="phone" id="phone" className="border-2 border-slate-200 rounded focus:outline-blue-500 sm:w-72 w-full h-11 px-6 py-4 text-[15px] " /></label>
                    </div>
                    <div className="text-left mx-10 flex flex-col sm:flex-row sm:justify-between">
                        <label className="text-xl tracking-wider leading-9 mt-3">Your Street & City: <br /> <input type="text" placeholder="Street & City" name="city" id="city" className="border-2 border-slate-200 rounded focus:outline-blue-500  w-full h-11 px-6 py-4 text-[15px] sm:w-72 " /></label>
                        <label className="text-xl tracking-wider leading-9 mt-3">Your Country: <br /> 
                            <select name="country" id="country" className="border-2 border-slate-200 rounded focus:outline-blue-500  w-full h-11 px-6  text-[15px] sm:w-72 ml-2">
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
                        <label className="text-xl tracking-wider leading-9">Subject: <br /> <input type="text" name="subject" placeholder="Subject" id="subject" className="border-2 border-slate-200 rounded focus:outline-blue-500  w-full h-11 px-6 py-4 text-[15px]" /></label>
                    </div>
                    <div className="text-left mx-10 mt-4">
                        <textarea placeholder="                 
                        
                        message" name="message" id="message" cols="45" rows="6" className="border-2 border-slate-200 rounded focus:outline-blue-500  w-full px-6 py-4 text-[15px]" ></textarea>
                    </div>
                    <button className="mt-8 border h-12 w-96 rounded hover:opacity-95 ease-in-out hover:cursor-pointer bg-blue-600 text-white font-extrabold text-[16.5px]">Send Message</button>
                </div>
            </div>
      </section>
    )
  }
  
  export default Contact
  