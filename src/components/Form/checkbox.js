import React from 'react';

// libs
import Styled from 'styled-components';

export default (props) => {
    return(
        <Label>
            <Checkbox
                type="checkbox" 
                {...props}
            />
            <CheckboxText>{props.text}</CheckboxText>
        </Label>
    );
}


const Label = Styled.label`
    width:100%;
    display: flex;
    align-items: center;
    cursor:pointer;
    margin-bottom: 1rem;
    justify-content: space-around;
`;

const Checkbox = Styled.input`
    margin-right: 1rem;
`;

const CheckboxText = Styled.span`
    font-weight: lighter;
    font-size:0.8rem;
`;