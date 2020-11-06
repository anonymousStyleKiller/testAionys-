import React, { useContext } from 'react';
import {CSSTransition} from "react-transition-group";
import { AlertContext } from "../utils/alert/AlertContext";

function Alert() {
    const {alert, hide} = useContext(AlertContext);
    return (
        <CSSTransition in={alert.visible} timeout={{enter: 500, exit: 300 }}
                       classNames = {'alert'} mountOnEnter unmountOnExit >
            <div className={`alert alert-${alert.type || 'warning'} alert-dismissible`} >
                {alert.text}
                <button onClick={hide} type="button" className="close"  aria-label="Close">
                    <span aria-hidden="true">&times;</span>
                </button>
            </div>
        </CSSTransition>

    );
}

export default Alert;