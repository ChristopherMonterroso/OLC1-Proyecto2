/* parser generated by jison 0.3.0 */
/**
 * Returns a Parser implementing JisonParserApi and a Lexer implementing JisonLexerApi.
 */
import { JisonLexer, JisonLexerApi } from '@ts-jison/lexer';
import { JisonParser, JisonParserApi, StateType, SymbolsType, TerminalsType, ProductionsType, o } from '@ts-jison/parser';const $V0=[1,13],$V1=[1,14],$V2=[1,15],$V3=[1,16],$V4=[1,12],$V5=[1,17],$V6=[1,18],$V7=[1,19],$V8=[1,20],$V9=[5,9,19,36,39,40,42,43,44,45,46],$Va=[1,31],$Vb=[1,35],$Vc=[1,47],$Vd=[1,55],$Ve=[1,46],$Vf=[1,56],$Vg=[1,59],$Vh=[1,57],$Vi=[1,58],$Vj=[1,45],$Vk=[1,49],$Vl=[1,50],$Vm=[1,51],$Vn=[1,52],$Vo=[1,53],$Vp=[1,54],$Vq=[1,77],$Vr=[1,78],$Vs=[1,79],$Vt=[1,80],$Vu=[1,81],$Vv=[1,82],$Vw=[1,83],$Vx=[1,84],$Vy=[1,85],$Vz=[1,86],$VA=[1,87],$VB=[1,88],$VC=[1,89],$VD=[1,90],$VE=[11,27,47,49,50,51,52,53,54,55,56,57,58,59,60,61,62],$VF=[27,47],$VG=[5,9,19,36,38,39,40,42,43,44,45,46],$VH=[1,105],$VI=[11,27,47,49,50,54,55,56,57,58,59,60,61,62],$VJ=[11,27,47,54,55,56,61,62],$VK=[11,27,47,54,55,56,57,58,59,60,61,62];

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
    let toString                     =   require("../Instrucciones/toString").toString;
    let toUpper                     =   require("../Instrucciones/toUpper").toUpper;
    let Length                    =   require("../Instrucciones/Length").Length;
    let TypeOf                    =   require("../Instrucciones/TypeOf").TypeOf;


export class ParserParser extends JisonParser implements JisonParserApi {
    $?: any;

    constructor (yy = {}, lexer = new ParserLexer(yy)) {
      super(yy, lexer);
    }

