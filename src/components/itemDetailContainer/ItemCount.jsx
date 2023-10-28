import { Button } from "antd/es/radio";
import React, { useState } from "react";
import "./ItemCount.css";

const ItemCount = () => {
    const [counter, setCounter] = useState(1);

    function resta() {
        counter > 1 && setCounter(counter - 1);
    }

    function suma() {
        counter < 15 && setCounter(counter + 1);
    }

    return (
        <div className="container">
            <div className="d-flex justify-content-center align-items-center">
                <Button onClick={resta} className="btn">
                    -
                </Button>
                <p className="mx-2 numero">{counter}</p>
                <Button onClick={suma} className="btn">
                    +
                </Button>
            </div>
        </div>
    );
};

export default ItemCount;