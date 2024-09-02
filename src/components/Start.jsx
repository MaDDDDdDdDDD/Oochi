import { useEffect,useState } from "react";

function Start() {
  let [rotate,setRotate]=useState(0);
  useEffect(()=>{
      window.addEventListener("mousemove",(e)=>{
          let mouseX =e.clientX;
          let mouseY =e.clientY;

          let deltaX=mouseX-window.innerWidth/2;
          let deltaY=mouseY-window.innerHeight/2;

          var angle=Math.atan2(deltaY, deltaX)*(180/Math.PI);
          setRotate(angle-180);

      })
  })
  return (
    <div data-scroll  data-scroll-speed="-.2"  className="w-full h-full py-20  bg-[#CDEA68] rounded-tl-3xl rounded-tr-3xl">
      <div className=" w-full relative">
        <div className="z-[8] ">
      {["READY","TO START","THE PROJECT?"].map((item,index)=>(
        <div key={index} className=" w-full relative">
        <h1 key={index} className={`font-bold tracking-tighter text-[12vw] ${index==0 && "ml-[32vw]" } ${index==1 && "ml-[25vw]" } ${index==2 && "ml-[10vw]" }` }>{item}</h1>
         </div>
      ))}
      </div>
       <div className="w-full h-full bg-cover bg-center absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 flex items-center z-[9] justify-center gap-10">
       <div className=" bg-zinc-100 flex justify-center items-center rounded-full  p-10 w-[170px] h-[170px] ">
        <div className="relative  w-[15vh]  rounded-full h-[15vh] bg-zinc-900">
            
            <div style={{transform:`translate(-50%,-50%) rotate(${rotate}deg) `}} className="line absolute top-1/2 left-1/2 -translate-x-[50%] -translate-y-[50%] w-full h-10  ">
            <div className="w-5 h-5 bg-zinc-100 rounded-full "></div>
            </div>
        </div>
       
        </div>
        <div className=" bg-zinc-100 flex justify-center rounded-full items-center p-10 w-[170px] h-[170px]">
        <div className="relative  w-[15vh]  rounded-full h-[15vh] bg-zinc-900">
            
        <div  style={{transform:`translate(-50%,-50%) rotate(${rotate}deg) `}} className="line absolute top-1/2 left-1/2 -translate-x-[50%] -translate-y-[50%] w-full h-10 ">
            <div className="w-5 h-5 bg-zinc-100 rounded-full "></div>
        </div>
        </div>
       
        </div>
      </div> 
      <div className="absolute flex left-1/2 -translate-x-1/2 ">
      <div className="uppercase items-center p-4 cursor-pointer bg-zinc-900 text-white flex text-[1vw] border-[1px] border-zinc-900 rounded-full p-3">Start the project <div className="w-2 h-2 ml-12 bg-zinc-100 rounded-full"></div></div>

      </div>
      </div>
      
    </div>
  )
}

export default Start
