/* parser generated by jison 0.3.0 */
/**
 * Returns a Parser implementing JisonParserApi and a Lexer implementing JisonLexerApi.
 */
import { JisonLexer, JisonLexerApi } from '@ts-jison/lexer';
import { JisonParser, JisonParserApi, StateType, SymbolsType, TerminalsType, ProductionsType, o } from '@ts-jison/parser';const $V0=[1,13],$V1=[1,14],$V2=[1,15],$V3=[1,16],$V4=[1,12],$V5=[1,17],$V6=[1,18],$V7=[1,19],$V8=[1,20],$V9=[5,9,19,34,37,38,40,41,42,43,44],$Va=[1,31],$Vb=[1,35],$Vc=[1,46],$Vd=[1,54],$Ve=[1,45],$Vf=[1,55],$Vg=[1,56],$Vh=[1,57],$Vi=[1,44],$Vj=[1,48],$Vk=[1,49],$Vl=[1,50],$Vm=[1,51],$Vn=[1,52],$Vo=[1,53],$Vp=[1,75],$Vq=[1,76],$Vr=[1,77],$Vs=[1,78],$Vt=[1,79],$Vu=[1,80],$Vv=[1,81],$Vw=[1,82],$Vx=[1,83],$Vy=[1,84],$Vz=[1,85],$VA=[1,86],$VB=[1,87],$VC=[11,27,45,47,48,49,50,51,52,53,54,55,56,57,58,59],$VD=[27,45],$VE=[5,9,19,34,36,37,38,40,41,42,43,44],$VF=[1,101],$VG=[11,27,45,47,48,52,53,54,55,56,57,58,59],$VH=[11,27,45,52,53,58,59],$VI=[11,27,45,52,53,54,55,56,57,58,59];

    let Raiz                        =   require("../Entorno/Raiz").Raiz;
    let Tipo                        =   require("../Entorno/Simbolos/Tipo").Tipo;
    let TipoPrimitivo               =   require("../Entorno/Simbolos/TipoPrimitivo").TipoPrimitivo;
    let DeclararVariable            =   require("../Instrucciones/DeclararVariable").DeclararVariable; 
    let DeclararFuncion             =   require("../Instrucciones/DeclararFuncion").DeclararFuncion;
    let Asignacion                  =   require("../Instrucciones/Asignacion").Asignacion;
    let If                          =   require("../Instrucciones/If").If;
    let Parametro                   =   require("../Instrucciones/Parametro").Parametro;
    let AccesoVariable              =   require("../Expresiones/AccesoVariable").AccesoVariable;
    let LlamadaFuncion              =   require("../Expresiones/LlamadaFuncion").LlamadaFuncion;
    let OperacionAritmetica         =   require("../Expresiones/OperacionAritmetica").OperacionAritmetica;
    let OperacionLogica             =   require("../Expresiones/OperacionLogica").OperacionLogica;
    let OperacionRelacional         =   require("../Expresiones/OperacionRelacional").OperacionRelacional;
    let While                       =   require("../Instrucciones/While").While;
    let Valor                       =   require("../Expresiones/Valor").Valor;
    let toLower                     =   require("../Instrucciones/toLower").toLower;
    let toUpper                     =   require("../Instrucciones/toUpper").toUpper;
    let Length                    =   require("../Instrucciones/Length").Length;
    let TypeOf                    =   require("../Instrucciones/TypeOf").TypeOf;

export class ParserParser extends JisonParser implements JisonParserApi {
    $?: any;

    constructor (yy = {}, lexer = new ParserLexer(yy)) {
      super(yy, lexer);
    }

