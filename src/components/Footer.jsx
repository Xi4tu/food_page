import React from 'react'
import { googlePlay, appStore } from "../assets"
import { footerLinks } from "../constants"
import FooterList from "./FooterList"
import { Icon } from '@iconify/react';

const Footer = () => (
    <div className="bg-secondary lg:w-full lg:h-[600px] flex flex-col items-center xs:h-[1500px]">
        <div className="lg:w-[1500px] lg:h-[300px] mt-10 flex lg:flex-row lg:justify-around lg:items-start mb-6 xs:w-[1000px] xs:h-[1200px] xs:flex-col xs:items-center xs:justify-evenly">
            <div className="flex flex-col gap-4 items-center">
                <h4 className="font-poppins text-white text-[20px] font-medium uppercase">descargate la app</h4>
                <div>
                    <a href="#"><img src={googlePlay} alt="" /></a>
                </div>
                <div>
                    <a href="#"><img src={appStore} alt="" /></a>
                </div>
            </div>
            <div className="relative lg:w-[4px] lg:h-[300px] bg-[#363636]/20 left-[5px] xs:w-[300px] xs:h-[3px]"></div>
            <FooterList array={footerLinks[0]} />
            <FooterList array={footerLinks[1]} />
            <FooterList array={footerLinks[2]} />
        </div>
        <div className="lg:w-[1380px] flex flex-col xs:items-center lg:items-start">
            <div className="flex items-center py-2 border-b-4 border-[#363636]/20 lg:w-full">
                    <div>
                        <h4 className="text-white font-poppins font-medium text-[20px]">Encuéntranos</h4>
                    </div>
                    <div className="ml-1">
                        <a href="#restaurantes"><Icon icon="carbon:location" color="white" width={30} /></a>
                    </div>
            </div>
            <div className="mt-3 xs:px-8 lg:px-0">
                <p className="text-white font-poppins lg:text-[15px] xs:text-center lg:text-left xs:text-[10px]">Todos los artículos están sujetos a disponibilidad. TACO BELL, el diseño de BELL y las marcas relacionadas son marcas registradas de Taco Bell Corp.
                © 2022 Taco Bell Corp, todos los derechos reservados.</p>
            </div>
        </div>
    </div>
)

export default Footer