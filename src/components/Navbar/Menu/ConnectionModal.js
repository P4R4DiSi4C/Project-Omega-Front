import React from 'react';

// components
import Modal from '../../Modal';

import LoginBody from './LoginBody';
import RegisterBody from './RegisterBody';

export default (props) => {
    function get_content(){
        switch(props.modal_type){
            case "0":
                return <LoginBody />;

            case "1":
                return <RegisterBody />;
            break;
    
            case "2":
    
            break;

            default:
            break;
        }
    };

    return(
        <Modal>
            {get_content()}
        </Modal>
    );
};