# Diseño: inicio técnico de NILO

## Intención

Preparar en la carpeta vacía de NILO una base mínima para comenzar a desarrollar el producto: un agente conversacional de compras orientado al mercado mexicano. La entrega de esta etapa es un proyecto que pueda instalarse y arrancarse localmente, no una experiencia de usuario completa.

## Alcance

- Usar Node.js, Next.js, React y el App Router, con TypeScript y los valores recomendados por Next.js para una aplicación nueva.
- Dejar scripts de desarrollo, compilación y ejecución listos para usar.
- Mantener una estructura inicial simple y un punto de entrada mínimo que confirme que la aplicación arranca.
- No crear la página de presentación, chat, integración con WhatsApp, comercios, pagos/CoDi, autenticación ni lógica de IA.
- No añadir componentes Radix ni una biblioteca de temas en esta etapa: Radix se incorporará cuando se definan los componentes de una interfaz concreta.

## Enfoques considerados

- **App Router (elegido):** opción actual de Next.js, recomendada para un proyecto nuevo y extensible.
- **Pages Router:** alternativa estable y sencilla, pero heredada y menos apropiada para iniciar un proyecto nuevo.

Se usará App Router porque el proyecto está vacío y no necesita compatibilidad con una estructura existente. La configuración de Node/Next/React satisface el objetivo; instalar componentes visuales sin una pantalla definida añadiría dependencias sin uso.

## Restricciones y decisiones para la implementación

- La carpeta del proyecto está vacía.
- Usar la versión estable compatible de Next.js y su requisito correspondiente de Node.js; documentar el requisito en el `package.json` si corresponde.
- Mantener el arranque en local verificable con los scripts del proyecto.
- Las decisiones menores de configuración, como gestor de paquetes, formato y linting, quedan a criterio de la implementación, priorizando opciones estándar de Next.js y evitando dependencias innecesarias.

## Criterio de éxito

Las dependencias se instalan y la aplicación mínima arranca y compila sin errores. No se considera parte de este inicio desplegarla ni conectar servicios externos.
