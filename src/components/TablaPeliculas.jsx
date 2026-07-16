// import "./TablaPeliculas.css"

export const TablaPeliculas = ({ peliculas }) => {
    return(
        <div>
            <table>
                <thead>
                    <tr>
                        <th>Título</th>
                        <th>Género</th>
                        <th>Views</th>
                        <th>Director</th>
                    </tr>
                </thead>
                <tbody>
                    {peliculas.map((p) => {
                        return(
                            <tr key={p.id}>
                                <td>{p.titulo}</td>
                                <td>{p.genero}</td>
                                <td>{p.views}</td>
                                <td>{p.director}</td>
                            </tr>
                        )
                    })}
                </tbody>
            </table>
        </div>
    )
}