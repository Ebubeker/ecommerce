import { Route, Routes } from "react-router-dom";
import Home from "./pages/home/Home";
import About from "./pages/about/About";
import Layout from "./components/layout/Layout";
import Luxury from "./pages/luxury/Luxury";
import Aesthetics from "./pages/aesthetics/Aesthetics";
import NewTech from "./pages/newtech/NewTech";
import Product from "./pages/product/Product";
import Cart from "./pages/cart/Cart";

function App() {
  return (
    <Layout>
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/luxury" element={<Luxury />} />
        <Route path="/aesthetic" element={<Aesthetics />} />
        <Route path="/latestTech" element={<NewTech />} />
        <Route path="/product" element={<Product />} />
        <Route path="/cart" element={<Cart />} />
      </Routes>
    </Layout>
  );
}

export default App;