    symbols_: SymbolsType = {"error":2,"INICIO":3,"SENTENCIAS":4,"EOF":5,"SENTENCIA":6,"BLOQUE_SENTENCAS":7,"{":8,"}":9,"DECLARACION":10,";":11,"FUNCION":12,"ASIGNACION":13,"IF":14,"LLAMADA_FUNCION":15,"WHILE":16,"DO":17,"TIPO":18,"id":19,"=":20,"EXP":21,"++":22,"--":23,"TOLOWER":24,"ttolower":25,"(":26,")":27,"TOUPPER":28,"ttoupper":29,"LENGTH":30,"ttlength":31,"TYPEOF":32,"tttypeof":33,"tif":34,"ELSE":35,"telse":36,"twhile":37,"tdo":38,"LISTA_PARAM":39,"tvoid":40,"tinteger":41,"tboolean":42,"tstring":43,"tdouble":44,",":45,"LISTA_EXP":46,"+":47,"-":48,"*":49,"/":50,"%":51,"==":52,"!=":53,"<":54,">":55,"<=":56,">=":57,"&&":58,"||":59,"entero":60,"decimal":61,"caracter":62,"cadena":63,"ttrue":64,"tfalse":65,"$accept":0,"$end":1};
    terminals_: TerminalsType = {2:"error",5:"EOF",8:"{",9:"}",11:";",19:"id",20:"=",22:"++",23:"--",25:"ttolower",26:"(",27:")",29:"ttoupper",31:"ttlength",33:"tttypeof",34:"tif",36:"telse",37:"twhile",38:"tdo",40:"tvoid",41:"tinteger",42:"tboolean",43:"tstring",44:"tdouble",45:",",47:"+",48:"-",49:"*",50:"/",51:"%",52:"==",53:"!=",54:"<",55:">",56:"<=",57:">=",58:"&&",59:"||",60:"entero",61:"decimal",62:"caracter",63:"cadena",64:"ttrue",65:"tfalse"};
    productions_: ProductionsType = [0,[3,2],[4,2],[4,1],[7,3],[7,2],[6,2],[6,1],[6,1],[6,1],[6,2],[6,1],[6,2],[10,4],[10,2],[13,4],[13,3],[13,3],[24,4],[28,4],[30,4],[32,4],[14,5],[14,6],[35,2],[35,2],[16,5],[17,6],[12,6],[12,6],[12,5],[12,5],[18,1],[18,1],[18,1],[18,1],[39,4],[39,2],[46,3],[46,1],[15,4],[15,3],[21,3],[21,3],[21,3],[21,1],[21,1],[21,1],[21,1],[21,3],[21,3],[21,2],[21,3],[21,3],[21,3],[21,3],[21,3],[21,3],[21,3],[21,3],[21,3],[21,1],[21,1],[21,1],[21,1],[21,1],[21,1],[21,1],[21,1]];
    table: Array<StateType> = [{3:1,4:2,6:3,10:4,12:5,13:6,14:7,15:8,16:9,17:10,18:11,19:$V0,34:$V1,37:$V2,38:$V3,40:$V4,41:$V5,42:$V6,43:$V7,44:$V8},{1:[3]},{5:[1,21],6:22,10:4,12:5,13:6,14:7,15:8,16:9,17:10,18:11,19:$V0,34:$V1,37:$V2,38:$V3,40:$V4,41:$V5,42:$V6,43:$V7,44:$V8},o($V9,[2,3]),{11:[1,23]},o($V9,[2,7]),o($V9,[2,8]),o($V9,[2,9]),{11:[1,24]},o($V9,[2,11]),{11:[1,25]},{19:[1,26]},{19:[1,27]},{20:[1,28],22:[1,29],23:[1,30],26:$Va},{26:[1,32]},{26:[1,33]},{7:34,8:$Vb},{19:[2,32]},{19:[2,33]},{19:[2,34]},{19:[2,35]},{1:[2,1]},o($V9,[2,2]),o($V9,[2,6]),o($V9,[2,10]),o($V9,[2,12]),{11:[2,14],20:[1,36],26:[1,37]},{26:[1,38]},{15:47,19:$Vc,21:39,24:40,25:$Vd,26:$Ve,28:41,29:$Vf,30:42,31:$Vg,32:43,33:$Vh,48:$Vi,60:$Vj,61:$Vk,62:$Vl,63:$Vm,64:$Vn,65:$Vo},{11:[1,58]},{11:[1,59]},{15:47,19:$Vc,21:62,24:40,25:$Vd,26:$Ve,27:[1,61],28:41,29:$Vf,30:42,31:$Vg,32:43,33:$Vh,46:60,48:$Vi,60:$Vj,61:$Vk,62:$Vl,63:$Vm,64:$Vn,65:$Vo},{15:47,19:$Vc,21:63,24:40,25:$Vd,26:$Ve,28:41,29:$Vf,30:42,31:$Vg,32:43,33:$Vh,48:$Vi,60:$Vj,61:$Vk,62:$Vl,63:$Vm,64:$Vn,65:$Vo},{15:47,19:$Vc,21:64,24:40,25:$Vd,26:$Ve,28:41,29:$Vf,30:42,31:$Vg,32:43,33:$Vh,48:$Vi,60:$Vj,61:$Vk,62:$Vl,63:$Vm,64:$Vn,65:$Vo},{37:[1,65]},{4:66,6:3,9:[1,67],10:4,12:5,13:6,14:7,15:8,16:9,17:10,18:11,19:$V0,34:$V1,37:$V2,38:$V3,40:$V4,41:$V5,42:$V6,43:$V7,44:$V8},{15:47,19:$Vc,21:68,24:40,25:$Vd,26:$Ve,28:41,29:$Vf,30:42,31:$Vg,32:43,33:$Vh,48:$Vi,60:$Vj,61:$Vk,62:$Vl,63:$Vm,64:$Vn,65:$Vo},{18:71,27:[1,70],39:69,41:$V5,42:$V6,43:$V7,44:$V8},{18:71,27:[1,73],39:72,41:$V5,42:$V6,43:$V7,44:$V8},{11:[1,74],47:$Vp,48:$Vq,49:$Vr,50:$Vs,51:$Vt,52:$Vu,53:$Vv,54:$Vw,55:$Vx,56:$Vy,57:$Vz,58:$VA,59:$VB},o($VC,[2,45]),o($VC,[2,46]),o($VC,[2,47]),o($VC,[2,48]),{15:47,19:$Vc,21:88,24:40,25:$Vd,26:$Ve,28:41,29:$Vf,30:42,31:$Vg,32:43,33:$Vh,48:$Vi,60:$Vj,61:$Vk,62:$Vl,63:$Vm,64:$Vn,65:$Vo},{15:47,19:$Vc,21:89,24:40,25:$Vd,26:$Ve,28:41,29:$Vf,30:42,31:$Vg,32:43,33:$Vh,48:$Vi,60:$Vj,61:$Vk,62:$Vl,63:$Vm,64:$Vn,65:$Vo},o($VC,[2,61],{26:$Va}),o($VC,[2,62]),o($VC,[2,63]),o($VC,[2,64]),o($VC,[2,65]),o($VC,[2,66]),o($VC,[2,67]),o($VC,[2,68]),{26:[1,90]},{26:[1,91]},{26:[1,92]},{26:[1,93]},o($V9,[2,16]),o($V9,[2,17]),{27:[1,94],45:[1,95]},o($VC,[2,41]),o($VD,[2,39],{47:$Vp,48:$Vq,49:$Vr,50:$Vs,51:$Vt,52:$Vu,53:$Vv,54:$Vw,55:$Vx,56:$Vy,57:$Vz,58:$VA,59:$VB}),{27:[1,96],47:$Vp,48:$Vq,49:$Vr,50:$Vs,51:$Vt,52:$Vu,53:$Vv,54:$Vw,55:$Vx,56:$Vy,57:$Vz,58:$VA,59:$VB},{27:[1,97],47:$Vp,48:$Vq,49:$Vr,50:$Vs,51:$Vt,52:$Vu,53:$Vv,54:$Vw,55:$Vx,56:$Vy,57:$Vz,58:$VA,59:$VB},{26:[1,98]},{6:22,9:[1,99],10:4,12:5,13:6,14:7,15:8,16:9,17:10,18:11,19:$V0,34:$V1,37:$V2,38:$V3,40:$V4,41:$V5,42:$V6,43:$V7,44:$V8},o($VE,[2,5]),{11:[2,13],47:$Vp,48:$Vq,49:$Vr,50:$Vs,51:$Vt,52:$Vu,53:$Vv,54:$Vw,55:$Vx,56:$Vy,57:$Vz,58:$VA,59:$VB},{27:[1,100],45:$VF},{7:102,8:$Vb},{19:[1,103]},{27:[1,104],45:$VF},{7:105,8:$Vb},o($V9,[2,15]),{15:47,19:$Vc,21:106,24:40,25:$Vd,26:$Ve,28:41,29:$Vf,30:42,31:$Vg,32:43,33:$Vh,48:$Vi,60:$Vj,61:$Vk,62:$Vl,63:$Vm,64:$Vn,65:$Vo},{15:47,19:$Vc,21:107,24:40,25:$Vd,26:$Ve,28:41,29:$Vf,30:42,31:$Vg,32:43,33:$Vh,48:$Vi,60:$Vj,61:$Vk,62:$Vl,63:$Vm,64:$Vn,65:$Vo},{15:47,19:$Vc,21:108,24:40,25:$Vd,26:$Ve,28:41,29:$Vf,30:42,31:$Vg,32:43,33:$Vh,48:$Vi,60:$Vj,61:$Vk,62:$Vl,63:$Vm,64:$Vn,65:$Vo},{15:47,19:$Vc,21:109,24:40,25:$Vd,26:$Ve,28:41,29:$Vf,30:42,31:$Vg,32:43,33:$Vh,48:$Vi,60:$Vj,61:$Vk,62:$Vl,63:$Vm,64:$Vn,65:$Vo},{15:47,19:$Vc,21:110,24:40,25:$Vd,26:$Ve,28:41,29:$Vf,30:42,31:$Vg,32:43,33:$Vh,48:$Vi,60:$Vj,61:$Vk,62:$Vl,63:$Vm,64:$Vn,65:$Vo},{15:47,19:$Vc,21:111,24:40,25:$Vd,26:$Ve,28:41,29:$Vf,30:42,31:$Vg,32:43,33:$Vh,48:$Vi,60:$Vj,61:$Vk,62:$Vl,63:$Vm,64:$Vn,65:$Vo},{15:47,19:$Vc,21:112,24:40,25:$Vd,26:$Ve,28:41,29:$Vf,30:42,31:$Vg,32:43,33:$Vh,48:$Vi,60:$Vj,61:$Vk,62:$Vl,63:$Vm,64:$Vn,65:$Vo},{15:47,19:$Vc,21:113,24:40,25:$Vd,26:$Ve,28:41,29:$Vf,30:42,31:$Vg,32:43,33:$Vh,48:$Vi,60:$Vj,61:$Vk,62:$Vl,63:$Vm,64:$Vn,65:$Vo},{15:47,19:$Vc,21:114,24:40,25:$Vd,26:$Ve,28:41,29:$Vf,30:42,31:$Vg,32:43,33:$Vh,48:$Vi,60:$Vj,61:$Vk,62:$Vl,63:$Vm,64:$Vn,65:$Vo},{15:47,19:$Vc,21:115,24:40,25:$Vd,26:$Ve,28:41,29:$Vf,30:42,31:$Vg,32:43,33:$Vh,48:$Vi,60:$Vj,61:$Vk,62:$Vl,63:$Vm,64:$Vn,65:$Vo},{15:47,19:$Vc,21:116,24:40,25:$Vd,26:$Ve,28:41,29:$Vf,30:42,31:$Vg,32:43,33:$Vh,48:$Vi,60:$Vj,61:$Vk,62:$Vl,63:$Vm,64:$Vn,65:$Vo},{15:47,19:$Vc,21:117,24:40,25:$Vd,26:$Ve,28:41,29:$Vf,30:42,31:$Vg,32:43,33:$Vh,48:$Vi,60:$Vj,61:$Vk,62:$Vl,63:$Vm,64:$Vn,65:$Vo},{15:47,19:$Vc,21:118,24:40,25:$Vd,26:$Ve,28:41,29:$Vf,30:42,31:$Vg,32:43,33:$Vh,48:$Vi,60:$Vj,61:$Vk,62:$Vl,63:$Vm,64:$Vn,65:$Vo},o($VC,[2,51]),{27:[1,119],47:$Vp,48:$Vq,49:$Vr,50:$Vs,51:$Vt,52:$Vu,53:$Vv,54:$Vw,55:$Vx,56:$Vy,57:$Vz,58:$VA,59:$VB},{15:47,19:$Vc,21:120,24:40,25:$Vd,26:$Ve,28:41,29:$Vf,30:42,31:$Vg,32:43,33:$Vh,48:$Vi,60:$Vj,61:$Vk,62:$Vl,63:$Vm,64:$Vn,65:$Vo},{15:47,19:$Vc,21:121,24:40,25:$Vd,26:$Ve,28:41,29:$Vf,30:42,31:$Vg,32:43,33:$Vh,48:$Vi,60:$Vj,61:$Vk,62:$Vl,63:$Vm,64:$Vn,65:$Vo},{15:47,19:$Vc,21:122,24:40,25:$Vd,26:$Ve,28:41,29:$Vf,30:42,31:$Vg,32:43,33:$Vh,48:$Vi,60:$Vj,61:$Vk,62:$Vl,63:$Vm,64:$Vn,65:$Vo},{15:47,19:$Vc,21:123,24:40,25:$Vd,26:$Ve,28:41,29:$Vf,30:42,31:$Vg,32:43,33:$Vh,48:$Vi,60:$Vj,61:$Vk,62:$Vl,63:$Vm,64:$Vn,65:$Vo},o($VC,[2,40]),{15:47,19:$Vc,21:124,24:40,25:$Vd,26:$Ve,28:41,29:$Vf,30:42,31:$Vg,32:43,33:$Vh,48:$Vi,60:$Vj,61:$Vk,62:$Vl,63:$Vm,64:$Vn,65:$Vo},{7:125,8:$Vb},{7:126,8:$Vb},{15:47,19:$Vc,21:127,24:40,25:$Vd,26:$Ve,28:41,29:$Vf,30:42,31:$Vg,32:43,33:$Vh,48:$Vi,60:$Vj,61:$Vk,62:$Vl,63:$Vm,64:$Vn,65:$Vo},o($VE,[2,4]),{7:128,8:$Vb},{18:129,41:$V5,42:$V6,43:$V7,44:$V8},o($V9,[2,30]),o($VD,[2,37]),{7:130,8:$Vb},o($V9,[2,31]),o($VG,[2,42],{49:$Vr,50:$Vs,51:$Vt}),o($VG,[2,43],{49:$Vr,50:$Vs,51:$Vt}),o($VC,[2,44]),o($VC,[2,49]),o($VC,[2,50]),o($VH,[2,53],{47:$Vp,48:$Vq,49:$Vr,50:$Vs,51:$Vt,54:$Vw,55:$Vx,56:$Vy,57:$Vz}),o($VH,[2,54],{47:$Vp,48:$Vq,49:$Vr,50:$Vs,51:$Vt,54:$Vw,55:$Vx,56:$Vy,57:$Vz}),o($VI,[2,55],{47:$Vp,48:$Vq,49:$Vr,50:$Vs,51:$Vt}),o($VI,[2,56],{47:$Vp,48:$Vq,49:$Vr,50:$Vs,51:$Vt}),o($VI,[2,57],{47:$Vp,48:$Vq,49:$Vr,50:$Vs,51:$Vt}),o($VI,[2,58],{47:$Vp,48:$Vq,49:$Vr,50:$Vs,51:$Vt}),o([11,27,45,58,59],[2,59],{47:$Vp,48:$Vq,49:$Vr,50:$Vs,51:$Vt,52:$Vu,53:$Vv,54:$Vw,55:$Vx,56:$Vy,57:$Vz}),o([11,27,45,59],[2,60],{47:$Vp,48:$Vq,49:$Vr,50:$Vs,51:$Vt,52:$Vu,53:$Vv,54:$Vw,55:$Vx,56:$Vy,57:$Vz,58:$VA}),o($VC,[2,52]),{27:[1,131],47:$Vp,48:$Vq,49:$Vr,50:$Vs,51:$Vt,52:$Vu,53:$Vv,54:$Vw,55:$Vx,56:$Vy,57:$Vz,58:$VA,59:$VB},{27:[1,132],47:$Vp,48:$Vq,49:$Vr,50:$Vs,51:$Vt,52:$Vu,53:$Vv,54:$Vw,55:$Vx,56:$Vy,57:$Vz,58:$VA,59:$VB},{27:[1,133],47:$Vp,48:$Vq,49:$Vr,50:$Vs,51:$Vt,52:$Vu,53:$Vv,54:$Vw,55:$Vx,56:$Vy,57:$Vz,58:$VA,59:$VB},{27:[1,134],47:$Vp,48:$Vq,49:$Vr,50:$Vs,51:$Vt,52:$Vu,53:$Vv,54:$Vw,55:$Vx,56:$Vy,57:$Vz,58:$VA,59:$VB},o($VD,[2,38],{47:$Vp,48:$Vq,49:$Vr,50:$Vs,51:$Vt,52:$Vu,53:$Vv,54:$Vw,55:$Vx,56:$Vy,57:$Vz,58:$VA,59:$VB}),o($V9,[2,22],{35:135,36:[1,136]}),o($V9,[2,26]),{27:[1,137],47:$Vp,48:$Vq,49:$Vr,50:$Vs,51:$Vt,52:$Vu,53:$Vv,54:$Vw,55:$Vx,56:$Vy,57:$Vz,58:$VA,59:$VB},o($V9,[2,28]),{19:[1,138]},o($V9,[2,29]),o($VC,[2,18]),o($VC,[2,19]),o($VC,[2,20]),o($VC,[2,21]),o($V9,[2,23]),{7:140,8:$Vb,14:139,34:$V1},{11:[2,27]},o($VD,[2,36]),o($V9,[2,24]),o($V9,[2,25])];
    defaultActions: {[key:number]: any} = {17:[2,32],18:[2,33],19:[2,34],20:[2,35],21:[2,1],137:[2,27]};

