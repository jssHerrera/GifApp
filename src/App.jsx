
import Categorias from "./pages/Aside/Categorias";
import Gifphy from "./components/gifphy/Gifphy";
import { GifProvider } from "./context/GifProvider";

const App = () => {
  return (
    <GifProvider>
      <div className="flex flex-col gap-3 md:flex-row-reverse">
        <Gifphy />
        <Categorias />
      </div>
    </GifProvider>
  );
};

export default App;
