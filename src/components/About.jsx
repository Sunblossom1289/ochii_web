import React from "react";

function About() {
  return <div className="w-full p-20 bg-[#CDEA68] text-zinc-800 rounded-tl-2xl">
    <h1 className="text-5xl leading-2 tracking-tighter">

    Ochi is a strategic presentation agency for forward-thinking businesses that need to raise funds, sell prod­ucts, ex­plain com­plex ideas, and hire great peo­ple.
    </h1>
    <div className="w-full flex gap-5 border-t-[1px] mt-20 pt-10 border-[#424b1e]">
<div className="w-1/2 ">
<h1 className="text-5xl px-3 ">Our Approach</h1>
<button className=" ml-3 mt-6 w-[12vw] h-[4vw] px-5 py-5 bg-zinc-900 rounded-full text-white flex gap-10  items-center ">Read More
<div className="w-3 h-3 bg-zinc-100 rounded-full"></div>

</button>

</div>
<div className="w-1/2 h-[70vh] - bg-red-600 rounded-3xl"><img className="h-full w-full object-cover rounded-3xl" src="https://ochi.design/wp-content/uploads/2022/05/Homepage-Photo-663x469.jpg" alt="" /></div>

    </div>
  </div>;
}

export default About;
