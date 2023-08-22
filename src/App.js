import React from "react";
import { Mytitulo } from "./componentes/titulo";
import { MyBox } from "./componentes/box1";
import { MyBulbasaur } from "./componentes/Bulbasaur";
import { MyIvysaur } from "./componentes/Ivysaur";
import { MyVenusaur } from "./componentes/Venusaur";
import { MyCharmander } from "./componentes/Charmander";
import { NewDiv } from "./componentes/newdiv";

function App() {
  return (
    <>
    <NewDiv>
      <Mytitulo />
      <MyBox />
      <MyBulbasaur />
      <MyIvysaur />
      <MyVenusaur />
      <MyCharmander/>
      </NewDiv>
      <h1>By: Rafael Bravim</h1>
    </>
  );
}

export default App;
