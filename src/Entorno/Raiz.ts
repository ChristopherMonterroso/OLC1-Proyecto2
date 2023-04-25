import { LlamadaFuncion } from "../Expresiones/LlamadaFuncion";
import { DeclararFuncion } from "../Instrucciones/DeclararFuncion";
import { DeclararVariable } from "../Instrucciones/DeclararVariable";
import { Ambito } from "./Ambito";
import { AST } from "./AST";
import { Expresion } from "./Expresion";
import { Instruccion } from "./Instruccion";
import { Nodo } from "./Nodo";
import { TipoPrimitivo } from "../Entorno/Simbolos/TipoPrimitivo"

import { treeContent } from "../Data/dataTree"; import { forEachChild } from "typescript";

export class Raiz {

    private sentencias: Nodo[];
    private nodes ="";
    private connections ="";
    private idNode=0;
    private fillcolor="white";
    private color="black";

    constructor(sentencias: Nodo[]) {
        this.sentencias = sentencias;
    }

    public ejecutar(ast: AST) {
        try {
            let ambito_global = new Ambito(undefined);
            let ambito_actual = new Ambito(ambito_global);
            this.ejecutarDeclaracionesVar(ambito_actual, ambito_global, ast);
            this.ejecutarDeclaracionesFunciones(ambito_actual, ambito_global, ast);
            
  
            for (let x = 0; x < this.sentencias.length; x++) {
                let sent = this.sentencias[x];
                if (!(sent instanceof DeclararVariable) && !(sent instanceof DeclararFuncion)) {
                    if (sent instanceof Instruccion) sent.ejecutar(ambito_actual, ambito_global, ast);
                    else if (sent instanceof Expresion) sent.getValor(ambito_actual, ambito_global, ast);
                }
            }
            //this.graphiz()
        } catch (ex) {
            ast.escribirConsola("ERROR => "+ex.message);
            console.log(ex);

        }

    }

    private ejecutarDeclaracionesVar(actual: Ambito, global: Ambito, ast: AST) {
        for (let x = 0; x < this.sentencias.length; x++) {
            let sent = this.sentencias[x];
            if (sent instanceof DeclararVariable) {
                sent.ejecutar(actual, global, ast);

            }
        }
    }

    private ejecutarDeclaracionesFunciones(actual: Ambito, global: Ambito, ast: AST) {
       
        for (let x = 0; x < this.sentencias.length; x++) {
            let sent = this.sentencias[x];
            if (sent instanceof DeclararFuncion) {
                sent.ejecutar(actual, global, ast);
                
            }
        }
    }

    //no se usa xd
    private ejecutarllamadasFunciones(actual: Ambito, global: Ambito, ast: AST) {
        
        for (let x = 0; x < this.sentencias.length; x++) {

            let sent = this.sentencias[x];
            
            if (sent instanceof LlamadaFuncion) {
                sent.getValor(actual, global,   ast);
               
                //let lista =actual.getFuncion(sent.nombre).sentencias
                
                //if (lista instanceof Instruccion) lista.ejecutar(actual, global, ast)
                //if (lista instanceof Expresion) lista.getValor(actual, global, ast);
               // if(lista instanceof LlamadaFuncion){}
                //console.log(sent)
                //console.log(actual.getFuncion(sent.nombre).sentencias)
                
            }
        }
    }


