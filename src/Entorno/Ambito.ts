import { Funcion } from "./Simbolos/Funcion";
import { Variable } from "./Simbolos/Variable";

export class Ambito {

    anterior: Ambito;
    public tabla_variables: Map<string, Variable>;
    public tabla_funciones: Map<string, Funcion>;
    static variables1: Map<string, Variable> = new Map<string, Variable>();
    static metodos1: Map<string, Funcion> = new Map<string, Funcion>();

    constructor(anterior: Ambito) {
        this.anterior = anterior;
        this.tabla_variables = new Map<string, Variable>();
        this.tabla_funciones = new Map<string, Funcion>();

    }

    public insertarVariable(id: string, variable: Variable) {
        this.tabla_variables.set(id, variable);
        Ambito.variables1.set(id, variable);

    }

    public insertarFuncion(id: string, funcion: Funcion) {
        this.tabla_funciones.set(id, funcion);
        Ambito.metodos1.set(id, funcion);

    }

    public getVariable(id: string): Variable {
        let e: Ambito = this;
        while (e != null) {
            try {
                const variable = e.tabla_variables.get(id);
                if (variable != null) {
                    return variable as Variable;
                }
            } catch (error) {
                console.log(error);
            }
            e = e.anterior;
        }
        return undefined;
    }

    public getFuncion(id: string): Funcion {

        return this.tabla_funciones.get(id);
    }

    public existeVariable(id: string): boolean {
        return this.tabla_variables.get(id) != undefined;
    }
    public existeFuncion(id: string): boolean {
        return this.tabla_funciones.get(id) != undefined;
    }
    static returnvariables() {
        return Ambito.variables1;
    }
    static returnmetodos() {
        return Ambito.metodos1;
    }


}