    symbols_: SymbolsType = {"error":2,"INICIO":3,"SENTENCIAS":4,"EOF":5,"SENTENCIA":6,"BLOQUE_SENTENCAS":7,"{":8,"}":9,"DECLARACION":10,";":11,"FUNCION":12,"ASIGNACION":13,"IF":14,"LLAMADA_FUNCION":15,"WHILE":16,"DO":17,"TIPO":18,"id":19,"=":20,"EXP":21,"++":22,"--":23,"TOLOWER":24,"ttolower":25,"(":26,")":27,"TOUPPER":28,"ttoupper":29,"TOSTRING":30,"ttoString":31,"LENGTH":32,"ttlength":33,"TYPEOF":34,"tttypeof":35,"tif":36,"ELSE":37,"telse":38,"twhile":39,"tdo":40,"LISTA_PARAM":41,"tvoid":42,"tinteger":43,"tboolean":44,"tstring":45,"tdouble":46,",":47,"LISTA_EXP":48,"+":49,"-":50,"*":51,"/":52,"%":53,"^":54,"==":55,"!=":56,"<":57,">":58,"<=":59,">=":60,"&&":61,"||":62,"entero":63,"decimal":64,"caracter":65,"cadena":66,"ttrue":67,"tfalse":68,"$accept":0,"$end":1};
    terminals_: TerminalsType = {2:"error",5:"EOF",8:"{",9:"}",11:";",19:"id",20:"=",22:"++",23:"--",25:"ttolower",26:"(",27:")",29:"ttoupper",31:"ttoString",33:"ttlength",35:"tttypeof",36:"tif",38:"telse",39:"twhile",40:"tdo",42:"tvoid",43:"tinteger",44:"tboolean",45:"tstring",46:"tdouble",47:",",49:"+",50:"-",51:"*",52:"/",53:"%",54:"^",55:"==",56:"!=",57:"<",58:">",59:"<=",60:">=",61:"&&",62:"||",63:"entero",64:"decimal",65:"caracter",66:"cadena",67:"ttrue",68:"tfalse"};
    productions_: ProductionsType = [0,[3,2],[4,2],[4,1],[7,3],[7,2],[6,2],[6,1],[6,1],[6,1],[6,2],[6,1],[6,2],[10,4],[10,2],[13,4],[13,3],[13,3],[24,4],[28,4],[30,4],[32,4],[34,4],[14,5],[14,6],[37,2],[37,2],[16,5],[17,6],[12,6],[12,6],[12,5],[12,5],[18,1],[18,1],[18,1],[18,1],[41,4],[41,2],[48,3],[48,1],[15,4],[15,3],[21,3],[21,3],[21,3],[21,3],[21,3],[21,3],[21,1],[21,1],[21,1],[21,1],[21,1],[21,2],[21,3],[21,3],[21,3],[21,3],[21,3],[21,3],[21,3],[21,3],[21,3],[21,1],[21,1],[21,1],[21,1],[21,1],[21,1],[21,1],[21,1]];
    table: Array<StateType> = [{3:1,4:2,6:3,10:4,12:5,13:6,14:7,15:8,16:9,17:10,18:11,19:$V0,36:$V1,39:$V2,40:$V3,42:$V4,43:$V5,44:$V6,45:$V7,46:$V8},{1:[3]},{5:[1,21],6:22,10:4,12:5,13:6,14:7,15:8,16:9,17:10,18:11,19:$V0,36:$V1,39:$V2,40:$V3,42:$V4,43:$V5,44:$V6,45:$V7,46:$V8},o($V9,[2,3]),{11:[1,23]},o($V9,[2,7]),o($V9,[2,8]),o($V9,[2,9]),{11:[1,24]},o($V9,[2,11]),{11:[1,25]},{19:[1,26]},{19:[1,27]},{20:[1,28],22:[1,29],23:[1,30],26:$Va},{26:[1,32]},{26:[1,33]},{7:34,8:$Vb},{19:[2,33]},{19:[2,34]},{19:[2,35]},{19:[2,36]},{1:[2,1]},o($V9,[2,2]),o($V9,[2,6]),o($V9,[2,10]),o($V9,[2,12]),{11:[2,14],20:[1,36],26:[1,37]},{26:[1,38]},{15:48,19:$Vc,21:39,24:40,25:$Vd,26:$Ve,28:41,29:$Vf,30:44,31:$Vg,32:42,33:$Vh,34:43,35:$Vi,50:$Vj,63:$Vk,64:$Vl,65:$Vm,66:$Vn,67:$Vo,68:$Vp},{11:[1,60]},{11:[1,61]},{15:48,19:$Vc,21:64,24:40,25:$Vd,26:$Ve,27:[1,63],28:41,29:$Vf,30:44,31:$Vg,32:42,33:$Vh,34:43,35:$Vi,48:62,50:$Vj,63:$Vk,64:$Vl,65:$Vm,66:$Vn,67:$Vo,68:$Vp},{15:48,19:$Vc,21:65,24:40,25:$Vd,26:$Ve,28:41,29:$Vf,30:44,31:$Vg,32:42,33:$Vh,34:43,35:$Vi,50:$Vj,63:$Vk,64:$Vl,65:$Vm,66:$Vn,67:$Vo,68:$Vp},{15:48,19:$Vc,21:66,24:40,25:$Vd,26:$Ve,28:41,29:$Vf,30:44,31:$Vg,32:42,33:$Vh,34:43,35:$Vi,50:$Vj,63:$Vk,64:$Vl,65:$Vm,66:$Vn,67:$Vo,68:$Vp},{39:[1,67]},{4:68,6:3,9:[1,69],10:4,12:5,13:6,14:7,15:8,16:9,17:10,18:11,19:$V0,36:$V1,39:$V2,40:$V3,42:$V4,43:$V5,44:$V6,45:$V7,46:$V8},{15:48,19:$Vc,21:70,24:40,25:$Vd,26:$Ve,28:41,29:$Vf,30:44,31:$Vg,32:42,33:$Vh,34:43,35:$Vi,50:$Vj,63:$Vk,64:$Vl,65:$Vm,66:$Vn,67:$Vo,68:$Vp},{18:73,27:[1,72],41:71,43:$V5,44:$V6,45:$V7,46:$V8},{18:73,27:[1,75],41:74,43:$V5,44:$V6,45:$V7,46:$V8},{11:[1,76],49:$Vq,50:$Vr,51:$Vs,52:$Vt,53:$Vu,54:$Vv,55:$Vw,56:$Vx,57:$Vy,58:$Vz,59:$VA,60:$VB,61:$VC,62:$VD},o($VE,[2,49]),o($VE,[2,50]),o($VE,[2,51]),o($VE,[2,52]),o($VE,[2,53]),{15:48,19:$Vc,21:91,24:40,25:$Vd,26:$Ve,28:41,29:$Vf,30:44,31:$Vg,32:42,33:$Vh,34:43,35:$Vi,50:$Vj,63:$Vk,64:$Vl,65:$Vm,66:$Vn,67:$Vo,68:$Vp},{15:48,19:$Vc,21:92,24:40,25:$Vd,26:$Ve,28:41,29:$Vf,30:44,31:$Vg,32:42,33:$Vh,34:43,35:$Vi,50:$Vj,63:$Vk,64:$Vl,65:$Vm,66:$Vn,67:$Vo,68:$Vp},o($VE,[2,64],{26:$Va}),o($VE,[2,65]),o($VE,[2,66]),o($VE,[2,67]),o($VE,[2,68]),o($VE,[2,69]),o($VE,[2,70]),o($VE,[2,71]),{26:[1,93]},{26:[1,94]},{26:[1,95]},{26:[1,96]},{26:[1,97]},o($V9,[2,16]),o($V9,[2,17]),{27:[1,98],47:[1,99]},o($VE,[2,42]),o($VF,[2,40],{49:$Vq,50:$Vr,51:$Vs,52:$Vt,53:$Vu,54:$Vv,55:$Vw,56:$Vx,57:$Vy,58:$Vz,59:$VA,60:$VB,61:$VC,62:$VD}),{27:[1,100],49:$Vq,50:$Vr,51:$Vs,52:$Vt,53:$Vu,54:$Vv,55:$Vw,56:$Vx,57:$Vy,58:$Vz,59:$VA,60:$VB,61:$VC,62:$VD},{27:[1,101],49:$Vq,50:$Vr,51:$Vs,52:$Vt,53:$Vu,54:$Vv,55:$Vw,56:$Vx,57:$Vy,58:$Vz,59:$VA,60:$VB,61:$VC,62:$VD},{26:[1,102]},{6:22,9:[1,103],10:4,12:5,13:6,14:7,15:8,16:9,17:10,18:11,19:$V0,36:$V1,39:$V2,40:$V3,42:$V4,43:$V5,44:$V6,45:$V7,46:$V8},o($VG,[2,5]),{11:[2,13],49:$Vq,50:$Vr,51:$Vs,52:$Vt,53:$Vu,54:$Vv,55:$Vw,56:$Vx,57:$Vy,58:$Vz,59:$VA,60:$VB,61:$VC,62:$VD},{27:[1,104],47:$VH},{7:106,8:$Vb},{19:[1,107]},{27:[1,108],47:$VH},{7:109,8:$Vb},o($V9,[2,15]),{15:48,19:$Vc,21:110,24:40,25:$Vd,26:$Ve,28:41,29:$Vf,30:44,31:$Vg,32:42,33:$Vh,34:43,35:$Vi,50:$Vj,63:$Vk,64:$Vl,65:$Vm,66:$Vn,67:$Vo,68:$Vp},{15:48,19:$Vc,21:111,24:40,25:$Vd,26:$Ve,28:41,29:$Vf,30:44,31:$Vg,32:42,33:$Vh,34:43,35:$Vi,50:$Vj,63:$Vk,64:$Vl,65:$Vm,66:$Vn,67:$Vo,68:$Vp},{15:48,19:$Vc,21:112,24:40,25:$Vd,26:$Ve,28:41,29:$Vf,30:44,31:$Vg,32:42,33:$Vh,34:43,35:$Vi,50:$Vj,63:$Vk,64:$Vl,65:$Vm,66:$Vn,67:$Vo,68:$Vp},{15:48,19:$Vc,21:113,24:40,25:$Vd,26:$Ve,28:41,29:$Vf,30:44,31:$Vg,32:42,33:$Vh,34:43,35:$Vi,50:$Vj,63:$Vk,64:$Vl,65:$Vm,66:$Vn,67:$Vo,68:$Vp},{15:48,19:$Vc,21:114,24:40,25:$Vd,26:$Ve,28:41,29:$Vf,30:44,31:$Vg,32:42,33:$Vh,34:43,35:$Vi,50:$Vj,63:$Vk,64:$Vl,65:$Vm,66:$Vn,67:$Vo,68:$Vp},{15:48,19:$Vc,21:115,24:40,25:$Vd,26:$Ve,28:41,29:$Vf,30:44,31:$Vg,32:42,33:$Vh,34:43,35:$Vi,50:$Vj,63:$Vk,64:$Vl,65:$Vm,66:$Vn,67:$Vo,68:$Vp},{15:48,19:$Vc,21:116,24:40,25:$Vd,26:$Ve,28:41,29:$Vf,30:44,31:$Vg,32:42,33:$Vh,34:43,35:$Vi,50:$Vj,63:$Vk,64:$Vl,65:$Vm,66:$Vn,67:$Vo,68:$Vp},{15:48,19:$Vc,21:117,24:40,25:$Vd,26:$Ve,28:41,29:$Vf,30:44,31:$Vg,32:42,33:$Vh,34:43,35:$Vi,50:$Vj,63:$Vk,64:$Vl,65:$Vm,66:$Vn,67:$Vo,68:$Vp},{15:48,19:$Vc,21:118,24:40,25:$Vd,26:$Ve,28:41,29:$Vf,30:44,31:$Vg,32:42,33:$Vh,34:43,35:$Vi,50:$Vj,63:$Vk,64:$Vl,65:$Vm,66:$Vn,67:$Vo,68:$Vp},{15:48,19:$Vc,21:119,24:40,25:$Vd,26:$Ve,28:41,29:$Vf,30:44,31:$Vg,32:42,33:$Vh,34:43,35:$Vi,50:$Vj,63:$Vk,64:$Vl,65:$Vm,66:$Vn,67:$Vo,68:$Vp},{15:48,19:$Vc,21:120,24:40,25:$Vd,26:$Ve,28:41,29:$Vf,30:44,31:$Vg,32:42,33:$Vh,34:43,35:$Vi,50:$Vj,63:$Vk,64:$Vl,65:$Vm,66:$Vn,67:$Vo,68:$Vp},{15:48,19:$Vc,21:121,24:40,25:$Vd,26:$Ve,28:41,29:$Vf,30:44,31:$Vg,32:42,33:$Vh,34:43,35:$Vi,50:$Vj,63:$Vk,64:$Vl,65:$Vm,66:$Vn,67:$Vo,68:$Vp},{15:48,19:$Vc,21:122,24:40,25:$Vd,26:$Ve,28:41,29:$Vf,30:44,31:$Vg,32:42,33:$Vh,34:43,35:$Vi,50:$Vj,63:$Vk,64:$Vl,65:$Vm,66:$Vn,67:$Vo,68:$Vp},{15:48,19:$Vc,21:123,24:40,25:$Vd,26:$Ve,28:41,29:$Vf,30:44,31:$Vg,32:42,33:$Vh,34:43,35:$Vi,50:$Vj,63:$Vk,64:$Vl,65:$Vm,66:$Vn,67:$Vo,68:$Vp},o($VE,[2,54]),{27:[1,124],49:$Vq,50:$Vr,51:$Vs,52:$Vt,53:$Vu,54:$Vv,55:$Vw,56:$Vx,57:$Vy,58:$Vz,59:$VA,60:$VB,61:$VC,62:$VD},{15:48,19:$Vc,21:125,24:40,25:$Vd,26:$Ve,28:41,29:$Vf,30:44,31:$Vg,32:42,33:$Vh,34:43,35:$Vi,50:$Vj,63:$Vk,64:$Vl,65:$Vm,66:$Vn,67:$Vo,68:$Vp},{15:48,19:$Vc,21:126,24:40,25:$Vd,26:$Ve,28:41,29:$Vf,30:44,31:$Vg,32:42,33:$Vh,34:43,35:$Vi,50:$Vj,63:$Vk,64:$Vl,65:$Vm,66:$Vn,67:$Vo,68:$Vp},{15:48,19:$Vc,21:127,24:40,25:$Vd,26:$Ve,28:41,29:$Vf,30:44,31:$Vg,32:42,33:$Vh,34:43,35:$Vi,50:$Vj,63:$Vk,64:$Vl,65:$Vm,66:$Vn,67:$Vo,68:$Vp},{15:48,19:$Vc,21:128,24:40,25:$Vd,26:$Ve,28:41,29:$Vf,30:44,31:$Vg,32:42,33:$Vh,34:43,35:$Vi,50:$Vj,63:$Vk,64:$Vl,65:$Vm,66:$Vn,67:$Vo,68:$Vp},{15:48,19:$Vc,21:129,24:40,25:$Vd,26:$Ve,28:41,29:$Vf,30:44,31:$Vg,32:42,33:$Vh,34:43,35:$Vi,50:$Vj,63:$Vk,64:$Vl,65:$Vm,66:$Vn,67:$Vo,68:$Vp},o($VE,[2,41]),{15:48,19:$Vc,21:130,24:40,25:$Vd,26:$Ve,28:41,29:$Vf,30:44,31:$Vg,32:42,33:$Vh,34:43,35:$Vi,50:$Vj,63:$Vk,64:$Vl,65:$Vm,66:$Vn,67:$Vo,68:$Vp},{7:131,8:$Vb},{7:132,8:$Vb},{15:48,19:$Vc,21:133,24:40,25:$Vd,26:$Ve,28:41,29:$Vf,30:44,31:$Vg,32:42,33:$Vh,34:43,35:$Vi,50:$Vj,63:$Vk,64:$Vl,65:$Vm,66:$Vn,67:$Vo,68:$Vp},o($VG,[2,4]),{7:134,8:$Vb},{18:135,43:$V5,44:$V6,45:$V7,46:$V8},o($V9,[2,31]),o($VF,[2,38]),{7:136,8:$Vb},o($V9,[2,32]),o($VI,[2,43],{51:$Vs,52:$Vt,53:$Vu}),o($VI,[2,44],{51:$Vs,52:$Vt,53:$Vu}),o($VE,[2,45]),o($VE,[2,46]),o($VE,[2,47]),o([11,27,47,54],[2,48],{49:$Vq,50:$Vr,51:$Vs,52:$Vt,53:$Vu,55:$Vw,56:$Vx,57:$Vy,58:$Vz,59:$VA,60:$VB,61:$VC,62:$VD}),o($VJ,[2,56],{49:$Vq,50:$Vr,51:$Vs,52:$Vt,53:$Vu,57:$Vy,58:$Vz,59:$VA,60:$VB}),o($VJ,[2,57],{49:$Vq,50:$Vr,51:$Vs,52:$Vt,53:$Vu,57:$Vy,58:$Vz,59:$VA,60:$VB}),o($VK,[2,58],{49:$Vq,50:$Vr,51:$Vs,52:$Vt,53:$Vu}),o($VK,[2,59],{49:$Vq,50:$Vr,51:$Vs,52:$Vt,53:$Vu}),o($VK,[2,60],{49:$Vq,50:$Vr,51:$Vs,52:$Vt,53:$Vu}),o($VK,[2,61],{49:$Vq,50:$Vr,51:$Vs,52:$Vt,53:$Vu}),o([11,27,47,54,61,62],[2,62],{49:$Vq,50:$Vr,51:$Vs,52:$Vt,53:$Vu,55:$Vw,56:$Vx,57:$Vy,58:$Vz,59:$VA,60:$VB}),o([11,27,47,54,62],[2,63],{49:$Vq,50:$Vr,51:$Vs,52:$Vt,53:$Vu,55:$Vw,56:$Vx,57:$Vy,58:$Vz,59:$VA,60:$VB,61:$VC}),o($VE,[2,55]),{27:[1,137],49:$Vq,50:$Vr,51:$Vs,52:$Vt,53:$Vu,54:$Vv,55:$Vw,56:$Vx,57:$Vy,58:$Vz,59:$VA,60:$VB,61:$VC,62:$VD},{27:[1,138],49:$Vq,50:$Vr,51:$Vs,52:$Vt,53:$Vu,54:$Vv,55:$Vw,56:$Vx,57:$Vy,58:$Vz,59:$VA,60:$VB,61:$VC,62:$VD},{27:[1,139],49:$Vq,50:$Vr,51:$Vs,52:$Vt,53:$Vu,54:$Vv,55:$Vw,56:$Vx,57:$Vy,58:$Vz,59:$VA,60:$VB,61:$VC,62:$VD},{27:[1,140],49:$Vq,50:$Vr,51:$Vs,52:$Vt,53:$Vu,54:$Vv,55:$Vw,56:$Vx,57:$Vy,58:$Vz,59:$VA,60:$VB,61:$VC,62:$VD},{27:[1,141],49:$Vq,50:$Vr,51:$Vs,52:$Vt,53:$Vu,54:$Vv,55:$Vw,56:$Vx,57:$Vy,58:$Vz,59:$VA,60:$VB,61:$VC,62:$VD},o($VF,[2,39],{49:$Vq,50:$Vr,51:$Vs,52:$Vt,53:$Vu,54:$Vv,55:$Vw,56:$Vx,57:$Vy,58:$Vz,59:$VA,60:$VB,61:$VC,62:$VD}),o($V9,[2,23],{37:142,38:[1,143]}),o($V9,[2,27]),{27:[1,144],49:$Vq,50:$Vr,51:$Vs,52:$Vt,53:$Vu,54:$Vv,55:$Vw,56:$Vx,57:$Vy,58:$Vz,59:$VA,60:$VB,61:$VC,62:$VD},o($V9,[2,29]),{19:[1,145]},o($V9,[2,30]),o($VE,[2,18]),o($VE,[2,19]),o($VE,[2,21]),o($VE,[2,22]),o($VE,[2,20]),o($V9,[2,24]),{7:147,8:$Vb,14:146,36:$V1},{11:[2,28]},o($VF,[2,37]),o($V9,[2,25]),o($V9,[2,26])];
    defaultActions: {[key:number]: any} = {17:[2,33],18:[2,34],19:[2,35],20:[2,36],21:[2,1],144:[2,28]};

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
case 7: case 8: case 9: case 11: case 65:
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

