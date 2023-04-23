import { Ambito } from "../Entorno/Ambito";
import { AST } from "../Entorno/AST";
import { Expresion } from "../Entorno/Expresion";
import { Instruccion } from "../Entorno/Instruccion";
import { Nodo } from "../Entorno/Nodo";
import { TipoPrimitivo } from "../Entorno/Simbolos/TipoPrimitivo";

export class Switch extends Instruccion {

    exp_variable    : Expresion;
    casos           : any[];
    caso_default    : any[];

    constructor(exp_variable :Expresion, casos :any[], caso_default :any[], linea :number, columna :number) {
        super(linea, columna);
        this.exp_variable = exp_variable;
        this.casos = casos;
        this.caso_default = caso_default;
    }
    
    public ejecutar(actual: Ambito, global: Ambito, ast: AST) {
        // Valor de la variable
        let valor_variable = this.exp_variable.getValor(actual, global, ast);

        // Verificar si hay coincidencia de caso
        let caso_encontrado = false;
        
        for(let caso of this.casos){
            if(caso.valor.getValor(actual, global, ast) == valor_variable){
                let ambito_caso = new Ambito(actual);
                for(let sentencia of caso.sentencias){
                    if(sentencia instanceof Instruccion) sentencia.ejecutar(ambito_caso, global, ast);
                    if(sentencia instanceof Expresion) sentencia.getValor(ambito_caso, global, ast);
                }
                caso_encontrado = true;
                break;
            }
        }

        // Si no hay coincidencia de caso, ejecutar el caso default
        if(!caso_encontrado){
            let ambito_default = new Ambito(actual);
            for(let sentencia of this.caso_default){
                if(sentencia instanceof Instruccion) sentencia.ejecutar(ambito_default, global, ast);
                if(sentencia instanceof Expresion) sentencia.getValor(ambito_default, global, ast);
            }
        }
    }

}