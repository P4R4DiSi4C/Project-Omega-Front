import React from 'react'

import {usePath, navigate} from 'raviger';

// libs
import Styled from 'styled-components';

// icons
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

// components
import Button from '../../Button';
import Flex from '../../Flex';

export default ({is_extended, toggle}) => {
    const path = usePath();

    return (
        <>
            <FlexBtn className="hide_mobile" w="20%" w_mobile="100%" j_content_mobile="center" j_content="flex-end">
                    <Button onClick={() => navigate(path, {m:1,c:0})} solid>Se connecter</Button>
            </FlexBtn>

            {is_extended &&
                <FlexBtn className="hide_desktop" w="20%" w_mobile="100%" j_content_mobile="center" j_content="flex-end">
                    <Button onClick={() => navigate(path, {m:1,c:0})} solid>Se connecter</Button>
                </FlexBtn>
            }

            <FlexHamburger w="20%" j_content="flex-end">
                <FontAwesomeIcon icon={is_extended ? "times" : "bars"} size="lg" onClick={() => toggle()} />
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