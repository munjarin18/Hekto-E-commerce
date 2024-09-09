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
import store from "./store.js"
import { Provider } from 'react-redux'
import Rootlayout from "./components/RootLayout";
import Home from "./pages/Home";
import ShopGrid from "./pages/ShopGrid";
import ShopList from "./pages/ShopList";
import Product from "./pages/Product";
import ProductDetails from "./pages/ProductDetails";
import Addtocart from "./pages/Addtocart";
import { ContextApi } from "./components/ContextApi";
import Page from "./pages/Page";
import Contact from "./pages/Contact";
import App from "./App.jsx";


let router = createBrowserRouter(
  createRoutesFromElements(
    <Route element={<Rootlayout />}>
      <Route index path="/" element={<Home />}></Route>
      <Route  path="/page" element={<Page />}></Route>
      <Route  path="/shopGrid" element={<ShopGrid />}></Route>
      <Route  path="/shopGrid/:id" element={<ProductDetails />}></Route>
      <Route  path="/shopList" element={<ShopList />}></Route>
      <Route  path="/product" element={<Product />}></Route>
      {/* <Route  path="/productDetails" element={<ProductDetails />}></Route> */}
      <Route  path="/addtocart" element={<Addtocart />}></Route>
      <Route  path="/contact" element={<Contact />}></Route>

    

    </Route>
  )
);

ReactDOM.createRoot(document.getElementById("root")).render(
  <Provider store={store}>
   <ContextApi>
    <App/>
   <RouterProvider router={router} />
   </ContextApi>
   </Provider>
   
  
);
