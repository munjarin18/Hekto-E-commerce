import * as React from "react";
import * as ReactDOM from "react-dom/client";
import "slick-carousel/slick/slick.css";


import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";
import "./index.css";
import Rootlayout from "./components/RootLayout";
import Home from "./pages/Home";
import ShopGrid from "./pages/ShopGrid";
import ShopList from "./pages/ShopList";
import Product from "./pages/Product";
import ProductDetails from "./pages/ProductDetails";
import Addtocart from "./pages/Addtocart";


let router = createBrowserRouter(
  createRoutesFromElements(
    <Route element={<Rootlayout />}>
      <Route index path="/" element={<Home />}></Route>
      <Route index path="/ShopGrid" element={<ShopGrid />}></Route>
      <Route index path="/ShopList" element={<ShopList />}></Route>
      <Route index path="/Product" element={<Product />}></Route>
      <Route index path="/ProductDetails" element={<ProductDetails />}></Route>
      <Route index path="/Addtocart" element={<Addtocart />}></Route>

    

    </Route>
  )
);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
