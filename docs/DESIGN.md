# Diseño implementado

Esta guía describe los estilos que usan actualmente las páginas de registro y bienvenida. No define componentes que aún no existen en la interfaz.

## Identidad visual

La interfaz combina un fondo oscuro con tarjetas claras, texto en azul pizarra y acentos escarlata. El fondo tiene dos brillos radiales sobre un degradado lineal de azul marino a verde oscuro.

### Colores

| Uso | Valor |
| --- | --- |
| Fondo base | `#0D1B2A` |
| Fondo intermedio | `#1B263B` |
| Fondo verde | `#0B3C35` |
| Superficie de tarjeta | `#EDF2F4` |
| Texto principal en tarjeta | `#2B2D42` |
| Texto secundario | `#586174` |
| Texto claro sobre fondo oscuro | `#EDF2F4` |
| Acento principal | `#EF233C` |
| Acento al pasar el cursor | `#D90429` |
| Borde de campos | `#D7DCE3` |
| Error | `#C1122F` |

## Tipografía

- El texto general usa la pila del sistema: `system-ui`, variantes del sistema operativo, `"Segoe UI"` y `sans-serif`.
- Los títulos y las etiquetas de sección usan `"Space Mono"` si está instalada en el dispositivo; no se descarga desde la aplicación. De lo contrario, se usa `"Courier New"` y luego una fuente monoespaciada.
- Los tamaños y pesos se definen en las reglas de cada componente; no hay una escala tipográfica externa aplicada.

## Estructura y adaptación

- La página usa un encabezado y un pie a todo lo ancho; el contenido principal ocupa el espacio restante y centra la tarjeta.
- La tarjeta tiene un ancho máximo de `30rem` (480px). La tarjeta de registro usa un relleno entre `1.5rem` y `2.5rem`; la de bienvenida amplía el relleno vertical entre `2rem` y `3.5rem`.
- Por debajo de `30rem` (480px), el contenido se alinea arriba, reduce su relleno vertical y las esquinas de las tarjetas pasan de `1.75rem` a `1.25rem`.
- La tarjeta de bienvenida centra su contenido. La tarjeta de registro mantiene los campos alineados en una columna.

## Componentes

### Tarjetas

Las tarjetas usan una superficie sólida `#EDF2F4`, un borde blanco translúcido y una sombra oscura difusa. No usan desenfoque de fondo.

### Campos de formulario

- Los campos tienen fondo gris translúcido, borde de `1px` y esquinas de `0.75rem`.
- Al pasar el cursor, el fondo se oscurece ligeramente.
- El foco visible cambia el borde al color de acento, aclara el fondo y añade un halo de `3px`.
- Los mensajes de error se presentan en rojo con un fondo y un borde tenues.

### Botones

- El botón principal ocupa todo el ancho del formulario, usa el acento escarlata y cambia a rojo oscuro al pasar el cursor.
- El botón secundario usa un fondo gris translúcido y un cambio sutil al pasar el cursor.
- Los botones y la marca muestran un contorno de foco visible.

### Movimiento

Las transiciones duran `160ms`. Cuando el dispositivo solicita movimiento reducido, se reducen a una duración prácticamente instantánea.
