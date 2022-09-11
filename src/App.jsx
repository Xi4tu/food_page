import Productos from './components/Productos';
import Promo from './components/Promo';
import Restaurantes from "./components/Restaurantes";
import Carousel from './components/Carousel';
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";

const App = () => (
    <div className="bg-white w-full overflow-hidden">
      <div className="bg-primary sm:w-full sm:h-[146px] flex items-center justify-center w-full h-[100px] ">
        <Navbar />
      </div>
      <div className="">
        <Carousel />
      </div>
      <div className="mt-32">
        <Productos />
        <Promo />
        <Restaurantes />
        <Footer />
      </div>
    </div>
);
  

export default App;