import experiencia from "../Pages/Images/experiencia.png";

function Experiencia() {
    return (
        <div className="container-fluid">
            <div className="row">
                <div className="col-12 mt-3">
                    <div className="card mb-3 color-perfil"  >
                        <div className="row g-3">
                            <div className="col-md-5 text-center">
                                <img className='experiencia my-5 mx-5' src={experiencia} />
                            </div>
                            <div className="col-md-7 text-center-vertical">
                                <div className="card-body">
                                    <h5 className="card-title experiences">Experiences</h5>
                                    <p className="card-text"> 
                                        <br/> <li>Conexcol Cloud Colombia Ejecutiva Comercial - Actualmente</li>
                                        <br/> <li>Developer Desing -  Independiete - Actualmente</li>
                                        <br/><li>Hostdime.com.co SAS - Ejecutiva Comercial - 2017</li></p>
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

export default Experiencia