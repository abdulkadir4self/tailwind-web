import React from "react";
import './Section.css';

function Section(props) {
  return (
    <>
      <div className="container flex py-20 sectionContainer">
        <div className="w-6/12 sectionImgContainer">
          <img className="w-full h-full object-cover p-20" src={props.img} />
        </div>

        <div className="w-6/12 sectionContentContainer px-32 flex flex-col justify-center items-start" data-aos="fade-left" data-aos-easing="linear" data-aos-duration="3000" >
          <h1 className="text-4xl font-semibold pb-5"> {props.h1} </h1>

          <p className="pb-5 text-[#505F98] text-lg ">{props.para1}</p>

          <p className="text-[#505F98] text-lg pb-10">{props.para2}</p>

          <button
            className={`${props.display}`}
          >
            {props.btn}
          </button>
        </div>
      </div>
    </>
  );
}
export default React.memo(Section);
