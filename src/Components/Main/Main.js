import { useDispatch } from 'react-redux';
import { uiActions } from '../../Store/ui-slice';

import AllGoods from '.././Goods/AllGoods';
import Map from './Map';

import IceCream1 from '.././img/IceCream1.png';
import IceCream2 from '.././img/IceCream2.png';
import IceCream3 from '.././img/IceCream3.png';

import './Main.css';


function Main (props)  {
    const dispatch = useDispatch();

    const openSubscribeHandler = () => {
        dispatch(uiActions.toggle());
    };

    return (
        <div className="main">
            <div className="main-container">
                <section className="main-proposition">
                    <div className="radio-btn">
                        <input type="radio" className="slider-point-1" name="slider" defaultChecked></input>
                        <span></span>
                        <input type="radio" className="slider-point-2" name="slider"></input>
                        <span></span>
                        <input type="radio" className="slider-point-3" name="slider"></input>
                        <span></span>
                        <img className="ice-cream-1" src={IceCream1}  width="1045" height="881" alt="логотип Gllacy"></img>
                        <img className="ice-cream-2" src={IceCream2}  width="1045" height="881" alt="логотип Gllacy"></img>
                        <img className="ice-cream-3" src={IceCream3}  width="1045" height="881" alt="логотип Gllacy"></img>
                    </div>
                    <h1>Крем-брюле и пломбир<br/>с малиновым джемом</h1>
                    <form><button className="button">Давайте оба!</button></form>
                </section>
                <section className="proposition">
                    <article className="left">
                        <h2>Малинка даром!</h2>
                        <p>При покупке 2кг любого фруктового мороженного, добавим в ваш заказ банку малинового варенья бесплатно.</p>
                        <a className="button" href="index.html">Хочу варенье!</a>
                    </article>
                    <article className="right">
                        <h2>Шоколадки даром!</h2>
                        <p>При покупке 2кг пломбира, добавим в ваш заказ упаковку вкуснейшей шоколадной присыпки совершенно бесплатно.</p>
                        <a className="button" href="index.html">Хочу шоколадки!</a>
                    </article>
                </section>
                <AllGoods></AllGoods>
                <section className="our-features">
                    <div>
                        <h3>Магазин Глейси - это онлайн и офлайн магазин по продаже мороженого собственного производства на развес.</h3>
                        <ul className="list-features">
                            <li className="features-1">Все наше мороженое изготавлияется на собственном{/* <br/> */}
                            производстве, с использованием современного оборудования{/* <br/> */}
                            и проверенных временем технологий.</li>
                            <li className="features-2">Все наше мороженое изготавлияется на собственном{/* <br/> */}
                            производстве, с использованием современного оборудования{/* <br/> */}
                            и проверенных временем технологий.</li>
                            <li className="features-3">Все наше мороженое изготавлияется на собственном{/* <br/> */}
                            производстве, с использованием современного оборудования{/* <br/> */}
                            и проверенных временем технологий.</li>
                            <li className="features-4">Все наше мороженое изготавлияется на собственном{/* <br/> */}
                            производстве, с использованием современного оборудования{/* <br/> */}
                            и проверенных временем технологий.</li>
                        </ul>
                    </div>
                </section>
                <section className="another">
                    <div className="news">
                        <p>Новое в нашем блоге</p>
                        <a href="index.html"><span>10 способов сервировки<br/>фруктовых щербетов к<br/>столу</span></a>
                    </div>
                    <div className="subscribe">
                        <div className="subscribe-container">
                            <p>Подпишитесь на нашу сладкую рассылку и будете всегда в курсе
                                всего самого вкусного, что у нас происходит.
                                Обещаем не спамить и не слать всякой ненужной ерунды. Честно :)</p>
                            <form>
                                <input type="email" placeholder="Електронная почта"></input>
                                <button className="button" type="submit">Отправить</button>
                            </form>
                        </div>
                    </div>
                </section>
                <Map  onOpen={openSubscribeHandler}></Map>
            </div>
        </div>
    );
}

export default Main;