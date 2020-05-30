import React from 'react';

// libs
import Styled from 'styled-components';
import {navigate} from 'hookrouter';

// icons
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

// components
import Flex from '../../Flex';
import H1 from '../../H1';
import UserCard from '../../Profile/UserCard';
import Desc from '../../Profile/Header/desc';

export default ({store_name}) => {
    return (
        <>
            <Flex w="100%" j_content="flex-end" j_content_mobile="center">
                <H1>
                    <FontAwesomeIcon icon="store" color="#f7cc2f"/> {store_name}
                </H1>
            </Flex>
            <Flex w="100%" j_content="space-between" a_items="space-between" j_content_mobile="center" f_wrap>
                <Flex w="25%" w_mobile="100%" d="column">
                    <UserCard onClick={() => navigate("/profile/1")} profile_pic="/img/profile.jpg" username="AliceMerveille" stars="4" />
                </Flex>

                <FlexDesc w="72.5%" w_mobile="100%" j_content="space-between" a_items="flex-start" a_items_mobile="center" d="column">
                    <Desc desc="Hello, bienvenue sur mon vide-dressing, n'hésitez pas à me contacter si vous avez des questions ;)ide-dressing, n'hésitez pas à me contacter si vous avez des questions ;ide-dressing, n'hésitez pas à me contacter si vous avez des questions ;" location="Lausanne" />
                </FlexDesc>           
            </Flex>
        </>
    )
};


const FlexDesc = Styled(Flex)`
    padding-left: 2.5%;
    border-left: 0.1px solid #bbb;
`;