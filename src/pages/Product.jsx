import React from "react";
import Container from "../components/Container";
import { FaThList } from "react-icons/fa";
import { IoGrid } from "react-icons/io5";
import { FaStar } from "react-icons/fa6";
import { IoSearch } from "react-icons/io5";
import List01 from "../assets/List01.png";
import List02 from "../assets/List02.png";
import List03 from "../assets/List03.png";
import List04 from "../assets/List04.png";
import List05 from "../assets/List05.png";
import List06 from "../assets/List06.png";
import List07 from "../assets/List07.png";
import { FiShoppingCart } from "react-icons/fi";
import { FaRegHeart } from "react-icons/fa";
import chair01 from "../assets/get02.png";
import { Link } from "react-router-dom";

const Product = () => {
  return (
    <section className="py-[100px] bg-[#F6F5FF] px-3">
      <Container>
        <div className="">
          <h3 className="font-Sans font-bold text-[36px] text-[#101750]">
            Shop Left Sidebar
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
            Shop Left Sidebar
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
                placeholder="Best Match"
                className="h-[25px] lg:w-[60%] w-[70%] border-2 border-[#E7E6EF] rounded-lg  text-[10px] px-2"
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

        <div className="lg:flex justify-between px-3">
          <div className="lg:w-[23%] w-full mt-[50px]">
            <div className="">
              <h2 className='font-Sans font-bold text-[20px] text-[#151875] relative after:absolute after:content-[""] after:bottom-0 after:left-0 after:h-[2px] after:w-[150px] after:bg-[#000000]'>
                Product Brand
              </h2>
            </div>
            <div className="mt-[30px]">
              <div className=" flex gap-3">
                <input type="checkbox" id="yes" />
                <p className="font-Sans font-semibold text-[16px] text-[#7E81A2]">
                  Coaster Furniture
                </p>
              </div>
              <div className=" flex gap-3 mt-2">
                <input type="checkbox" id="yes" />
                <p className="font-Sans font-semibold text-[16px] text-[#7E81A2]">
                  Fusion Dot High Fashion
                </p>
              </div>
              <div className=" flex gap-3 mt-2">
                <input type="checkbox" id="yes" />
                <p className="font-Sans font-semibold text-[16px] text-[#7E81A2]">
                  Unique Furnitture Restor
                </p>
              </div>
              <div className=" flex gap-3 mt-2">
                <input type="checkbox" id="yes" />
                <p className="font-Sans font-semibold text-[16px] text-[#7E81A2]">
                  Dream Furnitture Flipping
                </p>
              </div>
              <div className=" flex gap-3 mt-2">
                <input type="checkbox" id="yes" />
                <p className="font-Sans font-semibold text-[16px] text-[#7E81A2]">
                  Young Repurposed
                </p>
              </div>
              <div className=" flex gap-3 mt-2">
                <input type="checkbox" id="yes" />
                <p className="font-Sans font-semibold text-[16px] text-[#7E81A2]">
                  Green DIY furniture
                </p>
              </div>
            </div>

            <div className="mt-[50px]">
              <h2 className='font-Sans font-bold text-[20px] text-[#151875] relative after:absolute after:content-[""] after:bottom-0 after:left-0 after:h-[2px] after:w-[150px] after:bg-[#000000]'>
                Discount Offer
              </h2>
            </div>
            <div className="mt-[30px]">
              <div className=" flex gap-3">
                <input type="checkbox" id="yes" />
                <p className="font-Sans font-semibold text-[16px] text-[#7E81A2]">
                  20% Cashback
                </p>
              </div>
              <div className=" flex gap-3 mt-2">
                <input type="checkbox" id="yes" />
                <p className="font-Sans font-semibold text-[16px] text-[#7E81A2]">
                  5% Cashback Offer
                </p>
              </div>
              <div className=" flex gap-3 mt-2">
                <input type="checkbox" id="yes" />
                <p className="font-Sans font-semibold text-[16px] text-[#7E81A2]">
                  25% Discount Offer
                </p>
              </div>
            </div>

            <div className="mt-[50px]">
              <h2 className='font-Sans font-bold text-[20px] text-[#151875] relative after:absolute after:content-[""] after:bottom-0 after:left-0 after:h-[2px] after:w-[130px] after:bg-[#000000]'>
                Rating Item
              </h2>
            </div>
            <div className="mt-[30px]">
              <div className="flex gap-3  items-center">
                <input type="checkbox" id="yes" />
                <div className="flex text-[#FFC107]">
                  <FaStar />
                  <FaStar />
                  <FaStar />
                  <FaStar />
                  <FaStar />
                </div>
                <p className="font-Sans font-semibold text-[16px]">(2341)</p>
              </div>

              <div className="flex gap-3 mt-3  items-center">
                <input type="checkbox" id="yes" />
                <div className="flex text-[#FFC107]">
                  <FaStar />
                  <FaStar />
                  <FaStar />
                  <FaStar />
                  <FaStar />
                </div>
                <p className="font-Sans font-semibold text-[16px]">(1726)</p>
              </div>

              <div className="flex gap-3 mt-3  items-center">
                <input type="checkbox" id="yes" />
                <div className="flex text-[#FFC107]">
                  <FaStar />
                  <FaStar />
                  <FaStar />
                  <FaStar />
                  <FaStar />
                </div>
                <p className="font-Sans font-semibold text-[16px]">(258)</p>
              </div>

              <div className="flex gap-3 mt-3  items-center">
                <input type="checkbox" id="yes" />
                <div className="flex text-[#FFC107]">
                  <FaStar />
                  <FaStar />
                  <FaStar />
                  <FaStar />
                  <FaStar />
                </div>
                <p className="font-Sans font-semibold text-[16px]">(25)</p>
              </div>
            </div>

            <div className="mt-[50px]">
              <h2 className='font-Sans font-bold text-[20px] text-[#151875] relative after:absolute after:content-[""] after:bottom-0 after:left-0 after:h-[2px] after:w-[120px] after:bg-[#000000]'>
                Categories
              </h2>
            </div>
            <div className="mt-[30px]">
              <div className=" flex gap-3">
                <input type="checkbox" id="yes" />
                <p className="font-Sans font-semibold text-[16px] text-[#7E81A2]">
                  Prestashop
                </p>
              </div>
              <div className=" flex gap-3 mt-2">
                <input type="checkbox" id="yes" />
                <p className="font-Sans font-semibold text-[16px] text-[#7E81A2]">
                  Magento
                </p>
              </div>
              <div className=" flex gap-3 mt-2">
                <input type="checkbox" id="yes" />
                <p className="font-Sans font-semibold text-[16px] text-[#7E81A2]">
                  Bigcommerce
                </p>
              </div>

              <div className=" flex gap-3 mt-2">
                <input type="checkbox" id="yes" />
                <p className="font-Sans font-semibold text-[16px] text-[#7E81A2]">
                  osCommerce
                </p>
              </div>

              <div className=" flex gap-3 mt-2">
                <input type="checkbox" id="yes" />
                <p className="font-Sans font-semibold text-[16px] text-[#7E81A2]">
                  3dcart
                </p>
              </div>
              <div className=" flex gap-3 mt-2">
                <input type="checkbox" id="yes" />
                <p className="font-Sans font-semibold text-[16px] text-[#7E81A2]">
                  Bags
                </p>
              </div>
              <div className=" flex gap-3 mt-2">
                <input type="checkbox" id="yes" />
                <p className="font-Sans font-semibold text-[16px] text-[#7E81A2]">
                  Accessories
                </p>
              </div>
              <div className=" flex gap-3 mt-2">
                <input type="checkbox" id="yes" />
                <p className="font-Sans font-semibold text-[16px] text-[#7E81A2]">
                  Jewellery
                </p>
              </div>
              <div className=" flex gap-3 mt-2">
                <input type="checkbox" id="yes" />
                <p className="font-Sans font-semibold text-[16px] text-[#7E81A2]">
                  Watches
                </p>
              </div>
            </div>

            <div className="mt-[50px]">
              <h2 className='font-Sans font-bold text-[20px] text-[#151875] relative after:absolute after:content-[""] after:bottom-0 after:left-0 after:h-[2px] after:w-[120px] after:bg-[#000000]'>
                Price Filter
              </h2>
            </div>
            <div className="mt-[30px]">
              <div className=" flex gap-3">
                <input type="checkbox" id="yes" />
                <p className="font-Sans font-semibold text-[16px] text-[#7E81A2]">
                  $0.00 - $150.00
                </p>
              </div>
              <div className=" flex gap-3 mt-2">
                <input type="checkbox" id="yes" />
                <p className="font-Sans font-semibold text-[16px] text-[#7E81A2]">
                  $150.00 - $350.00
                </p>
              </div>
              <div className=" flex gap-3 mt-2">
                <input type="checkbox" id="yes" />
                <p className="font-Sans font-semibold text-[16px] text-[#7E81A2]">
                  $150.00 - $504.00
                </p>
              </div>
              <div className=" flex gap-3 mt-2">
                <input type="checkbox" id="yes" />
                <p className="font-Sans font-semibold text-[16px] text-[#7E81A2]">
                  $450.00 +
                </p>
              </div>
            </div>

            <div className="mt-[50px]">
              <h2 className='font-Sans font-bold text-[20px] text-[#151875] relative after:absolute after:content-[""] after:bottom-0 after:left-0 after:h-[2px] after:w-[150px] after:bg-[#000000]'>
                Filter By Color
              </h2>
            </div>

            <div className="mt-[10px]">
              <ul className="flex gap-3">
                <li className="font-sans lg:text-[16px] text-[12px] font-normal text-[#7E81A2] lg:py-5 py-2 relative after:absolute after:left-0 after:top-[50%]  after:translate-y-[-50%] after:h-[15px] after:w-[15px] after:rounded-full after:bg-[#5E37FF] pl-5">
                  Blue
                </li>
                <li className="font-sans lg:text-[16px] text-[12px] font-normal text-[#7E81A2] lg:py-5 py-2 relative after:absolute after:left-0 after:top-[50%]  after:translate-y-[-50%] after:h-[15px] after:w-[15px] after:rounded-full after:bg-[#FF9437] pl-5">
                  Orange
                </li>
                <li className="font-sans lg:text-[16px] text-[12px] font-normal text-[#7E81A2] lg:py-5 py-2 relative after:absolute after:left-0 after:top-[50%]  after:translate-y-[-50%] after:h-[15px] after:w-[15px] after:rounded-full after:bg-[#FFBF95] pl-5">
                  Brown
                </li>
              </ul>
              <ul className="flex gap-3 ">
                <li className="font-sans lg:text-[16px] text-[12px] font-normal text-[#7E81A2] lg:py-5 py-2 relative after:absolute after:left-0 after:top-[50%]  after:translate-y-[-50%] after:h-[15px] after:w-[15px] after:rounded-full after:bg-[#33D221] pl-5">
                  Green
                </li>
                <li className="font-sans lg:text-[16px] text-[12px] font-normal text-[#7E81A2] lg:py-5 py-2 relative after:absolute after:left-0 after:top-[50%]  after:translate-y-[-50%] after:h-[15px] after:w-[15px] after:rounded-full after:bg-[#E248FF] pl-5">
                  Purple
                </li>
                <li className="font-sans lg:text-[16px] text-[12px] font-normal text-[#7E81A2] lg:py-5 py-2 relative after:absolute after:left-0 after:top-[50%]  after:translate-y-[-50%] after:h-[15px] after:w-[15px] after:rounded-full after:bg-[#26CBFF] pl-5">
                  Sky
                </li>
              </ul>
            </div>
          </div>

          <div className=" lg:w-[73%] w-full">
            <Link to="/ProductDetails">
            <div className="lg:flex justify-between mt-[50px] px-3">
              <div className="lg:w-[40%] w-full">
                <div className="">
                  <img className="w-full" src={List01} alt="" />
                </div>
              </div>

              <div clclassName="lg:w-[55%] w-full">
                <div className=" px-10">
                  <div className="flex gap-10">
                    <h2 className="font-Sans font-bold text-[24px] text-[#111C85] ">
                      Dictum morbi
                    </h2>
                    <div className="flex gap-7 items-center text-center">
                      <span className=" relative before:absolute before:right-[50%] before:top-[50%] before:translate-y-[-50%] before:h-[15px] before:w-[15px] before:rounded-full before:bg-[#5E37FF]"></span>
                      <span className=" relative before:absolute before:right-[50%] before:top-[50%] before:translate-y-[-50%] before:h-[15px] before:w-[15px] before:rounded-full before:bg-[#DE9034]"></span>
                      <span className=" relative before:absolute before:right-[50%] before:top-[50%] before:translate-y-[-50%] before:h-[15px] before:w-[15px] before:rounded-full before:bg-[#E60584]"></span>
                    </div>
                  </div>

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
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Magna in est adipiscing in phasellus non in justo.
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
                  <img className="w-full" src={List02} alt="" />
                </div>
              </div>

              <div clclassName="lg:w-[55%] w-full">
                <div className=" px-10">
                  <div className="flex gap-10">
                    <h2 className="font-Sans font-bold text-[24px] text-[#111C85] ">
                      Sodales sit
                    </h2>
                    <div className="flex gap-7 items-center text-center">
                      <span className=" relative before:absolute before:right-[50%] before:top-[50%] before:translate-y-[-50%] before:h-[15px] before:w-[15px] before:rounded-full before:bg-[#5E37FF]"></span>
                      <span className=" relative before:absolute before:right-[50%] before:top-[50%] before:translate-y-[-50%] before:h-[15px] before:w-[15px] before:rounded-full before:bg-[#DE9034]"></span>
                      <span className=" relative before:absolute before:right-[50%] before:top-[50%] before:translate-y-[-50%] before:h-[15px] before:w-[15px] before:rounded-full before:bg-[#E60584]"></span>
                    </div>
                  </div>

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
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Magna in est adipiscing in phasellus non in justo.
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
                  <img className="w-full" src={List03} alt="" />
                </div>
              </div>

              <div clclassName="lg:w-[55%] w-full">
                <div className=" px-10">
                  <div className="flex gap-10">
                    <h2 className="font-Sans font-bold text-[24px] text-[#111C85] ">
                      Nibh varius
                    </h2>
                    <div className="flex gap-7 items-center text-center">
                      <span className=" relative before:absolute before:right-[50%] before:top-[50%] before:translate-y-[-50%] before:h-[15px] before:w-[15px] before:rounded-full before:bg-[#5E37FF]"></span>
                      <span className=" relative before:absolute before:right-[50%] before:top-[50%] before:translate-y-[-50%] before:h-[15px] before:w-[15px] before:rounded-full before:bg-[#DE9034]"></span>
                      <span className=" relative before:absolute before:right-[50%] before:top-[50%] before:translate-y-[-50%] before:h-[15px] before:w-[15px] before:rounded-full before:bg-[#E60584]"></span>
                    </div>
                  </div>

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
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Magna in est adipiscing in phasellus non in justo.
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
                  <img className="w-full" src={List04} alt="" />
                </div>
              </div>

              <div clclassName="lg:w-[55%] w-full">
                <div className=" px-10">
                  <div className="flex gap-10">
                    <h2 className="font-Sans font-bold text-[24px] text-[#111C85] ">
                      Mauris quis
                    </h2>
                    <div className="flex gap-7 items-center text-center">
                      <span className=" relative before:absolute before:right-[50%] before:top-[50%] before:translate-y-[-50%] before:h-[15px] before:w-[15px] before:rounded-full before:bg-[#5E37FF]"></span>
                      <span className=" relative before:absolute before:right-[50%] before:top-[50%] before:translate-y-[-50%] before:h-[15px] before:w-[15px] before:rounded-full before:bg-[#DE9034]"></span>
                      <span className=" relative before:absolute before:right-[50%] before:top-[50%] before:translate-y-[-50%] before:h-[15px] before:w-[15px] before:rounded-full before:bg-[#E60584]"></span>
                    </div>
                  </div>

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
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Magna in est adipiscing in phasellus non in justo.
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
                  <img className="w-full" src={List05} alt="" />
                </div>
              </div>

              <div clclassName="lg:w-[55%] w-full">
                <div className=" px-10">
                  <div className="flex gap-10">
                    <h2 className="font-Sans font-bold text-[24px] text-[#111C85] ">
                      Morbi sagittis
                    </h2>
                    <div className="flex gap-7 items-center text-center">
                      <span className=" relative before:absolute before:right-[50%] before:top-[50%] before:translate-y-[-50%] before:h-[15px] before:w-[15px] before:rounded-full before:bg-[#5E37FF]"></span>
                      <span className=" relative before:absolute before:right-[50%] before:top-[50%] before:translate-y-[-50%] before:h-[15px] before:w-[15px] before:rounded-full before:bg-[#DE9034]"></span>
                      <span className=" relative before:absolute before:right-[50%] before:top-[50%] before:translate-y-[-50%] before:h-[15px] before:w-[15px] before:rounded-full before:bg-[#E60584]"></span>
                    </div>
                  </div>

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
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Magna in est adipiscing in phasellus non in justo.
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
                  <img className="w-full" src={List06} alt="" />
                </div>
              </div>

              <div clclassName="lg:w-[55%] w-full">
                <div className=" px-10">
                  <div className="flex gap-10">
                    <h2 className="font-Sans font-bold text-[24px] text-[#111C85] ">
                      Ultricies venenatis
                    </h2>
                    <div className="flex gap-7 items-center text-center">
                      <span className=" relative before:absolute before:right-[50%] before:top-[50%] before:translate-y-[-50%] before:h-[15px] before:w-[15px] before:rounded-full before:bg-[#5E37FF]"></span>
                      <span className=" relative before:absolute before:right-[50%] before:top-[50%] before:translate-y-[-50%] before:h-[15px] before:w-[15px] before:rounded-full before:bg-[#DE9034]"></span>
                      <span className=" relative before:absolute before:right-[50%] before:top-[50%] before:translate-y-[-50%] before:h-[15px] before:w-[15px] before:rounded-full before:bg-[#E60584]"></span>
                    </div>
                  </div>

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
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Magna in est adipiscing in phasellus non in justo.
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
                  <img className="w-full" src={List07} alt="" />
                </div>
              </div>

              <div clclassName="lg:w-[55%] w-full">
                <div className=" px-10">
                  <div className="flex gap-10">
                    <h2 className="font-Sans font-bold text-[24px] text-[#111C85] ">
                      Scelerisque dignissim
                    </h2>
                    <div className="flex gap-7 items-center text-center">
                      <span className=" relative before:absolute before:right-[50%] before:top-[50%] before:translate-y-[-50%] before:h-[15px] before:w-[15px] before:rounded-full before:bg-[#5E37FF]"></span>
                      <span className=" relative before:absolute before:right-[50%] before:top-[50%] before:translate-y-[-50%] before:h-[15px] before:w-[15px] before:rounded-full before:bg-[#DE9034]"></span>
                      <span className=" relative before:absolute before:right-[50%] before:top-[50%] before:translate-y-[-50%] before:h-[15px] before:w-[15px] before:rounded-full before:bg-[#E60584]"></span>
                    </div>
                  </div>

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
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Magna in est adipiscing in phasellus non in justo.
                  </p>
                  <div className="flex mt-[20px] gap-6 text-[#9295AA]">
                    <FiShoppingCart />
                    <FaRegHeart />
                    <IoSearch />
                  </div>
                </div>
              </div>
            </div>
            </Link>
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

export default Product;
