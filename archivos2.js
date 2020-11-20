var total = 0;
window.addEventListener("load", function() {

    var JsonCarrito;
    //------vectores y variables que nos serviran para guardar los datos en formato JSON--------
    var objeto = {}; //objeto que contendrá todos los datos
    var productos = new Array(); //Vector auxiliar que contendra a todos los productos agregados al carrito
    var precios = new Array(); //Vector auxiliar de precios contendrá a todos los precios agregados al carrito
    var subtotales = new Array(); //vector de subtotalse contendrá a todos los subtotalse agregados al carrito
    var i = 0; //indice para los vectores
    //------------------------------------------------------------------------------------------------

    var objetos = document.querySelector(".btn btn-block btn-primary agregar-carrito");
    console.log(objetos);
    document.addEventListener("click", function(e) {
        if (e.target.getAttribute("class") == "btn btn-block btn-primary agregar-carrito") {
            var cadena = "";
            var descripcion = e.target.getAttribute("id");
            var Pventa = document.querySelector("." + e.target.getAttribute("id")).textContent;
            for (x = 2; x < Pventa.length; x++) {
                cadena += Pventa[x];
            }
            total += parseInt(cadena);
            //-------Creacion del Json con los datos del carrito------------------------
            productos[i] = descripcion; //insertar un producto al vector
            precios[i] = Pventa; //Insertar un precio de venta al vector
            subtotal = Pventa;
            subtotales[i] = subtotal; //insertar el subtotal al vector
            var datos = []; //vector de datos {"producto":nombreProducto}
            for (y = 0; y < productos.length; y++) //for que nos sirve para recorrer los vectores y agregarlos a los datos
            {

                //"datos" es un areglo de datos 
                datos.push({
                    "Producto": productos[y],
                    "Precio": precios[y],
                    "Subtotal": subtotales[y]
                });
            }
            i++;
            objeto.datos = datos; //metiendo todo los datos al objeto
            console.log(JSON.stringify(objeto)); //imprimiendo en consola el objeto ya convertido en json
            JsonCarrito = { "Producto": descripcion };
            //-------------------------------------------------------------------------------------      
            //localStorage.setItem('local',JSON.stringify((objeto)));

        }
    });
  
});