            this.$ = new toString($$[$0-1], _$[$0-3].first_line, _$[$0-3].first_column );
        
break;
case 21:

            this.$ = new Length ($$[$0-1], _$[$0-3].first_line, _$[$0-3].first_column );
        
break;
case 22:

            this.$ = new TypeOf($$[$0-1], _$[$0-3].first_line, _$[$0-3].first_column );
        
break;
case 23:

            this.$ = new If($$[$0-2], $$[$0], [], _$[$0-4].first_line, _$[$0-4].first_column);
        
break;
case 24:

            this.$ = new If($$[$0-3], $$[$0-1], $$[$0], _$[$0-5].first_line, _$[$0-5].first_column);
        
break;
case 25:

            let else_sent = [];
            else_sent.push($$[$0]);
            this.$ = else_sent;
        
break;
case 26:

            this.$ = $$[$0];
        
break;
case 27:

            this.$ = new While($$[$0-2], $$[$0], _$[$0-4].first_line, _$[$0-4].first_column );
        
break;
case 28:

            this.$ = new While($$[$0-1], $$[$0-4], _$[$0-5].first_line, _$[$0-5].first_column );
        
break;
case 29:

                this.$ = new DeclararFuncion($$[$0-5], $$[$0-4], $$[$0-2], $$[$0], _$[$0-4].first_line, _$[$0-4].first_column);
            
break;
case 30:

