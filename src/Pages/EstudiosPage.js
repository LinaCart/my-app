import estudio1 from './Images/estudio1.png';
import estudio2 from './Images/estudio2.png';
import estudio3 from './Images/estudio3.png';

function Estudios() {
    return (
        <div className="container">
            <div className="row">
                <div className="col-4">
                    <div className="row">
                        <div className="col-12 text-center mt-5">
                            <img className='estudio1' src={estudio1} />
                        </div>
                        <div className="col-12 text-center mt-3">
                            <p>Colegio Herman Gmeiner SOS <br /> Bachiller Academico <br /> 2007 </p>
                        </div>
                    </div>
                </div>
                <div className="col-4">
                    <div className="row">
                        <div className="col-12 text-center mt-5">
                            <img className='estudio2' src={estudio2} />
                        </div>
                        <div className="col-12 text-center mt-3">
                            <p>Fundacion Universitaria San Martin <br /> Admon. Empresas <br /> 2014 </p>
                        </div>
                    </div>
                </div>
                <div className="col-4">
                    <div className="row">
                        <div className="col-12 text-center mt-5">
                            <img className='estudio3' src={estudio3} />
                        </div>
                        <div className="col-12 text-center mt-3">
                            <p>Colegio Herman Gmeiner SOS <br /> Bachiller Academico <br /> 2007 </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>


    )
}

export default Estudios