import { Route } from "wouter";
import GifDescription from "../../pages/Detail/GifDescription";
import GifGrid from "./GifGrid";
import Index from "../../pages/Home/Index";

const Gifphy = () => {
  return (
    <div className="px-3 w-full min-h-screen ">
      <Route path="/" component={Index} />
      <Route path="/search/:keyword" component={GifGrid} />
      <Route path="/gif/:id" component={GifDescription} />
    </div>
  );
};

export default Gifphy;
