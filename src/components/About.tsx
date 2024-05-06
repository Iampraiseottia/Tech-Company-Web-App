
const About = (props) => {

  return (
    <section id="About" className="leading-9 my-36 text-center">
        <div className="">
            <h1 className="text-[37px] font-bold tracking-widest text-[#37517e]">
                ABOUT US
            </h1>
            <div className="flex justify-center mt-2 mb-10 items-center">
                <hr className="w-12 h-[2px] bg-slate-600" />
                <hr className="w-16 h-1 bg-blue-700" />
                <hr className="w-12 h-[2px] bg-slate-600" />
            </div>
        </div>
        <div className="mt-20 mx-5 flex flex-col-reverse lg:flex-row items-center">
            <div className="lg:w-[50%] md:mx-12 mx-6">
                <strong><b>{props.comName} </b></strong> is a <em>Giant Technology Company</em> establish in {props.establish} with it's prime founder and CEO <em><b>{props.CEO}.</b></em> These organization strive to tackle:
                <ol>
                    <li className="flex">
                        <img src="./src/assets/double tick.png" className="h-7 w-7" />
                        <br /><p>{props.cloud}, {props.SD}, {props.Intelligence}, {props.data}, {props.CS}, {props.Iot}, {props.DT}, {props.EC}, {props.HG}, and {props.RD} are just a few of the many services that <strong>{props.comName}</strong> provides.</p>
                    </li>   
                    <li className="flex">
                        <img src="./src/assets/double tick.png" className="h-7 w-7" />
                        <br /><p>These organizations offer solutions with an emphasis on innovation, scalability, and technical breakthroughs for both individuals and enterprises.</p>
                    </li>
                    <li className="flex">
                        <img src="./src/assets/double tick.png" className="h-7 w-7" />
                        <br /><p>These organizations focus on innovation, scalability, and technical breakthroughs while offering solutions to both individuals and enterprises.</p>
                    </li>
                </ol>
            </div>
            <div className="">
                <img src="./src/assets/why-us.png" className="sm:h-[440px] w-[740px]" />
            </div>
        </div>
    </section>
  )
}

export default About