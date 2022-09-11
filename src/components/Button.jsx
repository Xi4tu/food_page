import React from 'react'

const Button = ({title, styles}) => (
    <div className={`bg-primary w-[192px] h-[60px] flex justify-center items-center cursor-pointer hover:bg-shineblue duration-75 ${styles}`}>
        <h4 className="text-white uppercase font-poppins font-bold">{title}</h4>
    </div>
);


export default Button