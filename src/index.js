/*!

=========================================================
* Argon Design System React - v1.1.2
=========================================================

* Product Page: https://www.creative-tim.com/product/argon-design-system-react
* Copyright 2023 Creative Tim (https://www.creative-tim.com)
* Licensed under MIT (https://github.com/creativetimofficial/argon-design-system-react/blob/master/LICENSE.md)

* Coded by Creative Tim

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

*/
import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom";

import "assets/vendor/nucleo/css/nucleo.css";
import "assets/vendor/font-awesome/css/font-awesome.min.css";
import "assets/scss/argon-design-system-react.scss?v1.1.0";
import "assets/scss/argon-dashboard-react.scss?v1.1.0";

import Index from "views/Index.js";
import Landing from "views/examples/Landing.js";
import Login from "views/examples/Login.js";
import Profile from "views/examples/Profile.js";
import Register from "views/examples/Register.js";
import Products from "views/popular/Products.js";
import AuthLayout from "layouts/Auth.js";
import AdminLayout from "layouts/Admin.js";
import WomenEssentials from "views/traveler/womenEssentials.js";
import MenEssentials from "views/traveler/menEssentials.js";
import ToddlerEssentials from "views/traveler/toddlerEssentials.js";
import BabyEssentials from "views/traveler/babyEssentials.js";
import ProductTemplate from "components/PageTemplats/ProductTemplate.js";
import Checklist from "components/Checklists/checklist.js";
import { weekendGetawayItems } from "variables/checklistItems.js";
import Businesslist from "views/checklists/businessLists";
import Adventurelist from "views/checklists/adventureList";
import Internationallist from "views/checklists/internationalList";
import PrivacyPolicy from "views/Legal/privacyPolicy";
import AboutUs from "views/Legal/About";
import FAQ from "views/Legal/FAQ";

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <BrowserRouter>
    <Routes>
      <Route path="/" exact element={<Index />} />
      <Route path="/landing-page" exact element={<Landing />} />
      <Route path="/popular-travel-essentials" exact element={<Products />} />
      <Route path="/privacy-policy" exact element={<PrivacyPolicy />} />
      <Route path="/about-us" exact element={<AboutUs />} />
      <Route path="/FAQ" exact element={<FAQ />} />
      <Route
        path="/weekend-getaway-checklist"
        exact
        element={
          <Checklist
            title={"Weekend Travel Essentials Checklist "}
            initialItems={weekendGetawayItems}
            description={
              "Streamline your weekend getaway packing with our curated travel essentials checklist. From must-have items to handy tips, ensure you're prepared for a stress-free adventure. Pack smarter, travel lighter, and make the most of every moment"
            }
          />
        }
      />
      <Route
        path="/business-travel-essentials-checklist"
        exact
        element={<Businesslist />}
      />
      <Route
        path="/adventure-travel-essentials-checklist"
        exact
        element={<Adventurelist />}
      />
      <Route
        path="/international-travel-essentials-checklist"
        exact
        element={<Internationallist />}
      />
      <Route
        path="/luggage"
        exact
        element={
          <ProductTemplate
            pageName={"luggage"}
            heroTitle={"Travel Essentials Luggage"}
            pageDescription={
              "Discover the perfect travel companion for your journey. Explore our curated selection of luggage essentials, designed to match your style and meet your travel needs. From sleek carry-ons to spacious duffels, find the ideal bag to accompany you on every adventure"
            }
          />
        }
      />
      <Route
        path="/electronics"
        exact
        element={
          <ProductTemplate
            pageName={"Electronics"}
            heroTitle={"Travel Essentials Electronics"}
            pageDescription={
              "Power up your travels with our handpicked electronics essentials. From portable chargers to noise-canceling headphones, stay connected and entertained wherever you go. Explore our collection and gear up for seamless tech-savvy adventures."
            }
          />
        }
      />
      <Route
        path="/apparel"
        exact
        element={
          <ProductTemplate
            pageName={"Apparel"}
            heroTitle={"Clothing Travel Essentials"}
            pageDescription={
              "Travel in style and comfort with our curated clothing and apparel travel essentials. From versatile layers to durable footwear, build a wardrobe that's both practical and chic for your adventures. Explore our collection and pack with confidence for every destination."
            }
          />
        }
      />
      <Route
        path="/health"
        exact
        element={
          <ProductTemplate
            pageName={"Health"}
            heroTitle={"Health Travel Essentials"}
            pageDescription={
              "Prioritize your well-being on the road with our curated selection of health and safety essentials. From first aid kits to hand sanitizers, travel confidently knowing you're prepared for any situation. Explore our collection and stay safe wherever your adventures take you."
            }
          />
        }
      />
      <Route
        path="/women-travel-essentials"
        exact
        element={<WomenEssentials />}
      />
      <Route path="/men-travel-essentials" exact element={<MenEssentials />} />
      <Route
        path="/toddler-travel-essentials"
        exact
        element={<ToddlerEssentials />}
      />
      <Route
        path="/baby-travel-essentials"
        exact
        element={<BabyEssentials />}
      />
      <Route path="/login-page" exact element={<Login />} />
      <Route path="/profile-page" exact element={<Profile />} />
      <Route path="/register-page" exact element={<Register />} />
      <Route path="/admin/*" element={<AdminLayout />} />
      <Route path="/auth/*" element={<AuthLayout />} />
      <Route path="*" element={<Navigate to="/" replace />} />
    </Routes>
  </BrowserRouter>
);
/*!

=========================================================
* Argon Dashboard React - v1.2.4
=========================================================

* Product Page: https://www.creative-tim.com/product/argon-dashboard-react
* Copyright 2024 Creative Tim (https://www.creative-tim.com)
* Licensed under MIT (https://github.com/creativetimofficial/argon-dashboard-react/blob/master/LICENSE.md)

* Coded by Creative Tim

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

*/
// import React from "react";
// import ReactDOM from "react-dom/client";
// import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom";

// import "assets/plugins/nucleo/css/nucleo.css";
// import "@fortawesome/fontawesome-free/css/all.min.css";
// // import "assets/scss/argon-dashboard-react.scss";

// import AdminLayout from "layouts/Admin.js";
// import AuthLayout from "layouts/Auth.js";

// const root = ReactDOM.createRoot(document.getElementById("root"));

// root.render(
//   <BrowserRouter>
//     <Routes>
//       <Route path="/admin/*" element={<AdminLayout />} />
//       <Route path="/dashboard/*" element={<AuthLayout />} />
//       <Route path="*" element={<Navigate to="/admin/index" replace />} />
//     </Routes>
//   </BrowserRouter>
// );
