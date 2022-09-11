import Card from "./Card";
import Titulo from "./Titulo";
import Button from "./Button";
import { Products } from "../constants";

const Productos = () => (
    <section className="flex justify-center" id="productos">
        <div className="lg:w-[1300px] h-full flex flex-col items-center xs:w-[300px] ss:w-full ss:px-5">
            <Titulo title="Productos" styles={`lg:w-[1000px] xs:w-[270px] md:w-[800px] ss:w-[500px]`} />
            <div className="w-full flex justify-center flex-wrap mt-16">
                {Products.map((prod, index) => (
                    <Card key={prod.id} title={prod.title} img={prod.img} />
                ))}
            </div>
            <div className="w-full flex justify-center mt-5">
                <Button title="ver todos" />
            </div>
        </div>
    </section>
);


export default Productos