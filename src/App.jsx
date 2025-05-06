import { Routes, Route } from "react-router-dom";
import Home from "./HomeComponents/Home/Home";
import Navbar from "./Layout/Navbar/Navbar";
import ProductHome from "./ProductsComponent/ProductHome/ProductHome.jsx";
import Products from "./ProductsComponent/Products/Products.jsx";
import { lighting } from "./ProductsComponent/ProductsCategories.jsx";
import Lighteing from "./indiviualProducts/Lighteing/Lighteing.jsx";
import Chandelier from "../src/indiviualProducts/Lighteing/Chandelier.jsx";
import Lamps from "../src/indiviualProducts/Lighteing/Lamps.jsx";
import Lanterns from "../src/indiviualProducts/Lighteing/Lanterns.jsx";
import Scones from "../src/indiviualProducts/Lighteing/Scones.jsx";
import Details from "./indiviualProducts/ImagesDetails/Details.jsx";
function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="/products" element={<Products />} />
        <Route
          path="/center-piece"
          element={<ProductHome cateogoryImage={lighting} />}
        />
        <Route
          path="/clocks"
          element={<ProductHome cateogoryImage={lighting} />}
        />
        <Route path="/lighting" element={<Lighteing />} />
        <Route
          path="/mirrors"
          element={<ProductHome cateogoryImage={lighting} />}
        />
        <Route
          path="/porcelain"
          element={<ProductHome cateogoryImage={lighting} />}
        />
        <Route
          path="/paintings"
          element={<ProductHome cateogoryImage={lighting} />}
        />
        <Route
          path="/seating"
          element={<ProductHome cateogoryImage={lighting} />}
        />
        <Route
          path="/storage"
          element={<ProductHome cateogoryImage={lighting} />}
        />
        <Route
          path="/sculpture"
          element={<ProductHome cateogoryImage={lighting} />}
        />
        <Route
          path="/silverwave"
          element={<ProductHome cateogoryImage={lighting} />}
        />
        <Route
          path="/tables"
          element={<ProductHome cateogoryImage={lighting} />}
        />
        <Route
          path="/dining-room"
          element={<ProductHome cateogoryImage={lighting} />}
        />
        <Route
          path="/living-room"
          element={<ProductHome cateogoryImage={lighting} />}
        />
        <Route
          path="/marbles"
          element={<ProductHome cateogoryImage={lighting} />}
        />
        <Route
          path="/bed-room"
          element={<ProductHome cateogoryImage={lighting} />}
        />
        <Route
          path="/crystal"
          element={<ProductHome cateogoryImage={lighting} />}
        />
        {/* Lightening categories routes */}
        <Route
          path="/lighting/chandelier"
          element={<Chandelier cateogoryImage={lighting} />}
        />
        <Route
          path="/lighting/lanterns"
          element={<Lanterns cateogoryImage={lighting} />}
        />
        <Route
          path="/lighting/scones"
          element={<Scones cateogoryImage={lighting} />}
        />
        <Route path="/lighting/lamps" element={<Lamps />} />
        {/* Images Details :  */}
        <Route path="/details" element={<Details />} />
      </Routes>
    </>
  );
}
export default App;
