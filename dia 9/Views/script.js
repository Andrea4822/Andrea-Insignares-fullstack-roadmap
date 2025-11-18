const formulario = document.getElementById("tarjetaFormulario");
const boton = document.getElementById("agregar");
const addCard = document.getElementById("cuerpo");



boton.addEventListener("click", function(event) {
    event.preventDefault();

    const titulo = document.getElementById("titulo");
    const descripcion = document.getElementById("parrafo");
    const imagen = document.getElementById("imagen");


    const articulo = document.createElement("article");
    articulo.classList.add("articulo");

    const img = document.createElement("img");
    img.classList.add("imagen");
    img.src = URL.createObjectURL(imagen.files[0]);
    const h2 = document.createElement("h2");
    h2.textContent = titulo.value;
    const p = document.createElement("p");
    p.textContent = descripcion.value;
    const footer = document.createElement("footer");
    const fecha = document.createElement("time");
    const hoy = new Date();
    fecha.textContent = hoy.toLocaleDateString("en-US", { month: "long", day: "numeric", year: "numeric" });
   

    // Agregas al DOM
    articulo.appendChild(img);
    articulo.appendChild(h2);
    articulo.appendChild(p);
    articulo.appendChild(footer);
    footer.appendChild(fecha);
    footer.append(" · DevOps");

    addCard.appendChild(articulo);

    formulario.reset();
    
});
