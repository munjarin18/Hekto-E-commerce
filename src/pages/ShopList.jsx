import React from "react";
import Container from "../components/Container";
import { FaThList } from "react-icons/fa";
import { IoGrid } from "react-icons/io5";
import List1 from "../assets/List1.png";
import { FaStar, FaRegHeart } from "react-icons/fa";
import { IoSearch } from "react-icons/io5";
import { FiShoppingCart } from "react-icons/fi";
import List2 from "../assets/List2.png";
import List3 from "../assets/List3.png";
import List4 from "../assets/List4.png";
import List5 from "../assets/List5.png";
import List6 from "../assets/List6.png";
import List7 from "../assets/List7.png";
import chair01 from "../assets/get02.png";

const ShopList = () => {
  return (
    <section className="py-[100px] bg-[#F6F5FF] px-3">
      <Container>
        <div className="">
          <h3 className="font-Sans font-bold text-[36px] text-[#101750]">
            Shop List
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
            Shop List
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

        <div className="lg:flex justify-between mt-[50px] px-3">
          <div className="lg:w-[40%] w-full">
            <div className="">
              <img className="w-full" src={List1} alt="" />
            </div>
          </div>

          <div clclassName="lg:w-[55%] w-full">
            <div className="lg:mt-[80px] px-10">
              <h2 className="font-Sans font-bold text-[24px] text-[#111C85]">
                Accumsan tincidunt
              </h2>
              <div className="flex">
                <div className="flex mt-[20px] gap-2">
                  <h3 className="font-Sans font-bold text-[16px] text-[#111C85]">
                    $26.00
                  </h3>
                  <h4 className="font-Sans font-bold text-[16px] text-[#FB2E86]">
                    $26.00
                  </h4>
                </div>
                <div className="flex mt-[20px] gap-2 ml-[20px] text-[#FFC416]">
                  <FaStar />
                  <FaStar />
                  <FaStar />
                  <FaStar />
                  <FaStar />
                </div>
              </div>
              <p className="font-Sans font-normal text-[17px] text-[#9295AA] mt-[20px] lg:w-[80%]">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Magna
                in est adipiscing in phasellus non in justo.
              </p>
              <div className="flex mt-[20px] gap-6 text-[#9295AA]">
                <FiShoppingCart />
                <FaRegHeart />
                <IoSearch />
              </div>
            </div>
          </div>
        </div>

        <div className="lg:flex justify-between mt-[50px] px-3">
          <div className="lg:w-[40%] w-full">
            <div className="">
              <img className="w-full" src={List2} alt="" />
            </div>
          </div>

          <div clclassName="lg:w-[55%] w-full">
            <div className="lg:mt-[80px] px-10">
              <h2 className="font-Sans font-bold text-[24px] text-[#111C85]">
                In nulla
              </h2>
              <div className="flex">
                <div className="flex mt-[20px] gap-2">
                  <h3 className="font-Sans font-bold text-[16px] text-[#111C85]">
                    $26.00
                  </h3>
                  <h4 className="font-Sans font-bold text-[16px] text-[#FB2E86]">
                    $26.00
                  </h4>
                </div>
                <div className="flex mt-[20px] gap-2 ml-[20px] text-[#FFC416]">
                  <FaStar />
                  <FaStar />
                  <FaStar />
                  <FaStar />
                  <FaStar />
                </div>
              </div>
              <p className="font-Sans font-normal text-[17px] text-[#9295AA] mt-[20px] lg:w-[80%]">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Magna
                in est adipiscing in phasellus non in justo.
              </p>
              <div className="flex mt-[20px] gap-6 text-[#9295AA]">
                <FiShoppingCart />
                <FaRegHeart />
                <IoSearch />
              </div>
            </div>
          </div>
        </div>

        <div className="lg:flex justify-between mt-[50px] px-3">
          <div className="lg:w-[40%] w-full">
            <div className="">
              <img className="w-full" src={List3} alt="" />
            </div>
          </div>

          <div clclassName="lg:w-[55%] w-full">
            <div className="lg:mt-[80px] px-10">
              <h2 className="font-Sans font-bold text-[24px] text-[#111C85]">
                Vel sem
              </h2>
              <div className="flex">
                <div className="flex mt-[20px] gap-2">
                  <h3 className="font-Sans font-bold text-[16px] text-[#111C85]">
                    $26.00
                  </h3>
                  <h4 className="font-Sans font-bold text-[16px] text-[#FB2E86]">
                    $26.00
                  </h4>
                </div>
                <div className="flex mt-[20px] gap-2 ml-[20px] text-[#FFC416]">
                  <FaStar />
                  <FaStar />
                  <FaStar />
                  <FaStar />
                  <FaStar />
                </div>
              </div>
              <p className="font-Sans font-normal text-[17px] text-[#9295AA] mt-[20px] lg:w-[80%]">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Magna
                in est adipiscing in phasellus non in justo.
              </p>
              <div className="flex mt-[20px] gap-6 text-[#9295AA]">
                <FiShoppingCart />
                <FaRegHeart />
                <IoSearch />
              </div>
            </div>
          </div>
        </div>

        <div className="lg:flex justify-between mt-[50px] px-3">
          <div className="lg:w-[40%] w-full">
            <div className="">
              <img className="w-full" src={List4} alt="" />
            </div>
          </div>

          <div clclassName="lg:w-[55%] w-full">
            <div className="lg:mt-[80px] px-10">
              <h2 className="font-Sans font-bold text-[24px] text-[#111C85]">
                Porttitor cum
              </h2>
              <div className="flex">
                <div className="flex mt-[20px] gap-2">
                  <h3 className="font-Sans font-bold text-[16px] text-[#111C85]">
                    $26.00
                  </h3>
                  <h4 className="font-Sans font-bold text-[16px] text-[#FB2E86]">
                    $26.00
                  </h4>
                </div>
                <div className="flex mt-[20px] gap-2 ml-[20px] text-[#FFC416]">
                  <FaStar />
                  <FaStar />
                  <FaStar />
                  <FaStar />
                  <FaStar />
                </div>
              </div>
              <p className="font-Sans font-normal text-[17px] text-[#9295AA] mt-[20px] lg:w-[80%]">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Magna
                in est adipiscing in phasellus non in justo.
              </p>
              <div className="flex mt-[20px] gap-6 text-[#9295AA]">
                <FiShoppingCart />
                <FaRegHeart />
                <IoSearch />
              </div>
            </div>
          </div>
        </div>

        <div className="lg:flex justify-between mt-[50px] px-3">
          <div className="lg:w-[40%] w-full">
            <div className="">
              <img className="w-full" src={List5} alt="" />
            </div>
          </div>

          <div clclassName="lg:w-[55%] w-full">
            <div className="lg:mt-[80px] px-10">
              <h2 className="font-Sans font-bold text-[24px] text-[#111C85]">
                Nunc in
              </h2>
              <div className="flex">
                <div className="flex mt-[20px] gap-2">
                  <h3 className="font-Sans font-bold text-[16px] text-[#111C85]">
                    $26.00
                  </h3>
                  <h4 className="font-Sans font-bold text-[16px] text-[#FB2E86]">
                    $26.00
                  </h4>
                </div>
                <div className="flex mt-[20px] gap-2 ml-[20px] text-[#FFC416]">
                  <FaStar />
                  <FaStar />
                  <FaStar />
                  <FaStar />
                  <FaStar />
                </div>
              </div>
              <p className="font-Sans font-normal text-[17px] text-[#9295AA] mt-[20px] lg:w-[80%]">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Magna
                in est adipiscing in phasellus non in justo.
              </p>
              <div className="flex mt-[20px] gap-6 text-[#9295AA]">
                <FiShoppingCart />
                <FaRegHeart />
                <IoSearch />
              </div>
            </div>
          </div>
        </div>

        <div className="lg:flex justify-between mt-[50px] px-3">
          <div className="lg:w-[40%] w-full">
            <div className="">
              <img className="w-full" src={List6} alt="" />
            </div>
          </div>

          <div clclassName="lg:w-[55%] w-full">
            <div className="lg:mt-[80px] px-10">
              <h2 className="font-Sans font-bold text-[24px] text-[#111C85]">
                Vitae facilisis
              </h2>
              <div className="flex">
                <div className="flex mt-[20px] gap-2">
                  <h3 className="font-Sans font-bold text-[16px] text-[#111C85]">
                    $26.00
                  </h3>
                  <h4 className="font-Sans font-bold text-[16px] text-[#FB2E86]">
                    $26.00
                  </h4>
                </div>
                <div className="flex mt-[20px] gap-2 ml-[20px] text-[#FFC416]">
                  <FaStar />
                  <FaStar />
                  <FaStar />
                  <FaStar />
                  <FaStar />
                </div>
              </div>
              <p className="font-Sans font-normal text-[17px] text-[#9295AA] mt-[20px] lg:w-[80%]">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Magna
                in est adipiscing in phasellus non in justo.
              </p>
              <div className="flex mt-[20px] gap-6 text-[#9295AA]">
                <FiShoppingCart />
                <FaRegHeart />
                <IoSearch />
              </div>
            </div>
          </div>
        </div>

        <div className="lg:flex justify-between mt-[50px] px-3">
          <div className="lg:w-[40%] w-full">
            <div className="">
              <img className="w-full" src={List7} alt="" />
            </div>
          </div>

          <div clclassName="lg:w-[55%] w-full">
            <div className="lg:mt-[80px] px-10">
              <h2 className="font-Sans font-bold text-[24px] text-[#111C85]">
                Curabitur lectus
              </h2>
              <div className="flex">
                <div className="flex mt-[20px] gap-2">
                  <h3 className="font-Sans font-bold text-[16px] text-[#111C85]">
                    $26.00
                  </h3>
                  <h4 className="font-Sans font-bold text-[16px] text-[#FB2E86]">
                    $26.00
                  </h4>
                </div>
                <div className="flex mt-[20px] gap-2 ml-[20px] text-[#FFC416]">
                  <FaStar />
                  <FaStar />
                  <FaStar />
                  <FaStar />
                  <FaStar />
                </div>
              </div>
              <p className="font-Sans font-normal text-[17px] text-[#9295AA] mt-[20px] lg:w-[80%]">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Magna
                in est adipiscing in phasellus non in justo.
              </p>
              <div className="flex mt-[20px] gap-6 text-[#9295AA]">
                <FiShoppingCart />
                <FaRegHeart />
                <IoSearch />
              </div>
            </div>
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

export default ShopList;
