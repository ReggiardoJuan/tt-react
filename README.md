# Proyecto: API (Python) + Web (React)

Este proyecto está compuesto por dos módulos principales:

-   **api/** --- Backend en Python.\
    Gestiona la lógica del servidor, expone la API y administra la base
    de datos SQLite.

-   **web/** --- Frontend en React.\
    Aplicación cliente que consume la API y provee la interfaz de
    usuario.

------------------------------------------------------------------------

## Estructura del proyecto

    /
    ├── api/          # Backend en Python + SQLite
    │   ├── app/
    │   │   ├── db.py
    │   │   └── main.py
    │   ├── requirements.txt
    │   └── ...
    └── web/          # Frontend en React
        ├── src/
        ├── package.json
        └── ...

------------------------------------------------------------------------

## 🔧 Requisitos

-   **Python 3.10+**
-   **Node.js 22+**\
-   **npm, yarn, o pnpm**

------------------------------------------------------------------------

## 📦 Instalación

### 1. Backend (api)

1.  Ingresar a la carpeta del backend:

    ``` bash
    cd api
    ```

2.  (Opcional) Crear y activar un entorno virtual:

    ``` bash
    python3 -m venv venv
    source venv/bin/activate    # Linux/Mac
    venv\Scripts\activate       # Windows
    ```

3.  Instalar dependencias:

    ``` bash
    pip install -r requirements.txt
    ```

4.  Ejecutar el servidor (inicializa SQLite automáticamente):

    ``` bash
    uvicorn app.main:app
    ```

    El backend estará disponible en:\
    **http://localhost:8000**

------------------------------------------------------------------------

### 2. Frontend (web)

1.  Ingresar a la carpeta del frontend:

    ``` bash
    cd web
    ```

2.  Instalar dependencias:

    ``` bash
    npm install
    ```

    o

    ``` bash
    yarn
    ```

3.  Iniciar la aplicación:

    ``` bash
    npm run dev
    ```

    La aplicación quedará disponible en:\
    **http://localhost:5173**

------------------------------------------------------------------------

## 🧪 Desarrollo

Ambos proyectos pueden ejecutarse simultáneamente.\
El frontend se comunica con el backend mediante solicitudes HTTP hacia
`localhost:8000`.

------------------------------------------------------------------------
