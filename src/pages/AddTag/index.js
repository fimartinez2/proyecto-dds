import React from "react";
import { tagList } from "../../mockData/tagList";
import { useState } from "react";
import Productos from "../Productos";
import AddTagComponent from "../../components/AddTagComponent";
import PopUp from "../../components/PopUp";

const AddTag = () => {
  const lista = [...tagList];
  const [isOpen, setIsOpen] = useState(false);
  // const [popUpInfo, setPopUpInfo] = useState({});
  const togglePopUp = () => {
    setIsOpen(!isOpen);
  };
  return (
    <div>
      {isOpen && <PopUp handleClose={togglePopUp} content={<div>hola</div>} />}
      <AddTagComponent />
      <Productos tag={true} handleClick={togglePopUp} />
    </div>
  );
};

export default AddTag;
