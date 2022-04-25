import React from "react";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const navigate = useNavigate();
  const goProducts = () => {
    navigate("/productos");
  };
  const goTags = () => {
    navigate("/add-tag");
  };
  return (
    <div className="home-div">
      <h1>Home</h1>
      <h3 onClick={goProducts}>Ir a seccion productos</h3>
      <h3 onClick={goTags}>Ir a seccion categorías</h3>
    </div>
  );
};

export default Home;
