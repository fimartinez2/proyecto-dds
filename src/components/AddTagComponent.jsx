import React from "react";

const AddTagComponent = () => {
  return (
    <div className="addTag">
      <div className="addTag__container">
        <h1> Agregar Categoría</h1>
        <div className="addTag__categorias"> Categorias</div>
        <div className="addTag__elements">
          <input type="text" placeholder="Nueva Categoría" />
          <span className="btn">Crear</span>
        </div>
      </div>
    </div>
  );
};

export default AddTagComponent;
