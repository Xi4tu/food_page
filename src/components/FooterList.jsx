import React from 'react'
const FooterList = ({array}) => (
    <div className="xs:text-center lg:text-left">
        <h4 className="font-poppins text-white text-[20px] font-medium uppercase mb-2">{array.title}</h4>
        <div className="">
            <ul>
           {array.links.map((link) => (
                    <a key={link.title} href={`#${link.title}`}><li key={link.key} className="text-white text-[18px] font-normal hover:text-shineblue duration-150 mb-1">{link.title}</li></a>
                ))}
            </ul>
        </div>
    </div>
)


export default FooterList