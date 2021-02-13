# Prueba técnica para ILERNA ONLINE

Bienvenidos,
Esto es un proyecto realizado como prueba técnica para ILERNA ONLINE, el objetivo que me he propuesto con la api publica que me han ofrecido es la realización de una front page de una posible red social.
La API constaba de lo siguientes End-Points:

 - [Users ](https://jsonplaceholder.typicode.com/users) -> Usuarios que participan en la aplicación.
 - [To-Do](https://jsonplaceholder.typicode.com/todos) -> Lista de tareas pendientes/completadas de cada usuario.
 - [Posts](https://jsonplaceholder.typicode.com/posts) -> Historias que han escritos los usuarios.
 - [Comments](https://jsonplaceholder.typicode.com/comments) -> Comentarios a las historias escritas por otros usuarios.
 - [Albums](https://jsonplaceholder.typicode.com/albums) -> Álbumes de fotografías asignados a cada usuario.
 - [Photos](https://jsonplaceholder.typicode.com/photos) -> Fotografías asignadas a cada Álbum.

## Ejecución y Live Demo

Para ejecutar el proyecto hay que seguir los siguientes pasos:

 - `npm install`
 - `npm run start`

Si quieres ver la aplicación sin descargar e instalar el proyecto -> Live Demo

## Librerías utilizadas

 - [React](https://github.com/facebook/react)/[Redux](https://github.com/reduxjs/redux): Ambas funcionan muy bien de la mano y facilitan mucho la gestión de las props.
 - [Wouter](https://github.com/molefrog/wouter): Aunque la librería más conocida para realizar routing en React es [React-Router](https://github.com/ReactTraining/react-router), personalmente para este tipo de proyectos más pequeños me gusta utilizar Wouter, comenzando por que te da las principales herramientas para hacer un routing completo, es una librería es pequeñita (1kb) y amigable.
 - [Axios](https://github.com/axios/axios): Podría haber realizado las peticiones a la Api directamente utilizando el fetch nativo de JavaScript, pero ante la posibilidad de ser ejecutada esta web en IE he preferido tirar por esta librería.
 - [React-Modal](https://github.com/reactjs/react-modal): Librería que facilita mucho la inserción de modales.
 - [React-Icons](https://react-icons.github.io/react-icons/): Librería para insertar iconos.