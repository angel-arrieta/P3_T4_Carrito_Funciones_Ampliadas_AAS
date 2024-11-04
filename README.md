# Proyecto de Carrito de Compras

## Descripción
Este proyecto es un sitio web que simula un carrito de compras en el que los usuarios pueden navegar por una lista de cursos, agregar productos al carrito, vaciar el carrito, y almacenar el contenido del carrito en el `localStorage` del navegador para su persistencia. El sitio está diseñado con HTML, CSS y JavaScript, y utiliza una estructura de páginas responsiva basada en Skeleton CSS.

## Funcionalidades Principales
El proyecto incluye funcionalidades básicas de gestión de carrito y tres características adicionales implementadas en JavaScript:

### 1. Carrito de Compras
- **Agregar productos al carrito:** Los usuarios pueden añadir cursos al carrito con un botón de "Añadir al carrito".
- **Eliminar productos del carrito:** Los usuarios pueden eliminar cursos específicos del carrito.
- **Vaciar el carrito:** Un botón permite vaciar el carrito por completo.
- **Sincronización con `localStorage`:** Los datos del carrito se almacenan y se recuperan automáticamente del `localStorage` para mantener el estado entre sesiones.

### 2. Lista de Deseos (Funcionalidad Añadida)
- **Botón de "Deseado":** Cada curso tiene un botón de "Deseado" que permite a los usuarios agregar o quitar productos de la lista de deseos.
- **Actualización en tiempo real:** La lista de deseos se actualiza de forma dinámica cuando se agrega o elimina un producto.
- **Consulta de la lista de deseos:** Los usuarios pueden acceder a la lista de deseos a través de un botón en el encabezado.

### 3. Historial de Compras (Funcionalidad Añadida)
- **Registro de productos comprados:** Cada vez que un usuario agrega un curso al carrito, se guarda en un historial de compras.
- **Consulta del historial:** Los usuarios pueden consultar este historial a través de un botón en el encabezado.
- **Persistencia de datos:** El historial de compras se almacena en el `localStorage`, asegurando que los productos comprados se conserven entre sesiones.

### 4. Buscador de Productos con Menú Desplegable (Funcionalidad Añadida)
- **Barra de búsqueda:** Un buscador permite a los usuarios escribir parte del nombre de un producto.
- **Despliegue de resultados:** Un menú desplegable muestra los productos que coinciden con la búsqueda en tiempo real.
- **Interacción:** Los usuarios pueden interactuar con los productos en el menú desplegable, permitiendo agregar al carrito o acceder a más detalles.

## Tecnologías Utilizadas
- **HTML5:** Estructura semántica del proyecto.
- **CSS3 (Skeleton y Custom):** Diseño responsivo y personalizado.
- **JavaScript (Vanilla):** Lógica para manejar las funcionalidades del carrito, la lista de deseos, el historial de compras y el buscador.

## Instalación y Uso
1. Clona este repositorio en tu máquina local:
   ```bash
   git clone https://github.com/usuario/proyecto-carrito-compras.git
