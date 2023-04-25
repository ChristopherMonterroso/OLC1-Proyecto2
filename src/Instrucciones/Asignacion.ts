import { Console } from "console";
import { Ambito } from "../Entorno/Ambito";
import { AST } from "../Entorno/AST";
import { Expresion } from "../Entorno/Expresion";
import { Instruccion } from "../Entorno/Instruccion";
import { TipoPrimitivo } from "../Entorno/Simbolos/TipoPrimitivo";

export class Asignacion extends Instruccion {

    id:     string;
    exp:    Expresion;

    constructor(id: string, exp: Expresion, linea: number, columna: number) {
        
        super(linea, columna);
        this.id = id;
        this.exp = exp;
    }


    public ejecutar(actual: Ambito, global: Ambito, ast: AST) {
        
        let variable = actual.getVariable(this.id);
        let funcion = actual.getFuncion(this.id);
       
        console.log(variable)
        
        if(variable === undefined) {
            // * ERROR *
            throw new Error("ERROR => No se ha definido la variable " + this.id);
        }
    
       
        if(this.exp==='++'){
            variable.valor = variable.valor + 1;
            variable.asignarValor(variable.valor);
            return
        }
        if(this.exp==='--'){
            variable.valor = variable.valor - 1;
            variable.asignarValor(variable.valor);
            return
        }
        let valor_asig = this.exp.getValor(actual, global, ast);

        if(variable.getTipo().getPrimitivo() != this.exp.tipo.getPrimitivo()) {
            throw new Error("ERROR => El tipo del valor asignado no corresponde a la variable " + this.id);
        }
        variable.asignarValor(valor_asig);

    }

}