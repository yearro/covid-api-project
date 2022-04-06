# Covid Api Project

## Descripción del proyecto

El proyecto consume una api pública que proporciona información sobre la situación del COVID-19 en el mundo. Puedes encontrar más información en el siguiente enlace [COVID-19 Api](https://covid19api.com/). Además de contar con una colección en [POSTMAN](https://documenter.getpostman.com/view/10808728/SzS8rjbc).

## Patrones
 
 ### Context Provider
 React Context es un método para enviar información entre componentes dentro de un árbol de componentes. Normalmente la información solo viaja en una dirección, desde el proveedor de contexto a cualquier componente que consuma dicho contexto. No hace nada que no pueda hacer con el simple paso de propiedades, sin embargo, le permite omitir todos los componentes intermedios y enviar información arbitrariamente a lo profundo del árbol de componentes.
 
 ### Render props
 Es una técnica para compartir código entre componentes en React utilizando una propiedad cuyo valor es una función, es decir, toma una función que devuelve un elemento de React y lo llama en lugar de implementar su propia lógica de representación. (Router)
 
 ### React Child API
 En React tenemos el accesorio práctico para children. Así es como el padre lee/accede a sus hijos.

### Controlled Input 
En este patrón React le quita el control de estado a la implementación nativa del navegador y expone dicho control por medio de algunas simples API. La intención de esta función es almacenar en un solo lugar el estado que el componente renderizará.

Esto permite que tus componentes reaccionen al cambio de estado y se vuelvan a renderizar para reflejar dicho cambio.

## Debounce
En la técnica de eliminación de rebotes, no importa cuántas veces el usuario active el evento, la función adjunta se ejecutará solo después del tiempo especificado una vez que el usuario deje de activar el evento. 