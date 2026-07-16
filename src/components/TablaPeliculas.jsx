import "./TablaPeliculas.css";

function TablaPeliculas({ peliculas }) {
    // Definimos un tope máximo de vistas para calcular el porcentaje
    const maxViews = 100;

    return (
        <div className="tabla-contenedor">
            <table className="tabla-peliculas">
                <thead>
                    <tr>
                        <th className="tabla-header">Título</th>
                        <th className="tabla-header">Género</th>
                        <th className="tabla-header">Views</th>
                        <th className="tabla-header">Popularidad</th>
                        <th className="tabla-header">Director</th>
                    </tr>
                </thead>
                <tbody>
                    {peliculas.map((p) => {
                        // 1. Calcular el porcentaje dinámico de la barra
                        const porcentaje = Math.min(Math.round((p.views / maxViews) * 100), 100);

                        // 2. Determinar condicionalmente la clase de color (rojo si es < 50, verde si es >= 50)
                        const claseProgreso = porcentaje < 50 ? "progreso-bajo" : "progreso-alto";

                        return (
                            <tr key={p.id} className="tabla-fila">
                                <td className="tabla-celda celda-titulo">{p.titulo}</td>
                                <td className="tabla-celda">{p.genero}</td>
                                <td className="tabla-celda celda-views">
                                    {Number(p.views).toLocaleString()}
                                </td>
                                
                                {/* Columna de la barra de progreso personalizada */}
                                <td className="tabla-celda celda-progreso">
                                    <div className="progreso-contenedor">
                                        <div 
                                            className={`progreso-barra ${claseProgreso}`} 
                                            style={{ width: `${porcentaje}%` }}
                                        ></div>
                                    </div>
                                    <span className="progreso-texto">{porcentaje}%</span>
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