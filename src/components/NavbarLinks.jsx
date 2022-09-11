import { navLinks } from "../constants";

const NavbarLinks = () => {
    return (
    <nav className="hidden md:flex">
        <ul className="sm:flex">
            {navLinks.map((nav, index) => (
                <li key={nav.id} className="text-white font-poppins text-[14px] xl:text-[16px] font-medium uppercase ">
                    <a href={`#${nav.id}`} className={`${index === navLinks.length - 4 ? 'xl:ml-96 ml-72' : 'ml-12'} hover:text-shineblue`}>
                        {nav.title}
                    </a>
                </li>
            ))}
        </ul>
    </nav>
  )
}

export default NavbarLinks;