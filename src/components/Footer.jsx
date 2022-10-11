import React from "react";
import './Footer.css';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap-icons/font/bootstrap-icons.css';

export default props =>
    <footer className="d-flex flex-column mt-5">
        <ul className="d-flex flex-row justify-content-center mt-3">
            <li><i className="bi bi-github"></i></li>
            <li><i className="bi bi-instagram ms-4 me-4"></i></li>
            <li><i className="bi bi-facebook"></i></li>
        </ul>
        <p> Developed by Maria Eduarda Leitão da Cruz </p>
    </footer>