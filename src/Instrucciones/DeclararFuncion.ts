import { Ambito } from "../Entorno/Ambito";
import { AST } from "../Entorno/AST";
import { Expresion } from "../Entorno/Expresion";
import { Instruccion } from "../Entorno/Instruccion";
import { Nodo } from "../Entorno/Nodo";
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
    }

    public ejecutar(actual: Ambito, global: Ambito, ast: AST) {
        let ambito_local = new Ambito(actual);
        for (let sentencia of this.sentencias) {
            if (sentencia instanceof Instruccion) sentencia.ejecutar(ambito_local, global, ast);
            if (sentencia instanceof Expresion) sentencia.getValor(ambito_local, global, ast);

            if(sentencia instanceof LlamadaFuncion) {
                
                for ( let i = 0; i < ast.raiz.sentencias.length ; i++ )
                {
                    let sent2 = ast.raiz.sentencias[i];
                    if ( sent2 instanceof DeclararFuncion )
                    {
                        if ( sent2.nombre == sentencia.nombre )
                        {
                            sent2.ejecutar(actual, global, ast);
                            sent2.parametros=this.parametros;
                        }
                    }
                }
            }
        }
    }
}