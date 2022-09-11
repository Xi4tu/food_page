import React from 'react'

const Titulo = ({title, styles}) => (
    <div className={`bg-none w-full h-[63px] flex justify-center items-center title-gradient ${styles}`}>
        <h2 className="font-poppins font-bold text-black uppercase lg:text-[42px] xs:text-[30px]">{title}</h2>
    </div>
);


export default Titulo