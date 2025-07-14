body, html {
    margin: 0;
    overflow: hidden;
}

#escenario {
    position: relative;
    width: 100vw;
    height: 100vh;
}

.alerta-personaje {
    width: 150px;
    position: absolute;
    bottom: 50px;
    display: flex;
    flex-direction: column;
    align-items: center;
}

.alerta-personaje.hidden {
    display: none;
}

.alerta-personaje.active {
    animation: viajeCompleto 12s linear forwards;
}

.alerta-personaje.active .texto-nombre {
    animation: anularGiro 12s linear forwards;
}

.alerta-personaje img {
    width: 100%;
}

.alerta-personaje .texto-nombre {
    background-color: rgba(0, 0, 0, 0.7);
    color: white;
    padding: 5px 15px;
    border-radius: 15px;
    font-family: 'Arial', sans-serif;
    font-size: 24px;
    font-weight: bold;
    margin-bottom: 10px;
    white-space: nowrap;
}

@keyframes viajeCompleto {
    0%   { left: -150px; transform: scaleX(1); }
    45%  { left: 100%; transform: scaleX(1); }
    50%  { left: 100%; transform: scaleX(-1); }
    95%  { left: -150px; transform: scaleX(-1); }
    100% { left: -150px; transform: scaleX(-1); }
}

@keyframes anularGiro {
    0%   { transform: scaleX(1); }
    49%  { transform: scaleX(1); }
    50%  { transform: scaleX(-1); }
    100% { transform: scaleX(-1); }
}
