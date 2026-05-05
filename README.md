# 🌦️ Weather App

Aplicación desarrollada con **React + Vite** que permite consultar el pronóstico del tiempo de una ciudad utilizando la API de OpenWeather.

---

# 📌 Funcionalidades

* Mostrar el pronóstico meteorológico de una ciudad.
* Búsqueda de ciudades mediante formulario.
* Pronóstico por defecto de la ubicación actual del usuario mediante geolocalización.
* Si no se concede permiso de ubicación, se muestra Madrid por defecto.
* Muestra una tarjeta por día con:
  * Fecha
  * Temperatura
  * Estado del tiempo
  * Icono meteorológico
* Manejo de errores si la ciudad no existe.
* Limpieza automática del input tras 20 segundos sin interacción.

---

# 🛠️ Tecnologías utilizadas

* React
* Vite
* JavaScript
* CSS
* UUID
* API de OpenWeather

---

# 📂 Estructura del proyecto

```
public/
src/
 ├── App.jsx
 ├── main.jsx
 ├── index.css
 └── components/
      ├── Form.jsx
      ├── WeatherCard.jsx
      └── WeatherList.jsx
eslint.config.js
index.html
package.json
README.md
vite.config.js
```

---

# ⚙️ Instalación y uso

## 1. Clonar repositorio

```bash
git clone https://github.com/asolermaria/Ejercicio_React-Weather_Info-useEffect.git
```

## 2. Instalar dependencias

```bash
npm install
```

## 3. Crear archivo `.env`

En la raíz del proyecto:

```env
VITE_API_KEY=tu_api_key
```

La API Key se obtiene en OpenWeather.

---

## 4. Ejecutar proyecto

```bash
npm run dev
```

---

## 🚀 Demo en vivo

Puedes ver la aplicación funcionando aquí:

👉 [Weather App Live](https://statuesque-hotteok-6b1599.netlify.app/)

---

## 🌍 Despliegue en Netlify

Este proyecto está desplegado en **Netlify**.

La aplicación se actualiza automáticamente cada vez que se hace un push a la rama principal del repositorio.

---

## 🛠️ Build de producción

Para generar la versión de producción del proyecto:

```bash id="netlify02"
npm run build
```


# 🌍 Funcionamiento de la aplicación

## Primera carga

Al abrir la aplicación:

1. Se solicita permiso de geolocalización al usuario.
2. Si acepta, se muestra el clima de su ubicación actual.
3. Si rechaza permisos, se carga Madrid por defecto.

---

## Búsqueda manual

El usuario puede escribir una ciudad en el input y pulsar **Buscar**.

La aplicación consulta la API y actualiza el pronóstico.

---

## Gestión de errores

Si la ciudad no existe:

```text
Ciudad no encontrada
```

---

# 📅 Datos mostrados

La API devuelve información cada 3 horas durante 5 días.

La aplicación filtra los datos y muestra únicamente el registro de las **12:00** de cada día para tener una tarjeta diaria más limpia y visual.

---

# 🎨 Diseño

Interfaz sencilla basada en tarjetas responsive con CSS Grid.

---

# 🚀 Posibles mejoras futuras

* Spinner de carga
* Más estilos visuales
* Temperatura mínima y máxima
* Fondo dinámico según clima
* Traducción completa
* Guardar últimas búsquedas

---

# 👨‍💻 Autor

Antonio Soler Maria

Proyecto realizado como práctica de React: uso de `useEffect`, asincronía, formularios y consumo de APIs.
