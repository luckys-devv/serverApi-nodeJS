# 🚀 Server API - Node.js

Este es un simple proyecto de ejemplo donde muestro cómo crear un servidor HTTP en Node.js de dos formas diferentes:
1. **Sin frameworks** - Usando únicamente el módulo nativo `http` de Node.js
2. **Con Express.js** - Utilizando el framework expressJs

## 📋 Descripción

El proyecto consta de tres archivos principales que demuestran diferentes conceptos:

- **`server.js`** - Servidor HTTP básico sin Express
- **`index.js`** - Servidor HTTP básico que lee datos desde un archivo `.data` sin Express
- **`express.js`** - Servidor usando Express.js con un simple middleware y muestro como funciona por debajo express.json()

## 🛠️ Tecnologías

- Node.js
- Express.js
- Módulo HTTP nativo

## 📂 Estructura del Proyecto

```
serverApi-nodeJS/
│
├── server.js       # Servidor HTTP básico
├── index.js        # Servidor con lectura de archivos
├── express.js      # Servidor con Express y middleware
├── .data           # Archivo de datos
└── package.json    # Dependencias del proyecto
```

## ⚙️ Instalación

1. Clona el repositorio:
```bash
git clone https://github.com/luckys-devv/serverApi-nodeJS.git
```

2. Navega al directorio del proyecto:
```bash
cd serverApi-nodeJS
```

3. Instala las dependencias:
```bash
npm install
```

## 🚀 Uso (Tiene scripts en package.json)

### Ejecutar servidor básico (HTTP nativo)
```bash
npm run start
```

### Ejecutar servidor con lectura de archivos
```bash
npm run withHtml2
```

### Ejecutar servidor con Express
```bash
npm run withExpres
```