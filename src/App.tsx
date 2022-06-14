import React from 'react';
import {BrowserRouter, Route, Routes} from "react-router-dom";
import {ROUTE_HOME, ROUTE_LOGIN, ROUTE_PRODUCT, ROUTE_REGISTER, ROUTE_STORE} from "./constants/routes";
import Store from "./containers/Store";
import Home from "./containers/Home";
import Product from "./containers/Product";
import Register from "./containers/Register";
import Login from "./containers/Login";
function App() {
  return (
      <BrowserRouter>
        <Routes>
            <Route path={ROUTE_HOME} element={<Home/>}/>
            <Route path={ROUTE_STORE} element={<Store/>} />
            <Route path={ROUTE_PRODUCT}  element={<Product/>}/>
            <Route path={ROUTE_REGISTER} element={<Register/>} />
            <Route path={ROUTE_LOGIN} element={<Login/>} />
        </Routes>
      </BrowserRouter>
  );
}

export default App;
