import { useDispatch } from 'react-redux';
import { uiActions } from '../../Store/ui-slice';

import Modal from '../UI/Modal';
import classes from './Subscribe.module.css';

const Subscribe = (props) => {
    const dispatch = useDispatch();

    const closeSubscribeHandler = () => {
        dispatch(uiActions.toggle());
    };

    return (
        <Modal>
            <div className={classes['subscribe-content']}>
                <button className={classes['close-button']} onClick={closeSubscribeHandler}></button>
                <form>
                    <section className="name">
                        <label htmlFor="name-user"></label>
                        <input className={classes["name-user"]} id="name-user" type="text" name="name" placeholder="Your name"></input> {/* added closing tag */}
                    </section>
                    <section className="address">
                        <label htmlFor="address-user"></label>
                        <input className={classes["address-user"]} id="address-user" type="text" name="address" placeholder="Your address"></input> {/* added closing tag */}
                    </section>
                    <section className="massage">
                        <label htmlFor="massage-login"></label>
                        <input className={classes["massage-user"]} id="massage-login" type="text" name="massage" placeholder="Your massage"></input> {/* added closing tag */}
                    </section>
                </form>
            </div>
            <div className={classes.subscribe}>
                <button className={classes.button}>Send</button>
            </div>
        </Modal>
    );
};

export default Subscribe;