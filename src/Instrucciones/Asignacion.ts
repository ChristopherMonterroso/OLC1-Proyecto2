import { Console } from "console";
import { Ambito } from "../Entorno/Ambito";
import { AST } from "../Entorno/AST";
import { Expresion } from "../Entorno/Expresion";
import { Instruccion } from "../Entorno/Instruccion";
import { TipoPrimitivo } from "../Entorno/Simbolos/TipoPrimitivo";

export class Asignacion extends Instruccion {

    id:     string;
    exp:    Expresion;
    posicion: number;
    key: boolean;
    key2: boolean;

    constructor(id: string, exp: Expresion, posicion:number, key:boolean, key2:boolean,linea: number, columna: number) {
        super(linea, columna);
        this.id = id;
        this.exp = exp;
        this.posicion=posicion;
        this.key=key;
        this.key2=key2;
    }


    public ejecutar(actual: Ambito, global: Ambito, ast: AST) {
        
        let variable = actual.getVariable(this.id);
        let funcion = actual.getFuncion(this.id);
     
        if(variable === undefined) {
            // * ERROR *
            throw new Error("ERROR => No se ha definido la variable " + this.id);
        }
    
       
        
        if(this.key){
            if(variable.tipo.tipo!==this.exp.tipo.tipo){
                throw new Error("ERROR => El tipo del valor asignado no corresponde a la variable " + this.id);
            }
            variable.asignarValorVector(this.posicion,this.exp)
            return
        }
        console.log(variable)
        console.log(this.exp)
        if(this.key2){
            if(variable.tipo.tipo!==this.exp.tipo.tipo){
                throw new Error("ERROR => El tipo del valor asignado no corresponde a la variable " + this.id);
            }
            variable.asignarValorLista(this.exp)
            return
        }

        let valor_asig = this.exp.getValor(actual, global, ast);
        
        if(variable.getTipo().getPrimitivo() != this.exp.tipo.getPrimitivo()) {
            throw new Error("ERROR => El tipo del valor asignado no corresponde a la variable " + this.id);
        }
        variable.asignarValor(valor_asig);


    }

}
