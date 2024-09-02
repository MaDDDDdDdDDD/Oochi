
import { motion } from "framer-motion"

function Marque() {
  return (
    
    <div data-scroll data-scroll-section data-scroll-speed="-.1"  className=' w-full py-20 bg-[#004D43] rounded-tl-3xl rounded-tr-3xl'>
        <div className='text-white pr-10  border-zinc-300 border-t-[1px] border-b-[1px] flex whitespace-nowrap overflow-hidden  '>
            <motion.h1 initial={{x:"0"}} animate={{x:"-100%"}} transition={{ease:"linear",duration:10,repeat: Infinity}} className='text-[20vw] leading-none uppercase pr-10  font-semibold'>we are oochi</motion.h1>
            <motion.h1 initial={{x:"0"}} animate={{x:"-100%"}} transition={{ease:"linear",duration:10,repeat: Infinity}} className='text-[20vw] leading-none uppercase pr-10 font-semibold'>we are oochi</motion.h1>

        </div>
      
    </div>
   
  )
}

export default Marque
