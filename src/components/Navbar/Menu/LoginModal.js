import React, {useState} from 'react';

// libs
import Styled from 'styled-components';

// components
import Modal from '../../Modal';
import ModalHeader from '../../Modal/header';
import ModalBody from '../../Modal/body';

export default (props) => {

    const [userState, setUserState] = useState({
        email: '',
        password: ''
      });

    const handleUserChange = (e) => setUserState({
    ...userState,
    [e.target.name]: [e.target.value],
    });

    return(
        <Modal is_open={props.is_open} toggle_modal={props.toggle_modal}>
            <ModalHeader title="Connectes-toi sur Zodak !" sub_title="Notre plateforme te permets de vendre tes affaires rapidement et sans frais."/>
            <ModalBody>
                <form>       
                    <Input 
                        type="text" 
                        name="email" 
                        id="email" 
                        placeholder="E-mail"
                        value={userState.email}
                        onChange={handleUserChange}
                    /> 
                    <Input 
                        type="text" 
                        name="password" 
                        id="password" 
                        placeholder="Mot de passe"
                        value={userState.password}
                        onChange={handleUserChange}
                    />
                </form>    
            </ModalBody>
        </Modal>
    );
}

const Input = Styled.input`
    width:100%;
    border-radius: 2rem;
    line-height: 2.5rem;
    margin-bottom: 1rem;
    outline:none;
    text-indent: 2rem;
`;