                this.$ = new DeclararFuncion(new Tipo(TipoPrimitivo.Void), $$[$0-4], $$[$0-2], $$[$0], _$[$0-4].first_line, _$[$0-4].first_column);
            
break;
case 31:

                this.$ = new DeclararFuncion($$[$0-4], $$[$0-3], [], $$[$0], _$[$0-3].first_line, _$[$0-3].first_column);
            
break;
case 32:

                this.$ = new DeclararFuncion(new Tipo(TipoPrimitivo.Void), $$[$0-3], [], $$[$0], _$[$0-3].first_line, _$[$0-3].first_column);
            
break;
case 33:
 this.$ = new Tipo(TipoPrimitivo.Integer); 
break;
case 34:
 this.$ = new Tipo(TipoPrimitivo.Boolean); 
break;
case 35:
 this.$ = new Tipo(TipoPrimitivo.String);  
break;
case 36:
 this.$ = new Tipo(TipoPrimitivo.Double);  
break;
case 37:

                $$[$0-3].push( new DeclararVariable($$[$0-1], $$[$0], undefined, _$[$0-3].first_line, _$[$0-3].first_column) );
                this.$ = $$[$0-3];
            
break;
case 38:

                let decla1 = new DeclararVariable($$[$0-1], $$[$0], undefined, _$[$0-1].first_line, _$[$0-1].first_column);
                let params = [];
                params.push(decla1);
                this.$ = params;
            
break;
case 39:

