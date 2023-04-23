import { Raiz } from "./Raiz";
interface leave {
    type: string;
    content: any;
}
export class AST {

    /*  Nodo Raiz de ejecucion */
    private raiz: Raiz;
    private nContent = 0;
    private nExpressions = 0;
    private nPrints=0;
    private nkeys = 0;
    private salida_cadena: string;
    public nodos: leave[] = [];


    constructor(raiz: Raiz) {
        this.raiz = raiz;
        this.salida_cadena = "";
        this.nodos = [];
    }

    public ejecutar() {

        this.raiz.ejecutar(this);
    }


    public escribirConsola(cadena: string) {
        this.salida_cadena += cadena + "\n";
    }

    public getSalida() {
        return this.salida_cadena;
    }
    public printNodos() {
        let body = "digraph G { node[shape=circle] bgcolor=transparent \n node_0[label=exec]\n ";
        this.nodos.forEach((nodo) => {
            body += this.auxGraph(nodo,"node_0")
        });
        body += "\n  \n }";
        console.log(body);
    }
    public setNodo(nodo: leave) {
        this.nodos.push(nodo);
    }
    public auxGraph(nodo: leave, nodoPadre: string)  {
        switch (nodo.type) {

            case "print":
                let s ="";
                s+= "\nprint_"+this.nPrints+"[label=print]";
                s+= nodoPadre+"->print_"+this.nPrints;
                s+= "\nkey_"+this.nkeys+'[label="("]';
                s+= "\nprint_"+this.nPrints+"->key_"+this.nkeys;
                this.nkeys+=1;
                 s+= "\nexpresion_"+this.nExpressions+"[label=EXPRESION]";
                 s+= "\nprint_"+this.nPrints+"->expresion_"+this.nExpressions;
                 s+= "\ncontent_"+this.nExpressions+"[label="+nodo.content+"]";
                 s+= "\nexpresion_"+this.nExpressions+"->content_"+this.nExpressions;
                 this.nExpressions+=1;
                 this.nContent+=1;
                 s+= "\nkey_"+this.nkeys+'[label=")"]';
                 s+= "\nprint_"+this.nPrints+"->key_"+this.nkeys;
                this.nkeys+=1;
                this.nPrints+=1;
                return s;
        }

    }
}