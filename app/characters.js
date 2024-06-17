fetch("https://hp-api.onrender.com/api/characters")
.then((respuesta) => {
    console.log(respuesta);
    return respuesta.json();
})
.then((data) => {
    console.log(data);
});