import { Tipo } from "./Tipo";
import { Valor } from "../../Expresiones/Valor";

import { TipoPrimitivo } from "./TipoPrimitivo";
export class Variable {

    tipo:   Tipo;
    id:     string;
    valor:  any;
    ambito: any;
    linea:  number;
    columna:number;
    tipoVariable: Tipo;

    constructor(tipo:Tipo, tipoVariable:Tipo, id:string, valor:any,ambito:any, linea:number, columna:number) {
        this.tipo   = tipo;
        this.id     = id;
        this.valor  = valor;
        this.ambito = ambito;
        this.linea  = linea;
        this.columna= columna;
        this.tipoVariable = tipoVariable;
    }

   
    public asignarValor(valor: any){
        this.valor = valor;
    }

    public getValor(): any {
        return this.valor;
    }

    public getValorVector(posicion:number){
        return this.valor[posicion];
    }
    
    public getValorLista(posicion:number){
        if(this.valor.length>=posicion){
           return this.valor[posicion].valor; 
        }
    }

    public asignarValorVector(posicion:number,valor: any){
        this.valor[posicion]=valor;
    }

    public asignarValorLista(valor:any){
        this.valor.push(valor)
    }

    public getTipoVariable(): Tipo {
        return this.tipoVariable;
    }

    public getTipo(): Tipo {
        return this.tipo;
    }

    public getNombre(): string {
        return this.id;
    }
}