import { motion } from "framer-motion";
import { FaLongArrowAltUp } from "react-icons/fa";

function LandingPage() {
  
  return (
    <div data-scroll data-scroll-section data-scroll-speed="-.5" className=" w-full h-screen bg-stone-900 pt-1 text-white ">
        <div className="textstructure mt-48  ">
        <div className="masker px-14 ">
              {["we create","eye opening","presentations"].map((item,index)=>(
                <div  key={index} className="flex gap-3 " >
                {index===1 && (<motion.div initial={{width: 0}} animate={{width:"6vw"}} transition={{ease:[0.76,0,0.24,1],duration:1}} className="w-[6vw] h-[3vw] relative mt-0.5 bg-red-500 bg-[url('https://i.pinimg.com/736x/b5/27/1a/b5271a15f7498b3c1248e3fc14d5cd74.jpg')] bg-cover bg-center rounded-xl "></motion.div>)}
               <h1 key={index} className=" text-[3.5vw] items-center h-full font-bold uppercase leading-none">
                {item}</h1>
                </div>
               ))}
        </div>
             
        <div className="border-t-[0.5px] px-10 mt-36 flex justify-between">
                {["for public and private companies","from the first pitch to ipo"].map((item,index)=>(
                  <h3 key={index} className="mt-5 capitalize font-light text-md">{item}</h3>
                ))}
              <div className="start flex gap-2">
              <div className="rounded-full px-4 py-2 font-light text-md border-[1px] border-zinc-600 mt-3">Start The Project</div>
              <div className="rounded-full flex items-center justify-center w-10 h-10 border-[1px] border-zinc-600 mt-3"><span className="rotate-[45deg]"><FaLongArrowAltUp /></span></div>

              </div>
               
              </div>
        </div>
      
    </div>
  )
}

export default LandingPage
