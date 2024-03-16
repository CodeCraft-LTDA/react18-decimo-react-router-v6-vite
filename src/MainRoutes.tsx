import { Routes, Route, Outlet, useRoutes } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Product from "./pages/Product";
import Products from "./pages/Products";
import MainLayout from "./components/MainLayout";
import NotFoundPage from "./pages/NotFoundPage";
import AuthMiddleware from "./middleware/AuthMiddleware";
import Login from "./pages/Login";


//METODO 1 USANDO JSX
// const MainRoutes = () => {
//     return (
//         <Routes>
//         <Route path="*" element={<NotFoundPage />} />

//         <Route element={<MainLayout/>}> 
//           <Route index path="/" element={
//             <AuthMiddleware>
//               <Home />
//             </AuthMiddleware>
//           } />

//           <Route path="/about" element={<About />} />

//           <Route path="products">
//             <Route index element={<Products />} />
//             <Route path=":categoryID/:productID" element={<Product />} />
//           </Route>

//           <Route path="/login" element={<Login />} />
//         </Route>

//         <Route path="admin" element={
//         <AuthMiddleware>
//           <Outlet/>
//         </AuthMiddleware>}>
//           <Route index element={<h1>Admin</h1>} />
//           <Route path="dashboard" element={<h1>Dashboard</h1>} />
//           <Route path="settings" element={<h1>Settings</h1>} />
//         </Route>
//       </Routes>
//     );
// }


//METODO 2 USANDO JAVASCRIPT
const MainRoutes = () => {
    const routes = useRoutes([
        {
            index: true,
            element: <Home />,
        },
        {
            path: "about",
            element: <About />,
        },
        {
            path: "products",
            element: <Products />,
            children: [
                {
                    index: true,
                    element: <Products />,
                },
                {
                    path: ":categoryID/:productID",
                    element: <Product />,
                }
            ]
        },
        {
            path: "login",
            element: <Login />,
        },
        {
            path: "admin",
            element: <AuthMiddleware><Outlet/></AuthMiddleware>,
            children: [
                {
                    index: true,
                    element: <h1>Admin</h1>,
                },
                {
                    path: "dashboard",
                    element: <h1>Dashboard</h1>,
                },
                {
                    path: "settings",
                    element: <h1>Settings</h1>,
                }
            ]
        },
        {
            path: "*",
            element: <NotFoundPage />,
        }
    ])

    return routes;
}

export default MainRoutes;