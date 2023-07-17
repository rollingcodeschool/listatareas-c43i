import { Form, Button } from "react-bootstrap";
import ListaTareas from "./ListaTareas";
import { useState } from "react";

const FormularioTarea = () => {
  const [tarea, setTarea] =useState('');
  const [listaTareas, setListaTareas] =useState([]);

  return (
    <>
    <Form>
      <Form.Group className="mb-3 d-flex" controlId="tarea">
        <Form.Control type="text" 
        placeholder="ingrese una tarea"
        value={tarea} 
        onChange={(e)=> setTarea(e.target.value) }
         />
        <Button variant="primary">Agregar</Button>
      </Form.Group>
    </Form>
    <ListaTareas></ListaTareas>
    </>
  );
};

export default FormularioTarea;
