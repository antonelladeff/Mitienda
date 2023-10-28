import React from 'react';
import { Link } from 'react-router-dom';
import './notFound.css';

const NotFound = () => {
    return (
        <div className="not-found-container">
            <h1 className="not-found-title">Error 404 - La página que buscas no existe</h1>
            <Link to="/" className="not-found-link">Regresar a la Home</Link>
        </div>
    );
};

export default NotFound;



