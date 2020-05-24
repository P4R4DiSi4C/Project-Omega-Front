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
            <FlexBtn className="hide_mobile" w="20%" w_mobile="100%" j_content_mobile="center" j_content="flex-end">
                    <Button color="teal">Connexion</Button>
            </FlexBtn>

            {is_extended &&
                <FlexBtn className="hide_desktop" w="20%" w_mobile="100%" j_content_mobile="center" j_content="flex-end">
                    <Button color="teal">Connexion</Button>
                </FlexBtn>
            }

            <FlexHamburger w="20%" j_content="flex-end">
                <FontAwesomeIcon icon={is_extended ? "times" : "bars"} onClick={() => toggle()} />
            </FlexHamburger>
        </>
    )
};

const FlexBtn = Styled(Flex)`
    order:2;

    @media (max-width: 767.98px) {
        order:1;
    }
`;

const FlexHamburger = Styled(Flex)`
    display:none;
    text-align: right;

    @media (max-width: 767.98px) {
        display:block;
    }
`;