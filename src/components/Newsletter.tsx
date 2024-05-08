import React, {useState, useEffect} from "react"

const Newsletter = (props) => {

  const [news, setNews] = useState('Thanks ');
  const [emailValue, setEmailValue] = useState('');
  const [popupVisible, setPopupVisible] = useState(false);

  const handleChange = (event) => {
    setEmailValue(event.target.value);
  };

  const handleSubmit = () => {
    setNews('Thank You For Subscribing ❤️');
    setEmailValue('');
    setPopupVisible(true);
  };

  const closePopup = () => {
    setPopupVisible(false);
  };


  useEffect(() => {
    console.log('Email Address On Subscription')
  }, [emailValue])


    return (
      <section id="Newsletter" className=" my-24 bg-slate-200 py-16 text-center">
        <h1 className="text-[37px] font-bold tracking-widest text-blue-800">
          {props.newsTitle}
        </h1>
        <p className="md:px-14 tracking-widest text-[17px] pt-5 px-7 leading-8"><i>Subscribe To <strong>{props.comName}</strong> To Get The Updates On Latest Developments</i></p>
        <div className="">
          <input id="newsEmail" value={emailValue} onChange={handleChange} type="email" name="email" placeholder="Email Address" className="mt-8 border-2 border-slate-200 rounded-full focus:outline-blue-500  h-14 px-10 w-96  py-4 text-[15px]" />
          <button id="submitButton" onClick={handleSubmit}  className=" mt-8 border h-14 w-60 rounded-full hover:opacity-95 ease-in-out hover:cursor-pointer bg-blue-600 text-white font-bold text-[17px] tracking-wider md:ml-[-50px]" >Subscribe</button>
        </div>        
        
         {/* Popup */}
        {popupVisible && (
          <div id="pop" className="flex items-center justify-center absolute top-[7800px] left-72 popup shadow-2xl">
            <div className="bg-white h-64 w-[680px]">
              <img src="./src/assets/popup.PNG" className=" h-40 ml-64 rounded-full mt-[-80px]" />
              <p id="letter" className="pt-6 text-xl tracking-widest mt-1 font-extrabold">{news}</p>
              <button onClick={closePopup} className=" bg-green-500 h-14 mt-8 w-96 text-xl font-bold tracking-widest hover:opacity-95 ease-in-out">Close</button>
            </div>
          </div>
        )}

      </section>
    )
  }
  
  export default Newsletter
  