            $$[$0-2].push($$[$0]);
            this.$ = $$[$0-2];
        
break;
case 40:
 
            let lista_exp = [];
            lista_exp.push($$[$0]);
            this.$ = lista_exp;
        
break;
case 41:
 
                    this.$ = new LlamadaFuncion($$[$0-3], $$[$0-1], _$[$0-3].first_line, _$[$0-3].first_column);    
                
break;
case 42:

                    this.$ = new LlamadaFuncion($$[$0-2], [], _$[$0-2].first_line, _$[$0-2].first_column);
                
break;
case 43: case 44: case 45: case 46: case 47: case 48:
 this.$ = new OperacionAritmetica($$[$0-2], $$[$0-1], $$[$0], _$[$0-1].first_line, _$[$0-1].first_column);
break;
case 49: case 50: case 51: case 52: case 53:
 this.$ = $$[$0];
break;
case 54:
 this.$ = new OperacionAritmetica(new Valor(0, "integer", _$[$0-1].first_line, _$[$0-1].first_column), $$[$0-1], $$[$0], _$[$0].first_line, _$[$0].first_column);
break;
case 55:
 this.$ = $$[$0-1];
break;
case 56: case 57: case 58: case 59: case 60: case 61:
 this.$ = new OperacionRelacional($$[$0-2], $$[$0-1], $$[$0], _$[$0-1].first_line, _$[$0-1].first_column);
break;
case 62: case 63:
 this.$ = new OperacionLogica($$[$0-2], $$[$0-1], $$[$0], _$[$0-1].first_line, _$[$0-1].first_column);
break;
case 64:
 this.$ = new AccesoVariable($$[$0], _$[$0].first_line, _$[$0].first_column);        
break;
case 66:
 this.$ = new Valor($$[$0], "integer", _$[$0].first_line, _$[$0].first_column); 
break;
case 67:
 this.$ = new Valor($$[$0], "double", _$[$0].first_line, _$[$0].first_column); 
break;
case 68:
 this.$ = new Valor($$[$0], "char", _$[$0].first_line, _$[$0].first_column);   
break;
case 69:
 this.$ = new Valor($$[$0], "string", _$[$0].first_line, _$[$0].first_column); 
break;
case 70:
 this.$ = new Valor($$[$0], "true", _$[$0].first_line, _$[$0].first_column);   
break;
case 71:
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

