import NavbarLinks from './NavbarLinks';
import NavbarMobile from './NavbarMobile';
import Logo from './Logo';
import { Icon } from "@iconify/react";

const Navbar = () => (
    <div className="md:w-full flex md:justify-center w-full items-center justify-between px-10">
        <a className="md:hidden" href="#restaurantes"><Icon icon="carbon:location" color="white" width={30} /></a>
        <Logo />
        <NavbarLinks />
        <NavbarMobile />
    </div>
)
export default Navbar;