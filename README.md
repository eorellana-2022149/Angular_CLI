### Componentes que genere

Bueno aquí esta el como trabaje esto. El proyecto lo cree con el Angular CLI, osea con el comando `ng new` y ya de ahi el CLI te crea todo solito, todas las carpetas y archivos que se necesitan para que funcione.

### Componentes que generé

Genere varios componentes usando `ng generate component`, en total son 7 (el CLI hace todo el trabajo, vos solo pones el nombre y el ya te crea el html, el scss, el ts y hasta el archivo de test):

- **Header**: aqui puse mis datos personales, nombre, carne y carrera.
- **Navbar**: un menu de navegacion con unos links de prueba.
- **Body**: es como el contenido principal de la pagina.
- **List**: una lista con unos elementos de ejemplo.
- **Form**: un formulario sencillo con inputs de nombre, edad y correo.
- **Button**: un componente aparte solo para el boton, para reutilizarlo despues.
- **Footer**: el pie de pagina con links de redes sociales (facebook, whatsapp, instagram).

Todos estos los meti dentro de una carpeta que se llama `components/` para tenerlos ordenados y no que anden regados por todo el proyecto, y ya despues Angular los registra automatico en el `app.module.ts` cuando los generas con el CLI entonces no hay que hacer nada mas ahi, el solito se encarga.

### Como esta organizado esto

Ademas de los componentes deje preparadas 3 carpetas para cuando ya se necesite conectar con el backend (el que va a estar en TypeScript/Node.js):

- `core/`
- `features/`
- `shared/`

Por ahorita estan vacias (bueno tienen un archivo de prueba nomas para que no se borren en el git jeje) pero la idea es que despues ahi vaya la logica de servicios, cosas compartidas entre componentes y las features/modulos grandes del proyecto conforme vaya creciendo.
