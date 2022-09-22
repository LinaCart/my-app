import portafolio from "../Pages/Images/Portafolio.png"

function Portafolio() {
    return (
        <div className="container-fluid">
            <div className="row">
                <div className="col-12 mt-3">
                    <div className="card mb-3 color-perfil"  >
                        <div className="row g-3">
                            <div className="col-md-5 text-center">
                                <img className='portafolio my-5 mx-5' src={portafolio} />
                            </div>
                            <div className="col-md-7 text-center-vertical">
                                <div className="card-body">
                                    <h5 className="card-title">Portafolio</h5>
                                    <p className="card-text square">
                                        <li>
                                            <a target="_blank" href="https://github.com/LinaCart/M3U2TrelloAppLinaCartagena">M3U2TrelloAppLinaCartagena</a>
                                        </li>
                                        <li>
                                            <a target="_blank" href="https://github.com/LinaCart/M2U2LinaCartagena">M2U2LinaCartagena</a>
                                        </li>
                                        <li>
                                            <a target="_blank" href="https://github.com/LinaCart/Ejercicio1">Ejercicio1</a>
                                        </li>
                                        <li>
                                            <a target="_blank" href="https://github.com/LinaCart/Lista_Estudiantes">Lista_Estudiantes</a>
                                        </li>
                                        <li>
                                            <a target="_blank" href="https://github.com/LinaCart/ListaMercado">ListaMercado</a>
                                        </li>
                                        <li>
                                            <a target="_blank" href="https://github.com/LinaCart/To-Do-List">To-Do-List</a>
                                        </li>
                                    </p>
                                    <p className="card-text"><small className="text-muted"></small></p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Portafolio