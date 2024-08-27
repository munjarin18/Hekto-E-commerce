import React from "react";
import Container from "../components/Container";
import Cart1 from "../assets/Cart1.png";
import Cart2 from "../assets/Cart2.png";
import Cart3 from "../assets/Cart3.png";
import Cart4 from "../assets/Cart4.png";
import Cart5 from "../assets/Cart5.png";
import { Link } from "react-router-dom";

const Addtocart = () => {
  return (
    <section className="py-[100px] px-3 bg-[#F6F5FF]">
      <Container>
        <div>
          <h3 className="font-Sans font-bold text-[36px] text-[#101750]">
            Shopping Cart
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
            Shopping Cart
          </p>
        </div>

        <div className="mt-[100px] px-3 ">
          <div className=" lg:flex w-full justify-between">
            {/* w-[65%] start  */}
            <div className="lg:w-[65%] w-full">
              <div className=" flex justify-between">
                <h3 className="font-Sans font-bold text-[20px] text-[#0D0E43]">
                  Product
                </h3>
                <h3 className="font-Sans font-bold text-[20px] text-[#0D0E43]">
                  Price
                </h3>
                <h3 className="font-Sans font-bold text-[20px] text-[#0D0E43]">
                  Quantity
                </h3>
                <h3 className="font-Sans font-bold text-[20px] text-[#0D0E43]">
                  Total
                </h3>
              </div>
              <div className="flex justify-between items-center mt-[50px]">
                <div className="w-[28%] flex justify-between ">
                  <div className="">
                    <img src={Cart1} alt="" />
                  </div>
                  <div className=" hidden lg:block">
                    <h3 className="font-Sans font-bold text-[12px] text-[#000]">
                      Ut diam consequat
                    </h3>
                    <h3 className="font-Sans font-bold text-[12px] text-[#A1A8C1]">
                      Color: Brown
                    </h3>
                    <h3 className="font-Sans font-bold text-[12px] text-[#A1A8C1]">
                      Size:XL
                    </h3>
                  </div>
                </div>

                <div className="w-[70%] flex justify-between items-center">
                  <h3 className="font-Sans font-bold text-[14px] text-[#0D0E43] px-10 ">
                    $32.00
                  </h3>
                  <div className="">
                    <button className="font-Sans font-bold text-[20px] text-[#0D0E43]">
                      -
                    </button>
                    <button className="font-Sans font-bold text-[16px] text-[#0D0E43] px-3">
                      1
                    </button>
                    <button className="font-Sans font-bold text-[20px] text-[#0D0E43]">
                      +
                    </button>
                  </div>
                  <h3 className="font-Sans font-bold text-[16px] text-[#0D0E43]">
                    £219.00
                  </h3>
                </div>
              </div>

              <div className=" relative after:absolute after:contain-[''] after:bottom-[-10px] after:left-0 after:h-[1px] after:w-[100%] after:bg-[#E1E1E4]" />
              <div className="flex justify-between items-center mt-[50px]">
                <div className="w-[28%]  flex justify-between">
                  <div className="">
                    <img src={Cart2} alt="" />
                  </div>
                  <div className=" hidden lg:block ">
                    <h3 className="font-Sans font-bold text-[12px] text-[#000]">
                      Ut diam consequat
                    </h3>
                    <h3 className="font-Sans font-bold text-[12px] text-[#A1A8C1]">
                      Color: Brown
                    </h3>
                    <h3 className="font-Sans font-bold text-[12px] text-[#A1A8C1]">
                      Size:XL
                    </h3>
                  </div>
                </div>
                <div className="w-[70%] flex justify-between">
                  <h3 className="font-Sans font-bold text-[14px] text-[#0D0E43] px-10">
                    $32.00
                  </h3>
                  <div className="">
                    <button className="font-Sans font-bold text-[20px] text-[#0D0E43]">
                      -
                    </button>
                    <button className="font-Sans font-bold text-[16px] text-[#0D0E43] px-3">
                      1
                    </button>
                    <button className="font-Sans font-bold text-[20px] text-[#0D0E43]">
                      +
                    </button>
                  </div>
                  <h3 className="font-Sans font-bold text-[16px] text-[#0D0E43]">
                    £219.00
                  </h3>
                </div>
              </div>
              <div className=" relative after:absolute after:contain-[''] after:bottom-[-10px] after:left-0 after:h-[1px] after:w-[100%] after:bg-[#E1E1E4]" />

              <div className="flex justify-between items-center mt-[50px]">
                <div className="w-[28%]  flex justify-between">
                  <div className="">
                    <img src={Cart3} alt="" />
                  </div>
                  <div className=" hidden lg:block">
                    <h3 className="font-Sans font-bold text-[12px] text-[#000]">
                      Ut diam consequat
                    </h3>
                    <h3 className="font-Sans font-bold text-[12px] text-[#A1A8C1]">
                      Color: Brown
                    </h3>
                    <h3 className="font-Sans font-bold text-[12px] text-[#A1A8C1]">
                      Size:XL
                    </h3>
                  </div>
                </div>
                <div className="w-[70%] flex justify-between">
                  <h3 className="font-Sans font-bold text-[14px] text-[#0D0E43] px-10">
                    $32.00
                  </h3>
                  <div className="">
                    <button className="font-Sans font-bold text-[20px] text-[#0D0E43]">
                      -
                    </button>
                    <button className="font-Sans font-bold text-[16px] text-[#0D0E43] px-3">
                      1
                    </button>
                    <button className="font-Sans font-bold text-[20px] text-[#0D0E43]">
                      +
                    </button>
                  </div>
                  <h3 className="font-Sans font-bold text-[16px] text-[#0D0E43]">
                    £219.00
                  </h3>
                </div>
              </div>

              <div className=" relative after:absolute after:contain-[''] after:bottom-[-10px] after:left-0 after:h-[1px] after:w-[100%] after:bg-[#E1E1E4]" />

              <div className="flex justify-between items-center mt-[50px]">
                <div className="w-[28%]  flex justify-between">
                  <div className="">
                    <img src={Cart4} alt="" />
                  </div>
                  <div className=" hidden lg:block">
                    <h3 className="font-Sans font-bold text-[12px] text-[#000]">
                      Ut diam consequat
                    </h3>
                    <h3 className="font-Sans font-bold text-[12px] text-[#A1A8C1]">
                      Color: Brown
                    </h3>
                    <h3 className="font-Sans font-bold text-[12px] text-[#A1A8C1]">
                      Size:XL
                    </h3>
                  </div>
                </div>
                <div className="w-[70%] flex justify-between">
                  <h3 className="font-Sans font-bold text-[14px] text-[#0D0E43] px-10">
                    $32.00
                  </h3>
                  <div className="">
                    <button className="font-Sans font-bold text-[20px] text-[#0D0E43]">
                      -
                    </button>
                    <button className="font-Sans font-bold text-[16px] text-[#0D0E43] px-3">
                      1
                    </button>
                    <button className="font-Sans font-bold text-[20px] text-[#0D0E43]">
                      +
                    </button>
                  </div>
                  <h3 className="font-Sans font-bold text-[16px] text-[#0D0E43]">
                    £219.00
                  </h3>
                </div>
              </div>
              <div className=" relative after:absolute after:contain-[''] after:bottom-[-10px] after:left-0 after:h-[1px] after:w-[100%] after:bg-[#E1E1E4]" />

              <div className="flex justify-between items-center mt-[50px]">
                <div className="w-[28%]  flex justify-between">
                  <div className="">
                    <img src={Cart5} alt="" />
                  </div>
                  <div className=" hidden lg:block">
                    <h3 className="font-Sans font-bold text-[12px] text-[#000]">
                      Ut diam consequat
                    </h3>
                    <h3 className="font-Sans font-bold text-[12px] text-[#A1A8C1]">
                      Color: Brown
                    </h3>
                    <h3 className="font-Sans font-bold text-[12px] text-[#A1A8C1]">
                      Size:XL
                    </h3>
                  </div>
                </div>
                <div className="w-[70%] flex justify-between ">
                  <h3 className="font-Sans font-bold text-[14px] text-[#0D0E43] px-10">
                    $32.00
                  </h3>
                  <div className="">
                    <button className="font-Sans font-bold text-[20px] text-[#0D0E43]">
                      -
                    </button>
                    <button className="font-Sans font-bold text-[16px] text-[#0D0E43] px-3">
                      1
                    </button>
                    <button className="font-Sans font-bold text-[20px] text-[#0D0E43]">
                      +
                    </button>
                  </div>
                  <h3 className="font-Sans font-bold text-[16px] text-[#0D0E43]">
                    £219.00
                  </h3>
                </div>
              </div>

              <div className=" relative after:absolute after:contain-[''] after:bottom-[-10px] after:left-0 after:h-[1px] after:w-[100%] after:bg-[#E1E1E4]" />

              <div className="flex justify-between">
                <button className="py-[10px] px-[30px] bg-[#FB2E86] mt-[50px] font-Sans font-bold text-[16px] text-[#fff] rounded-lg">
                  Update Curt
                </button>
                <button className="py-[10px] px-[30px] bg-[#FB2E86] mt-[50px] font-Sans font-bold text-[16px] text-[#fff] rounded-lg">
                  Clear Cart
                </button>
              </div>
            </div>  {/* w-[65%] end  */}


           {/* w-[30% start] */}
            <div className="lg:w-[30%] w-full">
              <div className=" text-center">
                <h3 className="font-Sans font-bold text-[20px] text-[#0D0E43]">
                  Cart Totals
                </h3>
                <div className="py-[20px] px-[20px] bg-[#F4F4FC] mt-[40px] rounded-md border-[1px]">
                  <div className="flex justify-between   relative after:absolute after:contain-[''] after:bottom-[-10px] after:left-0 after:h-[1px] after:w-[100%] after:bg-[#E8E6F1]">
                    <h3 className="font-Sans font-semibold text-[18px] text-[#1D3178]">
                      Subtotals:
                    </h3>
                    <h3 className="font-Sans font-semibold text-[18px] text-[#1D3178]">
                      £219.00
                    </h3>
                  </div>
                  <div className="flex justify-between mt-[30px]   relative after:absolute after:contain-[''] after:bottom-[-10px] after:left-0 after:h-[1px] after:w-[100%] after:bg-[#E8E6F1]">
                    <h3 className="font-Sans font-semibold text-[18px] text-[#1D3178]">
                      Totals:
                    </h3>
                    <h3 className="font-Sans font-semibold text-[18px] text-[#1D3178]">
                      £219.00
                    </h3>
                  </div>
                  <div className="flex  gap-3 mt-[40px]  ">
                    <p className=" pt-8 font-Sans font-semibold text-[16px] text-[#8A91AB] relative after:absolute after:left-[-15px] after:top-[76%]  after:translate-y-[-50%] after:h-[10px] after:w-[10px] after:rounded-full after:bg-[#19D16F]">
                      Shipping & taxes calculated at checkout
                    </p>
                  </div>
                  <div className="mt-[10px]">
                   <Link to='/'>
                   <button className="py-[10px] px-[80px] bg-[#19D16F] mt-[50px] font-Sans font-bold text-[16px] text-[#fff] rounded-lg">
                      Proceed To Checkout
                    </button>
                   </Link>
                    
                  </div>
                </div>
              </div>
              <div className="  mt-[50px]">
                <div className="text-center">
                  <h3 className="font-Sans font-bold text-[20px] text-[#0D0E43]">
                    Calculate Shopping
                  </h3>
                </div>
                <div className="py-[20px] px-[20px] bg-[#F4F4FC] mt-[20px] rounded-md border-[1px]">
                  <div className="  relative after:absolute after:contain-[''] after:bottom-[-10px] after:left-0 after:h-[1px] after:w-[100%] after:bg-[#C7CEE4]">
                    <h3 className="font-Sans font-semibold text-[18px] text-[#C5CBE3]">
                      Bangladesh
                    </h3>
                  </div>
                  <div className=" mt-[30px]  relative after:absolute after:contain-[''] after:bottom-[-10px] after:left-0 after:h-[1px] after:w-[100%] after:bg-[#C7CEE4]">
                    <h3 className="font-Sans font-semibold text-[18px] text-[#C5CBE3]">
                      Mirpur Dhaka - 1200
                    </h3>
                  </div>

                  <div className=" mt-[30px]  relative after:absolute after:contain-[''] after:bottom-[-10px] after:left-0 after:h-[1px] after:w-[100%] after:bg-[#C7CEE4]">
                    <h3 className="font-Sans font-semibold text-[18px] text-[#C5CBE3]">
                    Postal Code
                    </h3>
                  </div>

                  <div className="mt-[20px] ">
                    <button className="py-[10px] px-[30px] bg-[#fff] mt-[50px] font-Sans font-bold text-[16px] text-[#000] rounded-lg hover:bg-[#FB2E86] duration-300 ease-in-out border-[1px]">
                      Postal Code
                    </button>
                  </div>
                </div>
              </div>

             

            </div>   {/* w-[30% close] */}
          
          </div>
        </div>
      </Container>
    </section>
  );
};

export default Addtocart;
