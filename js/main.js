(function(){
	// variables globales ligadas al html
	var lista = document.getElementById("lista"),
		tareaInput = document.getElementById("tareaInput"),
		btnNuevaTarea = document.getElementById("btn-agregar");

	// funciones
	var agregarTarea = function(){
		let tarea = tareaInput.value,
			nuevaTarea = document.createElement("li"),
			enlace = document.createElement("a"),
			contenido = document.createTextNode(tarea);

		if (tarea === "") {
			tareaInput.setAttribute("placeholder", "Agrega una tarea valida");
			tareaInput.className = "error";
			return false;
		}

		// agregar el contenido al enlace
		enlace.appendChild(contenido);
		// le establecemos un atributo href
		enlace.setAttribute("href", "#");
		// agrergamos el enlace (a) a la nueva tarea (li)
		nuevaTarea.appendChild(enlace);
		// agregamos la nueva tarea a la lista
		lista.appendChild(nuevaTarea);

		tareaInput.value = "";

		for (var i = 0; i <= lista.children.length -1; i++) {
			lista.children[i].addEventListener("click", function(){
				this.parentNode.removeChild(this);
			});
		}

	};
	var comprobarInput = function(){
		tareaInput.className = "";
		teareaInput.setAttribute("placeholder", "Agrega tu tarea");
	};

	var eleminarTarea = function(){
		this.parentNode.removeChild(this);
	};

	// aqui voy a hacer los eventos

	// aqui invoco mi agregar tarea
	btnNuevaTarea.addEventListener("click", agregarTarea);

	// comprobamos input
	tareaInput.addEventListener("click", comprobarInput);

	// listener borrar tarea on click muahaha!
	for (var i = 0; i <= lista.children.length -1; i++) {
		lista.children[i].addEventListener("click", eleminarTarea);
	}
}());



// seleccionar tareas usando  un diccionario es posible
// para ello nos hara falta un selector de atributo
// element sender (buscar funcion); crear boton por cada hijo del elemento li

// cada boton es el hijo del elemento li.
// i = 0; i <= lista . l
