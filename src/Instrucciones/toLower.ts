import { Ambito } from "../Entorno/Ambito";
import { AST } from "../Entorno/AST";
import { Expresion } from "../Entorno/Expresion";
import { Instruccion } from "../Entorno/Instruccion";

export class toLower extends Instruccion
{

    lista_exp   : Expresion[];

    constructor(listaexp : Expresion[], linea: number, columna :number) {
        super(linea, columna);
        this.lista_exp = listaexp;
    }


    public ejecutar(actual: Ambito, global: Ambito, ast: AST) {
        let exp: Expresion = this.lista_exp[0];
        let res = exp.getValor(actual, global, ast);
        let to = res.toString()
        let result = '';
        for (let i = 0; i <to.length; i++) {
          const charCode = to.charCodeAt(i);
          if (charCode >= 65 && charCode <= 90) {
            result += String.fromCharCode(charCode + 32);
          } else {
            result += to.charAt(i);
          }
        }
        return result;
    }
}
