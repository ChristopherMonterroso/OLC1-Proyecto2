
import { Ambito } from "../Entorno/Ambito";
import { AST } from "../Entorno/AST";
import { Expresion } from "../Entorno/Expresion";
import { Instruccion } from "../Entorno/Instruccion";
import { Tipo } from "../Entorno/Simbolos/Tipo";
import { TipoPrimitivo } from "../Entorno/Simbolos/TipoPrimitivo";
import { Variable } from "../Entorno/Simbolos/Variable";

export class DeclararVariable extends Instruccion{
    

    tipo:   Tipo;
    id:     string;
    exp:    Expresion;

    constructor(tipo: Tipo, id: string, exp: Expresion, linea: number, columna: number) {
        super(linea, columna);
        this.tipo = tipo;
        this.id = id;
        this.exp = exp;
    }

    public ejecutar(actual: Ambito, global: Ambito, ast: AST) {

        // console.log(this.id);
        // Verificar que no exista variable
        // console.log(actual.existeVariable(this.id));
        // if( actual.existeVariable(this.id) ) {
        //     // * ERROR *
        //     throw new Error("Variable ya se encuentra definida en el entorno actual: " + this.linea + " , " + this.columna);
        // }

        let res
        
        if(this.exp != undefined) {

            res = this.exp.getValor(actual, global, ast);

            // if(this.tipo.getPrimitivo() != this.exp.tipo.getPrimitivo()) {
            //     // * ERROR *
            //     throw new Error("Tipo de variable declarada no es igual al tipo de la expresion: " + this.linea + " , " + this.columna);
            // }
        } else 
        {
            if(this.tipo.getPrimitivo() === TipoPrimitivo.Integer){
                res = 0;
            }else if(this.tipo.getPrimitivo() === TipoPrimitivo.Double){
                res = 0.0;
            } else if(this.tipo.getPrimitivo() === TipoPrimitivo.String) {
                res = "";
            } else if(this.tipo.getPrimitivo() === TipoPrimitivo.Boolean) {
                res = true;
            } else if(this.tipo.getPrimitivo() === TipoPrimitivo.Char){
                res = ""
            }
        }
        //como saber si el ambito es global o actual   

    
      
        let gl;
    try{
         if( actual.existeVariable(this.id) ) {
            
            }else{
   if(actual.anterior.anterior || global.anterior  ){
            gl = "local"
        }
        else{
            gl = "global"
        }

            }
        if (gl == undefined){
            gl = "local"
        }
    }catch(error){
        if(actual.anterior || global.anterior){
            gl = "local"
        }else{
        gl = "global"
        }
    }
     

        let nueva_var = new Variable(this.tipo,new Tipo(TipoPrimitivo.Variable), this.id, res,gl,this.linea,this.columna);
        actual.insertarVariable(this.id,nueva_var);

    }
}