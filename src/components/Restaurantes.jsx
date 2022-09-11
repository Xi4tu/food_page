import Titulo from "./Titulo";
import { Restaurants } from "../constants";

const Restaurantes = () => (
    <section className="w-full h-full flex flex-col" id="restaurantes">
        <div className="w-full h-full mt-10 mb-5 flex justify-center items-center xs:px-5 lg:px-0">
            <div className="w-[900px]">
                <Titulo title="Restaurantes" />
            </div>
        </div>
        <div className="flex justify-center py-10">
            <div className="lg:w-[1000px] lg:h-[700px] xs:w-full flex flex-col flex-wrap items-center ss:h-[750px] ss:px-5">
                {Restaurants.map((res) => (
                    <div key={res.id} className="group w-fit h-fit rounded-xl p-2 cursor-pointer hover:bg-shineblue duration-200 mb-4">
                        <h4 className="text-black font-poppins font-semibold uppercase text-[24px] group-hover:text-white">{res.title}</h4>
                    </div>
                ))}
            </div>
        </div>
    </section>
);
    
  
export default Restaurantes

