import { useEffect, useState } from "react"


function Eyes() {
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
    <div  data-scroll data-scroll-section  data-scroll-speed="-.4"  className="eyes w-full h-screen  ovreflow-hidden">
        <div  data-scroll  data-scroll-speed="-.7" className="w-full h-full bg-cover bg-center   flex items-center justify-center gap-10  bg-[url('https://ochi.design/wp-content/uploads/2022/05/Top-Viewbbcbv-1-scaled.jpg')]">
        <div className=" bg-zinc-100 flex justify-center items-center rounded-full  p-10 w-[300px] h-[300px] ">
        <div className="relative  w-[25vh]  rounded-full h-[25vh] bg-zinc-900">
            
            <div style={{transform:`translate(-50%,-50%) rotate(${rotate}deg) `}} className="line absolute top-1/2 left-1/2 -translate-x-[50%] -translate-y-[50%] w-full h-10  ">
            <div className="w-7 h-7 bg-zinc-100 rounded-full "></div>
            </div>
        </div>
       
        </div>
        <div className=" bg-zinc-100 flex justify-center rounded-full items-center p-10 w-[300px] h-[300px]">
        <div className="relative  w-[25vh]  rounded-full h-[25vh] bg-zinc-900">
            
        <div  style={{transform:`translate(-50%,-50%) rotate(${rotate}deg) `}} className="line absolute top-1/2 left-1/2 -translate-x-[50%] -translate-y-[50%] w-full h-10 ">
            <div className="w-7 h-7 bg-zinc-100 rounded-full "></div>
        </div>
        </div>
       
        </div>

        </div>
      
    </div>
  )
}

export default Eyes
