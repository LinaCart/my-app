import pictureAboutme from "../Pages/Images/pictureAboutme.png"

function PerfilPage() {
    return (
        <div className="container-fluid">
            <div className="row">
                <div className="col-12 mt-3">
                    <div className="card mb-3 color-perfil">
                        <div className="row g-3">
                            <div className="col-md-5 text-center">
                            <img className='pictureAboutme my-5 mx-5' src={pictureAboutme} />
                            </div>
                            <div className="col-md-7 text-center-vertical">
                                <div className="card-body">
                                    <h5 className="card-title">About Me</h5>
                                    <p className="card-text">Administradora de empresas por profesion, Developer por amor,
                                        tengo el conocimiento y la experiencia en varios lenguales de programacion.
                                        Los lenguajes de programacion manejamos son HTML, CSS, javaScript, React, Java.
                                        En estos momentos me encuentro en el proceso de mejoramiento del segundo idioma Ingles,
                                        cuento con un nivel A1, el proposito a corto plazo es tener un B1
                                        Llevo laboralmente en el mundo de la tecnologia 6 años, manejando el campo de servidores,
                                        cloud, hosting, certificados SSL, dominio, colocation, etc.
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

export default PerfilPage