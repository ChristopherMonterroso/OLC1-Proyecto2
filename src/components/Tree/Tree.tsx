import * as variables from "../../Data/dataTree";
import DAGViewer from "./DAGViewer";
import { SContainer } from './styles';

function Tree(){
    // console.log(variables.treeContent.content)
    return (
        <SContainer>
          <h1>Arbol</h1>
          <DAGViewer dot={variables.treeContent.content} height="100vh" width="100%" />
        </SContainer>
        
    );
};
export default Tree;