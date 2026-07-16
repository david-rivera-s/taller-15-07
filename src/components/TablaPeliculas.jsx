import "./TablaPeliculas.css";

function TablaPeliculas({ peliculas }) {
    return (
        <div className="tabla-contenedor">
            <table className="tabla-peliculas">
                <thead>
                    <tr>
                        <th className="tabla-header">Título</th>
                        <th className="tabla-header">Género</th>
                        <th className="tabla-header">Views</th>
                        <th className="tabla-header">Director</th>
                    </tr>
                </thead>
                <tbody>
                    {peliculas.map((p) => {
                        return (
                            <tr key={p.id} className="tabla-fila">
                                <td className="tabla-celda celda-titulo">{p.titulo}</td>
                                <td className="tabla-celda">{p.genero}</td>
                                <td className="tabla-celda celda-views">
                                    {Number(p.views).toLocaleString()}
                                </td>
                                <td className="tabla-celda">{p.director}</td>
                            </tr>
                        );
                    })}
                </tbody>
            </table>
        </div>
    );
}

export default TablaPeliculas;