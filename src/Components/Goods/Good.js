import React from 'react';
import { Link } from 'react-router-dom';
import  './AllGoods.css';

const Good = (props) => {

    return (
        <li className="good">
            <div className="image good-1 hit">
                <img src={`${process.env.REACT_APP_SERVER_URL}/${props.info.image}`} alt={props.info.title}/>
                <p className="price">{props.info.price} &#36;/kg</p>
                <p className="description">{props.info.title}</p>
                <div className="buttonBox">
                    <button className="button" onClick={props.click}>Add to cart</button>
                    <Link className="button" to={`/main/${props.info.id}`}>Show more info</Link>
                </div>
            </div>
            {props.children}
        </li>
    );
};

export default Good;