import React from "react";

const Card = ({id, title, img}) => (
    <div className="md:w-[420px] md:ml-5 lg:w-[350px] lg:h-[300px] card flex flex-col justify-between items-center mb-10 lg:mr-10 xs:mr-0 cursor-pointer hover:scale-105 hover:shadow-2xl duration-300 ">
        <div className="w-full flex justify-center items-center py-2">
            <h4 className="font-poppins font-bold text-[30px] uppercase text-white tracking-widest text_shadow">{title}</h4>
        </div>
        <div className="w-full">
            <img src={img} alt={id} />
        </div>
    </div>
)


export default Card;