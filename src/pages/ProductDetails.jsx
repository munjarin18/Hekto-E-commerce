import React from "react";
import Container from "../components/Container";
import ProductD1 from "../assets/ProductD1.png";
import ProductD2 from "../assets/ProductD2.png";
import ProductD3 from "../assets/ProductD3.png";
import ProductD4 from "../assets/ProductD4.png";
import { FaStar } from "react-icons/fa";
import { IoIosHeartEmpty } from "react-icons/io";
import { CiFacebook } from "react-icons/ci";
import { AiOutlineInstagram } from "react-icons/ai";
import { CiTwitter } from "react-icons/ci";
import { FaArrowRight } from "react-icons/fa";
import ProductD5 from "../assets/ProductD5.png";
import ProductD6 from "../assets/ProductD6.png";
import ProductD7 from "../assets/ProductD7.png";
import ProductD8 from "../assets/ProductD8.png";
import chair01 from "../assets/get02.png";
import { Link } from "react-router-dom";






const ProductDetails = () => {
  return (
    <section className="py-[100px] px-3 bg-[#F6F5FF]">
      <Container>
        <div>
          <h3 className="font-Sans font-bold text-[36px] text-[#101750]">
            Product Details
          </h3>
        </div>
        <div className="flex gap-2">
          <h3 className="font-Sans font-semibold text-[16px] text-[#000]">
            Home,
          </h3>
          <h4 className="font-Sans font-semibold text-[16px] text-[#000]">
            Pages,
          </h4>
          <p className="font-Sans font-semibold text-[16px] text-[#FB2E86]">
            Product Details
          </p>
        </div>

        <div className="lg:flex justify-around mt-[50px] bg-[#F6F4FD] py-[10px] px-3">
          <div className="lg:w-[15%] w-full">
            <div className=" space-y-3">
              <img className="w-full h-[155px]" src={ProductD1} alt="" />
              <img className=" w-full h-[155px]" src={ProductD2} alt="" />
              <img className="w-full h-[155px]" src={ProductD3} alt="" />
            </div>
          </div>

          <div className="lg:w-[30%] w-full">
            <div className="">
              <img className="w-full" src={ProductD4} alt="" />
            </div>
          </div>

          <div className="lg:w-[50%] w-full">
            <div className="mt-[20px]">
              <h3 className="font-sans font-semibold text-[36px] text-[#0D134E]">
                Playwood arm chair
              </h3>
              <div className="flex pt-[20px] gap-2  items-center text-[#FFC416] ">
                <FaStar />
                <FaStar />
                <FaStar />
                <FaStar />
                <FaStar />
                <h5 className="font-Sans font-semibold text-[18px] text-[#151875]">
                  (22)
                </h5>
              </div>
              <div className="flex pt-[20px] gap-2">
                <h3 className="font-Sans font-bold text-[16px] text-[#151875]">
                  $26.00
                </h3>
                <h4 className="font-Sans font-bold text-[16px] text-[#FB2E86]">
                  $26.00
                </h4>
              </div>
              <h2 className="font-Sans font-bold text-[18px] text-[#0D0E43] pt-[20px]">
                Color
              </h2>
              <p className="font-Sans font-semibold text-[16px] text-[#A9ACC6] pt-[20px]">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris
                tellus porttitor purus, et volutpat sit.
              </p>
              <div className="flex items-center  gap-2">
                <Link to="/Addtocart">
                
                <button className="py-[10px] px-[25px] bg-[#A9ACC6] hover:bg-[#FB2E86] duration-300 ease-in-out mt-[40px] font-Sans font-bold text-[16px] text-[#000] rounded-lg">
                  Add To cart
                </button>
                
                </Link>
              
                <div className="pt-10 px-8">
                  <IoIosHeartEmpty />
                </div>
              </div>
              <h4 className="font-Sans font-semibold text-[18px] text-[#151875] mt-[20px]">
                Categories:
              </h4>
              <h5 className="font-Sans font-semibold text-[18px] text-[#151875] mt-[10px]">
                Tags
              </h5>
              <div className="flex space-x-3 items-center">
                <div className="">
                  <h3 className="font-Sans font-semibold text-[18px] text-[#151875] ">
                    Share
                  </h3>
                </div>
                <div className="flex space-x-2 text-[#151875] items-center">
                  <div className="w-[15px] h-[15px] rounded-full bg-[#151875] text-[#FFF]">
                  <CiFacebook />
                  </div>
                
                <div className="w-[15px] h-[15px] rounded-full bg-[#FB2E86] text-[#FFF]">
                <AiOutlineInstagram  />
                </div>
                 
                 <div className="w-[15px] h-[15px] rounded-full bg-[#151875] text-[#FFF]">
                 <CiTwitter />
                 </div>
                  
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="py-[100px] bg-[#F9F8FE]">
          <div className="w-[60%]">
            <ul className="lg:flex justify-between">
              <li className=' relative font-Sans font-bold text-[24px] text-[#151875] mt-[50px] after:absolute after:content-[""] after:bottom-0 after:left-0 after:h-[2px] after:w-[130px] after:bg-[#151875]'>
                Description
              </li>
              <li className=' relative font-Sans font-bold text-[24px] text-[#151875] mt-[50px] after:absolute after:content-[""] after:bottom-0 after:left-0 after:h-[2px] after:w-[170px] after:bg-[#151875]'>
                Additional Info
              </li>
              <li className=' relative font-Sans font-bold text-[24px] text-[#151875] mt-[50px] after:absolute after:content-[""] after:bottom-0 after:left-0 after:h-[2px] after:w-[90px] after:bg-[#151875]'>
                Reviews
              </li>
              <li className=' relative font-Sans font-bold text-[24px] text-[#151875] mt-[50px] after:absolute after:content-[""] after:bottom-0 after:left-0 after:h-[2px] after:w-[70px] after:bg-[#151875]'>
                Video
              </li>
            </ul>
          </div>
          <div className="mt-[70px]">
            <h3 className="font-Sans font-bold text-[22px] text-[#151875] space-y-2 ">
              Varius tempor.
            </h3>
            <p className="font-Sans font-semibold text-[16px] text-[#A9ACC6] mt-[20px] ">
              Aliquam dis vulputate vulputate integer sagittis. Faucibus dolor
              ornare faucibus vel sed et eleifend habitasse amet. Montes, mauris
              varius ac est bibendum. Scelerisque a, risus ac ante. Velit
              consectetur neque, elit, aliquet. Non varius proin sed urna,
              egestas consequat laoreet diam tincidunt. Magna eget faucibus cras
              justo, tortor sed donec tempus. Imperdiet consequat, quis diam
              arcu, nulla lobortis justo netus dis. Eu in fringilla vulputate
              nunc nec. Dui, massa viverr .
            </p>
          </div>

          <div className="mt-[70px]">
            <h3 className="font-Sans font-bold text-[22px] text-[#151875] space-y-2 ">
              More details
            </h3>

            <div className="flex space-x-2 items-center mt-[15px]">
              <FaArrowRight />
              <p className="font-Sans font-semibold text-[16px] text-[#A9ACC6]">
                Aliquam dis vulputate vulputate integer sagittis. Faucibus ds
                diam arcu, nulla lobortis justo netus dis. Eu in fringilla
                vulputate nunc nec. Dui, massa viverr .
              </p>
            </div>

            <div className="flex space-x-2 items-center mt-[15px]">
              <FaArrowRight />
              <p className="font-Sans font-semibold text-[16px] text-[#A9ACC6]">
                Aliquam dis vulputate vulputate integer sagittis. Faucibus ds
                diam arcu, nulla lobortis justo netus dis. Eu in fringilla
                vulputate nunc nec. Dui, massa viverr .
              </p>
            </div>

            <div className="flex space-x-2 items-center mt-[15px]">
              <FaArrowRight />
              <p className="font-Sans font-semibold text-[16px] text-[#A9ACC6]">
                Aliquam dis vulputate vulputate integer sagittis. Faucibus ds
                diam arcu, nulla lobortis justo netus dis. Eu in fringilla
                vulputate nunc nec. Dui, massa viverr .
              </p>
            </div>

            <div className="flex space-x-2 items-center mt-[15px]">
              <FaArrowRight />
              <p className="font-Sans font-semibold text-[16px] text-[#A9ACC6]">
                Aliquam dis vulputate vulputate integer sagittis. Faucibus ds
                diam arcu, nulla lobortis justo netus dis. Eu in fringilla
                vulputate nunc nec. Dui, massa viverr .
              </p>
            </div>
          </div>
        </div>
  

        <h3 className="font-Sans font-bold text-[22px] text-[#151875] space-y-2">
          Related Products
        </h3>
        <div className="lg:flex justify-between mt-[20px]">
        <div className="lg:w-[24%] pt-5 w-full">

          <img className="w-full" src={ProductD5} alt="" />
      

        <div className="flex  justify-between px-2">
          <div className="">
            <h3 className="font-Sans font-semibold text-[16px] text-[#151875]  mt-[20px]">
              Mens Fashion Wear
            </h3>
          </div>
          <div className="flex mt-[20px] gap-1  items-center text-[#FFC416] ">
            <FaStar />
            <FaStar />
            <FaStar />
            <FaStar />
            <FaStar />
          </div>
        </div>

          <h3 className="font-Sans font-semibold text-[16px] text-[#151875] pt-2 px-2 "> $43.00 </h3>
        
        </div>
       

        <div className="lg:w-[24%] pt-5 w-full">
          <img className="w-full" src={ProductD6} alt="" />
      

        <div className="flex  justify-between px-2">
          <div className="">
            <h3 className="font-Sans font-semibold text-[16px] text-[#151875]  mt-[20px]">
              Mens Fashion Wear
            </h3>
          </div>
          <div className="flex mt-[20px] gap-1  items-center text-[#FFC416] ">
            <FaStar />
            <FaStar />
            <FaStar />
            <FaStar />
            <FaStar />
          </div>
        </div>

          <h3 className="font-Sans font-semibold text-[16px] text-[#151875] pt-2 px-2">
            $43.00
          </h3>
        
        </div>

        <div className="lg:w-[24%] pt-5 w-full">
          <img className="w-full" src={ProductD7} alt="" />
      

        <div className="flex  justify-between px-2">
          <div className="">
            <h3 className="font-Sans font-semibold text-[16px] text-[#151875]  mt-[20px]">
              Mens Fashion Wear
            </h3>
          </div>
          <div className="flex mt-[20px] gap-1  items-center text-[#FFC416] ">
            <FaStar />
            <FaStar />
            <FaStar />
            <FaStar />
            <FaStar />
          </div>
        </div>

          <h3 className="font-Sans font-semibold text-[16px] text-[#151875] pt-2 px-2">
            $43.00
          </h3>
        
        </div>
        <div className="lg:w-[24%] pt-5 w-full">
          <img className="w-full" src={ProductD8} alt="" />
      

        <div className="flex  justify-between px-2">
          <div className="">
            <h3 className="font-Sans font-semibold text-[16px] text-[#151875]  mt-[20px]">
              Mens Fashion Wear
            </h3>
          </div>
          <div className="flex mt-[20px] gap-1  items-center text-[#FFC416] ">
            <FaStar />
            <FaStar />
            <FaStar />
            <FaStar />
            <FaStar />
          </div>
        </div>

          <h3 className="font-Sans font-semibold text-[16px] text-[#151875] pt-2 px-2">
            $43.00
          </h3>
        
        </div>
        </div>

        <div className="pt-[100px] ">
          <div className="lg:flex justify-between">
            <div className="w-[15%]"></div>
            <div className="lg:w-[70%] w-full">
              <img src={chair01} alt="" />
            </div>
            <div className="w-[15%]"></div>
          </div>
        </div>



      
      </Container>
    </section>
  );
};

export default ProductDetails;
