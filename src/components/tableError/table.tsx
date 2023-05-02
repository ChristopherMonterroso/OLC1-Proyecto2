import { Err } from "../../Data/Errores";
import "./styles.css"
const ErrorTable= () => {
    const Er = Err.obtenerListaDatos();
  return (
    <div className="container">
        <table className="error-table">
        <thead>
          <tr>
            <th>No.</th>
            <th>Tipo</th>
            <th>Descripción</th>
            <th>Fila</th>
            <th>Columna</th>
            
            
            
          </tr>
        </thead>
        <tbody>
          {
          
          Er.map((error, index) => (
            <tr key={index}>
              <td>{index + 1}</td>
              <td>{error.tipo}</td>
              <td>{error.dato}</td>
              <td>{error.linea}</td>
              <td>{error.columna}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
    
  );
};

export default ErrorTable;