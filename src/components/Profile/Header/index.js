import React from 'react';

// libs
import Styled from 'styled-components';

// icons
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

// components
import Flex from '../../Flex';
import H1 from '../../H1';
import UserCard from '../UserCard';
import Desc from './desc';

export default ({username}) => {
    return (
        <>
            <Flex percentage="100%" align="flex-end" mobile_align="center">
                <H1>
                    <FontAwesomeIcon icon="user" color="#f7cc2f"/> Profile de {username}
                </H1>
            </Flex>
            <Flex percentage="100%" align="space-between" align_items="space-between" mobile_align="center" wrap="wrap">
                <Flex percentage="25%" mobile="100%" align="flex-start" direction="column">
                    <UserCard profile_pic="/img/profile.jpg" username="AliceMerveille" stars="4" />
                </Flex>

                <FlexDesc percentage="72.5%" mobile="100%" align="space-between" align_items="flex-start" mobile_align="center" mobile_items="center" direction="column">
                    <Desc show_verified desc="Hello, bienvenue sur mon vide-dressing, n'hésitez pas à me contacter si vous avez des questions ;)ide-dressing, n'hésitez pas à me contacter si vous avez des questions ;ide-dressing, n'hésitez pas à me contacter si vous avez des questions ;" location="Lausanne" />
                </FlexDesc>           
            </Flex>
        </>
    )
};


const FlexDesc = Styled(Flex)`
    padding-left: 2.5%;
    border-left: 0.1px solid #bbb;
`;