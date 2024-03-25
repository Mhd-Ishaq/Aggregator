import React from "react";
import { Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import ProductsPage from "./pages/ProductsPage";
import About from "./pages/About";
import Bookings from "./pages/Bookings";
import Courses from "./pages/Courses";
import SpeciicProductPage from "./pages/SpeciicProductPage";
import DiscountsPage from "./pages/DiscountsPage";
import ContactPage from "./pages/ContactPage";

const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="shop" element={<ProductsPage />}/>
        <Route path="shop/:id" element={<SpeciicProductPage />}/>
        <Route path="about" element={<About />}/>
        <Route path="bookings" element={<Bookings />}/>
        <Route path="courses" element={<Courses />}/>
        <Route path="discounts" element={<DiscountsPage/>}/>
        <Route path="contact" element={<ContactPage/>}/>
      </Routes>
    </>
  );
};

export default App;
