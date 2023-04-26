import { Ambito } from "../Entorno/Ambito";
import { AST } from "../Entorno/AST";
import { Expresion } from "../Entorno/Expresion";
import { Instruccion } from "../Entorno/Instruccion";
import { Funcion } from "../Entorno/Simbolos/Funcion";
import { Asignacion } from "../Instrucciones/Asignacion";
import { DeclararFuncion } from "../Instrucciones/DeclararFuncion";
import { DeclararVariable } from "../Instrucciones/DeclararVariable";
import { Print } from "../Instrucciones/Print";
import { toLower } from "../Instrucciones/toLower";
export class LlamadaFuncion extends Expresion {

    nombre: string;
    lista_exp: Expresion[];

    constructor(nombre: string, lista_exp: Expresion[], linea: number, columna: number) {
        super(linea, columna);
        this.nombre = nombre;
        this.lista_exp = lista_exp;
    }

    public getValor(actual: Ambito, global: Ambito, ast: AST) {
        let ambito_local = new Ambito(actual);
        switch (this.nombre) {
            case "print":
                {
                    let print = new Print(this.lista_exp, this.linea, this.columna);

                    return print.ejecutar(ambito_local, global, ast);

                }
            default:
                {
                    let parametros;
                    let sentencias;
                    let expresiones;

                    //por si usan recursividad


                    if (actual.getFuncion(this.nombre)) {

                        parametros = actual.getFuncion(this.nombre).parametros;
                        sentencias = actual.getFuncion(this.nombre).sentencias
                        expresiones = this.lista_exp;



                        let listaExp = []
                        for (let expresion of expresiones) {

                            if (expresion instanceof Expresion) {
                                // extraigo las expresiones y las almaceno en una lista
                                listaExp.push(expresion.getValor(ambito_local, global, ast))
                            }

                        }
                        for (let parametro of parametros) {
                            if (parametro instanceof DeclararVariable) {

                                parametro.ejecutar(ambito_local, actual, ast)
                                //asigno el valor de la expresion a la respectiva variable
                                ambito_local.getVariable(parametro.id).asignarValor(listaExp[0])
                                //elimino el valor de la expresion de la lista 
                                listaExp.shift()

                            }
                        }
                        for (let sentencia of sentencias) {
                            if (sentencia instanceof Instruccion) {

                                sentencia.ejecutar(ambito_local, global, ast);
                            }
                            if (sentencia instanceof Expresion) {
                                sentencia.getValor(ambito_local, global, ast);

                            }

                        }
                    } else {
                        // let nueva_func = new Funcion(this.nombre,this.lista_exp,sentencias)
                        // actual.insertarFuncion(this.nombre,nueva_func)
                        for (let i = 0; i < ast.raiz.sentencias.length; i++) {
                            let sent = ast.raiz.sentencias[i];
                            if (sent instanceof DeclararFuncion) {
                                if (sent.nombre == this.nombre) {

                                    sentencias = sent.sentencias


                                    let nueva_func = new Funcion(this.nombre, sent.parametros, sentencias)
                                    actual.insertarFuncion(this.nombre, nueva_func)
                                    parametros = actual.getFuncion(this.nombre).parametros;
                                    sentencias = actual.getFuncion(this.nombre).sentencias
                                    expresiones = this.lista_exp;



                                    let listaExp = []
                                    for (let expresion of expresiones) {

                                        if (expresion instanceof Expresion) {

                                            // extraigo las expresiones y las almaceno en una lista
                                            listaExp.push(expresion.getValor(ambito_local, global, ast))
                                        }

                                    }
                                    for (let parametro of parametros) {
                                        if (parametro instanceof DeclararVariable) {

                                            parametro.ejecutar(ambito_local, actual, ast)
                                            //asigno el valor de la expresion a la respectiva variable

                                            ambito_local.getVariable(parametro.id).asignarValor(listaExp[0])
                                            //elimino el valor de la expresion de la lista 
                                            listaExp.shift()

                                        }
                                    }
                                    for (let sentencia of sentencias) {

                                        if (sentencia instanceof Instruccion) {

                                            sentencia.ejecutar(ambito_local, global, ast);
                                        }
                                        if (sentencia instanceof Expresion) {

                                            sentencia.getValor(ambito_local, global, ast);

                                        }

                                    }


                                }

                            }
                        }
                    }

                }
        }
    }

}