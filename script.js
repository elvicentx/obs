// Reemplaza con el JWT Token de tu cuenta de StreamElements
const a = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJjaXRhZGVsIiwiZXhwIjoxNzY4MDcxNzAzLCJqdGkiOiIzOGZhOWJhNC0xMTNiLTQyN2MtOGRmMS0xYzllMzdlNTU1ZGYiLCJjaGFubmVsIjoiNWYxZTUwMGE2MjM1Mjk0ZDYzZTNmNzg4Iiwicm9sZSI6Im93bmVyIiwiYXV0aFRva2VuIjoicUtZQlhKRHhBMEVVVENBaXhYNW5sSWhDQ1ItRHdZUGtwbXZHejdRTWVDOEw0LXJ4IiwidXNlciI6IjVmMWU1MDBhNjIzNTI5NjJkOGUzZjc4NyIsInVzZXJfaWQiOiI3NzNjNmM3ZS03NjU5LTQ2YjctYmQzZS04MWYyNmNiYjBjZTQiLCJ1c2VyX3JvbGUiOiJjcmVhdG9yIiwicHJvdmlkZXIiOiJ0d2l0Y2giLCJwcm92aWRlcl9pZCI6IjE1MDI4MTQ3MSIsImNoYW5uZWxfaWQiOiJlNWViN2ZjNC02YTcwLTQ0NDItYmY1Yy1jMjAxYWZjZWRkODgiLCJjcmVhdG9yX2lkIjoiMWM3YWM3NTUtNGM2Ni00ZDQxLTg0NWUtODQwZDAzYjk0ZTcwIn0.lXksy4SiPXvCNY19_kUlLTwoGNk_cGpC9M9qFNESTG8"; 

// NO MODIFICAR EL CÓDIGO DE ABAJO
const b = io("https://realtime.streamelements.com", {
    transports: ["websocket"]
});

b.on("connect", () => {
    console.log("Conectado a StreamElements");
    b.emit("authenticate", {
        method: "jwt",
        token: a
    });
});

b.on("unauthorized", console.error);
b.on("event:test", (c) => {
    if (c.listener === "follower-latest") {
        dispararAlerta(c.event.name);
    }
});

b.on("event", (c) => {
    if (c.type === "follower") {
        dispararAlerta(c.data.username);
    }
});

function dispararAlerta(nombre) {
    const alerta = document.getElementById("alerta");
    const nombreFollower = document.getElementById("nombre-follower");

    nombreFollower.innerText = nombre;
    alerta.classList.add("visible");

    // Oculta la alerta después de que termine la animación (10 segundos)
    setTimeout(() => {
        alerta.classList.remove("visible");
    }, 10000);
}