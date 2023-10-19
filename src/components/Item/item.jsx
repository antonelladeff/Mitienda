import React from 'react';

const Item = ({ producto }) => {
    return (
        <div className="col-md-4">
            <div className="card">
                <div className="card-body">
                    <h3 className="card-title">{producto.title}</h3>
                    <p className="card-text">Precio: ${producto.price}</p>
                    <button className="btn btn-primary">Ver producto</button>
                </div>
            </div>
        </div>
    );
};

export default Item;

