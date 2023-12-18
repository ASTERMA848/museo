// Espera a que el DOM esté completamente cargado antes de ejecutar el código
document.addEventListener('DOMContentLoaded', () => {
    // Llama a la función cargarInsignias cuando la página se carga
    cargarInsignias();
  });
  
  // Función para cargar las insignias desde el archivo JSON
  function cargarInsignias() {
    // Realiza una solicitud HTTP para obtener el archivo JSON de insignias
    fetch('insignias.json')
      .then(response => response.json()) // Convierte la respuesta a formato JSON
      .then(insignias => {
        // Llama a la función retornarInsignias para mostrar las insignias en la página
        retornarInsignias(insignias);
      })
      .catch(error => console.error('Error al cargar el archivo JSON:', error)); // Maneja errores
  }
  
  // Función para mostrar las insignias en la página HTML
  function retornarInsignias(insignias) {
    // Obtiene el elemento div donde se mostrarán las insignias
    const insigniasListDiv = document.getElementById('insignias-list');
    // Limpia el contenido actual del div
    insigniasListDiv.innerHTML = '';
    // Crea un elemento ul (lista desordenada)
    const listaInsignias = document.createElement('ul');
  
    // Itera sobre cada insignia y crea un elemento li para cada una
    insignias.forEach(insignia => {
      const listItem = document.createElement('li');
      listItem.innerHTML = `
        <h2>${insignia.nombre}</h2>
        <img src="${insignia.imagen}" alt="${insignia.nombre}">
        <p>${insignia.descripcion}</p>
      `;
      // Agrega cada li a la lista de insignias
      listaInsignias.appendChild(listItem);
    });
  
    // Agrega la lista de insignias al div
    insigniasListDiv.appendChild(listaInsignias);
  }
  
  // Función para filtrar las insignias por nombre mediante un buscador
  function buscadorPorFiltro() {
    // Obtiene el valor del campo de búsqueda y lo convierte a minúsculas
    const filtro = document.getElementById('buscador').value.toLowerCase();
    
    // Realiza una solicitud HTTP para obtener el archivo JSON de insignias
    fetch('insignias.json')
      .then(response => response.json()) // Convierte la respuesta a formato JSON
      .then(insignias => {
        // Filtra las insignias que coinciden con el filtro
        const insigniasFiltradas = insignias.filter(insignia =>
          insignia.nombre.toLowerCase().includes(filtro)
        );
        // Llama a la función retornarInsignias para mostrar las insignias filtradas
        retornarInsignias(insigniasFiltradas);
      })
      .catch(error => console.error('Error al cargar el archivo JSON:', error)); // Maneja errores
  }
  