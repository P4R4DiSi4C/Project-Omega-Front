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
import CheckBox from '../../Form/checkbox';
import Form from '../../Form';

export default (props) => {   
    const [userState, setUserState] = useState({
        username: '',
        email: '',
        password: '',
        agree: false
      });

    const handleUserChange = (e) => setUserState({
        ...userState,
        [e.target.name]: [e.target.value],
    });

    const handleCheckboxChange = (e) => {
        setUserState({
            ...userState,
            [e.target.name]: e.target.checked
        });
    };

    const path = usePath();

    return(
        <>
            <ModalHeader title="Crée un compte !" sub_title="Tu pourras vendre tes habits, tes chaussures et toutes les choses que tu n'utilises plus. Fais un geste pour l'environnement et pour ton porte-monnaie."/>
            <ModalBody>
                <Form>
                    <Input 
                        type="text" 
                        name="username" 
                        id="username" 
                        placeholder="Nom d'utilisateur"
                        value={userState.username}
                        onChange={handleUserChange}
                    /> 
                    <Input 
                        type="text" 
                        name="email" 
                        id="email" 
                        placeholder="E-mail"
                        value={userState.email}
                        onChange={handleUserChange}
                    /> 
                    <Input 
                        type="password" 
                        name="password" 
                        id="password" 
                        placeholder="Mot de passe"
                        value={userState.password}
                        onChange={handleUserChange}
                    />
                    <CheckBox
                        name="agree" 
                        id="agree" 
                        checked={userState.agree}
                        onChange={handleCheckboxChange}
                        text="J'accepte la politique de confidentialité et le réglement du site."
                    />
                    <RegisterBtn solid>
                        S'inscrire
                    </RegisterBtn>
                </Form>
                <Link onClick={() => navigate(path, {m:1,c:0})}>
                    J'ai déjà un compte !
                </Link>
            </ModalBody>
        </>
    );
};

const RegisterBtn = Styled(Button)`
    width: 50%;
    line-height: 2.5rem;
    font-size: 1.5rem;
`;