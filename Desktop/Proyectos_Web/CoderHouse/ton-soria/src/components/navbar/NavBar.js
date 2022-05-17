import CartWidget from "../../components/cartwidget/CartWidget"

export default function NavBar() {
    
    return (
        <>
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
            
            <div className="container-fluid">
                <a className="navbar-brand" href="#">Ton Soria</a>
            
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
            
                <div className="collapse navbar-collapse" id="navbarNav">
            
                    <ul className="navbar-nav">
                        <li className="nav-item">
                        <a className="nav-link active" aria-current="page" href="#">Inicio</a>
                        </li>
            
                        <li className="nav-item">
                        <a className="nav-link" href="#">Música y Videos</a>
                        </li>
            
                        <li className="nav-item">
                        <a className="nav-link" href="#">Queres ser parte del proyecto?</a>
                        </li>
                    </ul>
                </div>
            </div>
            <CartWidget/>
        </nav>
        
        </>
    )
}