    performAction (yytext:string, yyleng:number, yylineno:number, yy:any, yystate:number /* action[1] */, $$:any /* vstack */, _$:any /* lstack */): any {
/* this == yyval */
          var $0 = $$.length - 1;
        switch (yystate) {
case 1:

        console.log("Parse de Jison entrada: OK ");
        let raiz = new Raiz($$[$0-1]);
        this.$ = raiz;
        return raiz;
    
break;
case 2:

                $$[$0-1].push($$[$0]);
                this.$ = $$[$0-1];
            
break;
case 3:

                let lstsent = [];
                lstsent.push($$[$0]);
                this.$ = lstsent;
            
break;
case 4:

                       this.$ = $$[$0-1];
                
break;
case 5:

                        this.$ = [];
                
break;
case 6: case 10: case 12:
 this.$ = $$[$0-1]; 
break;
case 7: case 8: case 9: case 11: case 62:
 this.$ = $$[$0]; 
break;
case 13:

                this.$ = new DeclararVariable($$[$0-3], $$[$0-2], $$[$0], _$[$0-2].first_line, _$[$0-2].first_column);
            
break;
case 14:

                this.$ = new DeclararVariable($$[$0-1], $$[$0], undefined, _$[$0].first_line, _$[$0].first_column);
            
break;
case 15:

                this.$ = new Asignacion($$[$0-3], $$[$0-1], _$[$0-3].first_line, _$[$0-3].first_column);
            
break;
case 16: case 17:

                this.$ = new Asignacion($$[$0-2], $$[$0-1], _$[$0-2].first_line, _$[$0-2].first_column);
            
break;
case 18:

            this.$ = new toLower($$[$0-1], _$[$0-3].first_line, _$[$0-3].first_column );
        
break;
case 19:

            this.$ = new toUpper($$[$0-1], _$[$0-3].first_line, _$[$0-3].first_column );
        
break;
case 20:

            this.$ = new Length ($$[$0-1], _$[$0-3].first_line, _$[$0-3].first_column );
        
break;
case 21:

            this.$ = new TypeOf($$[$0-1], _$[$0-3].first_line, _$[$0-3].first_column );
        
break;
case 22:

            this.$ = new If($$[$0-2], $$[$0], [], _$[$0-4].first_line, _$[$0-4].first_column);
        
break;
case 23:

            this.$ = new If($$[$0-3], $$[$0-1], $$[$0], _$[$0-5].first_line, _$[$0-5].first_column);
        
break;
case 24:

            let else_sent = [];
            else_sent.push($$[$0]);
            this.$ = else_sent;
        
break;
case 25:

            this.$ = $$[$0];
        
break;
case 26:

            this.$ = new While($$[$0-2], $$[$0], _$[$0-4].first_line, _$[$0-4].first_column );
        
break;
case 27:

            this.$ = new While($$[$0-1], $$[$0-4], _$[$0-5].first_line, _$[$0-5].first_column );
        
break;
case 28:

                this.$ = new DeclararFuncion($$[$0-5], $$[$0-4], $$[$0-2], $$[$0], _$[$0-4].first_line, _$[$0-4].first_column);
            
break;
case 29:

                this.$ = new DeclararFuncion(new Tipo(TipoPrimitivo.Void), $$[$0-4], $$[$0-2], $$[$0], _$[$0-4].first_line, _$[$0-4].first_column);
            
break;
case 30:

                this.$ = new DeclararFuncion($$[$0-4], $$[$0-3], [], $$[$0], _$[$0-3].first_line, _$[$0-3].first_column);
            
break;
case 31:

                this.$ = new DeclararFuncion(new Tipo(TipoPrimitivo.Void), $$[$0-3], [], $$[$0], _$[$0-3].first_line, _$[$0-3].first_column);
            
break;
case 32:
 this.$ = new Tipo(TipoPrimitivo.Integer); 
break;
case 33:
 this.$ = new Tipo(TipoPrimitivo.Boolean); 
break;
case 34:
 this.$ = new Tipo(TipoPrimitivo.String);  
break;
case 35:
 this.$ = new Tipo(TipoPrimitivo.Double);  
break;
case 36:

                $$[$0-3].push( new DeclararVariable($$[$0-1], $$[$0], undefined, _$[$0-3].first_line, _$[$0-3].first_column) );
                this.$ = $$[$0-3];
            
break;
case 37:

                let decla1 = new DeclararVariable($$[$0-1], $$[$0], undefined, _$[$0-1].first_line, _$[$0-1].first_column);
                let params = [];
                params.push(decla1);
                this.$ = params;
            
break;
case 38:

            $$[$0-2].push($$[$0]);
            this.$ = $$[$0-2];
        
break;
case 39:
 
            let lista_exp = [];
            lista_exp.push($$[$0]);
            this.$ = lista_exp;
        
break;
case 40:
 
                    this.$ = new LlamadaFuncion($$[$0-3], $$[$0-1], _$[$0-3].first_line, _$[$0-3].first_column);    
                
break;
case 41:

                    this.$ = new LlamadaFuncion($$[$0-2], [], _$[$0-2].first_line, _$[$0-2].first_column);
                
break;
case 42: case 43: case 44: case 49: case 50:
 this.$ = new OperacionAritmetica($$[$0-2], $$[$0-1], $$[$0], _$[$0-1].first_line, _$[$0-1].first_column);
break;
case 45: case 46: case 47: case 48:
 this.$ = $$[$0];
break;
case 51:
 this.$ = new OperacionAritmetica(new Valor(0, "integer", _$[$0-1].first_line, _$[$0-1].first_column), $$[$0-1], $$[$0], _$[$0].first_line, _$[$0].first_column);
break;
case 52:
 this.$ = $$[$0-1];
break;
case 53: case 54: case 55: case 56: case 57: case 58:
 this.$ = new OperacionRelacional($$[$0-2], $$[$0-1], $$[$0], _$[$0-1].first_line, _$[$0-1].first_column);
break;
case 59: case 60:
 this.$ = new OperacionLogica($$[$0-2], $$[$0-1], $$[$0], _$[$0-1].first_line, _$[$0-1].first_column);
break;
case 61:
 this.$ = new AccesoVariable($$[$0], _$[$0].first_line, _$[$0].first_column);        
break;
case 63:
 this.$ = new Valor($$[$0], "integer", _$[$0].first_line, _$[$0].first_column); 
break;
case 64:
 this.$ = new Valor($$[$0], "double", _$[$0].first_line, _$[$0].first_column); 
break;
case 65:
 this.$ = new Valor($$[$0], "char", _$[$0].first_line, _$[$0].first_column);   
break;
case 66:
 this.$ = new Valor($$[$0], "string", _$[$0].first_line, _$[$0].first_column); 
break;
case 67:
 this.$ = new Valor($$[$0], "true", _$[$0].first_line, _$[$0].first_column);   
break;
case 68:
 this.$ = new Valor($$[$0], "false", _$[$0].first_line, _$[$0].first_column);  
break;
        }
    }
}


