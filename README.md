
# Prueba técnica para ILERNA ONLINE

Bienvenidos.

Esto es un proyecto realizado como prueba técnica para ILERNA ONLINE cuyo objetivo es la realización de una front page para una red social con los End-Points ofrecidos.

La API consta de lo siguientes:

 - [Users ](https://jsonplaceholder.typicode.com/users) -> Usuarios que participan en la aplicación.
 - [To-Do](https://jsonplaceholder.typicode.com/todos) -> Lista de tareas pendientes/completadas de cada usuario.
 - [Posts](https://jsonplaceholder.typicode.com/posts) -> Historias que han escritos los usuarios.
 - [Comments](https://jsonplaceholder.typicode.com/comments) -> Comentarios a las historias escritas por otros usuarios.
 - [Albums](https://jsonplaceholder.typicode.com/albums) -> Álbumes de fotografías asignados a cada usuario.
 - [Photos](https://jsonplaceholder.typicode.com/photos) -> Fotografías asignadas a cada Álbum.

En que parte de la aplicación está cada End-Point:

![](https://i.imgur.com/xF5w3cM.png)

## Ejecución e instalación de la aplicación

Para ejecutar el proyecto hay que seguir los siguientes pasos:

 - `npm install`
 - `npm run start`

## Librerías utilizadas

 - [React](https://github.com/facebook/react)/[Redux](https://github.com/reduxjs/redux): Ambas se complementan perfectamente y facilitan mucho la gestión de las props.
 - [Wouter](https://github.com/molefrog/wouter): Aunque la librería más conocida para realizar routing en React es [React-Router](https://github.com/ReactTraining/react-router), personalmente para este tipo de proyectos más pequeños me gusta utilizar Wouter, comenzando por que te ofrece las principales herramientas para hacer un routing completo, es una librería pequeñita (1kb) y amigable.
 - [Axios](https://github.com/axios/axios): Podría haber realizado las peticiones a la Api directamente utilizando el fetch nativo de JavaScript, pero ante la posibilidad de ser ejecutada esta web en IE he preferido optar por esta librería.
 - [React-Modal](https://github.com/reactjs/react-modal): Librería que facilita mucho la inserción de modales.
 - [React-Icons](https://react-icons.github.io/react-icons/): Librería para insertar iconos.

## Git WorkFlow
El workflow que he seguido es el que haría en cualquier proyecto en el que suelo trabajar, siempre tengo una rama Main/Develop de la que salen el resto de ramas, cuando utilizamos algún tipo de gestor de tareas cada rama tiene siempre la id de la tarea que se encarga (feature/#0000) en este caso como no lo uso cada rama tiene un nombre simbólico de lo que tiene que hacer.

![enter image description here](https://i.imgur.com/chfhpCr.png)

## Desde la idea hasta el producto

En cada proyecto en el que trabajo, pienso que es completamente necesario seguir una serie de fases para realizar un trabajo de calidad y tener las cosas claras desde el inicio. Comenzando por un estudio de lo que se quiere llegar a hacer ( una red social con los End-Points ofrecidos), siguiendo por la tecnología que es más optima para la aplicación (React/Redux), creando un proceso de diseño que refleje el resultado final de las pantallas y por último un tipo de arquitectura que nos convenga (Flux).

![enter image description here](https://i.imgur.com/BGBKVZw.png)

## Utilizando los componentes

Una de las características más importantes que nos ofrecen estas últimas tecnologías es la capacidad de crear componentes y re-utilizarlos a medida que nos sea necesario, en lo personal me gusta mucho esta posibilidad e intento realizarla lo máximo posible.
Dejo un ejemplo de los componentes más importantes y como está estructurado:

![](https://i.imgur.com/ECU46OF.png)