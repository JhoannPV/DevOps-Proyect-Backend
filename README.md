# BACKEND MERN - CALENDAR
Este es el repositorio del backend de una aplicación de calendario desarrollada con la pila MERN (MongoDB, Express, React, Node.js). Esta aplicación permite a los usuarios gestionar eventos y citas de manera eficiente.

# Características
Este backend se conecta a una base de datos Mongo Atlas para almacenar y gestionar los datos de los usuarios y sus eventos.
Pero en existe unc archivo .env.template donde se encuentra la configuración para conectarse a una base de datos MongoDB local utilizando Docker. Solo es necesario ejecutar docker-compose up -d para levantar el contenedor de MongoDB y modificar las variables de entorno en el archivo .env para que apunten a la base de datos local.

# Construcción de la Imagen Docker y creación del Contenedor
Para construir la imagen Docker del backend, utiliza el siguiente comando en la terminal:

__docker build -t devops-backend .__

Luego, para crear y ejecutar un contenedor a partir de la imagen construida, utiliza el siguiente comando:

__docker run -p 3000:3000 --env-file .env devops-backend__