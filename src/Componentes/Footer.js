import houseContacto from "../Pages/Images/houseContacto.png"
import mobileContacto from "../Pages/Images/mobileContacto.png"
import gmailContacto from "../Pages/Images/gmailContacto.png"
import githubContacto from "../Pages/Images/githubContacto.png"
import linkedinContacto from "../Pages/Images/linkedinContacto.png"

function Footer() {
  return (
    <>
      <div className="container-fluid footer px-5 ">
        <div className="row">
          <div className="col-12 text-center my-3">
            <h2>CONTACTO</h2>
          </div>
        </div>
        <div className="row">
          <div className="col-6 text-right">
            <div>
              Mz 1 Casa 11 Conjunto Chicala (Ibagué) <img src={houseContacto} className='footer-image mb-4 ms-3' />
            </div>
            <div>
              +57 - 3118683867 <img src={mobileContacto} className='footer-image mb-4 ms-3' />
            </div>
            <div>
              lcartagenac22@gmail.com <img src={gmailContacto} className='footer-image mb-4 ms-3' />
            </div>
          </div>
          <div className="col-6">
            <div>
              <img src={githubContacto} className='footer-image mb-4 me-3' /> https://github.com/LinaCart
            </div>
            <div>
              <img src={linkedinContacto} className='footer-image mb-4 me-3' /> https://www.linkedin.com/in/lina-tatiana-cartagena-castellar-54637084/
            </div>
          </div>
        </div>
      </div>
      <div className="container-fluid footer px-5 ">
        <div className="row" >
          <div className="col-12 text-center my-3">
            <b> Lina Tatiana Cartagena Castellar</b> <br />
            
          </div>
        </div>
      </div>
    </>
  )
}

export default Footer