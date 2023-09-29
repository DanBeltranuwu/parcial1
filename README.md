# parcial1 Daniel Beltran - 201812807
## Paso 1
Inicialmente se hizo una lectura preliminar del parcial con el fin de detectar posibles dificultades.
## Paso 2
Notamos que mockaroo presentaba indisponibilidad el día del parcial, por lo cual cargamos un json proporcionado al repo creado el día anterior.
## Paso 3
Inicié a maquetar la pantalla de Login, para esta pantalla decidí no crear dos vistas para los dos momentos (ingreso mail e ingreso contraseña) sino crear un estado para poder hacer un renderizado condicional, de este modo ahorro tener que pasar el mail de una vista a otra por parametro.
Adicionalmente, accedí al repositorio local donde hice el tutorial del curso, el cual explica como hacer forms en react y hacen un login, de este repositorio tomé la lógica. Luego maqueté la pantalla con lo explicado previamente, intenté que se viera bien visualmente pero luego de hacer el css de la estructura general, entendí que no tendría tiempo para el resto del parcial.
## Paso 4
Después pasé a maquetar la pantalla de inventario, para esta note una similitud con el repositorio local donde hice el tutorial del curso, el cual explica como usar el useEffect en react con un ejemplo de mascotas, la similitud fue las cards de las mascotas con las cards de partes que solicitaba el parcial, entonces tome la clase Mascota y la transforme a la clase Part, supliendo las necesidades que se tenían.
Adicionalmente, tomé de ejemplo la clase Mascotas donde hacen el useEffect y el renderizado de cada mascota para poder realizar la clase Inventory para desplegar las cards de cada parte.
## Paso 5
Luego de una leve discusión en clase sobre como pasar por parámetro un id de la parte, ya que el json no contenía un id, se llegó a la conclusión de usar el modelo del auto. Para este momento no había realizado la navegación de la página por lo que inicié a  realizarla y a conectar las partes para que tenga la navegación esperada para el parcial.
Tuve que realizar unos cambios en el login para poder poner el enlace, por lo que el botón siguiente se renderiza condicionalmente por completo, ya que para la navegación es necesario retirar el onClick.
## Paso 6
Realice la pantalla de detalle, en esta no quise pasar todo la parte por parámetro, me pareció algo complejo, por lo cual decidí crear otro useEffect para poder capturar la información de la parte que coincida con el modelo del auto, ya con esto decidí crear la pantalla y como el tema de las características era tan igual, tomé la decisión de crear una función que renderizara cada componente de cada característica.

### NOTA
No alcancé a realizar lo del patrón maestro en el detalle, entonces no pude hacer la función que decidiera que usuario era maestro o no y tampoco alcancé a modificar el componente de característica para que tuviera dicha variación condicional.
