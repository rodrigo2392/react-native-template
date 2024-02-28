<p align="center">
  <a href="http://reactnative.dev/" target="blank"><img src="https://reactnative.dev/img/header_logo.svg" alt="React Logo" width="180" /></a>
</p>

<h1 align="center">React Native Template</h1>

<p align="center">
  Repositorio base con configuraciones necesarias para inciar un nuevo proyecto basado en react native, incluye navegación, gestión de estado global, fuentes, iconos y bibliotecas útiles para el desarrollo
</p>

<p align="center">
  <a href="https://nodejs.org/docs/latest-v20.x/api/index.html"><img src="https://img.shields.io/badge/Node-20.x-green.svg" alt="node"/></a>
    <img src="https://img.shields.io/badge/NPM-10.x-red.svg" alt="npm"/>
  <a href="https://www.typescriptlang.org/"><img src="https://img.shields.io/badge/Typescript-5.x-blue.svg" alt="typescript"/></a>
   <a href="https://reactnative.dev/"><img src="https://img.shields.io/badge/React_Native-0.73.x-blue.svg" alt="typescript"/></a>
    <a href="https://es.react.dev/"><img src="https://img.shields.io/badge/React-18.x-blue.svg" alt="typescript"/></a>
</p>

##  Motivación
Cada que iniciaba un proyecto nuevo en react native me veía en la necesidad de instalar y configurar todas estas dependiencias desde cero. En este tiempo me he dado cuenta de que estas dependecias y configuraciones estan presentes en el 85% de los proyectos que he trabajo, es por eso que he creado esta plantilla con todas las configuraciones e instalaciones básicas como punto de inicio.

Esta plantilla no contine ningún tipo de arquitectura y presenta una estructura de carpetas flexible que permite al desarrollador adecuarlo a su proyecto.

Tene funcionalidad dummy como el inicio de sesion y las llamadas el servidor, pero son solo para ahorrar tiempo en ese trabajo. La navegación ya contiene el flujo correcto para trabajar con un inicio de sesión si así se requiere.

Estaré actualizando este repositorio, ya sea con las nuevas versiones de react native o de las dependiencia, así tambien como nuevas características que puedan ser útiles.

## ¿Qué se incluye en esta plantilla?

1. Navegación basada en bottom tab bar y stack anidados.
2. Fuente Roboto y Montserrat.
3. Integración básica de redux toolkit con persistencia.
4. Flujo básico de autenticación con estado global.
5. Iconos
6. Configuración básica de axios para permitir enviar un token como método de autenticación.
7. Reactotron como método de depuración de llamados al backend.
8. Comandos para generar archivo APK en android con build autoincremental.
9. Comandos personalizados para testing
10. Configuración básica para crear build de producción.
11. Selector de tema (oscuro/claro) basado en un estado local persistente.



##  Bibliotecas

| Biblioteca           | Categoría            | Versión | Descripción                                    |
| ----------------- | -------------------- | ------- | ---------------------------------------------- |
| React Native      | Framework      | v0.73   | Framework móvil       |
| React             | UI          | v18.2     | Biblioteca UI     |
| TypeScript        | Lenguaje             | v5.0      | Tipado                         |
| Redux Toolkit       | Estado global             | v2.2      | Gestión de estado global                         |
| React Navigation  | Navegación           | v6.1      | Navegación mediante stacks, tabs y drawers |
| RN Reanimated     | Animaciones           | v3.7      | Animaciones y transiciones            |
| AsyncStorage      | Persistencia          | v1.22      | Guardado local                             |
| Axios          | Peticiones HTTP        | v1.6      | Comunicación con el backend                  |
| React Query          | Cliente REST         | v1.6      | Gestor de llamadas asíncronas al servidor               |
| Reactotron RN     | Inspector/Depuración   | v5.1      | Depuración de llamados al backend                                |
| Jest              | Testing          | v29.6     | Estándar para aplicaciones javascript               |
| Dayjs          | Fechas         | v1.11      | Biblioteca para el manejo de fechas                        |
| FlashList         | Reemplazo de flatList | v1.6      | A performant drop-in replacement for FlatList  |


## Fuentes de texto
Para agregar una nueva fuente es necesario agregarla a la carpeta `/android/app/src/main/assets/fonts`
Es importante usar el mismo nombre del archivo por ejemplo, si el archivo se llama **Montserrat-Regular** se deberá usar de la misma manera de modo que quede así:

`fontFamily: 'Montserrat-Regular'`

 o así

`fontFamily: 'Montserrat-Bold'`

No usar el modificador `fontWeight: 'bold'` esto hace que la fuente no funcione, en caso de querer un tamaño bold, usar la fuente correspondiente.

## Building

Para generar un apk de producción usar el siguiente comando:

```bash
npm run build:apk
```

Para generar un bundle de android para producción usar el siguiente comando:

```bash
npm run build:bundle
```
Ambos generan un bundle autoincrementable con el numero de versión diferente al generado en el pasado.

##Depuración
Para hacer depuración de llamados al servidor, mensajes en consola o errores en general el proyecto tiene previamente configurado reactotron, sólo debes decargar el ejecutable desde su repositorio y automáticamente se conectará a la aplicación.
[Decárgalo haciendo click aquí.](http://https://github.com/infinitered/reactotron/releases?q=reactotron-app&expanded=true "Decárgalo haciendo click aquí.")

## Pruebas

Para ejecutar los casos de pruebas usar el siguiente comando:

```bash
npm run test
```
Los casos de prueba se encuentran en la carpeta **`__test__`**

## Linting

Para formatear el codigo ejecutar el comando:

```bash
npm run lint
```

## TODO
- I18n
- Variante con firebase
- Variante con bibliotecas nativas multimedia (camara, micrófono, lector QR, etc.)
- Variante con integración de mapas
- Más pruebas unitarias