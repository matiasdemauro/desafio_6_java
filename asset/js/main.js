//Quiero simular algo sencillo para luego volverlo complejo con las demas clases, estoy simulando que se agregan productos en una lista que eso posteriormente sera el carrito de compra. Y se puede quitar el elemento en caso de reducir productos.
let boton = document.getElementById('boton') ; //capturo el boton
boton.addEventListener('click' , function(){
    if (producto.value === ""){
        alert('Error. No se agregó producto.')
        
    }
    else{ 
    let producto = document.getElementById('producto'); //capturo el input
    let lista = document.getElementById('lista'); //capturo la lista que va a ser padre de los elementos que voy a agregar.
    } 

    let li = document.createElement('li') //creo el elemento 'li' de la lista.
    li.innerHTML = `<span>${producto.value}</span>
                    <button class='borrar'>Eliminar</button>` //se guarda en memoria todo el codigo PERO no se muestra hasta que suceda el evento.
     lista.append(li); //Para que no me aparezca en cualquierlado , debo indicar quien es su padre para que aloje la informacion dentro de la lista ul del html. debo indicar quien es el padre del elemento que defini en createElement()
     //Cada vez que se ejecute el evento se agrega el li dentro de ul y un boton BORRAR
    let botones_borrar = document.querySelectorAll('.borrar');
    //notemos que botones_borrar es un array que va a contener cada boton borrar ingresado desde input con el evento agregar.
    console.log(botones_borrar);
    for( let buton of botones_borrar){
        
        buton.addEventListener('click' , borrarElemento);
        //a cada nodo creado se le agrega un evento con eventlistener
    }
}); 
function borrarElemento(e) {
   // console.log('Se tiene que eliminar', e.target);
    let padre = e.target.parentNode;
    let abuelo = padre.parentNode;
    padre.remove();
    console.log('hijo', e.target)
    console.log('padre',padre);
    console.log('abuelo',abuelo);
}
