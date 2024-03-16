import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Product from "./pages/Product";
import Products from "./pages/Products";
import MainLayout from "./components/MainLayout";
import NotFoundPage from "./pages/NotFoundPage";


const App = () => {
  return (
    <div>
      <Routes>
        <Route path="*" element={<NotFoundPage />} />

        <Route element={<MainLayout/>}> 
          <Route index path="/" element={<Home />} />
          <Route path="/about" element={<About />} />

          <Route path="products">
            <Route index element={<Products />} />
            <Route path=":categoryID/:productID" element={<Product />} />
          </Route>
        </Route>
      </Routes>
    </div>
  );
}

export default App;