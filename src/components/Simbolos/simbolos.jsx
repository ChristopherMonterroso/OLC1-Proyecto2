import React from "react";
import { Ambito } from "../../Entorno/Ambito"

const TablaSimbolos = () => {
  const variables = Ambito.returnvariables();
  const metodos = Ambito.returnmetodos();
  let tipo43;
  const tablaSimbolos = [];
  let contador = 0;

  // Agregar variables a la tabla de símbolos
  variables.forEach((variable) => {
    tablaSimbolos.push({
      id: ++contador,
      columna: variable.columna,
      fila: variable.linea,
      tipo1: "variable",
      tipo: obtenerTipo(variable.tipo.tipo),
      descripcion: variable.id,
      ambito: variable.ambito
    });
  });

  // Agregar métodos a la tabla de símbolos
  metodos.forEach((metodo) => {
    tablaSimbolos.push({
      id: ++contador,
      columna: metodo.columna,
      fila: metodo.linea,
     
      tipo: obtenerTipo(metodo.tipo.tipo),
      tipo1: tipo43,
      descripcion: metodo.nombre,
      ambito: "--"
    });
  });

  function obtenerTipo(tipo) {
    switch (tipo) {
      case 0:
        tipo43 = "funcion"
        return "integer";
      case 1:
        tipo43 = "funcion"
        return "double";
      case 2:
        tipo43 = "funcion"
        return "char";
      case 3:
        tipo43 = "funcion"
        return "string";
      case 4:
        tipo43 = "funcion"
        return "null";
      case 5:
        tipo43 = "funcion"
        return "boolean";
      case 6:
        tipo43 = "metodo"
        return "void";
      case 7:
        tipo43 = "funcion"
        return "vector";
      case 8:
        tipo43 = "funcion"
        return "lista";
      case 9:
        tipo43 = "funcion"
        return "variable";
      default:
        return "";
    }
  }

  return (
    <>
      <h1>TABLA DE SIMBOLOS</h1>
      <table>
        <thead>
          <tr>
            <th>#</th>
            <th>Identificador</th>
            <th>Tipo</th>
            <th>Tipo</th>
            <th>Entorno</th>
            <th>Linea</th>
            <th>Columna</th>
          </tr>
        </thead>
        <tbody>
          {tablaSimbolos.map((simbolo, index) => (
            <tr key={index}>
              <td>{simbolo.id}</td>
              <td>{simbolo.descripcion}</td>
              <td>{simbolo.tipo}</td>
                <td>{simbolo.tipo1}</td>
              <td>{simbolo.ambito}</td>
                <td>{simbolo.fila}</td>
              <td>{simbolo.columna}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
};

export default TablaSimbolos;