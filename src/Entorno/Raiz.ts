import { LlamadaFuncion } from "../Expresiones/LlamadaFuncion";
import { DeclararFuncion } from "../Instrucciones/DeclararFuncion";
import { DeclararVariable } from "../Instrucciones/DeclararVariable";
import { Ambito } from "./Ambito";
import { AST } from "./AST";
import { Expresion } from "./Expresion";
import { Instruccion } from "./Instruccion";
import { Nodo } from "./Nodo";
import { TipoPrimitivo } from "../Entorno/Simbolos/TipoPrimitivo"

import * as variables from "../Data/dataTree";
import { forEachChild } from "typescript";
import { DeclararVector } from "../Instrucciones/DeclararVector";
import { DeclararLista } from "../Instrucciones/DeclararLista";

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
            let ambito_global: Ambito = new Ambito(undefined);
            let ambito_actual: Ambito = ambito_global;
            this.ejecutarDeclaracionesVar(ambito_actual, ambito_global, ast);
            this.ejecutarllamadasFunciones(ambito_actual, ambito_global, ast);
            
            console.log(ambito_actual)
            for (let x = 0; x < this.sentencias.length; x++) {
                let sent = this.sentencias[x];
                if (!(sent instanceof DeclararVariable) && !(sent instanceof DeclararFuncion)) {
                    if (sent instanceof Instruccion) sent.ejecutar(ambito_actual, ambito_global, ast);
                    else if (sent instanceof Expresion) sent.getValor(ambito_actual, ambito_global, ast);
                }
            }

            this.graphiz()

        } catch (ex) {
            ast.escribirConsola("ERROR => ");
            console.log(ex);

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
        //console.log(body)
        variables.treeContent.setContent(body)
    }
    private initGraphiz(sentencia: Nodo){
        this.recursiveGraphiz(sentencia.constructor.name,sentencia,"S_Arbol");
    }
    private recursiveGraphiz(nombre: string,sentencia: any,nodoPadre: string){
                
        let idNode=this.idNode;

        if (nombre==="DeclararVariable"){
            if(sentencia.exp){
                this.nodes += `S_DeclararVariable${idNode}[label="DeclararVariable" fillcolor="${this.fillcolor}" style=filled];\n`
                this.connections += `${nodoPadre} -> S_DeclararVariable${idNode} [color="${this.color}"];\n`;
                
                const clave: string = Object.keys(TipoPrimitivo).find(key => TipoPrimitivo[key] === sentencia.exp.tipo.tipo) || '';

                this.nodes += `S_DeclararVariable_tipo${idNode}[label="${clave}" fillcolor="${this.fillcolor}" style=filled];\n`
                this.connections += `S_DeclararVariable${idNode} -> S_DeclararVariable_tipo${idNode} [color="${this.color}"];\n`;

                this.nodes += `S_DeclararVariable_id${idNode}[label="${sentencia.id}" fillcolor="${this.fillcolor}" style=filled];\n`
                this.connections += `S_DeclararVariable${idNode} -> S_DeclararVariable_id${idNode} [color="${this.color}"];\n`;

                this.nodes += `S_DeclararVariable_igual${idNode}[label="=" fillcolor="${this.fillcolor}" style=filled];\n`
                this.connections += `S_DeclararVariable${idNode} -> S_DeclararVariable_igual${idNode} [color="${this.color}"];\n`;

                this.recursiveGraphiz(sentencia.exp.constructor.name,sentencia.exp,"S_DeclararVariable"+idNode);

                this.nodes += `S_DeclararVariable_ptcoma${idNode}[label=";" fillcolor="${this.fillcolor}" style=filled];\n`;
                this.connections += `S_DeclararVariable${idNode} -> S_DeclararVariable_ptcoma${idNode} [color="${this.color}"];\n`;
                this.idNode+=1;

                
            }else{
                const clave: string = Object.keys(TipoPrimitivo).find(key => TipoPrimitivo[key] === sentencia.tipo.tipo) || '';
                this.nodes += `S_DeclararVariable${idNode}[label="DeclararVariable" fillcolor="${this.fillcolor}" style=filled];\n`
                this.nodes += `S_DeclararVariable_tipo${idNode}[label="${clave}" fillcolor="${this.fillcolor}" style=filled];\n`
                this.nodes += `S_DeclararVariable_id${idNode}[label="${sentencia.id}" fillcolor="${this.fillcolor}" style=filled];\n`
                this.nodes += `S_DeclararVariable_ptcoma${idNode}[label=";" fillcolor="${this.fillcolor}" style=filled];\n`

                this.connections += `${nodoPadre} -> S_DeclararVariable${idNode} [color="${this.color}"];\n`;
                this.connections += `S_DeclararVariable${idNode} -> S_DeclararVariable_tipo${idNode} [color="${this.color}"];\n`;
                this.connections += `S_DeclararVariable${idNode} -> S_DeclararVariable_id${idNode} [color="${this.color}"];\n`;
                this.connections += `S_DeclararVariable${idNode} -> S_DeclararVariable_ptcoma${idNode} [color="${this.color}"];\n`;
                this.idNode+=1;
            }
            this.idNode+=1;
        }else if(nombre==="LlamadaFuncion"){
            this.nodes += `S_LlamadaFuncion${idNode}[label="LlamadaFuncion" fillcolor="${this.fillcolor}" style=filled];\n`
            this.nodes += `S_LlamadaFuncion_nombre${idNode}[label="${sentencia.nombre}" fillcolor="${this.fillcolor}" style=filled];\n`
            this.nodes += `S_LlamadaFuncion_pi${idNode}[label="(" fillcolor="${this.fillcolor}" style=filled];\n`

            this.connections += `${nodoPadre} -> S_LlamadaFuncion${idNode} [color="${this.color}"];\n`;
            this.connections += `S_LlamadaFuncion${idNode} -> S_LlamadaFuncion_nombre${idNode} [color="${this.color}"];\n`;
            this.connections += `S_LlamadaFuncion${idNode} -> S_LlamadaFuncion_pi${idNode} [color="${this.color}"];\n`;
            
            this.auxiliarRecursiveGraphiz(sentencia.lista_exp[0],"S_LlamadaFuncion"+idNode)
            //parametros
            this.nodes += `S_LlamadaFuncion_pd${idNode}[label=")" fillcolor="${this.fillcolor}" style=filled];\n`
            this.nodes += `S_LlamadaFuncion_ptcoma${idNode}[label=";" fillcolor="${this.fillcolor}" style=filled];\n`

            this.connections += `S_LlamadaFuncion${idNode} -> S_LlamadaFuncion_pd${idNode} [color="${this.color}"];\n`;
            this.connections += `S_LlamadaFuncion${idNode} -> S_LlamadaFuncion_ptcoma${idNode} [color="${this.color}"];\n`;
            this.idNode+=1;
        }else if(nombre==="OperacionAritmetica" || nombre==="OperacionRelacional"){
            this.idNode+=1;
            this.recursiveGraphiz(sentencia.exp1.constructor.name,sentencia.exp1,nodoPadre);

            this.nodes += `S_Simbolo${idNode}[label="${sentencia.signo}" fillcolor="${this.fillcolor}" style=filled];\n`
            this.connections += `${nodoPadre} -> S_Simbolo${idNode} [color="${this.color}"];\n`;
            this.idNode+=1;
            this.recursiveGraphiz(sentencia.exp2.constructor.name,sentencia.exp2,nodoPadre);

            
            this.idNode+=1;

        }else if(nombre==="AccesoVariable"){
            if(sentencia.key){
                this.nodes += `S_AccesoVariable${idNode}[label="${sentencia.nombreVar}" fillcolor="${this.fillcolor}" style=filled];\n`;
                this.connections += `${nodoPadre} -> S_AccesoVariable${idNode} [color="${this.color}"];\n`;

                this.nodes += `S_AccesoVariable_ci1${idNode}[label="[" fillcolor="${this.fillcolor}" style=filled];\n`;
                this.connections += `${nodoPadre} -> S_AccesoVariable_ci1${idNode} [color="${this.color}"];\n`;

                this.nodes += `S_AccesoVariable_posv${idNode}[label="${sentencia.posicionVector}" fillcolor="${this.fillcolor}" style=filled];\n`;
                this.connections += `${nodoPadre} -> S_AccesoVariable_posv${idNode} [color="${this.color}"];\n`;

                this.nodes += `S_AccesoVariable_cd1${idNode}[label="]" fillcolor="${this.fillcolor}" style=filled];\n`;
                this.connections += `${nodoPadre} -> S_AccesoVariable_cd1${idNode} [color="${this.color}"];\n`;
            }else if(sentencia.key2){
                this.nodes += `S_AccesoVariable${idNode}[label="${sentencia.nombreVar}" fillcolor="${this.fillcolor}" style=filled];\n`;
                this.connections += `${nodoPadre} -> S_AccesoVariable${idNode} [color="${this.color}"];\n`;

                this.nodes += `S_AccesoVariable_ci1${idNode}[label="[" fillcolor="${this.fillcolor}" style=filled];\n`;
                this.connections += `${nodoPadre} -> S_AccesoVariable_ci1${idNode} [color="${this.color}"];\n`;

                this.nodes += `S_AccesoVariable_ci2${idNode}[label="[" fillcolor="${this.fillcolor}" style=filled];\n`;
                this.connections += `${nodoPadre} -> S_AccesoVariable_ci2${idNode} [color="${this.color}"];\n`;

                this.nodes += `S_AccesoVariable_id${idNode}[label="${sentencia.posicionVector}" fillcolor="${this.fillcolor}" style=filled];\n`;
                this.connections += `${nodoPadre} -> S_AccesoVariable_id${idNode} [color="${this.color}"];\n`;

                this.nodes += `S_AccesoVariable_cd1${idNode}[label="]" fillcolor="${this.fillcolor}" style=filled];\n`;
                this.connections += `${nodoPadre} -> S_AccesoVariable_cd1${idNode} [color="${this.color}"];\n`;

                this.nodes += `S_AccesoVariable_cd2${idNode}[label="]" fillcolor="${this.fillcolor}" style=filled];\n`;
                this.connections += `${nodoPadre} -> S_AccesoVariable_cd2${idNode} [color="${this.color}"];\n`;
            }else{
                this.nodes += `S_AccesoVariable${idNode}[label="${sentencia.nombreVar}" fillcolor="${this.fillcolor}" style=filled];\n`;
                this.connections += `${nodoPadre} -> S_AccesoVariable${idNode} [color="${this.color}"];\n`;
            }
            this.idNode+=1;
        }else if(nombre==="Valor"){
            this.nodes += `S_Valor${idNode}[label="${sentencia.valor}" fillcolor="${this.fillcolor}" style=filled];\n`
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
            this.forRecursiveGraphiz(sentencia.parametros,"S_DeclararFuncion"+idNode,true)
            //parametros
            this.nodes += `S_DeclararFuncion_pd${idNode}[label=")" fillcolor="${this.fillcolor}" style=filled];\n`
            this.nodes += `S_DeclararFuncion_ci${idNode}[label="{" fillcolor="${this.fillcolor}" style=filled];\n`

            this.connections += `S_DeclararFuncion${idNode} -> S_DeclararFuncion_pd${idNode} [color="${this.color}"];\n`;
            this.connections += `S_DeclararFuncion${idNode} -> S_DeclararFuncion_ci${idNode} [color="${this.color}"];\n`;

            this.forRecursiveGraphiz(sentencia.sentencias,"S_DeclararFuncion"+idNode,false)
            //expreciones dentro (recursividad)
            this.nodes += `S_DeclararFuncion_cd${idNode}[label="}" fillcolor="${this.fillcolor}" style=filled];\n`

            this.connections += `S_DeclararFuncion${idNode} -> S_DeclararFuncion_cd${idNode} [color="${this.color}"];\n`;

            this.idNode+=1;
        }else if(nombre==="Asignacion"){
            this.nodes += `S_Asignacion${idNode}[label="Asignacion" fillcolor="${this.fillcolor}" style=filled];\n`
            this.connections += `${nodoPadre} -> S_Asignacion${idNode} [color="${this.color}"];\n`;

            this.nodes += `S_Asignacion_valor${idNode}[label="${sentencia.id}" fillcolor="${this.fillcolor}" style=filled];\n`
            this.connections += `S_Asignacion${idNode} -> S_Asignacion_valor${idNode} [color="${this.color}"];\n`;
            if(sentencia.exp==="++"){
                this.nodes += `S_Asignacion_mas${idNode}[label="++" fillcolor="${this.fillcolor}" style=filled];\n`
                this.connections += `S_Asignacion${idNode} -> S_Asignacion_mas${idNode} [color="${this.color}"];\n`;
            }else if(sentencia.exp==="--"){
                this.nodes += `S_Asignacion_menos${idNode}[label="--" fillcolor="${this.fillcolor}" style=filled];\n`
                this.connections += `S_Asignacion${idNode} -> S_Asignacion_menos${idNode} [color="${this.color}"];\n`;
            }else if(sentencia.key){
                this.nodes += `S_Asignacion_ci1${idNode}[label="[" fillcolor="${this.fillcolor}" style=filled];\n`
                this.connections += `S_Asignacion${idNode} -> S_Asignacion_ci1${idNode} [color="${this.color}"];\n`;

                this.nodes += `S_Asignacion_num1${idNode}[label="${sentencia.posicion}" fillcolor="${this.fillcolor}" style=filled];\n`
                this.connections += `S_Asignacion${idNode} -> S_Asignacion_num1${idNode} [color="${this.color}"];\n`;

                this.nodes += `S_Asignacion_cd1${idNode}[label="]" fillcolor="${this.fillcolor}" style=filled];\n`
                this.connections += `S_Asignacion${idNode} -> S_Asignacion_cd1${idNode} [color="${this.color}"];\n`;

                this.nodes += `S_Asignacion_igual${idNode}[label="=" fillcolor="${this.fillcolor}" style=filled];\n`
                this.connections += `S_Asignacion${idNode} -> S_Asignacion_igual${idNode} [color="${this.color}"];\n`;

                this.auxiliarRecursiveGraphiz(sentencia.exp,"S_Asignacion"+idNode)

            }else if(sentencia.key2){
                this.nodes += `S_Asignacion_punto${idNode}[label="." fillcolor="${this.fillcolor}" style=filled];\n`
                this.connections += `S_Asignacion${idNode} -> S_Asignacion_punto${idNode} [color="${this.color}"];\n`;

                this.nodes += `S_Asignacion_add${idNode}[label="add" fillcolor="${this.fillcolor}" style=filled];\n`
                this.connections += `S_Asignacion${idNode} -> S_Asignacion_add${idNode} [color="${this.color}"];\n`;

                this.nodes += `S_Asignacion_pi${idNode}[label="(" fillcolor="${this.fillcolor}" style=filled];\n`
                this.connections += `S_Asignacion${idNode} -> S_Asignacion_pi${idNode} [color="${this.color}"];\n`;

                this.auxiliarRecursiveGraphiz(sentencia.exp,"S_Asignacion"+idNode);

                this.nodes += `S_Asignacion_pd${idNode}[label=")" fillcolor="${this.fillcolor}" style=filled];\n`
                this.connections += `S_Asignacion${idNode} -> S_Asignacion_pd${idNode} [color="${this.color}"];\n`;
            }else{
                this.nodes += `S_Asignacion_igual${idNode}[label="=" fillcolor="${this.fillcolor}" style=filled];\n`
                this.connections += `S_Asignacion${idNode} -> S_Asignacion_igual${idNode} [color="${this.color}"];\n`;
                this.auxiliarRecursiveGraphiz(sentencia.exp,"S_Asignacion"+idNode);
            }
            

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

            this.auxiliarRecursiveGraphiz(sentencia.exp_condicion,"S_If"+idNode)

            this.nodes += `S_If_pd${idNode}[label=")" fillcolor="${this.fillcolor}" style=filled];\n`
            this.connections += `S_If${idNode} -> S_If_pd${idNode} [color="${this.color}"];\n`;

            this.nodes += `S_If_ci${idNode}[label="{" fillcolor="${this.fillcolor}" style=filled];\n`
            this.connections += `S_If${idNode} -> S_If_ci${idNode} [color="${this.color}"];\n`;

            this.forRecursiveGraphiz(sentencia.sentencias,"S_If"+idNode,false)

            this.nodes += `S_If_cd${idNode}[label="}" fillcolor="${this.fillcolor}" style=filled];\n`
            this.connections += `S_If${idNode} -> S_If_cd${idNode} [color="${this.color}"];\n`;

            if(sentencia.sentencias_else.length>0){
                this.nodes += `S_Else${idNode}[label="Else" fillcolor="${this.fillcolor}" style=filled];\n`
                this.connections += `S_If${idNode} -> S_Else${idNode} [color="${this.color}"];\n`;

                this.nodes += `S_Else_ci${idNode}[label="{" fillcolor="${this.fillcolor}" style=filled];\n`
                this.connections += `S_Else${idNode} -> S_Else_ci${idNode} [color="${this.color}"];\n`;

                this.forRecursiveGraphiz(sentencia.sentencias_else,"S_Else"+idNode,false)

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

            this.auxiliarRecursiveGraphiz(sentencia.exp,"S_While"+idNode)

            this.nodes += `S_While_pd${idNode}[label=")" fillcolor="${this.fillcolor}" style=filled];\n`
            this.connections += `S_While${idNode} -> S_While_pd${idNode} [color="${this.color}"];\n`;

            this.nodes += `S_While_ci${idNode}[label="{" fillcolor="${this.fillcolor}" style=filled];\n`
            this.connections += `S_While${idNode} -> S_While_ci${idNode} [color="${this.color}"];\n`;

            this.forRecursiveGraphiz(sentencia.sentencias,"S_While"+idNode,false)

            this.nodes += `S_While_cd${idNode}[label="}" fillcolor="${this.fillcolor}" style=filled];\n`
            this.connections += `S_While${idNode} -> S_While_cd${idNode} [color="${this.color}"];\n`;
            this.idNode+=1;
        }else if(nombre==="DoWhile"){
            this.nodes += `S_DoWhile${idNode}[label="DoWhile" fillcolor="${this.fillcolor}" style=filled];\n`
            this.connections += `${nodoPadre} -> S_DoWhile${idNode} [color="${this.color}"];\n`;

            this.nodes += `S_DoWhile_do${idNode}[label="do" fillcolor="${this.fillcolor}" style=filled];\n`
            this.connections += `S_DoWhile${idNode} -> S_DoWhile_do${idNode} [color="${this.color}"];\n`;

            this.nodes += `S_DoWhile_ci${idNode}[label="{" fillcolor="${this.fillcolor}" style=filled];\n`
            this.connections += `S_DoWhile${idNode} -> S_DoWhile_ci${idNode} [color="${this.color}"];\n`;

            this.forRecursiveGraphiz(sentencia.sentencias,"S_DoWhile"+idNode,false)

            this.nodes += `S_DoWhile_cd${idNode}[label="}" fillcolor="${this.fillcolor}" style=filled];\n`
            this.connections += `S_DoWhile${idNode} -> S_DoWhile_cd${idNode} [color="${this.color}"];\n`;

            this.nodes += `S_DoWhile_while${idNode}[label="while" fillcolor="${this.fillcolor}" style=filled];\n`
            this.connections += `S_DoWhile${idNode} -> S_DoWhile_while${idNode} [color="${this.color}"];\n`;

            this.nodes += `S_DoWhile_pi${idNode}[label="(" fillcolor="${this.fillcolor}" style=filled];\n`
            this.connections += `S_DoWhile${idNode} -> S_DoWhile_pi${idNode} [color="${this.color}"];\n`;

            this.auxiliarRecursiveGraphiz(sentencia.exp,"S_DoWhile"+idNode)

            this.nodes += `S_DoWhile_pd${idNode}[label=")" fillcolor="${this.fillcolor}" style=filled];\n`
            this.connections += `S_DoWhile${idNode} -> S_DoWhile_pd${idNode} [color="${this.color}"];\n`;

            this.idNode+=1;
        }else if(nombre==="toUpper"){
            this.nodes += `S_toUpper${idNode}[label="toUpper" fillcolor="${this.fillcolor}" style=filled];\n`
            this.connections += `${nodoPadre} -> S_toUpper${idNode} [color="${this.color}"];\n`;

            this.nodes += `S_toUpper_name${idNode}[label="toUpper" fillcolor="${this.fillcolor}" style=filled];\n`
            this.connections += `S_toUpper${idNode} -> S_toUpper_name${idNode} [color="${this.color}"];\n`;

            this.nodes += `S_toUpper_pi${idNode}[label="(" fillcolor="${this.fillcolor}" style=filled];\n`
            this.connections += `S_toUpper${idNode} -> S_toUpper_pi${idNode} [color="${this.color}"];\n`;

            this.auxiliarRecursiveGraphiz(sentencia.exp1,"S_toUpper"+idNode)

            this.nodes += `S_toUpper_pd${idNode}[label=")" fillcolor="${this.fillcolor}" style=filled];\n`
            this.connections += `S_toUpper${idNode} -> S_toUpper_pd${idNode} [color="${this.color}"];\n`;
            this.idNode+=1;
        }else if(nombre==="toLower"){
            this.nodes += `S_toLower${idNode}[label="toLower" fillcolor="${this.fillcolor}" style=filled];\n`
            this.connections += `${nodoPadre} -> S_toLower${idNode} [color="${this.color}"];\n`;

            this.nodes += `S_toLower_name${idNode}[label="toLower" fillcolor="${this.fillcolor}" style=filled];\n`
            this.connections += `S_toLower${idNode} -> S_toLower_name${idNode} [color="${this.color}"];\n`;

            this.nodes += `S_toLower_pi${idNode}[label="(" fillcolor="${this.fillcolor}" style=filled];\n`
            this.connections += `S_toLower${idNode} -> S_toLower_pi${idNode} [color="${this.color}"];\n`;
            
            this.auxiliarRecursiveGraphiz(sentencia.exp1,"S_toLower"+idNode)

            this.nodes += `S_toLower_pd${idNode}[label=")" fillcolor="${this.fillcolor}" style=filled];\n`
            this.connections += `S_toLower${idNode} -> S_toLower_pd${idNode} [color="${this.color}"];\n`;
            this.idNode+=1;
        }else if(nombre==="TypeOf"){
            this.nodes += `S_TypeOf${idNode}[label="TypeOf" fillcolor="${this.fillcolor}" style=filled];\n`
            this.connections += `${nodoPadre} -> S_TypeOf${idNode} [color="${this.color}"];\n`;

            this.nodes += `S_TypeOf_name${idNode}[label="TypeOf" fillcolor="${this.fillcolor}" style=filled];\n`
            this.connections += `S_TypeOf${idNode} -> S_TypeOf_name${idNode} [color="${this.color}"];\n`

            this.nodes += `S_TypeOf_pi${idNode}[label="(" fillcolor="${this.fillcolor}" style=filled];\n`
            this.connections += `S_TypeOf${idNode} -> S_TypeOf_pi${idNode} [color="${this.color}"];\n`

            this.recursiveGraphiz(sentencia.exp1.constructor.name,sentencia.exp1,"S_TypeOf"+idNode)

            this.nodes += `S_TypeOf_pd${idNode}[label=")" fillcolor="${this.fillcolor}" style=filled];\n`
            this.connections += `S_TypeOf${idNode} -> S_TypeOf_pd${idNode} [color="${this.color}"];\n`
            this.idNode+=1;
        }else if(nombre==="Length"){
            this.nodes += `S_Length${idNode}[label="Length" fillcolor="${this.fillcolor}" style=filled];\n`
            this.connections += `${nodoPadre} -> S_Length${idNode} [color="${this.color}"];\n`;

            this.nodes += `S_Length_name${idNode}[label="Length" fillcolor="${this.fillcolor}" style=filled];\n`
            this.connections += `S_Length${idNode} -> S_Length_name${idNode} [color="${this.color}"];\n`

            this.nodes += `S_Length_pi${idNode}[label="(" fillcolor="${this.fillcolor}" style=filled];\n`
            this.connections += `S_Length${idNode} -> S_Length_pi${idNode} [color="${this.color}"];\n`

            this.recursiveGraphiz(sentencia.exp1.constructor.name,sentencia.exp1,"S_Length"+idNode)

            this.nodes += `S_Length_pd${idNode}[label=")" fillcolor="${this.fillcolor}" style=filled];\n`
            this.connections += `S_Length${idNode} -> S_Length_pd${idNode} [color="${this.color}"];\n`
            this.idNode+=1;
        }else if(nombre==="toString"){
            this.nodes += `S_toString${idNode}[label="toString" fillcolor="${this.fillcolor}" style=filled];\n`;
            this.connections += `${nodoPadre} -> S_toString${idNode} [color="${this.color}"];\n`;

            this.nodes += `S_toString_name${idNode}[label="toString" fillcolor="${this.fillcolor}" style=filled];\n`
            this.connections += `S_toString${idNode} -> S_toString_name${idNode} [color="${this.color}"];\n`

            this.nodes += `S_toString_pi${idNode}[label="(" fillcolor="${this.fillcolor}" style=filled];\n`
            this.connections += `S_toString${idNode} -> S_toString_pi${idNode} [color="${this.color}"];\n`

            this.recursiveGraphiz(sentencia.exp1.constructor.name,sentencia.exp1,"S_toString"+idNode)

            this.nodes += `S_toString_pd${idNode}[label=")" fillcolor="${this.fillcolor}" style=filled];\n`
            this.connections += `S_toString${idNode} -> S_toString_pd${idNode} [color="${this.color}"];\n`
            this.idNode+=1;
        }else if(nombre==="DeclararLista"){
            const clave1: string = Object.keys(TipoPrimitivo).find(key => TipoPrimitivo[key] === sentencia.tipo1.tipo) || '';
            const clave2: string = Object.keys(TipoPrimitivo).find(key => TipoPrimitivo[key] === sentencia.tipo2.tipo) || '';
            this.nodes += `S_DeclararLista${idNode}[label="DeclararLista" fillcolor="${this.fillcolor}" style=filled];\n`;
            this.connections += `${nodoPadre} -> S_DeclararLista${idNode} [color="${this.color}"];\n`;

            this.nodes += `S_DeclararLista_lista1${idNode}[label="list" fillcolor="${this.fillcolor}" style=filled];\n`;
            this.connections += `S_DeclararLista${idNode} -> S_DeclararLista_lista1${idNode} [color="${this.color}"];\n`;

            this.nodes += `S_DeclararLista_menor1${idNode}[label="<" fillcolor="${this.fillcolor}" style=filled];\n`;
            this.connections += `S_DeclararLista${idNode} -> S_DeclararLista_menor1${idNode} [color="${this.color}"];\n`;

            this.nodes += `S_DeclararLista_tipo1${idNode}[label="${clave1}" fillcolor="${this.fillcolor}" style=filled];\n`;
            this.connections += `S_DeclararLista${idNode} -> S_DeclararLista_tipo1${idNode} [color="${this.color}"];\n`;

            this.nodes += `S_DeclararLista_mayor1${idNode}[label=">" fillcolor="${this.fillcolor}" style=filled];\n`;
            this.connections += `S_DeclararLista${idNode} -> S_DeclararLista_mayor1${idNode} [color="${this.color}"];\n`;

            this.nodes += `S_DeclararLista_nombre${idNode}[label="${sentencia.nombre}" fillcolor="${this.fillcolor}" style=filled];\n`;
            this.connections += `S_DeclararLista${idNode} -> S_DeclararLista_nombre${idNode} [color="${this.color}"];\n`;

            this.nodes += `S_DeclararLista_igual${idNode}[label="=" fillcolor="${this.fillcolor}" style=filled];\n`;
            this.connections += `S_DeclararLista${idNode} -> S_DeclararLista_igual${idNode} [color="${this.color}"];\n`;

            this.nodes += `S_DeclararLista_new${idNode}[label="new" fillcolor="${this.fillcolor}" style=filled];\n`;
            this.connections += `S_DeclararLista${idNode} -> S_DeclararLista_new${idNode} [color="${this.color}"];\n`;

            this.nodes += `S_DeclararLista_lista2${idNode}[label="list" fillcolor="${this.fillcolor}" style=filled];\n`;
            this.connections += `S_DeclararLista${idNode} -> S_DeclararLista_lista2${idNode} [color="${this.color}"];\n`;

            this.nodes += `S_DeclararLista_menor2${idNode}[label="<" fillcolor="${this.fillcolor}" style=filled];\n`;
            this.connections += `S_DeclararLista${idNode} -> S_DeclararLista_menor2${idNode} [color="${this.color}"];\n`;

            this.nodes += `S_DeclararLista_tipo2${idNode}[label="${clave2}" fillcolor="${this.fillcolor}" style=filled];\n`;
            this.connections += `S_DeclararLista${idNode} -> S_DeclararLista_tipo2${idNode} [color="${this.color}"];\n`;

            this.nodes += `S_DeclararLista_mayor2${idNode}[label=">" fillcolor="${this.fillcolor}" style=filled];\n`;
            this.connections += `S_DeclararLista${idNode} -> S_DeclararLista_mayor2${idNode} [color="${this.color}"];\n`;

            this.nodes += `S_DeclararLista_pc${idNode}[label=";" fillcolor="${this.fillcolor}" style=filled];\n`;
            this.connections += `S_DeclararLista${idNode} -> S_DeclararLista_pc${idNode} [color="${this.color}"];\n`;
            this.idNode+=1;
        }else if(nombre==="DeclararVector"){
            const clave1: string = Object.keys(TipoPrimitivo).find(key => TipoPrimitivo[key] === sentencia.tipo1.tipo) || '';
            const clave2: string = Object.keys(TipoPrimitivo).find(key => TipoPrimitivo[key] === sentencia.tipo2.tipo) || '';
            this.nodes += `S_DeclararVector${idNode}[label="DeclararVector" fillcolor="${this.fillcolor}" style=filled];\n`;
            this.connections += `${nodoPadre} -> S_DeclararVector${idNode} [color="${this.color}"];\n`;

            this.nodes += `S_DeclararVector_tipo1${idNode}[label="${clave1}" fillcolor="${this.fillcolor}" style=filled];\n`;
            this.connections += `S_DeclararVector${idNode} -> S_DeclararVector_tipo1${idNode} [color="${this.color}"];\n`;

            this.nodes += `S_DeclararVector_ci1${idNode}[label="[" fillcolor="${this.fillcolor}" style=filled];\n`;
            this.connections += `S_DeclararVector${idNode} -> S_DeclararVector_ci1${idNode} [color="${this.color}"];\n`;

            this.nodes += `S_DeclararVector_cd1${idNode}[label="]" fillcolor="${this.fillcolor}" style=filled];\n`;
            this.connections += `S_DeclararVector${idNode} -> S_DeclararVector_cd1${idNode} [color="${this.color}"];\n`;

            this.nodes += `S_DeclararVector_nombre${idNode}[label="${sentencia.nombre}" fillcolor="${this.fillcolor}" style=filled];\n`;
            this.connections += `S_DeclararVector${idNode} -> S_DeclararVector_nombre${idNode} [color="${this.color}"];\n`;

            this.nodes += `S_DeclararVector_igual${idNode}[label="=" fillcolor="${this.fillcolor}" style=filled];\n`;
            this.connections += `S_DeclararVector${idNode} -> S_DeclararVector_igual${idNode} [color="${this.color}"];\n`;
            if(sentencia.estado){
                this.nodes += `S_DeclararVector_new${idNode}[label="new" fillcolor="${this.fillcolor}" style=filled];\n`;
                this.connections += `S_DeclararVector${idNode} -> S_DeclararVector_new${idNode} [color="${this.color}"];\n`;

                this.nodes += `S_DeclararVector_tipo2${idNode}[label="${clave2}" fillcolor="${this.fillcolor}" style=filled];\n`;
                this.connections += `S_DeclararVector${idNode} -> S_DeclararVector_tipo2${idNode} [color="${this.color}"];\n`;

                this.nodes += `S_DeclararVector_ci2${idNode}[label="[" fillcolor="${this.fillcolor}" style=filled];\n`;
                this.connections += `S_DeclararVector${idNode} -> S_DeclararVector_ci2${idNode} [color="${this.color}"];\n`;

                this.nodes += `S_DeclararVector_n${idNode}[label="${sentencia.tamaño}" fillcolor="${this.fillcolor}" style=filled];\n`;
                this.connections += `S_DeclararVector${idNode} -> S_DeclararVector_n${idNode} [color="${this.color}"];\n`;

                this.nodes += `S_DeclararVector_cd2${idNode}[label="]" fillcolor="${this.fillcolor}" style=filled];\n`;
                this.connections += `S_DeclararVector${idNode} -> S_DeclararVector_cd2${idNode} [color="${this.color}"];\n`;
            }else{
                this.nodes += `S_DeclararVector_li${idNode}[label="{" fillcolor="${this.fillcolor}" style=filled];\n`;
                this.connections += `S_DeclararVector${idNode} -> S_DeclararVector_li${idNode} [color="${this.color}"];\n`;

                this.forRecursiveGraphiz(sentencia.contenido,"S_DeclararVector"+idNode,true)

                this.nodes += `S_DeclararVector_ld${idNode}[label="}" fillcolor="${this.fillcolor}" style=filled];\n`;
                this.connections += `S_DeclararVector${idNode} -> S_DeclararVector_ld${idNode} [color="${this.color}"];\n`;
            }

                this.nodes += `S_DeclararVector_pc${idNode}[label=";" fillcolor="${this.fillcolor}" style=filled];\n`;
                this.connections += `S_DeclararVector${idNode} -> S_DeclararVector_pc${idNode} [color="${this.color}"];\n`;
            
            this.idNode+=1;
        }else if(nombre==="Truncate"){
            this.nodes += `S_Truncate${idNode}[label="Truncate" fillcolor="${this.fillcolor}" style=filled];\n`;
            this.connections += `${nodoPadre} -> S_Truncate${idNode} [color="${this.color}"];\n`;

            this.nodes += `S_Truncate_nombre${idNode}[label="Truncate" fillcolor="${this.fillcolor}" style=filled];\n`;
            this.connections += `S_Truncate${idNode} -> S_Truncate_nombre${idNode} [color="${this.color}"];\n`;

            this.nodes += `S_Truncate_pi${idNode}[label="(" fillcolor="${this.fillcolor}" style=filled];\n`;
            this.connections += `S_Truncate${idNode} -> S_Truncate_pi${idNode} [color="${this.color}"];\n`;

            this.nodes += `S_Truncate_valor${idNode}[label="${sentencia.exp1.valor}" fillcolor="${this.fillcolor}" style=filled];\n`;
            this.connections += `S_Truncate${idNode} -> S_Truncate_valor${idNode} [color="${this.color}"];\n`;

            this.nodes += `S_Truncate_pd${idNode}[label=")" fillcolor="${this.fillcolor}" style=filled];\n`;
            this.connections += `S_Truncate${idNode} -> S_Truncate_pd${idNode} [color="${this.color}"];\n`;
            this.idNode+=1;
        }else if(nombre==="Round"){
            this.nodes += `S_Round${idNode}[label="Round" fillcolor="${this.fillcolor}" style=filled];\n`;
            this.connections += `${nodoPadre} -> S_Round${idNode} [color="${this.color}"];\n`;

            this.nodes += `S_Round_nombre${idNode}[label="Round" fillcolor="${this.fillcolor}" style=filled];\n`;
            this.connections += `S_Round${idNode} -> S_Round_nombre${idNode} [color="${this.color}"];\n`;

            this.nodes += `S_Round_pi${idNode}[label="(" fillcolor="${this.fillcolor}" style=filled];\n`;
            this.connections += `S_Round${idNode} -> S_Round_pi${idNode} [color="${this.color}"];\n`;

            this.nodes += `S_Round_valor${idNode}[label="${sentencia.exp1.valor}" fillcolor="${this.fillcolor}" style=filled];\n`;
            this.connections += `S_Round${idNode} -> S_Round_valor${idNode} [color="${this.color}"];\n`;

            this.nodes += `S_Round_pd${idNode}[label=")" fillcolor="${this.fillcolor}" style=filled];\n`;
            this.connections += `S_Round${idNode} -> S_Round_pd${idNode} [color="${this.color}"];\n`;
            this.idNode+=1;
        }else{
        
            console.log(nombre)
            console.log(sentencia) 

            // this.nodes += `S_DeclararFuncion${idNode}[label="DeclararFuncion" fillcolor="${this.fillcolor}" style=filled];\n`;

            // this.connections += `${nodoPadre} -> S_DeclararVariable${idNode} [color="${this.color}"];\n`;
            // this.connections += `S_DeclararVariable${idNode} -> S_DeclararVariable_tipo${idNode} [color="${this.color}"];\n`;
        }
    }
    private forRecursiveGraphiz(sentencias: any,nodoPadre: string,coma: boolean){
        
        for (let x = 0; x < sentencias.length; x++) {
            this.recursiveGraphiz(sentencias[x].constructor.name,sentencias[x],nodoPadre);
            if(sentencias[x+1]&&coma){
                this.nodes += `S_for_coma${this.idNode}[label="," fillcolor="${this.fillcolor}" style=filled];\n`;
                this.connections += `${nodoPadre} -> S_for_coma${this.idNode} [color="${this.color}"];\n`;
            }
            this.idNode+=1;
        }
    }
    private auxiliarRecursiveGraphiz(sentencia: any,nodoPadre: any){
        if(sentencia){
            this.idNode+=1;
            this.recursiveGraphiz(sentencia.constructor.name,sentencia,nodoPadre);
        }
    }
    private ejecutarDeclaracionesVar(actual: Ambito, global: Ambito, ast: AST) {
        for (let x = 0; x < this.sentencias.length; x++) {
            let sent = this.sentencias[x];
            if (sent instanceof DeclararVariable) {
                sent.ejecutar(actual, global, ast);
            }
            if (sent instanceof DeclararVector) {
                sent.ejecutar(actual, global, ast);
            }
            if (sent instanceof DeclararLista) {
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
    private ejecutarllamadasFunciones(actual: Ambito, global: Ambito, ast: AST) {
        for (let x = 0; x < this.sentencias.length; x++) {
            let sent = this.sentencias[x];
            if (sent instanceof LlamadaFuncion) {
                //hacer aqui mismo la validacion del metodo que llamo
                for (let i = 0; i < this.sentencias.length; i++) {
                    let sent2 = this.sentencias[i];
                
                    if (sent2 instanceof DeclararFuncion) {
                        if (sent2.nombre == sent.nombre) {
                            
                            sent2.ejecutar(actual, global, ast);
                        }
                    }
                }


            }
        }
    }
}