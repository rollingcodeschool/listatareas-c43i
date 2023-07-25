import { Form, Button } from "react-bootstrap";
import ListaTareas from "./ListaTareas";
import { useEffect, useState } from "react";

const FormularioTarea = () => {
  const [tarea, setTarea] = useState("");
  let tareasLocalStorage = JSON.parse(localStorage.getItem('listaTareas')) || [];
  const [listaTareas, setListaTareas] = useState(tareasLocalStorage);

  // esta version de useEffect se ejecuta en montaje y actualizacion del state listaTareas
   useEffect(()=>{
    localStorage.setItem('listaTareas', JSON.stringify(listaTareas));
  }, [listaTareas])

  // esta version de useEffect se ejecuta en montaje y actualizacion de todos los estados
  // useEffect(()=>{
  //   console.log('esto fue ejecutado con useEffect')
  // })
  
  // Solo quiero usar useeffect en montaje 
  // useEffect(()=>{
  // //  la logica que quiera ejecutar
  // }, [])

  const handleSubmit = (e) => {
    e.preventDefault();
    //guardar la tarea en el array listaTareas
   setListaTareas([...listaTareas, tarea]);
    //limpiar el value del input
    setTarea('');
  };

  //crear una funcion para borrar tareas
  const borrarTarea = (tareaBorrar)=>{
    let listaTareasFiltrada = listaTareas.filter((itemTarea)=> itemTarea !== tareaBorrar);
    setListaTareas(listaTareasFiltrada)
  }

  return (
    <>
      <Form onSubmit={handleSubmit}>
        <Form.Group className="mb-3 d-flex" controlId="tarea">
          <Form.Control
            type="text"
            placeholder="ingrese una tarea"
            value={tarea}
            onChange={(e) => setTarea(e.target.value)}
          />
          <Button variant="primary" type="submit">
            Agregar
          </Button>
        </Form.Group>
      </Form>
      <ListaTareas propsListaTareas={listaTareas} borrarTarea={borrarTarea}></ListaTareas>
    </>
  );
};

export default FormularioTarea;
