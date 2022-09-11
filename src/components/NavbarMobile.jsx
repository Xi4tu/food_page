import { navLinks } from "../constants";
import { useState } from 'react';
import { close, menuicon } from "../assets";

const NavbarMobile = () => {
    const [toggle, setToggle] = useState(false);

    return (
        <div className="md:hidden">
            <img className="w-[20px] h-[20px]" src={toggle ? close : menuicon}  alt="burdermenu"  onClick={() => setToggle((prev) => !prev)}  />
            <div className={`${toggle ? 'flex' : 'hidden'} bg-primary w-fit h-[200px] absolute z-[20] mt-10 p-4 right-1 rounded-xl sidebar`}>
                <nav className="flex">
                    <ul className="flex flex-col">
                        {navLinks.map((nav, index) => (
                            <li key={nav.id} className={`${index === navLinks.length - 1 ? 'mb-0' : 'mb-2'} text-white font-poppins text-[10px] xl:text-[16px] font-medium uppercase`}>
                                <a href={`#${nav.id}`} className="hover:text-shineblue">
                                    {nav.title}
                                </a>
                            </li>
                        ))}
                    </ul>
                </nav>
            </div>
      </div>
  )
}

export default NavbarMobile;