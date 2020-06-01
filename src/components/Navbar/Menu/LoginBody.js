import React, {useState} from 'react';

// libs
import Styled from 'styled-components';
import {usePath, navigate} from 'raviger';


// icons
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

// components
import Flex from '../../Flex';
import ModalHeader from '../../Modal/header';
import ModalBody from '../../Modal/body';
import Button from '../../Button';

export default (props) => {
    const [userState, setUserState] = useState({
        email: '',
        password: ''
      });

    const handleUserChange = (e) => setUserState({
    ...userState,
    [e.target.name]: [e.target.value],
    });
    
    const path = usePath();

    return(
        <>
            <ModalHeader title="Connectes-toi sur Zodak !" sub_title="Notre plateforme te permets de vendre tes affaires rapidement et sans frais."/>
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
                    <Input 
                        type="text" 
                        name="password" 
                        id="password" 
                        placeholder="Mot de passe"
                        value={userState.password}
                        onChange={handleUserChange}
                    />
                    <Flex 
                        w="100%"
                        j_content="space-between"
                        a_items="flex-start"
                    >
                        <ForgotPW onClick={() => navigate(path, {m:1,c:1})}>Mot de passe oublié</ForgotPW>
                        <SubmitBtn solid>
                            Se connecter
                        </SubmitBtn>
                    </Flex>
                </Form>
                <Label>Continuer avec:</Label>
                <FlexSocialBtn
                    w="100%"
                    j_content="space-between"
                >
                    <FacebookBtn solid>
                        <FontAwesomeIcon icon={['fab', 'facebook-f']} /> Facebook
                    </FacebookBtn>
                    <GoogleBtn>
                        <FontAwesomeIcon icon={['far', 'envelope']} color="#D44638" /> Gmail
                    </GoogleBtn>
                </FlexSocialBtn>
                <Label>Pas encore de compte ? Inscris-toi vite !</Label>   
                <RegisterBtn solid>
                        S'inscrire
                </RegisterBtn>
            </ModalBody>
        </>
    );
}

const FlexSocialBtn = Styled(Flex)`
    margin-bottom: 0.5rem;
`;

const Label = Styled.span`
    font-weight: 500;
    font-size: 1.3rem;
    margin-bottom: 0.5rem;
    text-align: center;
`;

const SocialBtn = Styled(Button)`
    font-size: 1.3rem;
    width:45%;
`;

const GoogleBtn = Styled(SocialBtn)`
    border-color: #D44638;
    color: #D44638;
`;

const FacebookBtn = Styled(SocialBtn)`
    border: none;
    background-color: #3b5998;
`;

const ForgotPW = Styled.span`
    text-decoration: none;
    cursor: pointer;
    color: ${props => props.theme.main};
`;

const Input = Styled.input`
    width:100%;
    border-radius: 2rem;
    line-height: 2.5rem;
    margin-bottom: 1rem;
    outline:none;
    text-indent: 2rem;
`;

const Form = Styled.form`
    text-align: center;
    margin-bottom: 1rem;
`;

const SubmitBtn = Styled(Button)`
    font-size: 1.3rem;
`;

const RegisterBtn = Styled(Button)`
    width: 50%;
    line-height: 2.5rem;
    font-size: 1.5rem;
`;