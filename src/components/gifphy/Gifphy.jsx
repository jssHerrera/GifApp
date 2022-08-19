import { Route } from "wouter";
import GifDescription from "../../pages/Detail/GifDescription";
import GifGrid from "./GifGrid";
import Index from "../../pages/Home/Index";

const Gifphy = () => {
  
  return (
    <div className=" py-8 px-3 w-full">
      <Route path="/" component={Index} />
      <Route path="/search/:keyword" component={GifGrid} />
      <Route path="/gif/:id" component={GifDescription} />
    </div>
  );
};

export default Gifphy;
