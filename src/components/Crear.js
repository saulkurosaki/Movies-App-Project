import { useState } from "react";
import { GuardarEnStorage } from "../helpers/GuardarEnStorage";

const Crear = ({ setListadoState }) => {
    const tituloComponente = 'Añadir película';

    const [ peliState, setPeliState ] = useState({
        titulo: '',
        descripción: '',
    });

    const { titulo, descripción } = peliState;

    const conseguirDatosForm = (e) => {
        e.preventDefault();

        //Conseguir datos del formulario
        let target = e.target;
        let titulo = target.titulo.value;
        let descripción = target.descripción.value;

        //Crear objeto de la película a guardar
        let peli = {
            id: new Date().getTime(),
            titulo,
            descripción,
        };

        //Guardar Peli
        setPeliState(peli);

        //Actualizar el estado del Listado Principal
        setListadoState(elementos => {
            return [...elementos, peli];
        });

        //Guardar en el Almacenamiento Local
        GuardarEnStorage('pelis', peli);
    };

    return(
        <>
            <div className="add">
                <h3 className="title">{tituloComponente}</h3>

                <strong>
                    {titulo && descripción ? "Has creado la película " + titulo : null}
                </strong>

                <form onSubmit={conseguirDatosForm}>
                    <input 
                        type="text" 
                        id="titulo"
                        name="titulo" 
                        placeholder="Titulo" 
                    />
                    <textarea 
                        id="descripción"
                        name="descripción" 
                        placeholder="Descripción"
                    ></textarea>
                    <input 
                        type="submit" 
                        id="save" 
                        value="Guardar" 
                    />
                </form>
            </div>
        </>
    );
};


export default Crear;