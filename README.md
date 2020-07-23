# express-api-auth
API de autenticación usando Mongo Atlas db

- Crearse una cuenta gratuita en https://cloud.mongodb.com

- Crear una base de datos y una coleccion llamada 'users' -> documentos: email, password

- Copiar los datos del string de conexión y reemplazarlos en archivo api.js 

```
const db = string connection;
```

### Rutas

- /api/register -> parameters: {email, password}
- /api/login  -> parameters: {email, password} 
