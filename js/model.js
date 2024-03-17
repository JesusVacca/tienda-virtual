const lista_categoria = document.getElementById("item-productos").children;
const car = document.getElementById("open-car");
const desplegable = document.getElementById("desplegable");
car.onclick = () =>{
    desplegable.classList.toggle("activar-car")
    const close = document.getElementById("close");
    close.onclick = () =>{
        desplegable.classList.toggle("activar-car")
    }
}

// Recorremos la lista de categorias y revizmos si tiene la clase especial activo
for (let index = 0; index < lista_categoria.length; index++) {
    const element = lista_categoria[index];
    try {
        element.onclick=()=>{
            for (let index = 0; index < lista_categoria.length; index++){
                const enlace = lista_categoria[index];
                if(enlace.classList.contains("active"))enlace.classList.remove("active");
            }
            element.classList.add("active");
        }
    } catch (error) {
        console.log(";( ...")
        break;
    }
}