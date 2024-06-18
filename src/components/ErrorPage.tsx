import React from 'react'
import { useNavigate } from 'react-router-dom'

function ErrorPage() {
    
    const navigate = useNavigate();
  
    return (

    <div>
        <h1 className=' text-2xl mt-6 ml-2 text-red-600 tracking-wider'>
            404!!! Page NOT Found
        </h1>
        <p onClick={() => {navigate("./home")}} className=' mt-1 ml-2 hover:text-blue-500 hover:underline hover:cursor-pointer'>Return To Home</p>
    </div>
  )
}

export default ErrorPage