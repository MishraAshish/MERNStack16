import React, { Component, Suspense, lazy } from "react";
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";

import "./app.css"

let Header = lazy(()=> import("./CommonComponent/HeaderComponent"));
//import ChildComponent from "./CommonComponent/ChildComponent";
let Home = lazy(()=> import("./CommonComponent/HomeComponent"));
let Footer = lazy(()=> import("./CommonComponent/FooterComponent"));
let About = lazy(()=> import("./CommonComponent/AboutComponent"));
let NotFound = lazy(()=> import("./CommonComponent/NotFound"));
//import User from "./AppComponents/User/UserComponent";
//import User from "./AppComponents/User/UserContainer";
let UserHook = lazy(()=> import("./AppComponents/User/UserHook"));
let Product = lazy(()=> import("./AppComponents/Product/ProductComponent"));
let Cart = lazy(()=> import("./AppComponents/Cart/CartComponent"));
let UnderstandingHooks = lazy(()=> import("./Hooks/UnderstandingHooks"));


export default class Application extends Component {
        render(){
            return( 
                <Router>
                    <Suspense fallback={<div>Loading...</div>}>
                    <Header />
                        <Routes>
                            <Route path="/" element={<Home user={"User"} userName={"Boubacar"}/>}/>
                            <Route path="/home" element={<Home user={"User"} userName={"Boubacar"}/>}/>
                            <Route path="/product" element={<Product />} />
                            <Route path="/hook" element={<UserHook />} />
                            <Route path="/learn" element={<UnderstandingHooks />} />
                            <Route path="/cart" element={<Cart />} />
                            <Route path="/about" element={<About />} />
                            <Route path='/about/:id' element={<About />} />
                            <Route path="*" element={<NotFound />} />
                        </Routes>
                    <Footer />
                    </Suspense>
                </Router>
            )
        }
}