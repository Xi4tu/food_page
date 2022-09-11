import React from 'react'
import Titulo from "./Titulo";
import Button from "./Button";

const PromoCard = ({title, desc, img, styles}) => (
    <div className={`lg:w-[500px] lg:mb-16 flex flex-col items-center xs:w-[400px] xs:mb-5 ss:w-[600px] ${styles}`}>
        <div className="w-full xs:flex xs:justify-center">
            <Titulo title={title} styles={`lg:w-[530px] xs:w-[270px] ss:w-[600px]`} />
        </div>
        <div className="mt-8">
            <img src={img} alt="promo5" className="lg:w-[550px] xs:w-[300px] ss:w-[600px]" />
        </div>
        <div className="flex flex-col h-[200px] items-center">
            <div className="lg:w-[530px] lg:h-[100px] mt-5 xs:mb-5 xs:w-[300px] ss:w-[500px]">
                <p className="font-poppins lg:text-[20px] font-medium text-black text-center xs:text-[14px] ss:text-[20px]">
                    {desc}
                </p>
            </div>
            <div className="">
                <Button title="¡pide ahora!" />
            </div>
        </div>
    </div>
)


export default PromoCard