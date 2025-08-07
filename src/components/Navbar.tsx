import React, { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { fetchCategories, urlFor } from "../lib/sanity";
import type { Category } from "../models/Category";

const Navbar: React.FC = () => {
  const [categories, setCategories] = useState<Category[]>([]);
  const location = useLocation();
  const [isOpen, setIsOpen] = useState(false);

  const toggleCollapse = () => setIsOpen(!isOpen);

  useEffect(() => {
    fetchCategories().then(setCategories).catch(console.error);
  }, []);

  return (
    <>
      <nav className="navbar navbar-expand-md sticky-top p-0" style={{ backgroundColor: "#d6d2c4" }}>
        <div className="container-fluid d-block">
          <div className="row d-flex">
            <span className="col-2 col-md-1 d-flex">
              <i className="bi bi-list d-md-none fs-1 my-auto" role="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasExample" aria-controls="offcanvasExample"></i>
            </span>
            <Link className="navbar-brand m-0 col-8 col-md-10 text-center fw-bold" style={{ fontSize: "40px" }} to="/">FORMALE</Link>
            <span className="col-2 col-md-1 d-flex justify-content-between">
              <i className="bi bi-cart fs-5 my-auto position-relative">
                <div className="rounded-circle bg-dark d-flex position-absolute top-0 start-50" style={{ width: "16px", height: "16px", fontSize: "11px" }}>
                  <span className="mx-auto text-light">0</span>
                </div>
              </i>
              <i className="bi bi-search fs-5 my-auto"></i>
            </span>
          </div>

          <div className="row collapse navbar-collapse py-2" id="navbarNav">
            <ul className="navbar-nav justify-content-center fw-semibold text-dark" role="button">
              <li className="nav-item"><Link className="text-decoration-none text-dark" to={'/collections/all'}><span>SHOP ALL</span></Link></li>
              <li className="nav-item custom-dropdown px-5" style={{ position: "relative" }}><span>CATEGORIES</span>
                <i className="bi bi-chevron-down ms-2"></i>
                <ul className="dropdown-menu custom-dropdown-menu " >
                  {categories.length === 0 && (
                    <li><span className="dropdown-item">Loading...</span></li>
                  )}
                  {categories.map(cat => (
                    <li key={cat._id}>
                      <Link className="dropdown-item d-flex align-items-center text-light-emphasis"
                        to={`/collections/${cat.slug}`}>
                        <p className="m-0">{cat.name}</p>
                      </Link>
                    </li>
                  ))}
                </ul>
              </li>
              <li className="nav-item"><Link className="text-decoration-none text-dark" to={'/contact'}><span>CONTACT</span></Link></li>
            </ul>
          </div>
        </div>
      </nav>



      <div className="offcanvas offcanvas-start bg-light-subtle px-4" id="offcanvasExample" aria-labelledby="offcanvasExampleLabel">
        <div className="offcanvas-header">
          <Link className="offcanvas-title text-decoration-none text-dark fw-bold d-inline-flex" style={{ fontSize: "40px" }} to="/">FORMALE<span className="fs-5">&reg;</span></Link>
          <button type="button" className="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
        </div>
        <div className="offcanvas-body">
          <h4><Link className="text-decoration-none text-dark" to={'/collections/all'}>Shop All</Link></h4>
          <hr className="my-4" />
          <div
            className="w-100">
            <h4
              role="button" onClick={toggleCollapse}
              data-bs-toggle="collapse" data-bs-target="#sidebarCollapse" aria-expanded="false" aria-controls="sidebarCollapse">
              Categories
              <i className={`bi ${isOpen ? 'bi-dash' : 'bi-plus'} float-end`} role="button" aria-expanded={isOpen}></i>
            </h4>
            <ul className="collapse sidebar-list" id="sidebarCollapse">
              {categories.length === 0 && (
                <li><span className="sidebar-item">Loading...</span></li>
              )}
              {categories.map(cat => (
                <li key={cat._id}>
                  <Link className="sidebar-item" to={`/collections/${cat.slug}`}>
                    <h5>{cat.name}</h5>
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <hr className="my-4" />
          <h4><Link className="text-decoration-none text-dark" to={'/contact'}>Contact</Link></h4>
                    <hr className="my-4" />
          <h4><Link className="text-decoration-none text-dark" to={'/contact'}>Best Seller</Link></h4>
          <hr className="mt-4 mb-3" />
          <small><Link className="text-decoration-none text-muted d-inline-flex" to={'/contact'}>About Formale&reg;</Link></small>
          <hr className="my-3" />
          <small><Link className="text-decoration-none text-muted" to={'/contact'}>Rate Our Products</Link></small>
          <hr className="my-3" />
          <small><Link className="text-decoration-none text-muted" to={'/contact'}>Privacy Policy&copy;</Link></small>
          <div className="mt-4 pt-2">
            <i className="bi bi-instagram"></i>
            <i className="bi bi-tiktok mx-3"></i>
            <i className="bi bi-whatsapp"></i>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
