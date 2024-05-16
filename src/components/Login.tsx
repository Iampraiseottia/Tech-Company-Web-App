import { React, useRef, useEffect, useState} from "react";

const Login = () => {
  const [name, setName] = useState();
  const increment = useRef(1);

  useEffect(() => {
    increment.current = increment.current + 1;
  })

    return (
      <section id="Login" className="my-11 flex items-center justify-evenly ">
        <input type="text" className="h-20 w-96 border-4" onChange={e => setName(e.target.value)} />
        <div>My name is {name}</div>
        <div>It is rendered {increment.current}</div>
      </section>
    )
  }
  
  export default Login
  