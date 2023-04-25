import React, { useState, useRef } from 'react';
import './styles.css';
import { Analizador } from '../../Analizador/Analizador';
import { AST } from '../../Entorno/AST';
import { readFileSync } from "fs";
import  {treeContent} from '../../Data/dataTree.js';
function Editores() {
  
  const [editableText, setEditableText] = useState('');
  const [nonEditableText, setNonEditableText] = useState('');
  const fileInputRef = useRef<HTMLInputElement>(null);

  // Funcion para cargar un archivo al editor
  const handleFileRead = () => {
    const file = fileInputRef.current?.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = () => {
        setEditableText(reader.result as string);
      };
      reader.readAsText(file);
    }
  };

  const handleButtonClick = () => {
    fileInputRef.current?.click();
  };

  //Funcion que ejecuta las instrucciones
  const handleExecute = () => {
   
    let cadena_codigo = editableText;
    let analizador = new Analizador(cadena_codigo, "editor");
   
    let ast: AST = analizador.Analizar();
    //console.log(ast.getSalida());
    //ast.printNodos();

    if(ast != undefined) {
      setNonEditableText(ast.getSalida());
    }else{
      setNonEditableText("Error al analizar");
    }
    //console.log(treeContent.content)
  };
  //Funcion para guardar el editable text en un archivo y descargarlo
  const handleSaveAs = () => {
    const element = document.createElement("a");
    const file = new Blob([editableText], { type: 'text/plain' });
    element.href = URL.createObjectURL(file);
    element.download = "Typewise_document.tw";
    document.body.appendChild(element);
    element.click();
  };

  
  return (
    <div >
      <h2>Editor</h2>
      <div className="editores">
        <textarea
          id='editor'
          placeholder='Entrada'
          value={editableText}
          onChange={(event) => setEditableText(event.target.value)}
        />
        <textarea placeholder='Salida'
          value={nonEditableText}
          readOnly
        />
      </div>
      <div className="boton-container">
        <button onClick={handleButtonClick}>Cargar archivo</button>
        <input
          type="file"
          style={{ display: "none" }}
          ref={fileInputRef}
          onChange={handleFileRead}
        />
        <button onClick={handleSaveAs}>Guardar</button>
        <button onClick={handleExecute}>Analizar</button>
      </div>
    </div>
  );
}

export default Editores;

