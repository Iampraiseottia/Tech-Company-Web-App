import { React, useState, useEffect, useRef } from "react"

const Client = () => {

  const [isVisible, setIsVisible] = useState(false);
  const clientRef = useRef(null);

  useEffect(() => {
    const clientObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
          setIsVisible(entry.isIntersecting);
        });
      },
      {
        rootMargin: '0px',
        threshold: 0.5,
      }
    )

    if(clientRef.current){
      clientObserver.observe(clientRef.current);
    }

    return () => {
      if(clientRef.current){
        clientObserver.unobserve(clientRef.current)
      }
    }

  }, [])


  return (
    <section ref={clientRef} style={{opacity: isVisible ? 1.0 : 0, transition: 'opacity 0.5s'}} id="Client" className="my-11 flex items-center justify-evenly ">
      <img src="./src/assets/client-1.png" className="h-6 w-auto hover:h-[24.4px] hover:cursor-pointer" id="ClientImg" />
      <img src="./src/assets/client-2.png" className="h-6 w-auto hover:h-[24.4px] hover:cursor-pointer" id="ClientImg" />
      <img src="./src/assets/client-3.png" className="h-6 w-auto hover:h-[24.4px] hover:cursor-pointer" id="ClientImg" />
      <img src="./src/assets/client-4.png" className="h-6 w-auto hover:h-[24.4px] hover:cursor-pointer" id="ClientImg" />
      <img src="./src/assets/client-5.png" className="h-6 w-auto hover:h-[24.4px] hover:cursor-pointer" id="ClientImg" />
      <img src="./src/assets/client-6.png" className="h-6 w-auto hover:h-[24.4px] hover:cursor-pointer" id="ClientImg" />
    </section>
  )
}

export default Client
