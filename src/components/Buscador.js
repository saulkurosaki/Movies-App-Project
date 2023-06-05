import { useState } from "react";

const Buscador = ({ listadoState, setListadoState }) => {

    const [busqueda, setBusqueda] = useState('');
    const [ noEncontrado, setNoEncontrado ] = useState(false);

    const buscarPeli = (e) => {
        //Crear estado y actualizarlo
        setBusqueda(e.target.value);

        //Filtrar para buscar coincidencias
        let pelisEncontradas = listadoState.filter(peli => {
            return peli.titulo.toLowerCase().includes(busqueda.toLowerCase());
        });

        if(busqueda.length <= 1 || pelisEncontradas <= 0){
            pelisEncontradas = JSON.parse(localStorage.getItem('pelis'));
            setNoEncontrado(true);
        } else {
            setNoEncontrado(false);
        };

        //Actualizar estado del listado principal
        setListadoState(pelisEncontradas);
    };

    return(
        <>
            <div className="search">
                <h3 className="title">Buscador: {busqueda}</h3>
                {noEncontrado == true && busqueda.length > 1
                    ? <span className="no-encontrado">No se ha encontrado ninguna coincidencia</span>
                    : null}
                <form>
                    <input 
                        type="text" 
                        id="search_field"
                        name="busqueda"
                        autoComplete="off"
                        value={busqueda}
                        onChange={buscarPeli} 
                    />
                    <button id="search">Buscar</button>
                </form>
            </div>
        </>
    );
};

export default Buscador;