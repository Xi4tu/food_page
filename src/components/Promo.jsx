import { tuDecides,clickCollect,delivery } from "../assets";
import Titulo from "./Titulo";
import Button from "./Button";
import PromoCard from "./PromoCard";
const Promo = () => (

    <section className="w-full h-full bg-[#f2f242] mt-20 flex flex-col justify-center items-center">
        <div className="mt-10">
            <img src={tuDecides} alt="" className="lg:w-[400px] xs:w-[300px]" />
        </div>
        <div className="lg:w-[1500px] h-full mt-20 flex lg:flex-row lg:justify-evenly xs:flex-col xs:w-[200px] xs:items-center">
            <PromoCard title="click & collect" img={clickCollect} desc="Pide por anticipado, evita la cola y recoge en tu restaurante favorito." />
            <PromoCard title="delivery" img={delivery} desc="Pide a domicilio y disfruta de Taco Bell en casa." />
        </div>
    </section>
)


export default Promo;