import { Ambito } from "../Entorno/Ambito";
import { AST } from "../Entorno/AST";
import { Expresion } from "../Entorno/Expresion";
import { Instruccion } from "../Entorno/Instruccion";
import { Tipo } from "../Entorno/Simbolos/Tipo";
import { TipoPrimitivo } from "../Entorno/Simbolos/TipoPrimitivo";

export class Round extends Expresion {
    
  exp1    : Expresion;
  tipo    : Tipo;

  constructor(exp1 :Expresion,linea :number, columna :number ) {
      super(linea, columna);
      this.exp1 = exp1;
      this.tipo = new Tipo(TipoPrimitivo.Double);
  }

  public getValor(actual: Ambito, global: Ambito, ast: AST) {

    let val1    = this.exp1.getValor(actual,global,ast);
    let tipo1   = this.exp1.tipo;
    if(tipo1.getPrimitivo()===1){
        return Math.round(val1)
    }else{
        throw new Error("El tipo de dato ingresado no es un entero o decimal: " + this.linea + " , " + this.columna);
    }
  }
}