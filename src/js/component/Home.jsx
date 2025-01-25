import React, { useState } from "react";
import 'bootstrap-icons/font/bootstrap-icons.css';
<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.11.3/font/bootstrap-icons.min.css"></link>


//create your first component
const Home = () => {

	const [iconVisible, setIconVisible] = useState([]); 
	const [task, setTask] = useState ([]);
	const [ inputValue, setInputValue ] = useState(null);
	
	

	const showIcon = (indice) => {

		const cambiarVisibilidad = [...iconVisible];
		cambiarVisibilidad.fill("d-none");
		cambiarVisibilidad[indice] = "";
		
		setIconVisible(cambiarVisibilidad);
	
		console.log(iconVisible);
	};

	const hideIcon = (indice) => {

		const cambiarVisibilidad = [...iconVisible];
		cambiarVisibilidad[indice] = "d-none";

		setIconVisible(cambiarVisibilidad);		
	
		console.log(iconVisible);
	};
 
	
	function FAddTask(tarea) {

		const nuevaTarea = tarea;
		// task.push(nuevaTarea);
		setTask([...task,nuevaTarea]);
		setIconVisible([...iconVisible,"d-none"]);
		setInputValue("");


		console.log("prueba");
		
	};

	function handleDelete(indice) {

	//	console.log(`pulsado ${indice}`);
		const ListaTarea = [...task];
		ListaTarea.splice(indice,1);
		console.log(ListaTarea);

		setTask(ListaTarea);


	};

	
	return (


		<div className="container mt-3 mx-auto col-8">
			<form onSubmit={(e) => { e.preventDefault(); FAddTask(inputValue) }}>
				<div className="mb-3 text-center">
					<label htmlFor="exampleFormControlInput1" className="form-label text-center" style={{ fontSize: '30px', marginBottom: '30px' }}>Add task</label>
					<input onChange={e => setInputValue(e.target.value)} value={inputValue} type="text" className="form-control" id="exampleFormControlInput1" placeholder="WRITE A TASK"/>
				</div>

			<div>
				<ul class="list-group">

			{

				task.map((t, index) => (
							
					<li className="list-group-item d-flex justify-content-between" onMouseLeave={() => hideIcon(index)} onMouseEnter={() => showIcon(index)} key={index}>
						
     						<p>
								{t}
							</p>
   												
							<p><i className={`${iconVisible[index]}`} onClick={() => handleDelete(index)}><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-x-square-fill" viewBox="0 0 16 16">
								<path d="M2 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2zm3.354 4.646L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 1 1 .708-.708"/>
								</svg></i>
							</p>
												
						
					</li>

					))
							
				}
				 {/* 	<li className="list-group-item text-start bg-light" style={{ fontSize: '12px' }}>You have {task.length} pending task</li> */}
				
					<li className="list-group-item text-start bg-light" style={{ fontSize: '12px' }}>{task.length <= 0 ? 'You have no pending tasks' : `You have ${task.length} pending tasks`}</li>
												
				</ul>
			</div>
			</form>
					
		</div>
	);
};

export default Home;
