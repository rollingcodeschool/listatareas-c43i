import { ListGroup } from "react-bootstrap";
import ItemTarea from "./ItemTarea";

const ListaTareas = ({propsListaTareas}) => {
  
  return (
    <ListGroup>
      {
        propsListaTareas.map(()=>  <ItemTarea></ItemTarea>)
      }
    </ListGroup>
  );
};

export default ListaTareas;
