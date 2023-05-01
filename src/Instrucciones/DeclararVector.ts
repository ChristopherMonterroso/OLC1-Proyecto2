import { Ambito } from "../Entorno/Ambito";
import { AST } from "../Entorno/AST";
import { Instruccion } from "../Entorno/Instruccion";
import { Tipo } from "../Entorno/Simbolos/Tipo";
import { TipoPrimitivo } from "../Entorno/Simbolos/TipoPrimitivo"
import { Variable } from "../Entorno/Simbolos/Variable";
import { Valor } from "../Expresiones/Valor";

export class DeclararVector extends Instruccion{
    tipo1: Tipo;
    tipo2: Tipo;
    nombre: string;
    contenido : [];
    estado: boolean;
    tamaño: number;
    constructor(tipo1:Tipo,nombre:string,tipo2:Tipo,tamaño:number,contenido:[],estado:boolean,linea: number, columna: number){
        super(linea, columna);
        this.tipo1=tipo1;
        this.tipo2=tipo2;
        this.nombre=nombre;
        this.estado=estado;
        this.contenido=contenido;
        this.tamaño=tamaño;
    }
    public ejecutar(actual: Ambito, global: Ambito, ast: AST) {
     
        let ambito_local = new Ambito(actual);

        if( actual.existeFuncion(this.nombre) ) {
            // * ERROR *
            throw new Error("Vector ya se encuentra definido en el entorno actual: " + this.linea + " , " + this.columna);
        }  
        if( this.tipo1.tipo!==this.tipo2.tipo ) {
            // * ERROR *
            throw new Error("Vector no coincide su tipo de declaracion con su constructor: " + this.linea + " , " + this.columna);
        }  
        // si el estado es true, quiere decir que viene vacia la lista
        if(this.estado){
            for (let i = 0; i < this.tamaño; i++) {
                const clave: string = Object.keys(TipoPrimitivo).find(key => TipoPrimitivo[key] === this.tipo1.tipo) || '';
                if(clave==="Integer"||clave==="Double"){
                    this.contenido.push(new Valor(0,clave,this.linea,this.columna))
                }else if(clave==="Char"||clave==="String"){
                    this.contenido.push(new Valor("",clave,this.linea,this.columna))
                }else if(clave==="Boolean"){
                    this.contenido.push(new Valor(true,clave,this.linea,this.columna))

                }
                
            }
        }
        let nuevo_vecotor = new Variable(this.tipo1,new Tipo(TipoPrimitivo.Vector),this.nombre,this.contenido);
        actual.insertarVariable(this.nombre,nuevo_vecotor);
    }
}