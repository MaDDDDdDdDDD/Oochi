import { FaLongArrowAltUp } from "react-icons/fa";

function About() {
  return (
    <div  data-scroll  data-scroll-speed="-.1" className="w-full  py-20   bg-[#CDEA68]   rounded-tl-3xl rounded-tr-3xl">
        <div className=" px-10 ">
            <p className="text-[50px] leading-none">Ochi is a strategic presentation agency for forward-thinking businesses that need to <span className=" underline underline-offset-1 ">raise funds</span>, <span className=" underline underline-offset-1 ">sell prod­ucts</span>, <span className=" underline underline-offset-1 ">ex­plain com­plex ideas</span>, and <span className=" underline underline-offset-1 ">hire great peo­ple</span>.</p>

        </div>
        <div className="border-t-[1px] border-zinc-900 w-full font-md flex p-10  mt-16">
            <div className=" px-5 w-1/2">
            <h1 className="font-semibold text-[3.5vw]">Our Approach:</h1>
            <button className="bg-zinc-700 rounded-full flex items-center text-[1.1vw] gap-10 uppercase text-white px-5 mt-3 py-4">Read More 
                <div className="w-2 h-2 bg-zinc-100 rounded-full"></div>
            </button>
            </div>
            <div className="w-1/2 h-[70vh]  overflow-hidden  rounded-3xl ">
            <img src="https://ochi.design/wp-content/uploads/2022/05/Homepage-Photo-1326x939.jpg" alt="pic" />
            </div>

        </div>
      
    </div>
  )
}

export default About