/* generated by ts-jison-lex 0.3.0 */

export class ParserLexer extends JisonLexer implements JisonLexerApi {
    options: any = {"case-insensitive":true,"moduleName":"Parser"};
    constructor (yy = {}) {
        super(yy);
    }

    rules: RegExp[] = [/^(?:\s+)/i,/^(?:$)/i,/^(?:\/\/.*)/i,/^(?:[/][*][^*]*[*]+([^/*][^*]*[*]+)*[/])/i,/^(?:true\b)/i,/^(?:false\b)/i,/^(?:int\b)/i,/^(?:boolean\b)/i,/^(?:double\b)/i,/^(?:String\b)/i,/^(?:if\b)/i,/^(?:while\b)/i,/^(?:do\b)/i,/^(?:else\b)/i,/^(?:void\b)/i,/^(?:return\b)/i,/^(?:toLower\b)/i,/^(?:toUpper\b)/i,/^(?:length\b)/i,/^(?:typeof\b)/i,/^(?:([a-zA-ZÑñ]|(_[a-zA-ZÑñ]))([a-zA-ZÑñ]|[0-9]|_)*)/i,/^(?:"(?:[(\[)|(\])]|["\\"]["bnrt/["\\"]|[^"["\\"])*")/i,/^(?:'(?:(\\)["bfnrt/(\\)]|(\\)u[a-fA-F0-9]{4}|[^"(\\)])')/i,/^(?:((?:[0-9]|[1-9][0-9]+))((?:\.[0-9]+))\b)/i,/^(?:((?:[0-9]|[1-9][0-9]+))\b)/i,/^(?:\$)/i,/^(?:\+\+)/i,/^(?:--)/i,/^(?:\+)/i,/^(?:-)/i,/^(?:\*)/i,/^(?:\/)/i,/^(?:%)/i,/^(?:\()/i,/^(?:\))/i,/^(?:==)/i,/^(?:=)/i,/^(?:,)/i,/^(?::)/i,/^(?:;)/i,/^(?:\|\|)/i,/^(?:&&)/i,/^(?:!=)/i,/^(?:!)/i,/^(?:<=)/i,/^(?:>=)/i,/^(?:>)/i,/^(?:<)/i,/^(?:\{)/i,/^(?:\})/i,/^(?:.)/i];
    conditions: any = {"INITIAL":{"rules":[0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33,34,35,36,37,38,39,40,41,42,43,44,45,46,47,48,49,50],"inclusive":true}}
    performAction (yy:any,yy_:any,$avoiding_name_collisions:any,YY_START:any): any {
          var YYSTATE=YY_START;
        switch($avoiding_name_collisions) {
    case 0:/* skip whitespace */
      break;
    case 1:return 5;
      break;
    case 2:/* IGNORE */
      break;
    case 3:/* IGNORE */
      break;
    case 4:   return 64;     
      break;
    case 5:   return 65;    
      break;
    case 6:   return 41;  
      break;
    case 7:   return 42;  
      break;
    case 8:   return 44;   
      break;
    case 9:   return 43;   
      break;
    case 10:   return 34;       
      break;
    case 11:   return 37;    
      break;
    case 12:   return 38;    
      break;
    case 13:   return 36;     
      break;
    case 14:   return 40;     
      break;
    case 15:   return 'treturn';   
      break;
    case 16:   return 25;   
      break;
    case 17:   return 29;   
      break;
    case 18:   return 31;   
      break;
    case 19:   return 33;   
      break;
    case 20:yy_.yytext = yy_.yytext.toLowerCase();          return 19;
      break;
    case 21:yy_.yytext = yy_.yytext.substr(1,yy_.yyleng-2);     return 63;
      break;
    case 22:yy_.yytext = yy_.yytext.substr(1,yy_.yyleng-2);     return 62
      break;
    case 23:return 61
      break;
    case 24:return 60
      break;
    case 25:return '$'
      break;
    case 26:return 22;
      break;
    case 27:return 23;
      break;
    case 28:return 47;
      break;
    case 29:return 48;
      break;
    case 30:return 49;
      break;
    case 31:return 50;
      break;
    case 32:return 51;
      break;
    case 33:return 26;
      break;
    case 34:return 27;
      break;
    case 35:return 52;
      break;
    case 36:return 20;
      break;
    case 37:return 45;
      break;
    case 38:return ':';
      break;
    case 39:return 11;
      break;
    case 40:return 59;
      break;
    case 41:return 58;
      break;
    case 42:return 53;
      break;
    case 43:return '!';
      break;
    case 44:return 56;
      break;
    case 45:return 57;
      break;
    case 46:return 55;
      break;
    case 47:return 54;
      break;
    case 48:return 8;
      break;
    case 49:return 9;
      break;
    case 50:
      break;
        }
    }
}