    rules: RegExp[] = [/^(?:\s+)/i,/^(?:$)/i,/^(?:\/\/.*)/i,/^(?:[/][*][^*]*[*]+([^/*][^*]*[*]+)*[/])/i,/^(?:true\b)/i,/^(?:false\b)/i,/^(?:int\b)/i,/^(?:boolean\b)/i,/^(?:double\b)/i,/^(?:String\b)/i,/^(?:if\b)/i,/^(?:while\b)/i,/^(?:do\b)/i,/^(?:else\b)/i,/^(?:void\b)/i,/^(?:return\b)/i,/^(?:toLower\b)/i,/^(?:toUpper\b)/i,/^(?:toString\b)/i,/^(?:length\b)/i,/^(?:typeof\b)/i,/^(?:([a-zA-ZÑñ]|(_[a-zA-ZÑñ]))([a-zA-ZÑñ]|[0-9]|_)*)/i,/^(?:"(?:[(\[)|(\])]|["\\"]["bnrt/["\\"]|[^"["\\"])*")/i,/^(?:'(?:(\\)["bfnrt/(\\)]|(\\)u[a-fA-F0-9]{4}|[^"(\\)])')/i,/^(?:((?:[0-9]|[1-9][0-9]+))((?:\.[0-9]+))\b)/i,/^(?:((?:[0-9]|[1-9][0-9]+))\b)/i,/^(?:\$)/i,/^(?:\+\+)/i,/^(?:--)/i,/^(?:\+)/i,/^(?:-)/i,/^(?:\*)/i,/^(?:\/)/i,/^(?:%)/i,/^(?:\^)/i,/^(?:\()/i,/^(?:\))/i,/^(?:==)/i,/^(?:=)/i,/^(?:,)/i,/^(?::)/i,/^(?:;)/i,/^(?:\|\|)/i,/^(?:&&)/i,/^(?:!=)/i,/^(?:!)/i,/^(?:<=)/i,/^(?:>=)/i,/^(?:>)/i,/^(?:<)/i,/^(?:\{)/i,/^(?:\})/i,/^(?:.)/i];
    conditions: any = {"INITIAL":{"rules":[0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33,34,35,36,37,38,39,40,41,42,43,44,45,46,47,48,49,50,51,52],"inclusive":true}}
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
    case 4:   return 67;     
      break;
    case 5:   return 68;    
      break;
    case 6:   return 43;  
      break;
    case 7:   return 44;  
      break;
    case 8:   return 46;   
      break;
    case 9:   return 45;   
      break;
    case 10:   return 36;       
      break;
    case 11:   return 39;    
      break;
    case 12:   return 40;    
      break;
    case 13:   return 38;     
      break;
    case 14:   return 42;     
      break;
    case 15:   return 'treturn';   
      break;
    case 16:   return 25;   
      break;
    case 17:   return 29;   
      break;
    case 18:   return 29;   
      break;
    case 19:   return 31;   
      break;
    case 20:   return 35;   
      break;
    case 21:yy_.yytext = yy_.yytext.toLowerCase();          return 19;
      break;
    case 22:yy_.yytext = yy_.yytext.substr(1,yy_.yyleng-2);     return 66;
      break;
    case 23:yy_.yytext = yy_.yytext.substr(1,yy_.yyleng-2);     return 65
      break;
    case 24:return 64
      break;
    case 25:return 63
      break;
    case 26:return '$'
      break;
    case 27:return 22;
      break;
    case 28:return 23;
      break;
    case 29:return 49;
      break;
    case 30:return 50;
      break;
    case 31:return 51;
      break;
    case 32:return 52;
      break;
    case 33:return 53;
      break;
    case 34:return 54;
      break;
    case 35:return 26;
      break;
    case 36:return 27;
      break;
    case 37:return 55;
      break;
    case 38:return 20;
      break;
    case 39:return 47;
      break;
    case 40:return ':';
      break;
    case 41:return 11;
      break;
    case 42:return 62;
      break;
    case 43:return 61;
      break;
    case 44:return 56;
      break;
    case 45:return '!';
      break;
    case 46:return 59;
      break;
    case 47:return 60;
      break;
    case 48:return 58;
      break;
    case 49:return 57;
      break;
    case 50:return 8;
      break;
    case 51:return 9;
      break;
    case 52:
      break;
        }
    }
}

