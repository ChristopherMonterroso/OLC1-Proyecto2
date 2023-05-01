import { Valor } from "../../Expresiones/Valor";
import { Tipo } from "./Tipo";
import { TipoPrimitivo } from "./TipoPrimitivo";

export class Variable {

    tipo:   Tipo;
    id:     string;
    valor:  any;
    tipoVariable: Tipo;

    constructor(tipo:Tipo, tipoVariable:Tipo, id:string, valor:any) {
        this.tipo   = tipo;
        this.id     = id;
        this.valor  = valor;
        this.tipoVariable=tipoVariable
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