import { ListGroup } from "react-bootstrap";
import ItemTarea from "./ItemTarea";

const ListaTareas = ({propsListaTareas, borrarTarea}) => {
  
  return (
    <ListGroup>
      {
        propsListaTareas.map((tarea,index)=>  <ItemTarea key={index} nombreTarea={tarea} borrarTarea={borrarTarea}></ItemTarea>)
      }
    </ListGroup>
  );
};

export default ListaTareas;
