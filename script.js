// Página de Inicio
var inicio = document.getElementById("inicio");
var restaurantesLista = document.getElementById("restaurantes-lista");

var restaurantes = [
  {
    nombre: "Pacifico Mar",
    direccion: "Calle 6 No 3 - 26",
    descripcion: "Deliciosa comida de mar",
    imagen: "pacifico.png"
  },
  {
    nombre: "Italiano 65",
    direccion: "Calle 6w No 5w - 39",
    descripcion: "Deliciosa comida italiana",
    imagen: "italiano-65.jpg"
  },
  {
    nombre: "Fritos y Más",
    direccion: "Avenida 26 No 5 - 39",
    descripcion: "Comida rápida",
    imagen: "fritos-y-mas.jpg"
  },
  {
    nombre: "Pollo Frito",
    direccion: "Avenida 12 No 21 - 12",
    descripcion: "Lo mejor del pollo frito",
    imagen: "pollo-frito.jpg"
  }
];

for (var i = 0; i < restaurantes.length; i++) {
  var restauranteDiv = document.createElement("div");
  restauranteDiv.classList.add("restaurante");
  restauranteDiv.innerHTML = `
    <h3>${restaurantes[i].nombre}</h3>
    <p>${restaurantes[i].direccion}</p>
    <p>${restaurantes[i].descripcion}</p>
    <img src="${restaurantes[i].imagen}" alt="Imagen del restaurante">
  `;
  restaurantesLista.appendChild(restauranteDiv);
}

// Página de Búsqueda de Restaurantes
function buscarRestaurantes() {
  var nombreBusqueda = document.getElementById("nombre-busqueda").value.toLowerCase();
  var resultadosBusqueda = document.getElementById("resultados-busqueda");
  resultadosBusqueda.innerHTML = "";

  for (var i = 0; i < restaurantes.length; i++) {
    if (restaurantes[i].nombre.toLowerCase().indexOf(nombreBusqueda) !== -1) {
      var restauranteDiv = document.createElement("div");
      restauranteDiv.classList.add("restaurante");
      restauranteDiv.innerHTML = `
        <h3>${restaurantes[i].nombre}</h3>
        <p>${restaurantes[i].direccion}</p>
        <p>${restaurantes[i].descripcion}</p>
        <img src="${restaurantes[i].imagen}" alt="Imagen del restaurante">
      `;
      resultadosBusqueda.appendChild(restauranteDiv);
    }
  }
}

// Página de Nuevo Restaurante
function guardarRestaurante() {
  var nombreNuevo = document.getElementById("nombre-nuevo").value;
  var descripcionNuevo = document.getElementById("descripcion-nuevo").value;
  var direccionNuevo = document.getElementById("direccion-nuevo").value;
  var imagenNuevo = document.getElementById("imagen-nuevo").value;

  var nuevoRestaurante = {
    nombre: nombreNuevo,
    direccion: direccionNuevo,
    descripcion: descripcionNuevo,
    imagen: imagenNuevo
  };

  restaurantes.push(nuevoRestaurante);

  // Mostrar mensaje de éxito o redireccionar a la página de Inicio
  alert("Restaurante guardado con éxito");
  location.href = "index.html";
}
