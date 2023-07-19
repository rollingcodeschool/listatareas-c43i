import { ListGroup } from "react-bootstrap";
import ItemTarea from "./ItemTarea";

const ListaTareas = ({propsListaTareas}) => {
  
  return (
    <ListGroup>
      {
        propsListaTareas.map((tarea,index)=>  <ItemTarea key={index} nombreTarea={tarea}></ItemTarea>)
      }
    </ListGroup>
  );
};

export default ListaTareas;
