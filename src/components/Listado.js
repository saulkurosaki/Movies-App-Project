import { useEffect, useState } from "react";
import Editar from "./Editar";

const Listado = ({ listadoState, setListadoState }) => {

    const [editar, setEditar] = useState(0);

    useEffect(() => {
        conseguirPeliculas();
    }, []);

    const conseguirPeliculas = () => {
        let peliculas = JSON.parse(localStorage.getItem("pelis"));

        setListadoState(peliculas);

        return peliculas;
    };

    const borrarPeli = (id) => {
        //Conseguir peliculas almacenadas
        let pelisAlmacenadas = conseguirPeliculas();

        //Filtrar peliculas parar eliminar del array la deseada
        let nuevoArrayPelis = pelisAlmacenadas.filter(peli => peli.id !== parseInt(id));

        //Actualizar estado del listado
        setListadoState(nuevoArrayPelis);

        //Actualizar el localstorage
        localStorage.setItem('pelis', JSON.stringify(nuevoArrayPelis));
    };

    return(
        <>

            {listadoState !== null 
                ? listadoState.map(peli => {

                    return(
                        <article key={peli.id} className="peli-item">
                            <h3 className="title">{peli.titulo}</h3>
                            <p className="description">{peli.descripción}</p>
            
                            <button className="edit" onClick={() => setEditar(peli.id)}>Editar</button>
                            <button className="delete" onClick={() => borrarPeli(peli.id)}>Borrar</button>

                            {/* Aparece formulario de edición */}
                            {editar === peli.id
                                ?   
                                    <Editar 
                                        peli={peli} 
                                        conseguirPeliculas={conseguirPeliculas}
                                        setEditar={setEditar}
                                        setListadoState={setListadoState}
                                    />
                                : null}
                            

                        </article>
                    );

                })  
                : <h2>No hay peliculas para mostrar</h2> }

        </>
    );
};

export default Listado;