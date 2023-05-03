import { Parametro } from "../../Instrucciones/Parametro";
import { Nodo } from "../Nodo";
import { Tipo } from "../Simbolos/Tipo";

export class Funcion {

    nombre:         string;
    parametros:     Parametro[];
    sentencias:     Nodo[];
    tipo           :Tipo;
    linea         :number;
    columna       :number;

    constructor(nombre: string, parametros: Parametro[], sentencias: Nodo[], tipo:Tipo, linea: number, columna: number) {
        this.nombre = nombre;
        this.parametros = parametros;
        this.sentencias = sentencias;
        this.tipo=tipo;
        this.linea=linea;
        this.columna=columna;
    }

    public getNombre(): string {
        return this.nombre;
    }

    public getParametros(): Parametro[] {
        return this.parametros;
    }
}