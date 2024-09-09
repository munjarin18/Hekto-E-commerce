import React  from 'react'
import Container from "../components/Container";
import { FaThList } from "react-icons/fa";
import { IoGrid } from "react-icons/io5";
import shop01 from "../assets/shop01.png"
import shop02 from "../assets/shop02.png"
import chair01 from "../assets/get02.png"
import { Link } from 'react-router-dom';





const Page = () => {
  
    return (
        <section className="py-[100px] px-3 bg-[#F6F5FF]">
          <Container>
            <div className="">
              <h3 className="font-Sans font-bold text-[36px] text-[#101750]">
                Shop Grid Default
              </h3>
            </div>
            <div className=" flex gap-2">
              <h4 className="font-Sans font-semibold text-[16px] text-[#000]">
                Home ,
              </h4>
              <h3 className="font-Sans font-semibold text-[16px] text-[#000]">
                Pages ,
              </h3>
              <p className="font-Sans font-semibold text-[16px] text-[#FB2E86]">
                Shop Grid Default
              </p>
            </div>
    
            <div className="lg:flex mt-[100px] bg-[#fff] py-[50px] px-3">
              <div className="lg:w-[40%] w-full">
                <h2 className="font-Sans font-bold text-[22px] text-[#151875]">
                  Ecommerce Acceories & Fashion item{" "}
                </h2>
                <h5 className="font-Sans font-semibold text-[16px] text-[#8A8FB9]">
                  About 9,620 results (0.62 seconds)
                </h5>
              </div>
    
              <div className="lg:w-[60%] w-full lg:flex">
                <div className="lg:w-[25%] w-full lg:flex items-center justify-between my-[20px] lg:my-0">
                  <h3 className="font-Sans font-semibold text-[16px] text-[#182378]">
                    per page{" "}
                  </h3>
                  <input
                    className="h-[25px] lg:w-[60%] w-[70%] border-2 border-[#E7E6EF] rounded-lg "
                    type="text"
                  />
                </div>
    
                <div className="lg:w-[25%] w-full lg:flex items-center justify-around mb-[20px] lg:mb-0">
                  <h3 className="font-Sans font-semibold text-[16px] text-[#182378] lg:ml-[10px]">
                    Sort By:{" "}
                  </h3>
                  <input
                    className="h-[25px] lg:w-[60%] w-[70%] border-2 border-[#E7E6EF] rounded-lg "
                    type="text"
                  />
                </div>
    
                <div className="lg:w-[50%] w-full flex items-center justify-around">
                  <h3 className="font-Sans font-semibold text-[16px] text-[#182378] lg:ml-[10px]">
                    View:{" "}
                  </h3>
                  <div className="text-[#3F509E] flex gap-3">
                  <IoGrid />
                  <FaThList />
                  </div>
                  <input
                    className="h-[25px] w-[60%] border-2 border-[#E7E6EF] rounded-lg "
                    type="text"
                  />
                </div>
              </div>
            </div>

            <Link to="/ShopList">    
          
            <div className="mt-[50px] lg:flex  justify-between px-3  flex-wrap">
        
                    <div className="lg:w-[24%] w-full sm:w-[50%]">
                        <div className="py-[30px] px-[30px] bg-[#EBF4F3]">
                            <img src={shop01} alt="" />
                        </div>
                        <div className=" text-center mt-[30px]">
                            <h3 className='font-Sans font-bold text-[22px] text-[#0D0E43]'>Vel elit euismod</h3>

                            <h4 className='font-Sans font-semibold text-[16px] text-[#FB2E86]'>$26.00  </h4>



                        </div>
                    </div>
                    <div className="lg:w-[24%] w-full sm:w-[50%]">
                        <div className="py-[30px] px-[30px] bg-[#EBF4F3]">
                            <img src={shop01} alt="" />
                        </div>
                        <div className=" text-center mt-[30px]">
                            <h3 className='font-Sans font-bold text-[22px] text-[#0D0E43]'>Vel elit euismod</h3>

                            <h4 className='font-Sans font-semibold text-[16px] text-[#FB2E86]'>$26.00  </h4>



                        </div>
                    </div>
                    <div className="lg:w-[24%] w-full sm:w-[50%]">
                        <div className="py-[30px] px-[30px] bg-[#EBF4F3]">
                            <img src={shop01} alt="" />
                        </div>
                        <div className=" text-center mt-[30px]">
                            <h3 className='font-Sans font-bold text-[22px] text-[#0D0E43]'>Vel elit euismod</h3>

                            <h4 className='font-Sans font-semibold text-[16px] text-[#FB2E86]'>$26.00  </h4>



                        </div>
                    </div>
                    <div className="lg:w-[24%] w-full sm:w-[50%]">
                        <div className="py-[30px] px-[30px] bg-[#EBF4F3]">
                            <img src={shop01} alt="" />
                        </div>
                        <div className=" text-center mt-[30px]">
                            <h3 className='font-Sans font-bold text-[22px] text-[#0D0E43]'>Vel elit euismod</h3>

                            <h4 className='font-Sans font-semibold text-[16px] text-[#FB2E86]'>$26.00  </h4>



                        </div>
                    </div>
                 
                
                </div>
              

                <div className="mt-[50px] lg:flex justify-between px-3">
                <div className="lg:w-[24%] w-full sm:w-[50%]">
                        <div className="py-[30px] px-[30px] bg-[#EBF4F3]">
                            <img src={shop02} alt="" />
                        </div>
                        <div className=" text-center mt-[30px]">
                            <h3 className='font-Sans font-bold text-[22px] text-[#0D0E43]'>Vel elit euismod</h3>

                            <h4 className='font-Sans font-semibold text-[16px] text-[#FB2E86]'>$26.00  </h4>



                        </div>
                    </div>
                    <div className="lg:w-[24%] w-full sm:w-[50%]">
                        <div className="py-[30px] px-[30px] bg-[#EBF4F3]">
                            <img src={shop01} alt="" />
                        </div>
                        <div className=" text-center mt-[30px]">
                            <h3 className='font-Sans font-bold text-[18px] text-[#0D0E43]'>Ultricies condimentum imperdiet</h3>

                            <h4 className='font-Sans font-semibold text-[16px] text-[#FB2E86]'>$26.00  </h4>



                        </div>
                    </div>
                    <div className="lg:w-[24%] w-full sm:w-[50%]">
                        <div className="py-[30px] px-[30px] bg-[#EBF4F3]">
                            <img src={shop02} alt="" />
                        </div>
                        <div className=" text-center mt-[30px]">
                            <h3 className='font-Sans font-bold text-[22px] text-[#0D0E43]'>Vitae suspendisse sed</h3>

                            <h4 className='font-Sans font-semibold text-[16px] text-[#FB2E86]'>$26.00  </h4>



                        </div>
                    </div>
                    <div className="lg:w-[24%] w-full sm:w-[50%]">
                        <div className="py-[30px] px-[30px] bg-[#EBF4F3]">
                            <img src={shop01} alt="" />
                        </div>
                        <div className=" text-center mt-[30px]">
                            <h3 className='font-Sans font-bold text-[22px] text-[#0D0E43]'>Sed at fermentum</h3>

                            <h4 className='font-Sans font-semibold text-[16px] text-[#FB2E86]'>$26.00  </h4>



                        </div>
                    </div>

                </div>

                <div className="mt-[50px] lg:flex justify-between px-3">
                <div className="lg:w-[24%] w-full sm:w-[50%]">
                        <div className="py-[30px] px-[30px] bg-[#EBF4F3]">
                            <img src={shop01} alt="" />
                        </div>
                        <div className=" text-center mt-[30px]">
                            <h3 className='font-Sans font-bold text-[22px] text-[#0D0E43]'>Vel elit euismod</h3>

                            <h4 className='font-Sans font-semibold text-[16px] text-[#FB2E86]'>$26.00  </h4>



                        </div>
                    </div>
                    <div className="lg:w-[24%] w-full sm:w-[50%]">
                        <div className="py-[30px] px-[30px] bg-[#EBF4F3]">
                            <img src={shop02} alt="" />
                        </div>
                        <div className=" text-center mt-[30px]">
                            <h3 className='font-Sans font-bold text-[18px] text-[#0D0E43]'>Ultricies condimentum imperdiet</h3>

                            <h4 className='font-Sans font-semibold text-[16px] text-[#FB2E86]'>$26.00  </h4>



                        </div>
                    </div>
                    <div className="lg:w-[24%] w-full sm:w-[50%]">
                        <div className="py-[30px] px-[30px] bg-[#EBF4F3]">
                            <img src={shop01} alt="" />
                        </div>
                        <div className=" text-center mt-[30px]">
                            <h3 className='font-Sans font-bold text-[22px] text-[#0D0E43]'>Vitae suspendisse sed</h3>

                            <h4 className='font-Sans font-semibold text-[16px] text-[#FB2E86]'>$26.00  </h4>



                        </div>
                    </div>
                    <div className="lg:w-[24%] w-full sm:w-[50%]">
                        <div className="py-[30px] px-[30px] bg-[#EBF4F3]">
                            <img src={shop02} alt="" />
                        </div>
                        <div className=" text-center mt-[30px]">
                            <h3 className='font-Sans font-bold text-[22px] text-[#0D0E43]'>Sed at fermentum</h3>

                            <h4 className='font-Sans font-semibold text-[16px] text-[#FB2E86]'>$26.00  </h4>



                        </div>
                    </div>

                </div>
                
               </Link>
         

                <div className="pt-[100px] px-3">
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


export default Page
