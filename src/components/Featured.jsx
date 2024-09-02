import { motion, useAnimation } from "framer-motion"


function Featured() {
    let cards=[useAnimation(),useAnimation(),useAnimation(),useAnimation()];
    const handleHoverStart=(index)=>{
        cards[index].start({y:"0"});
}
const handleHoverEnd=(index)=>{
    cards[index].start({y:"100%"});
}

  return (
    <div data-scroll  data-scroll-speed="-.2"  className="w-full h-full text-white bg-zinc-800 z-[3] rounded-tl-3xl rounded-tr-3xl">
        <div className="h-30 pt-24 text-[2vw] px-10">
            <h1>Featured projects</h1>
        </div>
        <div className="border-t-[1px] mt-10 px-10 gap-7 flex border-zinc-100">
            <motion.div onHoverStart={()=>handleHoverStart(0)} onHoverEnd={()=>handleHoverEnd(0)}  className="w-full relative">
            <h3 className="uppercase mt-12 px-6 text-[1vw]  ">Cardboard Spaceship</h3>
            <h1 className="absolute top-1/2 left-full flex overflow-hidden text-[#CDEA68] -translate-x-1/2 -translate-y-1/2 z-[9] text-8xl tracking-tighter">
            {"CARDBOARD".split("").map((item,index)=>(
               <motion.span initial={{y:"100%"}} animate={cards[0]} transition={{ease:[0.22,1,0.36,1],delay:index*.05}} className="inline-block" key={index}>{item}</motion.span>
                ))}</h1>
            <div className="w-full h-[80vh] overflow-hidden rounded-3xl mt-4  ">
           
                <img src="https://ochi.design/wp-content/uploads/2024/08/CS_Website_1-663x551.png" alt="" />
                
            </div>
            <div className="flex py-4 gap-3  px-6">
                <button  className="uppercase  rounded-full border-zinc-100 border-[1px]  text-[1vw] p-3 text-white"  >branded template</button>
                <button className="uppercase rounded-full border-zinc-100 border-[1px] text-[1vw] p-3 text-white">sales desk</button>
                <button className=" uppercase rounded-full border-zinc-100 border-[1px] text-[1vw] p-3 text-white">social media template</button>
            </div>
            </motion.div>
            <motion.div onHoverStart={()=>handleHoverStart(1)} onHoverEnd={()=>handleHoverEnd(1)}  className="w-full relative">
            <h3 className="uppercase mt-12 px-6 text-[1vw] ">ah2 & matt horn</h3>
            <h1 className="absolute top-1/2 flex overflow-hidden text-[#CDEA68] right-full translate-x-1/2 -translate-y-1/2 z-[9] text-8xl tracking-tighter">
            {"AH2".split("").map((item,index)=>(
               <motion.span initial={{y:"100%"}} animate={cards[1]} transition={{ease:[0.22,1,0.36,1],delay:index*.05}} className="inline-block" key={index}>{item}</motion.span>
                ))}</h1>
            <div className="w-full h-[80vh] rounded-3xl mt-4  overflow-hidden ">
                <img src="https://ochi.design/wp-content/uploads/2024/08/Frame-481692-1-663x551.png" alt="" />
            </div>
            <div className="flex py-4 gap-3  px-6">
                <button  className=" uppercase rounded-full border-zinc-100 border-[1px]  text-[1vw] p-3 text-white"  >pitch deckuppercase </button>
                
            </div>
            </motion.div>
            
        </div>
        <div className=" mt-3 px-10 gap-7 flex ">
            <motion.div onHoverStart={()=>handleHoverStart(2)} onHoverEnd={()=>handleHoverEnd(2)}className="w-full relative ">
            <h3 className="uppercase mt-12 px-6 text-[1vw] ">Fyde</h3>
            <h1 className="absolute top-1/2 left-full flex overflow-hidden text-[#CDEA68] -translate-x-1/2 -translate-y-1/2 z-[9] text-8xl tracking-tighter">
            {"FYDE".split("").map((item,index)=>(
                <motion.span initial={{y:"100%"}} animate={cards[2]} transition={{ease:[0.22,1,0.36,1],delay:index*.05}} className="inline-block" key={index}>{item}</motion.span>
                ))}</h1>
            <div className="w-full h-[80vh] rounded-3xl mt-4  overflow-hidden">
                
                <img src="https://ochi.design/wp-content/uploads/2023/10/Fyde_Illustration_Crypto_2-663x551.png" alt="" />
            </div>
            <div className="flex py-4 gap-3  px-6">
                <button  className="uppercase  rounded-full border-zinc-100 border-[1px]  text-[1vw] p-3 text-white"  >audit</button>
                <button className="uppercase rounded-full border-zinc-100 border-[1px] text-[1vw] p-3 text-white">sales desk</button>
                <button className=" uppercase rounded-full border-zinc-100 border-[1px] text-[1vw] p-3 text-white">copy writing</button>
            </div>
            </motion.div>
            <motion.div onHoverStart={()=>handleHoverStart(3)} onHoverEnd={()=>handleHoverEnd(3)} className="w-full relative">
            <h3 className="uppercase mt-12 px-6 text-[1vw] ">Vise</h3>
            <h1 className="absolute top-1/2 right-full flex overflow-hidden text-[#CDEA68] translate-x-1/2 -translate-y-1/2 z-[9] text-8xl tracking-tighter">
            {"VISE".split("").map((item,index)=>(
                <motion.span initial={{y:"100%"}} animate={cards[3]} transition={{ease:[0.22,1,0.36,1],delay:index*.05}} className="inline-block" key={index}>{item}</motion.span>
                ))}</h1>
            <div className="w-full h-[80vh] rounded-3xl mt-4  overflow-hidden">
                <img src="https://ochi.design/wp-content/uploads/2022/09/Vise_front2-663x551.jpg" alt="" />
            </div>
            <div className="flex py-4 gap-3  px-6">
                <button  className=" uppercase rounded-full border-zinc-100 border-[1px]  text-[1vw] p-3 text-white"  >Agency </button>
                
            </div>
            </motion.div>
            
        </div>
      
    </div>
  )
}

export default Featured
