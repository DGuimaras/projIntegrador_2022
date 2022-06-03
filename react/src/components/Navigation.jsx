import React, { useState } from "react";
import { NavLink } from "react-router-dom";
//import { Button, ScrollView, StatusBar, StyleSheet, Text, View } from 'react-native';

const Navigation = () => {

  const flexDirections = ['row', 
    'row-reverse', 
    'column', 
    'column-reverse'
  ];
  const justifyContents = [
    'flex-start',
    'flex-end',
    'center',
    'space-between',
    'space-around',
    'space-evenly',
  ];
  const alignItemsArr = [
    'flex-start',
    'flex-end',
    'center',
    'stretch',
    'baseline',
  ];
  const wraps = ['nowrap', 'wrap', 'wrap-reverse'];
  const directions = ['inherit', 'ltr', 'rtl'];
  const colorsActive = ['none', '1px solid #a20000'];
  const [flexDirection, setFlexDirection] = useState(0);
  const [justifyContent, setJustifyContent] = useState(0);
  const [alignItems, setAlignItems] = useState(0);
  const [direction, setDirection] = useState(0);
  const [wrap, setWrap] = useState(0);
  const [colorActive, setColorActive] = useState(0);

  const hookedStyles = {
    flexDirection: flexDirections[flexDirection],
    justifyContent: justifyContents[justifyContent],
    alignItems: alignItemsArr[alignItems],
    direction: directions[direction],
    flexWrap: wraps[wrap],
    colorActive: colorsActive[colorActive],
  };

  const changeSetting = (value, options, setterFunction) => {
    if (value == options.length - 1) {
      setterFunction(0);
      return;
    }
    setterFunction(value + 1);
  };
  //const [squares, setSquares] = useState([<Square />, <Square />, <Square />]);

  return (
    <nav id="navmenu"> 
        <ul>
          <li class="profile">
              <NavLink class="nav-link" to="/perfil" style={{ textDecoration: 'none', color: 'black' }} onPress={() =>
                changeSetting(colorActive, colorsActive, setColorActive)
              }>
                Perfil
              </NavLink>
          </li>
          <div class="center">
            <li class="loja">
              <NavLink class="nav-link" to="/store" style={{ textDecoration: 'none', color: 'black' }} onPress={() =>
                changeSetting(colorActive, colorsActive, setColorActive)
              }>
                Loja
                <span class="sr-only"></span>
              </NavLink>
            </li>
            <li class="events">
              <NavLink class="nav-link" to="/eventos" style={{ textDecoration: 'none', color: 'black' }} onPress={() =>
                changeSetting(colorActive, colorsActive, setColorActive)
              }>
                Eventos
              </NavLink>
            </li>
            <li class="aboutus">
              <NavLink class="nav-link" to="/sobre" style={{ textDecoration: 'none', color: 'black' }} onPress={() =>
                changeSetting(colorActive, colorsActive, setColorActive)
              }>
                Sobre Nós
              </NavLink>
            </li>
            <li class="contacts">
              <NavLink class="nav-link" to="/contactos" style={{ textDecoration: 'none', color: 'black' }} onPress={() =>
                changeSetting(colorActive, colorsActive, setColorActive)
              }>
                Contactos
              </NavLink>
            </li>
          </div>
          <input type="text" placeholder="Pesquisa.." />
        </ul> 
    </nav>
  );

}

export default Navigation;