import React from 'react'
import Container from './Container'
import Flex from './Flex'
import { CiMail } from "react-icons/ci";
import { FiPhoneCall } from "react-icons/fi";
import { FaRegUser } from "react-icons/fa";
import { CiHeart } from "react-icons/ci";
import { BsCart } from "react-icons/bs";



const Header = () => {
  return (
    <section className='bg-[#7E33E0] text-white'>
   <Container>
    <Flex className="justify-between">
        <div className=" flex justify-between w-[30%] py-[15px] items-center gap-x-10">
         <div className="flex gap-x-2 items-center ">
         <CiMail />
         <h3 className='text-[#F1F1F1] text-[16px] font-sans font-medium'>mhhasanul@gmail.com</h3>
         </div>
         <div className="flex gap-x-2 items-center ">
         <FiPhoneCall />
         <h3 className='text-[#F1F1F1] text-[16px] font-sans font-medium'>(12345)67890</h3>
         </div>
        </div>
        <div className="w-[70%] flex justify-end text-end ">
            <ul className='flex gap-x-6 text-center items-center'>
                <li>
                    <select name='' id='' className='outline-none bg-[#7E33E0] text-[16px] font-sans font-medium '>
                      <option value="" >English</option>
                      <option value="" >Bengali</option>
                    </select>
                </li>
                <li>
                    <select name='' id='' className='outline-none bg-[#7E33E0] text-[16px] font-sans font-medium'>
                      <option value="" >USD</option>
                      <option value="" >BDT</option>
                    </select>
                </li>
                <li className='flex gap-x-2 text-[16px] font-sans font-medium items-center'>Login <FaRegUser /></li>
                <li className='flex gap-x-2 text-[16px] font-sans font-medium  items-center'>Wishlist <CiHeart /></li>
                <li className='text-[20px]'><BsCart /></li>
            </ul>
        </div>
    </Flex>
    </Container>
    </section>
 
  )
}

export default Header
