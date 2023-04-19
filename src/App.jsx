import React, { useState } from "react";
import { Routes, Route } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import databank from "./components/databank";
import SiteHeader from "./components/header";
import SiteFooter from "./components/footer";
import ShoppingCart from "./pages/shoppingCart";
import Home from "./pages/home";
import SingleProfile from "./pages/singleProfile";
import NotFound from "./pages/notFound";
import ProfileContext from "./context/profileContext";
import "./App.css";

function App() {
  const [profiles, setProfiles] = useState(databank);
  const profilesCount = profiles.length;

  const [cartItems, setCartItems] = useState([]);

  const addToCart = (newItems) => {
    setCartItems([...cartItems, ...newItems]);
  };

  const removeFromCart = (newItems) => {
    setCartItems([...newItems]);
  };

  return (
    <ProfileContext.Provider value={profiles}>
      <div className="App">
        <ToastContainer />
        <SiteHeader totalItems={cartItems.length} />
        <Routes>
          <Route
            index
            element={<Home profilesCount={profilesCount} profiles={profiles} />}
          />
          <Route
            path="/single-profile/:id"
            element={
              <SingleProfile addToCart={addToCart} cartItems={cartItems} />
            }
          ></Route>
          <Route
            path="/shopping-cart"
            element={
              <ShoppingCart
                cartItems={cartItems}
                removeFromCart={removeFromCart}
              />
            }
          />
          <Route path="*" element={<NotFound />}></Route>
        </Routes>
        <SiteFooter />
      </div>
    </ProfileContext.Provider>
  );
}

export default App;
