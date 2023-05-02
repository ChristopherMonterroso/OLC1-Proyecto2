export class Err {
    dato: string;
    tipo: string;
    linea: number;
    columna: number;
    static listaDatos: Array<Err> = [];
  
    constructor(dato: string, tipo: string, linea: number, columna: number) {
      this.dato = dato;
      this.tipo = tipo;
      this.linea = linea;
      this.columna = columna;
    }
  
    static agregarALista(dato:string,tipo:string,linea:number,columa:number): void {
        console.log("Error: "+dato+" "+tipo+" "+linea+" "+columa)
        this.listaDatos.push(new Err(dato,tipo,linea,columa));
    }
  
    static obtenerListaDatos(): Array<Err> {
      console.log(Err.listaDatos) ;
      return Err.listaDatos;
    }
  }