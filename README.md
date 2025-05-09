# Lab08 - Backend con JWT y Express

Este proyecto es el backend del Lab08, desarrollado con Node.js, Express y autenticación mediante JWT. Puedes desplegarlo tanto en entorno local como en [Render](https://render.com).

---

## 🚀 Pasos para desplegar el backend

### 1. Clonar el repositorio

```bash
git clone https://github.com/ThiagoPharari/lab07-back-dwa.git
cd lab07-back-dwa
```

### 2. Instalar dependencias

Antes de ejecutar el backend, es necesario instalar todas las dependencias con el siguiente comando:

```bash
npm install
```

### 3. Configurar variables de entorno

Debes definir las siguientes variables de entorno:

```env
MONGO_URI=<tu_url_de_mongo_atlas>
JWT_SECRET=<tu_clave_ultrasecreta>
```

#### 🔐 Recomendación

Si despliegas en **Render**, lo más práctico es configurar estas variables directamente en el panel de Render:

* Ve a tu servicio backend en Render.
* Entra en **Environment**.
* Agrega las variables `MONGO_URI` y `JWT_SECRET`.

### 4. Iniciar el servidor

Para ejecutar el servidor localmente o en Render:

```bash
npm start
```

---

## ✅ Notas

* Asegúrate de que tu URL de Mongo Atlas sea válida y permita conexiones externas.
* Usa una clave segura y compleja para `JWT_SECRET`.

---

¡Y eso es todo! Tu backend estará funcionando con autenticación JWT y listo para consumir desde el frontend.
