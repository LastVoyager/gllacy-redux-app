import React, {useState, useContext, useEffect} from 'react';
import { NavLink } from "react-router-dom";
import logo from '.././img/svg/logo.svg';
import CartList from './Cart/CartList';
import BurgerButton from './Buttons/BurgerButton';

//import { CartContext } from '../../Store/CartProvider';
import { useSelector } from 'react-redux';

import './Header.css';
import './Header_drop-down_comp.css';

function Header (props) {
    const [click, setClick] = useState(false);
    const [windowSize, setWindowSize] = useState(window.innerWidth);
    //const value = useContext(CartContext);

    const clickHandler = () => {
        setClick((click) => !click);
    };

    useEffect(() => {
        const handleWindowResize = () => {
          setWindowSize(window.innerWidth);
        };
        window.addEventListener('resize', handleWindowResize);
        return () => {
          window.removeEventListener('resize', handleWindowResize);
        };

    }, []);

    let classToggle =  (click) ? "options-shown" : "options";
    if (windowSize >= 900) {
        classToggle = "options";
    }
           
    const totalGoodsAtCart = useSelector(state => state.cart.totalQuantity)

    return (
        <div className="header" id="header">
            <div className="header-container">
                <nav className="main-navigation">
                    <NavLink className="main-logo" to="/main">
                       <img src={logo} alt={'logo'}></img> {/* added closing tag */}
                    </NavLink>
                    <BurgerButton onClick={clickHandler} clicked={click}/>
                    <div className={classToggle}>
                        <ul className="left-option">
                            <li className="dropdown" name={'first'}>            {/* name value was changed */}
                                <NavLink to="/catalog" className="dropbtn">Catalog</NavLink>
                                <div className="dropdown-content">
                                    <p>Новинки</p>
                                    <a href='/main'>Сливочное</a>
                                    <a href='/main'>Щербетьі</a>
                                    <a href='/main'>Фруктовьій лед</a>
                                    <a href='/main'>Мелорин</a>
                                </div>
                            </li>
                            <li className="dropdown">
                                <a href='/main' className="dropbtn">Доставка и оплата</a>
                                <div className="dropdown-content">
                                    <p>Новинки</p>
                                    <a href='/main'>Сливочное</a>
                                    <a href='/main'>Щербетьі</a>
                                    <a href='/main'>Фруктовьій лед</a>
                                    <a href='/main'>Мелорин</a>
                                </div>
                            </li>
                            <li className="dropdown">
                                <a href='/main' className="dropbtn">O Компании</a>
                                <div className="dropdown-content">
                                    <p>Новинки</p>
                                    <a href='/main'>Сливочное</a>
                                    <a href='/main'>Щербетьі</a>
                                    <a href='/main'>Фруктовьій лед</a>
                                    <a href='/main'>Мелорин</a>
                                </div>
                            </li>
                        </ul>
                        <ul className="right-option">
                            <li className="search">
                                <button className="search-button" id="search-button" type="submit"></button>
                                <div className="search-content">
                                    <div>
                                        <input  type="search" id="search" placeholder="Что ищем?"></input>  {/* added closing tag */}
                                    </div>
                                </div>
                            </li>
                            <li className="enter">
                                <a className="enter-button" href='/main'>Вход</a>
                                <div className="enter-content">
                                    <form>
                                        <section className="e-mail">
                                            <label className="visually-hidden" htmlFor="user-e-mail"></label>
                                            <p><input className="e-mail-user" id="user-e-mail" type="text" name="e-mail" placeholder="Електронная почта"></input></p> {/* added closing tag */}
                                        </section>
                                        <section className="password">
                                            <label className="visually-hidden" htmlFor="password-login"></label>
                                            <p><input className="password-user" id="password-login" type="text" name="password" placeholder="Пароль"></input></p> {/* added closing tag */}
                                        </section>
                                    </form>
                                    <div>
                                        <form><button className="button" type="submit">Вход</button></form>
                                        <article>
                                            <a href='/main'>Забьіли пароль?</a>
                                            <a href='/main'>Новая регистрация</a>
                                        </article>
                                    </div>
                                </div>
                            </li>
                            <li className="cart">
                                <a className={(totalGoodsAtCart > 0) ? "cart-button-red" : "cart-button"} href="#">{totalGoodsAtCart}</a>
                                {/* <a className={"cart-button"} href='/main'>{0}</a> */}
                                <CartList/>
                            </li>
                        </ul>
                    </div>
                </nav>
                <div className="phone">
                    <p>с 10 до 20 ежедневно</p>
                    <a className="phone-number" href="tel:+38050-555-50-50">050-555-50-50</a>
                </div>
            </div> 
        </div>
    ); 
}

export default Header;