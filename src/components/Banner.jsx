import React from 'react'
import Ban from "../assets/banner02.png"
import Bann from "../assets/banner.png"

const Banner = () => {
    return (
      <section className='bg-[#F2F0FF] px-10'>
        <div className="lg:flex">
          <div className="lg:w-[15%]">
            <div className="">
              <img src={Ban} alt="" />
            </div>
          </div>
          <div className="lg:w-[43%] w-full flex">
            <div className="lg:mt-[50%] mt-[150px] translate-y-[-50%]">
              <h5 className='font-Sans font-bold text-[16px] text-[#FB2E86]'>Best Furniture For Your Castle....</h5>
              <h2 className='font-Sans font-bold lg:text-[50px] text-[24px] text-[#000]'>New Furniture Collection Trends in 2020</h2>
              <h3 className='font-Sans font-bold text-[16px] text-[#8A8FB9]'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Magna in est adipiscing
              in phasellus non in justo.</h3>
            <button className='py-[10px] px-[25px] bg-[#FB2E86] mt-[50px] font-Sans font-bold text-[16px] text-[#fff] rounded-lg'>Shop Now</button>
            </div>
           
          </div>
          <div className="lg:w-[38%]">
          <div className="lg:mt-[40px] mb-[40px]">
              <img src={Bann} alt="" />
            </div>
          </div>
          </div>
      </section>
    )
  }
export default Banner
