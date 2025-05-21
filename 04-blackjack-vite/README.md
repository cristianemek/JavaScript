# Blackjack Vite

Proyecto de Blackjack desarrollado con JavaScript y Vite.

## Requisitos

- Node.js instalado

## Pasos para ejecutar el proyecto en desarrollo

1. Clona el repositorio:
    ```bash
    git clone <URL_DEL_REPOSITORIO>
    cd 04-blackjack-vite
    ```
2. Instala las dependencias:
    ```bash
    npm install
    ```
3. Inicia el servidor de desarrollo:
    ```bash
    npm run dev
    ```
4. Abre tu navegador en `http://localhost:5173`

## Pasos para generar versión de producción

1. Genera los archivos de producción:
    ```bash
    npm run build
    ```
2. Los archivos optimizados estarán en la carpeta `dist/`.
3. Puedes servir la carpeta `dist/` con cualquier servidor estático, por ejemplo:
    ```bash
    npm install -g serve
    serve -s dist
    ```

## Licencia

MIT