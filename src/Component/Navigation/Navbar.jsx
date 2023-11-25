import React from "react";
import "./navbar.scss";
import { Logo } from "../../assets";
import { MDBNavbar, MDBContainer, MDBNavbarBrand } from "mdb-react-ui-kit";

const Navbar = () => {
  return (
    <React.Fragment>
      <div className="row">
        <div className="col-sm-12 col-md-12 col-lg-1"></div>
        <div className="col-sm-12 col-md-12 col-lg-10">
          <MDBNavbar className="navbar navbar-expand-lg navbar-light">
            <MDBContainer>
              <MDBNavbarBrand className="navbar-brand" href="#">
                <img src={Logo} alt="" />
              </MDBNavbarBrand>
              <button
                className="navbar-toggler"
                type="button"
                data-toggle="collapse"
                data-target="#navbarSupportedContent"
                aria-controls="navbarSupportedContent"
                aria-expanded="false"
                aria-label="Toggle navigation"
              >
                <span className="navbar-toggler-icon"></span>
              </button>

              <div
                className="abs collapse navbar-collapse"
                id="navbarSupportedContent"
              >
                <ul className="navbar-nav ml-auto">
                  <li className="nav-item active">
                    <a className="nav-link" href="#">
                      Home <span className="sr-only">(current)</span>
                    </a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" href="#">
                      Find a doctor <span className="sr-only">(current)</span>
                    </a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" href="#">
                      Apps <span className="sr-only">(current)</span>
                    </a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" href="#">
                      Testimonials <span className="sr-only">(current)</span>
                    </a>
                  </li>
                </ul>
              </div>
            </MDBContainer>
          </MDBNavbar>
        </div>
        <div className="col-sm-12 col-md-12 col-lg-1"></div>
      </div>
      {/* <h1>Hello World</h1>
      <button className = 'btn btn-success' onClick={ showName }>Click Me</button> */}
    </React.Fragment>
  );
};

export default Navbar;
