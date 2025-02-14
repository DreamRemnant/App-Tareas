function guardarTarea() {
    let cardElement = document.getElementById("card");
    let tituloTarea = document.getElementById("cardTitle");
    let descripcionTarea = document.getElementById("cardDescription");

    if (tituloTarea.value == "") {
        alert("Can't leave title empty.\nPlease set a title.");
        return;
    }
}