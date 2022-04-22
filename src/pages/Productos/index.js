import React from "react";
import TarjetaProducto from "../../components/TarjetaProducto";
import { productList } from "../../mockData/productList";

const Productos = () => {
  return (
    <div className="contenedor-productos">
      {productList.map((producto) => {
        return (
          <TarjetaProducto
            img={producto.img}
            precio={producto.precio}
            nombre={producto.nombre}
            marca={producto.marca}
            categoria={producto.categoria}
          />
        );
      })}
    </div>
  );
};

export default Productos;
