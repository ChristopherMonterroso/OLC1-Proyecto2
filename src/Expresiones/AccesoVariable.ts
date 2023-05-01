import { Ambito } from "../Entorno/Ambito";
import { AST } from "../Entorno/AST";
import { Expresion } from "../Entorno/Expresion";

export class AccesoVariable extends Expresion{
    
    nombreVar  : string;
    posicionVector: number;
    key: boolean;

    constructor(nombreVar : string ,posicionVector:number, key:boolean, linea : number, columna : number) {
        super(linea,columna);
        this.nombreVar = nombreVar;
        this.posicionVector=posicionVector;
        this.key=key;
    }
    
    public getValor(actual: Ambito, global: Ambito, ast: AST) {

        let variable = actual.getVariable(this.nombreVar);

        if(variable === undefined) {
            // * ERROR *
            throw new Error("Sintactico Error: No existe la variable " + this.nombreVar + " " + this.linea + ", " + this.columna);
        }
        if(variable.getTipoVariable().tipo===9){
            let valor_var = variable.getValor();
            this.tipo = variable.getTipo();
            return valor_var;
        }
        if(variable.getTipoVariable().tipo===7){
            let valor_var = variable.getValorVector(this.posicionVector).valor;
            this.tipo = variable.getTipo();
            return valor_var;
        }
        if(variable.getTipoVariable().tipo===8){
            let valor_var = variable.getValorLista(this.posicionVector);
            this.tipo = variable.getTipo();
            return valor_var;
        }


        
    }

}