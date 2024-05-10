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
import Navbar from "./components/Navbar";
import SideBar from "./components/SideBar";
import AllProductsPage from "./pages/AllProductsPage";
import MakeupPage from "./pages/MakeupPage";
import SpecificMakeupPage from "./pages/SpecificMakeupPage";
import WorkshopsPage from "./pages/WorkshopsPage";
import SpecificWorkshopPage from "./pages/SpecificWorkshopPage";

const App = () => {
  return (
    <>
      <div>
        <Navbar />
        <SideBar />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="shop" element={<ProductsPage />} />
          <Route path="products/:id" element={<SpeciicProductPage />} />
          <Route path="products" element={<AllProductsPage />} />
          <Route path="about" element={<About />} />
          <Route path="bookings" element={<Bookings />} />
          <Route path="makeup" element={<MakeupPage />} />
          <Route path="makeup/:id" element={<SpecificMakeupPage/>} />
          <Route path="courses" element={<Courses />} />
          <Route path="workshops" element={<WorkshopsPage />} />
          <Route path="workshops/:id" element={<SpecificWorkshopPage/>} />
          <Route path="discounts" element={<DiscountsPage />} />
          <Route path="contact" element={<ContactPage />} />
        </Routes>
      </div>
    </>
  );
};

export default App;
