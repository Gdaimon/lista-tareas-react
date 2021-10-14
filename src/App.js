import { nanoid } from 'nanoid';
import React from 'react'
import './App.css';

function App() {

  const [tarea, setTarea] = React.useState('')
  const [listaTarea, setListaTarea] = React.useState([])

  // Estados de modificacion
  const [editar, setEditar] = React.useState(false)
  const [id, setId] = React.useState('')

  const handleInput = (e) => {
    // console.log(e.target.value);
    // Asignacion al tarea
    setTarea(e.target.value)
  }

  const handleFormulario = (e) => {
    e.preventDefault()

    // Prueba nanoid autogenerador de id
    // Instalar npm i nanoid -> no olvidar hacer la importacion
    // console.log('ID: ',nanoid(10));

    // Validacion que el campo no esta vacio
    if (!tarea.trim()) {
      console.log('Debes ingresar una tarea...!')
      return
    }

    // console.log(tarea)

    // Asignacion y creacion del nuevo elemento
    setListaTarea([
      ...listaTarea,
      {
        id: nanoid(),
        // tarea: 'valor.... la variable'
        // tarea: tarea
        tarea
      }
    ])

    // Limpiar el estado
    setTarea('')



    console.log('Entro');
  }


  const handleEliminar = (id) => {
    console.log(id);

    // Filtrar los elementos que no tengan el id que recibimos por parametro o que sea diferente
    const arregloTemporal = listaTarea.filter((elemento) => {
      return elemento.id !== id
      // return !(elemento.id === id)
    })
    setListaTarea(arregloTemporal)

  }

  const handleEditar = (task) => {
    console.log(task)

    setTarea(task.tarea)
    setEditar(true)
    setId(task.id)

  }

  const handleGuardarEditar = (e) => {
    e.preventDefault()

    if (!tarea.trim()) {
      console.log('Debes ingresar una tarea...!')
      return
    }

    const arregloTemporal = listaTarea.map((item) => {
      return item.id === id ? { id: id, tarea: tarea } : item
    })

    setListaTarea(arregloTemporal)

    // Limpiar el estado
    setTarea('')
  }


  return (
    <div className="container mt-5">

      <h1>Lista Tareas</h1>
      <hr />

      {/* Fila */}
      <div className="row">

        {/* Treas */}
        <div className="col-8">
          <h4 className="text-center">Tareas</h4>
          <ul className="list-group">

            {
              listaTarea.map((task) => (
                <li className="list-group-item" key={task.id}>
                  <span className="lead">{task.tarea}</span>

                  <button
                    className="btn btn-outline-danger btn-sm float-end mx-2"
                    onClick={() => handleEliminar(task.id)}
                  >
                    Borrar
                  </button>


                  <button
                    className="btn btn-outline-warning btn-sm float-end"
                    onClick={() => handleEditar(task)}
                  >
                    Modificar
                  </button>
                </li>
              ))
            }


          </ul>
        </div>

        {/* Formulario */}
        <div className="col-4">
          <h4 className="text-center">
            {
              editar ? 'Editar Tareas' : 'Crear Tareas'
            }
          </h4>
          <form className="d-grid"
            onSubmit={editar ? handleGuardarEditar : handleFormulario}
          >

            <input
              type="text"
              className="form-control mb-2"
              placeholder="Ingresa la tarea"
              onChange={handleInput}
              // hacemos un vinculo entre el estado (tarea) y el input para que reaccione con los cambios de el estado de la tarea
              value={tarea}
            />

            {
              editar ?
                (
                  <button
                    className="btn btn-outline-warning"
                  >Editar</button>
                )
                :
                (
                  <button
                    className="btn btn-outline-success"
                  >Adicionar</button>
                )
            }


          </form>
        </div>

      </div>


    </div>
  );
}

export default App;