    private graphiz(){
        this.nodes="";
        this.connections=""; 
        this.nodes += `S_Arbol[label="Arbol" fillcolor="${this.fillcolor}" style=filled];\n`
        for (let x = 0; x < this.sentencias.length; x++) {
            this.initGraphiz(this.sentencias[x])
        }
        let body = `digraph G { \nbgcolor=transparent \n${this.nodes + this.connections}}`;
        treeContent.setContent(body)
    }
    private initGraphiz(sentencia: Nodo){
        this.recursiveGraphiz(sentencia.constructor.name,sentencia,"S_Arbol");
    }
    private recursiveGraphiz(nombre: string,sentencia: any,nodoPadre: string){
        const VariablesTipo = [
            {
                id: "integer",
                tipo: "int",
                igual: "=",
                ptcoma: ";"
            },
            {
                id: "string",
                tipo: "string",
                igual: "=",
                ptcoma: ";"
            }
        ]
        
        let idNode=this.idNode;
        // console.log(nombre)
        // console.log(sentencia)
        if (nombre==="DeclararVariable"){
            console.log(sentencia);
            if (sentencia.exp.constructor.name!="OperacionAritmetica"){
                const DeclararVariable = VariablesTipo.find(variable => variable.id === sentencia.exp.tipo_valor);

            this.nodes += `S_DeclararVariable${idNode}[label="DeclararVariable" fillcolor="${this.fillcolor}" style=filled];\n`
            this.nodes += `S_DeclararVariable_tipo${idNode}[label="${DeclararVariable.tipo}" fillcolor="${this.fillcolor}" style=filled];\n`
            this.nodes += `S_DeclararVariable_id${idNode}[label="${sentencia.id}" fillcolor="${this.fillcolor}" style=filled];\n`
            this.nodes += `S_DeclararVariable_igual${idNode}[label="${DeclararVariable.igual}" fillcolor="${this.fillcolor}" style=filled];\n`
            this.nodes += `S_DeclararVariable_valor${idNode}[label="${sentencia.exp.valor}" fillcolor="${this.fillcolor}" style=filled];\n`
            this.nodes += `S_DeclararVariable_ptcoma${idNode}[label="${DeclararVariable.ptcoma}" fillcolor="${this.fillcolor}" style=filled];\n`

            this.connections += `${nodoPadre} -> S_DeclararVariable${idNode} [color="${this.color}"];\n`;
            this.connections += `S_DeclararVariable${idNode} -> S_DeclararVariable_tipo${idNode} [color="${this.color}"];\n`;
            this.connections += `S_DeclararVariable${idNode} -> S_DeclararVariable_id${idNode} [color="${this.color}"];\n`;
            this.connections += `S_DeclararVariable${idNode} -> S_DeclararVariable_igual${idNode} [color="${this.color}"];\n`;
            this.connections += `S_DeclararVariable${idNode} -> S_DeclararVariable_valor${idNode} [color="${this.color}"];\n`;
            this.connections += `S_DeclararVariable${idNode} -> S_DeclararVariable_ptcoma${idNode} [color="${this.color}"];\n`;
            this.idNode+=1;
            }else{
                this.nodes += `S_DeclararVariable${idNode}[label="DeclararVariable" fillcolor="${this.fillcolor}" style=filled];\n`
                this.connections += `${nodoPadre} -> S_DeclararVariable${idNode} [color="${this.color}"];\n`;
                const clave: string = Object.keys(TipoPrimitivo).find(key => TipoPrimitivo[key] === sentencia.exp.tipo.tipo) || '';
                this.nodes += `S_DeclararVariable_tipo${idNode}[label="${clave}" fillcolor="${this.fillcolor}" style=filled];\n`
                this.connections += `S_DeclararVariable${idNode} -> S_DeclararVariable_tipo${idNode} [color="${this.color}"];\n`;
                this.nodes += `S_DeclararVariable_id${idNode}[label="${sentencia.id}" fillcolor="${this.fillcolor}" style=filled];\n`
                this.connections += `S_DeclararVariable${idNode} -> S_DeclararVariable_id${idNode} [color="${this.color}"];\n`;
                this.nodes += `S_DeclararVariable_igual${idNode}[label="=" fillcolor="${this.fillcolor}" style=filled];\n`
                this.connections += `S_DeclararVariable${idNode} -> S_DeclararVariable_igual${idNode} [color="${this.color}"];\n`;
                this.nodes += `S_DeclararVariable_valor${idNode}[label="-${sentencia.exp.exp2.valor}" fillcolor="${this.fillcolor}" style=filled];\n`
                this.connections += `S_DeclararVariable${idNode} -> S_DeclararVariable_valor${idNode} [color="${this.color}"];\n`;
                this.nodes += `S_DeclararVariable_ptcoma${idNode}[label=";" fillcolor="${this.fillcolor}" style=filled];\n`;
                this.connections += `S_DeclararVariable${idNode} -> S_DeclararVariable_ptcoma${idNode} [color="${this.color}"];\n`;
                this.idNode+=1;
            }
            
        }else if(nombre==="LlamadaFuncion"){
            this.nodes += `S_LlamadaFuncion${idNode}[label="LlamadaFuncion" fillcolor="${this.fillcolor}" style=filled];\n`
            this.nodes += `S_LlamadaFuncion_nombre${idNode}[label="${sentencia.nombre}" fillcolor="${this.fillcolor}" style=filled];\n`
            this.nodes += `S_LlamadaFuncion_pi${idNode}[label="(" fillcolor="${this.fillcolor}" style=filled];\n`
            

            this.connections += `${nodoPadre} -> S_LlamadaFuncion${idNode} [color="${this.color}"];\n`;
            this.connections += `S_LlamadaFuncion${idNode} -> S_LlamadaFuncion_nombre${idNode} [color="${this.color}"];\n`;
            this.connections += `S_LlamadaFuncion${idNode} -> S_LlamadaFuncion_pi${idNode} [color="${this.color}"];\n`;
            
            // if(sentencia.lista_exp[0]){
            //     if(sentencia.lista_exp[0].constructor.name==="AccesoVariable"){
            //         this.nodes += `S_LlamadaFuncion_valor${idNode}[label="${sentencia.lista_exp[0].nombreVar}" fillcolor="${this.fillcolor}" style=filled];\n`
            //         this.connections += `S_LlamadaFuncion${idNode} -> S_LlamadaFuncion_valor${idNode} [color="${this.color}"];\n`;
            //     }else if(sentencia.lista_exp[0].constructor.name==="Valor"){
            //         this.nodes += `S_LlamadaFuncion_valor${idNode}[label="${sentencia.lista_exp[0].valor}" fillcolor="${this.fillcolor}" style=filled];\n`
            //         this.connections += `S_LlamadaFuncion${idNode} -> S_LlamadaFuncion_valor${idNode} [color="${this.color}"];\n`;
            //     }else if(sentencia.lista_exp[0].constructor.name==="OperacionAritmetica"){
            //         this.idNode+=1;
            //         this.recursiveGraphiz("OperacionAritmetica",sentencia.lista_exp[0],"S_LlamadaFuncion"+idNode);
            //     }
            // }
            this.auxiliarRecursiveGraphiz(sentencia.lista_exp[0],idNode,"S_LlamadaFuncion"+idNode)
            //parametros
            this.nodes += `S_LlamadaFuncion_pd${idNode}[label=")" fillcolor="${this.fillcolor}" style=filled];\n`
            this.nodes += `S_LlamadaFuncion_ptcoma${idNode}[label=";" fillcolor="${this.fillcolor}" style=filled];\n`

            this.connections += `S_LlamadaFuncion${idNode} -> S_LlamadaFuncion_pd${idNode} [color="${this.color}"];\n`;
            this.connections += `S_LlamadaFuncion${idNode} -> S_LlamadaFuncion_ptcoma${idNode} [color="${this.color}"];\n`;
            this.idNode+=1;
        }else if(nombre==="OperacionAritmetica" || nombre==="OperacionRelacional"){
            if(sentencia.exp1.constructor.name==="AccesoVariable"){
                this.idNode+=1;
                this.recursiveGraphiz("AccesoVariable",sentencia.exp1,nodoPadre);
            }
            if(sentencia.exp1.constructor.name==="Valor"){
                this.idNode+=1;
                this.recursiveGraphiz("Valor",sentencia.exp1,nodoPadre);
            }
            if(sentencia.exp1.constructor.name==="OperacionAritmetica" || sentencia.exp1.constructor.name==="OperacionRelacional"){
                this.idNode+=1;
                if(sentencia.exp1.constructor.name==="OperacionAritmetica"){
                    this.recursiveGraphiz("OperacionAritmetica",sentencia.exp1,nodoPadre);
                }else if(sentencia.exp1.constructor.name==="OperacionRelacional"){
                    this.recursiveGraphiz("OperacionRelacional",sentencia.exp1,nodoPadre);
                }
            }
            this.nodes += `S_Simbolo${idNode}[label="${sentencia.signo}" fillcolor="${this.fillcolor}" style=filled];\n`
            this.connections += `${nodoPadre} -> S_Simbolo${idNode} [color="${this.color}"];\n`;

            if(sentencia.exp2.constructor.name==="AccesoVariable"){
                this.idNode+=1;
                this.recursiveGraphiz("AccesoVariable",sentencia.exp2,nodoPadre);
            }
            if(sentencia.exp2.constructor.name==="Valor"){
                this.idNode+=1;
                this.recursiveGraphiz("Valor",sentencia.exp2,nodoPadre);
            }
            if(sentencia.exp2.constructor.name==="OperacionAritmetica"||sentencia.exp2.constructor.name==="OperacionRelacional"){
                this.idNode+=1;
                if(sentencia.exp2.constructor.name==="OperacionAritmetica"){
                    this.recursiveGraphiz("OperacionAritmetica",sentencia.exp2,nodoPadre);
                }else if(sentencia.exp2.constructor.name==="OperacionRelacional"){
                    this.recursiveGraphiz("OperacionRelacional",sentencia.exp2,nodoPadre);
                }
            }
            this.idNode+=1;

        }else if(nombre==="AccesoVariable"){
            this.nodes += `S_AccesoVariable${idNode}[label="${sentencia.nombreVar}" fillcolor="${this.fillcolor}" style=filled];\n`
            this.connections += `${nodoPadre} -> S_AccesoVariable${idNode} [color="${this.color}"];\n`;
            this.idNode+=1;
        }else if(nombre==="Valor"){
            this.nodes += `S_Valor${idNode}[label="\\"${sentencia.valor}\\"" fillcolor="${this.fillcolor}" style=filled];\n`
            this.connections += `${nodoPadre} -> S_Valor${idNode} [color="${this.color}"];\n`;
            this.idNode+=1;
        }else if(nombre==="DeclararFuncion"){
            const clave: string = Object.keys(TipoPrimitivo).find(key => TipoPrimitivo[key] === sentencia.tipo.tipo) || '';
            this.nodes += `S_DeclararFuncion${idNode}[label="DeclararFuncion" fillcolor="${this.fillcolor}" style=filled];\n`
            this.connections += `${nodoPadre} -> S_DeclararFuncion${idNode} [color="${this.color}"];\n`;

            this.nodes += `S_DeclararFuncion_tipoPrimitivo${idNode}[label="${clave}" fillcolor="${this.fillcolor}" style=filled];\n`
            this.nodes += `S_DeclararFuncion_nombre${idNode}[label="${sentencia.nombre}" fillcolor="${this.fillcolor}" style=filled];\n`
            this.nodes += `S_DeclararFuncion_pi${idNode}[label="(" fillcolor="${this.fillcolor}" style=filled];\n`

            this.connections += `S_DeclararFuncion${idNode} -> S_DeclararFuncion_tipoPrimitivo${idNode} [color="${this.color}"];\n`;
            this.connections += `S_DeclararFuncion${idNode} -> S_DeclararFuncion_nombre${idNode} [color="${this.color}"];\n`;
            this.connections += `S_DeclararFuncion${idNode} -> S_DeclararFuncion_pi${idNode} [color="${this.color}"];\n`;

            //parametros
            this.nodes += `S_DeclararFuncion_pd${idNode}[label=")" fillcolor="${this.fillcolor}" style=filled];\n`
            this.nodes += `S_DeclararFuncion_ci${idNode}[label="{" fillcolor="${this.fillcolor}" style=filled];\n`

            this.connections += `S_DeclararFuncion${idNode} -> S_DeclararFuncion_pd${idNode} [color="${this.color}"];\n`;
            this.connections += `S_DeclararFuncion${idNode} -> S_DeclararFuncion_ci${idNode} [color="${this.color}"];\n`;

            this.forRecursiveGraphiz(sentencia.sentencias,"S_DeclararFuncion"+idNode)
            //expreciones dentro (recursividad)
            this.nodes += `S_DeclararFuncion_cd${idNode}[label="}" fillcolor="${this.fillcolor}" style=filled];\n`

            this.connections += `S_DeclararFuncion${idNode} -> S_DeclararFuncion_cd${idNode} [color="${this.color}"];\n`;

            this.idNode+=1;
        }else if(nombre==="Asignacion"){
            
            this.nodes += `S_Asignacion${idNode}[label="Asignacion" fillcolor="${this.fillcolor}" style=filled];\n`
            this.connections += `${nodoPadre} -> S_Asignacion${idNode} [color="${this.color}"];\n`;

            this.nodes += `S_Asignacion_valor${idNode}[label="${sentencia.id}" fillcolor="${this.fillcolor}" style=filled];\n`
            this.connections += `S_Asignacion${idNode} -> S_Asignacion_valor${idNode} [color="${this.color}"];\n`;

            this.nodes += `S_Asignacion_igual${idNode}[label="=" fillcolor="${this.fillcolor}" style=filled];\n`
            this.connections += `S_Asignacion${idNode} -> S_Asignacion_igual${idNode} [color="${this.color}"];\n`;
            //recursividad

            this.auxiliarRecursiveGraphiz(sentencia.exp,idNode,"S_Asignacion"+idNode);

            this.nodes += `S_Asignacion_ptcoma${idNode}[label=";" fillcolor="${this.fillcolor}" style=filled];\n`
            this.connections += `S_Asignacion${idNode} -> S_Asignacion_ptcoma${idNode} [color="${this.color}"];\n`;
            this.idNode+=1;
        }else if(nombre==="If"){

            this.nodes += `S_If${idNode}[label="If" fillcolor="${this.fillcolor}" style=filled];\n`
            this.connections += `${nodoPadre} -> S_If${idNode} [color="${this.color}"];\n`;
            
            this.nodes += `S_If_tipo${idNode}[label="if" fillcolor="${this.fillcolor}" style=filled];\n`
            this.connections += `S_If${idNode} -> S_If_tipo${idNode} [color="${this.color}"];\n`;

            this.nodes += `S_If_pi${idNode}[label="(" fillcolor="${this.fillcolor}" style=filled];\n`
            this.connections += `S_If${idNode} -> S_If_pi${idNode} [color="${this.color}"];\n`;

            this.auxiliarRecursiveGraphiz(sentencia.exp_condicion,idNode,"S_If"+idNode)

            this.nodes += `S_If_pd${idNode}[label=")" fillcolor="${this.fillcolor}" style=filled];\n`
            this.connections += `S_If${idNode} -> S_If_pd${idNode} [color="${this.color}"];\n`;

            this.nodes += `S_If_ci${idNode}[label="{" fillcolor="${this.fillcolor}" style=filled];\n`
            this.connections += `S_If${idNode} -> S_If_ci${idNode} [color="${this.color}"];\n`;

            this.forRecursiveGraphiz(sentencia.sentencias,"S_If"+idNode)

            this.nodes += `S_If_cd${idNode}[label="}" fillcolor="${this.fillcolor}" style=filled];\n`
            this.connections += `S_If${idNode} -> S_If_cd${idNode} [color="${this.color}"];\n`;

            if(sentencia.sentencias_else.length>0){
                this.nodes += `S_Else${idNode}[label="Else" fillcolor="${this.fillcolor}" style=filled];\n`
                this.connections += `S_If${idNode} -> S_Else${idNode} [color="${this.color}"];\n`;

                this.nodes += `S_Else_ci${idNode}[label="{" fillcolor="${this.fillcolor}" style=filled];\n`
                this.connections += `S_Else${idNode} -> S_Else_ci${idNode} [color="${this.color}"];\n`;

                this.forRecursiveGraphiz(sentencia.sentencias_else,"S_Else"+idNode)

                this.nodes += `S_Else_cd${idNode}[label="}" fillcolor="${this.fillcolor}" style=filled];\n`
                this.connections += `S_Else${idNode} -> S_Else_cd${idNode} [color="${this.color}"];\n`;
            }
            this.idNode+=1;

        }else if(nombre==="While"){

            this.nodes += `S_While${idNode}[label="While" fillcolor="${this.fillcolor}" style=filled];\n`
            this.connections += `${nodoPadre} -> S_While${idNode} [color="${this.color}"];\n`;
            
            this.nodes += `S_While_tipo${idNode}[label="While" fillcolor="${this.fillcolor}" style=filled];\n`
            this.connections += `S_While${idNode} -> S_While_tipo${idNode} [color="${this.color}"];\n`;

            this.nodes += `S_While_pi${idNode}[label="(" fillcolor="${this.fillcolor}" style=filled];\n`
            this.connections += `S_While${idNode} -> S_While_pi${idNode} [color="${this.color}"];\n`;

            this.auxiliarRecursiveGraphiz(sentencia.exp,idNode,"S_While"+idNode)

            this.nodes += `S_While_pd${idNode}[label=")" fillcolor="${this.fillcolor}" style=filled];\n`
            this.connections += `S_While${idNode} -> S_While_pd${idNode} [color="${this.color}"];\n`;

            this.nodes += `S_While_ci${idNode}[label="{" fillcolor="${this.fillcolor}" style=filled];\n`
            this.connections += `S_While${idNode} -> S_While_ci${idNode} [color="${this.color}"];\n`;

            this.forRecursiveGraphiz(sentencia.sentencias,"S_While"+idNode)

            this.nodes += `S_While_cd${idNode}[label="}" fillcolor="${this.fillcolor}" style=filled];\n`
            this.connections += `S_While${idNode} -> S_While_cd${idNode} [color="${this.color}"];\n`;
            this.idNode+=1;
        }else{
            console.log(nombre)
            console.log(sentencia) 

            // this.nodes += `S_DeclararFuncion${idNode}[label="DeclararFuncion" fillcolor="${this.fillcolor}" style=filled];\n`

            // this.connections += `${nodoPadre} -> S_DeclararVariable${idNode} [color="${this.color}"];\n`;
            // this.connections += `S_DeclararVariable${idNode} -> S_DeclararVariable_tipo${idNode} [color="${this.color}"];\n`;
        }
    }
    private forRecursiveGraphiz(sentencias: any,nodoPadre: string){
        for (let x = 0; x < sentencias.length; x++) {
            this.recursiveGraphiz(sentencias[x].constructor.name,sentencias[x],nodoPadre);
        }
    }
    private auxiliarRecursiveGraphiz(sentencia: any,idNode: any,nodoPadre: any){
        if(sentencia){
            if(sentencia.constructor.name==="AccesoVariable"){
                this.nodes += `${nodoPadre}_valor${idNode}[label="${sentencia.nombreVar}" fillcolor="${this.fillcolor}" style=filled];\n`
                this.connections += `${nodoPadre} -> ${nodoPadre}_valor${idNode} [color="${this.color}"];\n`;
            }else if(sentencia.constructor.name==="Valor"){
                this.nodes += `${nodoPadre}_valor${idNode}[label="${sentencia.valor}" fillcolor="${this.fillcolor}" style=filled];\n`
                this.connections += `${nodoPadre} -> ${nodoPadre}_valor${idNode} [color="${this.color}"];\n`;
            }else if(sentencia.constructor.name==="OperacionAritmetica"||sentencia.constructor.name==="OperacionRelacional"){
                this.idNode+=1;
                if(sentencia.constructor.name==="OperacionAritmetica"){
                    this.recursiveGraphiz("OperacionAritmetica",sentencia,nodoPadre);
                }else if(sentencia.constructor.name==="OperacionRelacional"){
                    this.recursiveGraphiz("OperacionRelacional",sentencia,nodoPadre);
                } 
            }
            this.idNode+=1;
        }
    }
}