import { Fragment } from 'react';
import { useSelector } from 'react-redux';
import  Transition  from 'react-transition-group/Transition';
//import ReactDOM  from 'react-dom';
import classes from './Modal.module.css';

const Backdrop = (props) => {
    const modalShown = useSelector(state => state.ui.modalShown)
    return (
        <div className={modalShown ? `${classes.backdropOn}`: `${classes.backdropOff}`}></div>
    );
};

const ModalOverlay = (props) => {
    const modalShown = useSelector(state => state.ui.modalShown)
    console.log(modalShown);

    return (
        <div className={`${classes.modal} ${modalShown ? classes.modalOpen : ''}`}>
            <div className={classes.content}>{props.children}</div>
        </div>
    );
};

//const modalPortal = document.getElementById('modal');

const Modal = (props) => {
    const modalShown = useSelector(state => state.ui.modalShown)

    return (
        <>
            <Backdrop/>
            <ModalOverlay>{props.children}</ModalOverlay>
        </>
    );
    
};

/* const Modal = (props) => {
    return (
        <Fragment>
            {ReactDOM.createPortal(<Backdrop onClose={props.onClose}/>, modalPortal)}
            {ReactDOM.createPortal(<ModalOverlay>{props.children}</ModalOverlay>, modalPortal)}
        </Fragment>
    );
    
}; */

export default Modal;