import { Ambito } from "../Entorno/Ambito";
import { AST } from "../Entorno/AST";
import { Expresion } from "../Entorno/Expresion";
import { Instruccion } from "../Entorno/Instruccion";
import { Asignacion } from "../Instrucciones/Asignacion";
import { DeclararVariable } from "../Instrucciones/DeclararVariable";
import { Print } from "../Instrucciones/Print";
import { toLower } from "../Instrucciones/toLower";
export class LlamadaFuncion extends Expresion {
    
    nombre  : string;
    lista_exp   : Expresion[];

    constructor(nombre :string, lista_exp :Expresion[], linea :number, columna :number){
        super(linea, columna);
        this.nombre = nombre;
        this.lista_exp = lista_exp;
    }

    public getValor(actual: Ambito, global: Ambito, ast: AST) {
        let ambito_local = new Ambito(actual);
        switch(this.nombre) {
            case "print":
                {
                    let print = new Print(this.lista_exp, this.linea, this.columna);
                   
                    return print.ejecutar(actual, global, ast);
                    
                }
            default:
                {
                    let parametros = actual.getFuncion(this.nombre).parametros
                    let sentencias = actual.getFuncion(this.nombre).sentencias
                    let expresiones = this.lista_exp;
                    let listaExp =[]
                    for (let expresion of expresiones) {
                        
                        if (expresion instanceof Expresion){
                            // extraigo las expresiones y las almaceno en una lista
                            listaExp.push(expresion.getValor(ambito_local,global,ast))
                        } 

                    }
                    for (let parametro of parametros){
                        if(parametro instanceof DeclararVariable) {
                            
                            parametro.ejecutar(ambito_local,actual,ast)
                            //asigno el valor de la expresion a la respectiva variable
                            ambito_local.getVariable(parametro.id).asignarValor(listaExp[0])
                            //elimino el valor de la expresion de la lista 
                            listaExp.shift()

                        }
                    }
                    
                    
                    for (let sentencia of sentencias) {
                        if (sentencia instanceof Instruccion) sentencia.ejecutar(ambito_local, global, ast);
                        if (sentencia instanceof Expresion) sentencia.getValor(ambito_local, global, ast);
  
                    }
                    
                }
        }
    }

}