import 'bootstrap/dist/css/bootstrap.min.css';

function NavBar() {
  return (
    
    <div >
      
      <header>
        <div className="row navbar navbar-dark bg-dark d-flex align-items-center" style={{ backgroundColor: "#0F1111" }}>
          <div className="col-lg-2 d-flex align-items-center justify-content-around">
            <a className="navbar-brand ml-1"  >
              <img
                src="https://raw.githubusercontent.com/DreyHub/deploy-simple-server/master/amazonlogo.png"
                alt="amazon logo"
                style={{ width: "99px", height: "30px", position: "relative" }}
              />
            </a>
            <div className="d-flex align-items-center justify-content-between">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                fill="currentColor"
                className="bi bi-geo-alt-fill"
                viewBox="0 0 16 16"
                style={{ color: "white" }}>
                <path
                  d="M8 16s6-5.686 6-10A6 6 0 0 0 2 6c0 4.314 6 10 6 10zm0-7a3 3 0 1 1 0-6 3 3 0 0 1 0 6z"
                />
              </svg>
              <p style={{ lineheight: "13px", top: "5px", position: "relative" }}>
                <span className="ligth" style={{ fontsize: "12px", color: "White" }} > Enviar a </span>
                <br />
                <span className="strong" style={{ color: "White", textdecoration: "none" }}>Costa Rica</span>
              </p>
            </div>
          </div>

          <div className="col-lg-7" style={{ display: "inline-flex" }}>
            <div className="d-flex" style={{ width: "100%" }}>
              <div className="input-group mb-3">
                <button className="btn btn-secondary dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">All</button>
                <ul className="dropdown-menu">
                </ul>
                <input type="text" className="form-control" aria-label="Text input with dropdown button" />
              <button className="btn btn-warning" type="button" id="inputGroupFileAddon04">
              <img src="https://img.icons8.com/material-sharp/24/000000/search.png"/> </button>
              </div>
            </div>
          </div>


          <div className="col-lg-3 align-items-center" style={{ display: "inline-flex" }}>
            <a
              className="nav-link dropdown-toggle align-items-end"
              id="navbarDropdown"
              role="button"
              data-bs-toggle="dropdown"
              aria-expanded="false"
              style={{ fontsize: "25px", color:"white"}}
            >
              <img src="https://img.icons8.com/color/48/000000/costa-rica.png" style={{width:'30px'}}/></a
            >

            <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
            </ul>

            <a
              className="nav-link dropdown-toggle"
              id="navbarDropdown"
              role="button"
              data-bs-toggle="dropdown"
              aria-expanded="false"
            >
              <p
                style={{
                  lineheight: "13px",
                  top: "5px",
                  position: "relative",
                  display: "inline-block"
                }}>
                <span className="ligth" style={{ fontsize: "12px", color:"white" }}>Hola, Identificate</span>
                <br />
                <span className="strong" style={{color:"white"}}>Cuenta y Listas </span>
              </p>
            </a>
            <div>
              <p style={{ lineheight: "13px; top: 5px; position: relative" }}>
                <span className="ligth" style={{ fontsize: "12px", color:"white" }}>Devoluciones</span> <br />
                <span className="strong" style={{color:"white"}}>y Pedidos</span>
              </p>
            </div>
            <a>
              <div style={{ display: "inline-block", color:'white'}}>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="40"
                  height="40"
                  fill="currentColor"
                  className="bi bi-cart2"
                  viewBox="0 0 16 16"
                >
                  <path
                    d="M0 2.5A.5.5 0 0 1 .5 2H2a.5.5 0 0 1 .485.379L2.89 4H14.5a.5.5 0 0 1 .485.621l-1.5 6A.5.5 0 0 1 13 11H4a.5.5 0 0 1-.485-.379L1.61 3H.5a.5.5 0 0 1-.5-.5zM3.14 5l1.25 5h8.22l1.25-5h4.14zM5 13a1 1 0 1 0 0 2 1 1 0 0 0 0-2zm-2 1a2 2 0 1 1 4 0 2 2 0 0 1-4 0zm9-1a1 1 0 1 0 0 2 1 1 0 0 0 0-2zm-2 1a2 2 0 1 1 4 0 2 2 0 0 1-4 0z"
                  />
                </svg>
              </div>
              
              <div style={{ display: "inline-block", color:'white'}}>
                <p>Carrito</p>
              </div>
            </a>
          </div>
        </div>

        <div style={{color:'white'}}>
          <nav
            class="navbar navbar-expand-lg"
            style={{ backgroundColor: "#232f3e", width: "100%", color: "white" }}>
            <div class="container-fluid">
              <a class="navbar-brand"  style={{color:'white'}}>Todo</a>
              <button
                class="navbar-toggler"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#navbarNav"
                aria-controls="navbarNav"
                aria-expanded="false"
                aria-label="Toggle navigation"
              >
                <span class="navbar-toggler-icon"></span>
              </button>
              <div class="collapse navbar-collapse" id="navbarNav">
                <ul class="navbar-nav">
                  <li class="nav-item">
                    <a class="nav-link active" aria-current="page"  style={{color:'white'}}
                    >Ofertas del dia</a
                    >
                  </li>
                  <li class="nav-item">
                    <a class="nav-link"   style={{color:'white'}}>Servicio al cliente</a>
                  </li>
                  <li class="nav-item">
                    <a class="nav-link"  style={{color:'white'}}>Tarjetas de Regalo</a>
                  </li>
                  <li class="nav-item">
                    <a class="nav-link"   style={{color:'white'}}>Listas</a>
                  </li>
                  <li class="nav-item">
                    <a class="nav-link"   style={{color:'white'}}>Vender</a>
                  </li>
                </ul>
              </div>
            </div>
          </nav>
        </div>
      </header>
      
    </div>
    
  );
}

export default NavBar;
