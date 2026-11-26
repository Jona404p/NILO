# Diseño: página principal de bienvenida de NILO

## Intención

Convertir la ruta `/` en una bienvenida sencilla para personas que quieren comprar en línea de forma rápida y segura. La página presenta a NILO como un compañero de compra, sin simular todavía una conversación ni un flujo de compra.

## Objetivos y límites

- Mostrar una bienvenida breve con el nombre NILO y la mascota individual de bolsa desde `public/NiloPet.png`.
- Usar el tema claro como apariencia inicial y ofrecer un control manual para alternar entre claro y oscuro.
- Recordar la última preferencia de tema en el navegador de la persona.
- Mantener una composición responsive, legible y accesible por teclado.
- No crear un dashboard administrativo, catálogo, CTA de inicio, chat, búsqueda, recomendaciones, integraciones comerciales, WhatsApp, pagos/CoDi ni funciones de IA.
- No añadir Radix ni dependencias de interfaz externas para esta página.

## Enfoques considerados

- **A. Bienvenida clara:** saludo y promesa de ayuda alineados a la izquierda; una ilustración de bolsa de compras es el gesto visual central. Elegida por la persona usuaria.
- **B. Primera conversación:** presentación más oscura y orientada a una burbuja de mensaje. Descartada porque prioriza la conversación que todavía no existe y fue menos cercana a la preferencia expresada.

Para el tema:

- **Control manual (elegido):** permite a cada persona cambiar de tema independientemente del ajuste del dispositivo.
- **Tema del sistema:** automático, pero no permite que la preferencia individual prevalezca.
- **Automático y manual:** combina ambos, pero agrega complejidad que no se pidió.

## Dirección visual

- **Claro, inicial:** verde mineral `#153A43`, agua clara `#EDF5F2`, lima `#DDF277`, coral `#F27B5E` y texto secundario `#48646A`.
- **Oscuro:** bosque `#173A35`, texto suave `#F0F3DF`, texto secundario `#C5D6C6` y lima `#D8EF77`; conserva el coral de la ilustración.
- **Tipografía:** sans serif del sistema, con un titular grande, geométrico y ajustado; texto de apoyo corto y legible.
- **Composición:** wordmark discreto arriba; saludo alineado a la izquierda; mascota ilustrada como único foco gráfico secundario. En móvil, el saludo precede a la ilustración.
- **Control:** botón claro/oscuro en la esquina superior derecha, con nombre accesible de la acción siguiente. No habrá navegación adicional.

## Criterios de éxito

- La ruta `/` muestra el saludo y no incluye botones de compra/chat ni secciones administrativas.
- El control alterna los dos temas y la elección se conserva tras recargar la página.
- La página y el control son utilizables con teclado, y la composición se adapta a pantallas móviles.
- `npm run lint` y `npm run build` terminan correctamente.
