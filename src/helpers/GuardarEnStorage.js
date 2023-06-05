export const GuardarEnStorage = (clave, elemento) => {

    //Conseguir los elementos que ya tenemos en el localstorage
        let elementos = JSON.parse(localStorage.getItem(clave));

    //Comprobar si es un Array
        if(Array.isArray(elementos)){
            //Añadir un elemento a nuestro array
            elementos.push(elemento);
        }else{
            //Crear un array con el elemento nuevo
            elementos = [elemento];
        };

    //Guardar en el localstorage
        localStorage.setItem(clave, JSON.stringify(elementos));

    //Devolver un Objeto
        return elemento;
};