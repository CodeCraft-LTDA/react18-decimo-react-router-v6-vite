import { Routes, Route, Outlet } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Product from "./pages/Product";
import Products from "./pages/Products";
import MainLayout from "./components/MainLayout";
import NotFoundPage from "./pages/NotFoundPage";
import AuthMiddleware from "./middleware/AuthMiddleware";
import Login from "./pages/Login";


const App = () => {
  return (
    <div>
      <Routes>
        <Route path="*" element={<NotFoundPage />} />

        <Route element={<MainLayout/>}> 
          <Route index path="/" element={
            <AuthMiddleware>
              <Home />
            </AuthMiddleware>
          } />

          <Route path="/about" element={<About />} />

          <Route path="products">
            <Route index element={<Products />} />
            <Route path=":categoryID/:productID" element={<Product />} />
          </Route>

          <Route path="/login" element={<Login />} />
        </Route>

        <Route path="admin" element={
        <AuthMiddleware>
          <Outlet/>
        </AuthMiddleware>}>
          <Route index element={<h1>Admin</h1>} />
          <Route path="dashboard" element={<h1>Dashboard</h1>} />
          <Route path="settings" element={<h1>Settings</h1>} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;