Instrucciones para Ejecutar el Proyecto
1. Configurar y Ejecutar el Receiver

cd receiver

docker build -t receiver-audio .

docker run -p 8080:8080 -v $(pwd)/output:/app/output receiver-audio


2. Configurar y Ejecutar el Sender

cd sender

Para que el navegador pueda acceder a la página y establecer conexiones WebSocket, es necesario servirla a través de un servidor web local.

python3 -m http.server 8000

Ya de ahi acceder a http://localhost:8000/sender.html