import { React, useRef, useEffect, useState, useReducer} from "react";

const Login = () => {
  // const [name, setName] = useState();
  // const increment = useRef(1);

  // useEffect(() => {
  //   increment.current = increment.current + 1;
  // })

  function reducer(){

  }

  const [] = useReducer(reducer, {count: 0});

  const [count, setCount] = useState(0);


  function increment() {
    setCount(prevCount => prevCount + 1);
  }

  const decrement = () => {
    setCount(prevCount => prevCount - 1);
  }
    return (
      <section id="Login" className="my-11 flex items-center justify-evenly ">
        {/* <input type="text" className="h-20 w-96 border-4" onChange={e => setName(e.target.value)} />
        <div>My name is {name}</div>
        <div>It is rendered {increment.current}</div> */}

  <button className=" font-extrabold text-[50px] h-24 w-48 bg-gray-500 text-white" onClick={decrement}>-</button>
  <p className=" font-extrabold text-[45px] ">{count}</p>
  <button className=" font-extrabold text-[50px] h-24 w-48 bg-gray-500 text-white" onClick={increment}>+</button>

      </section>
    )
  }
  
  export default Login
  