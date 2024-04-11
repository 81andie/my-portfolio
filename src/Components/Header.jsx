import React from 'react'
import { NavLink } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import { useState, useRef } from 'react';




export const Header = () => {

  let img = "img/logo.jpeg";

  const [selectedOption1, setSelectedOption1] = useState("");
  const [selectedOption2, setSelectedOption2] = useState("");

  const selectRef1 = useRef(null); // Referencia para el primer selector
  const selectRef2 = useRef(null); // Referencia para el segundo selector

  const navigate = useNavigate();

  const handleOptionChange1 = () => {

    const selectedOption = selectRef1.current.value;
    console.log(selectedOption);
    setSelectedOption1(selectedOption);
    navigate(selectedOption);

  }

  const handleOptionChange2 = () => {
    const selectedOption = selectRef2.current.value;
    console.log(selectedOption);
    setSelectedOption2(selectedOption);
    navigate(selectedOption);
  }



  return (
    <>



      <div className="header">

        <div className="logo_container">

          <img src={img} className='logo_header' alt="logo-imagen" />
          <div className="navbar">
            <NavLink to="/inicio" className="enlaces_navbar">Inicio</NavLink>
            <select className="enlaces_navbar" ref={selectRef1} value={selectedOption1} onChange={handleOptionChange1} title="Seleccionar una opción" >
              <option value="" className="conoceme">Conóceme algo más</option>
              <option value="/sobremi" className="sobremi">SOBRE MI</option>
              <option value="/queofrezco" className="queofrezco" >QUÉ OFREZCO</option>
            </select>
            <select className="enlaces_navbar" ref={selectRef2} value={selectedOption2} onChange={handleOptionChange2}>
              <option value="" className="formacion">FORMACIÓN</option>
              <option value="/skills" className="skills1">SKILLS</option>
              <option value="/certificaciones" className="certificaciones" >CERTIFICACIONES</option>
            </select>

            <NavLink to="/contacto" className="enlaces_navbar">Contacto</NavLink>

          </div>

        </div>


      </div>

    </>
  )
}
