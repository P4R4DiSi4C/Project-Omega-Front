import React, {useState} from 'react';

// libs
import Styled from 'styled-components';
import {usePath, navigate} from 'raviger';

// components
import Link from '../../Form/link';
import ModalHeader from '../../Modal/header';
import ModalBody from '../../Modal/body';
import Button from '../../Button';
import Input from '../../Form/input';
import Form from '../../Form';

export default (props) => {   
    const [userState, setUserState] = useState({
        email: ''
      });

    const handleUserChange = (e) => setUserState({
        ...userState,
        [e.target.name]: [e.target.value],
    });

    const path = usePath();

    return(
        <>
            <ModalHeader title="J'ai oublier mon mot de passe !" sub_title="Ne t'inquiètes pas, nous avons tous oublié notre mot de passe une fois..."/>
            <ModalBody>
                <Form>
                    <Input 
                        type="text" 
                        name="email" 
                        id="email" 
                        placeholder="E-mail"
                        value={userState.email}
                        onChange={handleUserChange}
                    /> 
                    <ResetBtn solid>
                        Réinitialiser mon mot de passe
                    </ResetBtn>
                </Form>
                <Link onClick={() => navigate(path, {m:1,c:0})}>
                    J'ai déjà un compte !
                </Link>
            </ModalBody>
        </>
    );
};

const ResetBtn = Styled(Button)`
    width: 100%;
    line-height: 2.5rem;
    font-size: 1.5rem;
`;