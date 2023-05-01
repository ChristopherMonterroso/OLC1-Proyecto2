import { Console } from "console";
import { Ambito } from "../Entorno/Ambito";
import { AST } from "../Entorno/AST";
import { Expresion } from "../Entorno/Expresion";
import { Instruccion } from "../Entorno/Instruccion";
import { TipoPrimitivo } from "../Entorno/Simbolos/TipoPrimitivo";

export class Incremento_decremento extends Instruccion {

    id:     string;
    signo:    string;

    constructor(id: string, signo:string, linea: number, columna: number) {
        
        super(linea, columna);
        this.id = id;
        this.signo = signo;
    }


    public ejecutar(actual: Ambito, global: Ambito, ast: AST) {
        
        let variable = actual.getVariable(this.id);
        if(variable === undefined) {
            // * ERROR *
            throw new Error("ERROR => No se ha definido la variable " + this.id);
        }
    
       
        if(this.signo==='++'){
            variable.valor = variable.valor + 1;
            variable.asignarValor(variable.valor);
            return
        }
        if(this.signo==='--'){
            variable.valor = variable.valor - 1;
            variable.asignarValor(variable.valor);
            return
        }
        
        if(variable.getTipo().getPrimitivo() != 0) {
            throw new Error("ERROR => El tipo del valor asignado no corresponde a la variable " + this.id);
        }

    }

}