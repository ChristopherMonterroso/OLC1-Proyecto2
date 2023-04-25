import { Ambito } from "../Entorno/Ambito";
import { AST } from "../Entorno/AST";
import { Expresion } from "../Entorno/Expresion";
import { Instruccion } from "../Entorno/Instruccion";
import { Tipo } from "../Entorno/Simbolos/Tipo";
import { TipoPrimitivo } from "../Entorno/Simbolos/TipoPrimitivo";

export class Length extends Expresion {
    
  exp1    : Expresion;


  constructor(exp1 :Expresion,linea :number, columna :number ) {
      super(linea, columna);
      this.exp1 = exp1;
  }

  public getValor(actual: Ambito, global: Ambito, ast: AST) {
    let val1    = this.exp1.getValor(actual,global,ast);
    let tipo1   = this.exp1.tipo;

    return this.getLength(val1, tipo1, actual, global, ast);
  }

  public getLength(val1:any,tipo1:Tipo,actual:Ambito,global:Ambito,ast:AST) : any
  {
      
      let prim1:TipoPrimitivo = tipo1.getPrimitivo();

       if (prim1 == TipoPrimitivo.String )
      {
          this.tipo = new Tipo(TipoPrimitivo.Integer);

          return val1.toString().length;
      }
      
  }
   
  
}
