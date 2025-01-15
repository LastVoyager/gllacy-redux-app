import { Fragment } from 'react';
import { useSelector } from 'react-redux';
import  Transition  from 'react-transition-group/Transition';
//import ReactDOM  from 'react-dom';
import classes from './Modal.module.css';

const Backdrop = (props) => {
    const modalShown = useSelector(state => state.ui.modalShown)
    return (
        <Transition in={modalShown} timeout={400}>
            {state => (
                <div className={state === 'exited' ? `${classes.backdropOff}`: `${classes.backdropOn}`}></div>
            )}
        </Transition>
    );
};

const ModalOverlay = (props) => {
    const modalShown = useSelector(state => state.ui.modalShown)
    console.log(modalShown);

    return (
        <Transition in={modalShown} timeout={400}>

            { state => (
                <div className={state === 'exited' ? `${classes.modal}` : `${classes.modal} ${classes.modalOpen}`}>
                    <p className={`${classes.test}`}>{state}</p>
                    <div className={classes.content}>{props.children}</div>
                </div>
            )}
        </Transition>
    );
};


const Modal = (props) => {
    const modalShown = useSelector(state => state.ui.modalShown)

    //react-trans.-group based animation
    return (
        <Fragment>
            <Backdrop/>
            <ModalOverlay>{props.children}</ModalOverlay>
        </Fragment>
    );
    
};

//const modalPortal = document.getElementById('modal');
/* const Modal = (props) => {
    return (
        <Fragment>
            {ReactDOM.createPortal(<Backdrop onClose={props.onClose}/>, modalPortal)}
            {ReactDOM.createPortal(<ModalOverlay>{props.children}</ModalOverlay>, modalPortal)}
        </Fragment>
    );
    
    //css-based animation
    return (
        <div className={modalShown ? `${classes.backdropOn}`: `${classes.backdropOff}`}></div>
    );
    return (
        <div className={`${classes.modal} ${modalShown ? classes.modalOpen : ''}`}>
            <div className={classes.content}>{props.children}</div>
        </div>
    );
};  */

export default Modal;