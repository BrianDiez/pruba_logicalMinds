Aplicacion full stack prueba junior

Esta aplicacion permite crear usuarios con nombre, apellido, email y país, tambien permite listar los usuarios y eliminarlos. El backend esta escrito en node.js + express y knex.js con el servidor PostgreSQL y el frontend en next.js, react, tailwindcss y CSS nativo.

-- Las tecnologias usadas son:
 -Frontend: Next.js, React, Tailwindcss, CSS Nativo
 -Backend y base de datos: Node.js, Express, Knex.js, PostgreSQL


-- Para clonar el repositorio:

git clone https://github.com/BrianDiez/pruba_logicalMinds.git
cd pruba_logicalMinds

-- Para instalar las dependencias:

npm install 

-- Para ejecutar el backend:

npm run dev

-- Para ejecutar el frontend:

npm run dev

-- Para ejecutar la aplicacion:

http://localhost:3000

**

-- El uso de la aplicacion es entrando en la pagina http://localhost:3000 y crear un usuario rellenando el formulario, en caso de que el usuario ya exista se le mostrara un mensaje de error y en caso de que falten campos por completar se le mostrara en que campo falta informacion. Una vez creado el usuario se muestra en la lista de usuarios, para eliminar un usuario esta el boton de eliminar, el cual tiene un validador que pregunta si esta seguro de eliminar el usuario.

Esta aplicacion esta divida en dos carpetas "backend" y "frontend".
El backend utiliza (GET, POST, DELETE) para la gestion de los usuarios y usand o knex.js para la conexion a la base de datos.
El frontend en Next.js con axios para la conexion a la api y react, tailwindcss y CSS nativo para el estilo.

Brian Diez