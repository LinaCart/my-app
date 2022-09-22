import pictureHeader from "../Pages/Images/pictureHeader.png"

function NavBar(props) {
    return (
        <div>
            <header className="tittle text-center ">
                <div className="landigPage pt-3 pb-3">
                    <img className='pictureHeader mb-3' src={pictureHeader} />
                    <h2> 👩‍💻 Lina Tatiana Cartagena Castellar ❤️</h2>
                </div>

                <div>
                    <ul className="nav nav-pills nav-fill navbar mt-2">
                        <li className="nav-item">
                            <a className={`nav-link ${props.tab == 'aboutMe' ? "active" : ""}`} href="#" onClick={() => props.setTab('aboutMe')}>About Me</a>
                        </li>
                        <li className="nav-item">
                            <a className={`nav-link ${props.tab == 'study' ? "active" : ""}`} href="#" onClick={() => props.setTab('study')}>Study</a>
                        </li>
                        <li className="nav-item">
                            <a className={`nav-link ${props.tab == 'experiences' ? "active" : ""}`} href="#" onClick={() => props.setTab('experiences')}>Experiences</a>
                        </li>
                        <li className="nav-item">
                            <a className={`nav-link ${props.tab == 'projects' ? "active" : ""}`} href="#" onClick={() => props.setTab('projects')}>Projects</a>
                        </li>
                    </ul>
                </div>
            </header>
        </div>
    )
}

export default NavBar
