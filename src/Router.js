import React from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import App from "./App";
import HomePage from "./pages/HomePage";
import ProductListPage from "./pages/ProductListPage";
import ProductPage from "./pages/ProductPage";
import CartPage from "./pages/CartPage";
import CheckoutPage from "./pages/CheckoutPage";
import OrderPage from "./pages/OrderPage";
import PageNotFound from './components/PageNotFound/PageNotFound';


const Router = () => (
    <BrowserRouter>
        <App>
            <Routes>
                <Route path="/" element={<Navigate to="capstone" />} />

                <Route path="capstone" element={<HomePage />} />

                <Route path="/product" element={<ProductListPage />} />

                <Route path="/product/:productId" element={<ProductPage />} />

                <Route path="/cart" element={<CartPage />} />

                <Route path="/checkout" element={<CheckoutPage />} />

                <Route path="/order" element={<OrderPage />} />

                <Route path="*" element={<PageNotFound />} />
            </Routes>
        </App>
    </BrowserRouter>
);

export default Router;
