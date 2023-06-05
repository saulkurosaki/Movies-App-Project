const Editar = ({ peli, conseguirPeliculas, setEditar, setListadoState }) => {

    const guardarEdicion = (e, id) => {
        e.preventDefault();

        //Conseguir el target del evento
        let target = e.target;

        //Buscar el indice del objeto de la película a actualizar
        const pelisAlmacenadas = conseguirPeliculas();
        const indice = pelisAlmacenadas.findIndex(peli => peli.id === id);

        //Crear objeto con el id de ese indice, con titulo y descripción
        let peliActualiza = {
            id,
            titulo: target.titulo.value,
            descripción: target.descripción.value,
        };

        //Actualizar el elemento con ese indice
        pelisAlmacenadas[indice] = peliActualiza;

        //Guardar el nuevo array de objetos en el local storage
        localStorage.setItem('pelis', JSON.stringify(pelisAlmacenadas));

        //Actualizar estados
        setListadoState(pelisAlmacenadas);
        setEditar(0);

    };

    return(
        <div className="edit_form">
            <h3 className="title">Editar Película</h3>
            <form onSubmit={e => guardarEdicion(e, peli.id)}>
                <input 
                    type="text"
                    name="titulo"
                    className="titulo_editado"
                    defaultValue={peli.titulo}    
                />
                <textarea 
                    name="descripción"
                    className="descripción_editada"
                    defaultValue={peli.descripción}
                />
                <input type="submit" className="editar" value='Actualizar' />
            </form>
        </div>
    );
};

export default Editar;