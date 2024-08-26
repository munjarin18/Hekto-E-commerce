import React from "react";
import Container from "./Container";
import chair01 from "../assets/get02.png";

const Get = () => {
  return (
    <section className='py-[50px]'>
      <Container>
        <div className="flex justify-between">
          <div className="w-[15%]"></div>
          <div className="w-[70%]">
            <img src={chair01} alt="" />
          </div>
          <div className="w-[15%]"></div>
        </div>
      </Container>
    </section>
  );
};

export default Get;
