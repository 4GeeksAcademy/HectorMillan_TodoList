import React, { useState } from "react";
import 'bootstrap-icons/font/bootstrap-icons.css';
<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.11.3/font/bootstrap-icons.min.css"></link>


//create your first component
const Home = () => {

	// Primero creamos las constantes de los valores que necesitamos recoger.
	// First we create the constants of the values ​​we need to collect.
	const [iconVisible, setIconVisible] = useState([]); 
	const [task, setTask] = useState ([]);
	const [ inputValue, setInputValue ] = useState(null);
	

	// Creamos una función para mostrar el icono de eliminar cogiendo el indice de la "li" seleccionada.
	// We create a function to display the delete icon by taking the index of the selected "li".

	const ShowIcon = (indice) => {
		const cambiarVisibilidad = [...iconVisible];
		cambiarVisibilidad.fill("d-none");
		cambiarVisibilidad[indice] = "";
		setIconVisible(cambiarVisibilidad);
	//	console.log(iconVisible);

	};


	// Creamos una función para ocultar el icono de eliminar cogiendo el indice de la "li" seleccionada.
	// We created a function to hide the delete icon by taking the index of the selected "li".

	const HideIcon = (indice) => {

		const cambiarVisibilidad = [...iconVisible];
		cambiarVisibilidad[indice] = "d-none";
		setIconVisible(cambiarVisibilidad);		
	//	console.log(iconVisible);

	};
 

	// Creamos una funcion para añadir la tarea a la constante "task" pasandosela como parametro "tarea".
	// We create a function to add the task to the "task" constant, passing it as the "tarea" parameter.

	function AddTask(tarea) {

		const nuevaTarea = tarea;
		setTask([...task,nuevaTarea]);
		setIconVisible([...iconVisible,"d-none"]); // Ocultamos el icono reacien creado - We hide the newly created icon
		setInputValue("");
	// (console.log("prueba");
		
	};

	// Creamos la funcion para eliminar la tarea según el indice dado.
	// We create the function to delete the task based on the given index.

	function DeleteTask(indice) {
	
		const ListaTarea = [...task];
		ListaTarea.splice(indice,1);
		setTask(ListaTarea);
	//	console.log(ListaTarea);


	};

	
	return (


		<div className="container mt-3 mx-auto col-8">
			<form onSubmit={(e) => { e.preventDefault(); AddTask(inputValue) }}>
				<div className="mb-3 text-center">
					<label htmlFor="exampleFormControlInput1" className="form-label text-center" style={{ fontSize: '30px', marginBottom: '30px' }}>Add task</label>
					<input onChange={e => setInputValue(e.target.value)} value={inputValue} type="text" className="form-control" id="exampleFormControlInput1" placeholder="WRITE A TASK" />
				</div>

				<div>


					<ul class="list-group">

						{
							// Recorremos el array task con la función map y creamos un "li" con cada elemento.
							// We go through the task array with the map function and create a "li" with each element.

							task.map((tarea, index) => (

								<li className="list-group-item d-flex justify-content-between" onMouseLeave={() => HideIcon(index)} onMouseEnter={() => ShowIcon(index)} key={index}>

									<p>
										{tarea}
									</p>

									<p>
										{/* Creamos un icono para eliminar la tarea seleccionada dando el indice de la tarea
											We create an icon to delete the selected task giving the task index
										*/}

										<i className={`${iconVisible[index]}`} onClick={() => DeleteTask(index)}> 
											<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-x-square-fill" viewBox="0 0 16 16">
											<path d="M2 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2zm3.354 4.646L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 1 1 .708-.708" />
											</svg>
										</i>
											
									</p>


								</li>

							))

						}

						{
						/* 
							Creamos un li final para contar el numero de tareas pendientes, si no hay ninguna mostramos el texto "You have no pending tasks" 
							We create a final li to count the number of pending tasks, if there are none we show the text
						*/
						}

						<li className="list-group-item text-start bg-light" style={{ fontSize: '12px' }}>{task.length <= 0 ? 'You have no pending tasks' : `You have ${task.length} pending tasks`}</li>

					</ul>
				</div>
			</form>

		</div>
	);
};

export default Home;
