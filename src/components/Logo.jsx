import logoimg from '../assets/logo.png';

const Logo = () => (
    <div className="mt-10 rounded-full w-[110px] h-[110px] md:w-[150px] md:h-[150px] xl:w-[200px] xl:h-[200px] xl:top-4 md:top-7 relative md:absolute z-[1] logo flex items-center justify-center">
        <div className="mb-5">
            <h1><img src={logoimg} alt="logo" className="object-contain" /></h1>
        </div>
       
    </div>
)
 

export default Logo;