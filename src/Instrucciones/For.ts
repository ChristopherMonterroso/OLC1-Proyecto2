import { Ambito } from "../Entorno/Ambito";
import { AST } from "../Entorno/AST";
import { Expresion } from "../Entorno/Expresion";
import { Instruccion } from "../Entorno/Instruccion";
import { Nodo } from "../Entorno/Nodo";

export class For extends Instruccion{
    signo:string
    variable:string;
    exp: Expresion;
    sentencias : Nodo[];

    constructor(variable:string,exp: Expresion,signo:string, sentencias : Nodo[], linea: number, columna: number){

        super(linea, columna);
        this.signo=this.signo
        this.variable=variable
        this.exp = exp;
        this.signo = signo;
        this.sentencias = sentencias;
    }

    public ejecutar(actual: Ambito, global: Ambito, ast: AST) {
        let val_cond = this.exp.getValor(actual, global, ast);
        console.log(this.variable)
        console.log(this.signo)
        console.log(val_cond)

        let ambito_local = new Ambito(actual);
        let contador=actual.getVariable(this.variable)
       

         while(val_cond) 
        {
             for(let sentencia of this.sentencias){
                 if(sentencia instanceof Instruccion) sentencia.ejecutar(ambito_local, global, ast);
                 if(sentencia instanceof Expresion) sentencia.getValor(ambito_local, global, ast);
             }
             contador.asignarValor( contador.valor+1)
             val_cond = this.exp.getValor(actual, global, ast);
        }
    }

}