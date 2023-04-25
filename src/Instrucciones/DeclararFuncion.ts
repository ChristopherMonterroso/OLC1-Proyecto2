import { Ambito } from "../Entorno/Ambito";
import { AST } from "../Entorno/AST";
import { Expresion } from "../Entorno/Expresion";
import { Instruccion } from "../Entorno/Instruccion";
import { Nodo } from "../Entorno/Nodo";
import { Funcion } from "../Entorno/Simbolos/Funcion";
import { Tipo } from "../Entorno/Simbolos/Tipo";
import { LlamadaFuncion } from "../Expresiones/LlamadaFuncion";
import { DeclararVariable } from "./DeclararVariable";

export class DeclararFuncion extends Instruccion {

    tipo: Tipo;
    nombre: string;
    parametros: DeclararVariable[];
    sentencias: Nodo[];

    constructor(tipo: Tipo, nombre: string, parametros: DeclararVariable[], sentencias: Nodo[], linea: number, columna: number) {
        super(linea, columna);
        this.nombre = nombre;
        this.parametros = parametros;
        this.sentencias = sentencias;
        this.tipo=tipo;
    }

    public ejecutar(actual: Ambito, global: Ambito, ast: AST) {
        
        let ambito_local = new Ambito(actual);

        if( actual.existeFuncion(this.nombre) ) {
            // * ERROR *
            throw new Error("Función ya se encuentra definida en el entorno actual: " + this.linea + " , " + this.columna);
        }

       /* for (let parametro of this.parametros) {
            if(parametro instanceof DeclararVariable) {
                
                parametro.ejecutar(ambito_local,global,ast);
            }
        }
        for (let sentencia of this.sentencias) {
            if (sentencia instanceof Instruccion) sentencia.ejecutar(ambito_local, global, ast);
           // if (sentencia instanceof Expresion) sentencia.getValor(ambito_local, global, ast);
            
            
        }*/
        
        let nueva_func = new Funcion(this.nombre,this.parametros,this.sentencias)
        actual.insertarFuncion(this.nombre,nueva_func)

       
    }
}