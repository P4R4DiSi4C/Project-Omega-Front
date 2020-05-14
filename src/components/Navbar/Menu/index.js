import React from 'react'

// libs
import Styled from 'styled-components';

// icons
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

// components
import Button from '../../Button';
import Flex from '../../Flex';

export default ({is_extended, toggle}) => {
    return (
        <>
            <FlexBtn className="hide_mobile" percentage="20%" mobile="100%" mobile_align="center" align="flex-end">
                    <Button color="teal">Connexion</Button>
            </FlexBtn>

            {is_extended &&
                <FlexBtn className="hide_desktop" percentage="20%" mobile="100%" mobile_align="center" align="flex-end">
                    <Button color="teal">Connexion</Button>
                </FlexBtn>
            }

            <FlexHamburger percentage="20%" align="flex-end">
                <FontAwesomeIcon icon={is_extended ? "times" : "bars"} onClick={() => toggle()} />
            </FlexHamburger>
        </>
    )
};

const FlexBtn = Styled(Flex)`
    order:2;

    @media (max-width: 768px) {
        order:1;
    }
`;

const FlexHamburger = Styled(Flex)`
    display:none;
    text-align: right;

    @media (max-width: 768px) {
        display:block;
    }
`;