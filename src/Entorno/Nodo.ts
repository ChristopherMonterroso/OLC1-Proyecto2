export abstract class Nodo {
    sentencias(sentencias: any) {
        throw new Error("Method not implemented.");
    }
    
    public linea:       number;
    public columna:     number;

    constructor(linea:number, columna:number){
        this.linea = linea;
        this.columna = columna;
    }
}
