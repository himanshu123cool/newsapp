import React from "react";

const Navbar = ({ setCategory, category }) => {
  return (
    <>
      <div className="container-fluid shadow-sm">
        <div className="container">
          <div className="row">
            <div className="col-12">
              <nav className="navbar navbar-expand-lg navbar-light">
                <div className="container-fluid d-flex justify-content-end">
                  <button
                    className="navbar-toggler"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#navbarSupportedContent"
                    aria-controls="navbarSupportedContent"
                    aria-expanded="false"
                    aria-label="Toggle navigation"
                  >
                    <span className="navbar-toggler-icon"></span>
                  </button>
                  <div
                    className="collapse navbar-collapse"
                    id="navbarSupportedContent"
                  >
                    <ul className="navbar-nav mx-auto mb-2 mb-lg-0">
                      <li className="nav-item">
                        <div
                          className={`nav-link fw-bold ${
                            category === "general" ? "active" : ""
                          }`}
                          onClick={() => setCategory("general")}
                        >
                          General
                        </div>
                      </li>
                      <li className="nav-item">
                        <div
                          className={`nav-link fw-bold ${
                            category === "technology" ? "active" : ""
                          }`}
                          onClick={() => setCategory("technology")}
                        >
                          Technology
                        </div>
                      </li>
                      <li className="nav-item">
                        <div
                          className={`nav-link fw-bold ${
                            category === "business" ? "active" : ""
                          }`}
                          onClick={() => setCategory("business")}
                        >
                          Business
                        </div>
                      </li>
                      <li className="nav-item">
                        <div
                          className={`nav-link fw-bold ${
                            category === "health" ? "active" : ""
                          }`}
                          onClick={() => setCategory("health")}
                        >
                          Health
                        </div>
                      </li>
                      <li className="nav-item">
                        <div
                          className={`nav-link fw-bold ${
                            category === "sports" ? "active" : ""
                          }`}
                          onClick={() => setCategory("sports")}
                        >
                          Sports
                        </div>
                      </li>
                      <li className="nav-item">
                        <div
                          className={`nav-link fw-bold ${
                            category === "entertainment" ? "active" : ""
                          }`}
                          onClick={() => setCategory("entertainment")}
                        >
                          Entertainment
                        </div>
                      </li>
                    </ul>
                  </div>
                </div>
              </nav>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
