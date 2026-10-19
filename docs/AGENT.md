# Directrices para el Desarrollo de Código JavaScript

Por favor, sigue estrictamente las siguientes reglas y convenciones al escribir y modificar código JavaScript para este proyecto:

1. **Sintaxis de Funciones:** 
   - Utiliza exclusivamente **funciones flecha** (arrow functions) para todas las declaraciones de funciones. No utilices la palabra clave `function` tradicional.

2. **Paradigma de Programación:** 
   - Aplica **programación declarativa** (prioriza métodos de arreglos como `map`, `filter`, `reduce`, etc., en lugar de bucles imperativos como `for` o `while` tradicionales cuando sea posible).

3. **Estructuras de Control:** 
   - Escribe **condicionales sin `else`**. Utiliza retornos tempranos (*early returns*), guardias u operadores lógicos para manejar las bifurcaciones de código de forma limpia.

4. **Persistencia de Datos:** 
   - Utiliza siempre `localStorage` para almacenar los datos necesarios en el navegador. **No utilices** `sessionStorage` bajo ninguna circunstancia.

5. **Depuración y Registro (`console`):** 
   - Agrega `console.log`, `console.warn` o `console.error` según corresponda dentro de los condicionales, bloques de captura de errores, o en cualquier sección crítica del código que requiera trazabilidad o depuración.

6. **Idioma:** 
   - Escribe todos los nombres de variables, funciones, constantes, mensajes para el usuario, comentarios y textos en **ESPAÑOL**.

7. **Manipulación del DOM:** 
   - Para seleccionar y trabajar con los elementos del HTML, utiliza siempre el método `getElementById` en lugar de `querySelector` o `querySelectorAll`.