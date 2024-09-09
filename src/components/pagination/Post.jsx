import React, { useContext } from 'react'
import { apiData } from '../ContextApi'
import { Link } from 'react-router-dom'





const Post = ({allData}) => {

  return (
<>

{allData.map((item)=>(
  
  <div className="lg:w-[24%] w-full sm:w-[50%] ">
              <Link to={`/shopGrid/${item.id}`}>
                <div className="py-[30px] px-[30px] bg-[#EBF4F3] ">
                    <img className='w-full' src={item.thumbnail} alt="" />
                </div>
            </Link>
                <div className="  relative text-center  w-[100%] py-[20px] bg-[#fff] mt-[30px] mb-6 before:absolute  before:content-[''] before:bottom-0 before:right-0 before:w-[100%] before:h-[0] before:bg-[#2F1AC4] before:duration-300 before:ease-in-out before:hover:h-[100%] before:hover:text-[#fff] ">
                    <h3 className=' relative font-Sans font-bold text-[17px] text-[#FB2E86] after:absolute after:content-[""] after:top-[30px] after:left-[50%] after:translate-x-[-50%] after:h-[3px] after:w-[70%]  after:bg-[#05E6B7]'>{item.title}</h3>

                    <h4 className='relative font-Sans font-bold text-[16px] text-[#000] py-2'>${item.price}</h4>
                 


                </div>
               
            </div>
         
          ))}

</>
    

  )
}

export default Post