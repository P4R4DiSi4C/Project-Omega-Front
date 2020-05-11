import React from 'react';

// libs
import Styled from 'styled-components';

// icons
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

// components
import Flex from '../../Flex';
import H1 from '../../H1';
import Button from '../../Button';

export default ({store_name}) => {
    return (
        <>
            <Flex percentage="100%" align="flex-end" mobile_align="center">
                <H1>
                    <FontAwesomeIcon icon="store" color="#f7cc2f"/> {store_name}
                </H1>
            </Flex>
            <Flex percentage="100%" align="space-between" align_items="space-between" mobile_align="center" wrap="wrap">
                <Flex percentage="25%" mobile="100%" align="flex-start" direction="column">
                    <Image src={"/img/profile.jpg"} />
                    <FlexButtons percentage="100%" align="space-between">
                        <ButtonProfile color="#f7cc2f">
                            SUIVRE
                        </ButtonProfile>
                        <ButtonProfile color="#f7cc2f">
                            CONTACTER
                        </ButtonProfile>
                    </FlexButtons>
                    <H1>
                        AliceMerveille
                    </H1>
                    <FlexStars percentage="100%" align="center">
                        <FontAwesomeIcon icon={['fa', 'star']} size="lg" color="#f7cc2f"/>
                        <FontAwesomeIcon icon={['fa', 'star']} size="lg" color="#f7cc2f"/>
                        <FontAwesomeIcon icon={['fa', 'star']} size="lg" color="#f7cc2f"/>
                        <FontAwesomeIcon icon={['fa', 'star']} size="lg" color="#f7cc2f"/>
                        <FontAwesomeIcon icon={['far', 'star']} size="lg" color="#f7cc2f"/>  
                    </FlexStars>
                </Flex>              
                <FlexDesc percentage="72.5%" mobile="100%" align="space-between" align_items="flex-start" mobile_items="center" direction="column">
                    <Flex percentage="80%">
                        <Desc>Hello, bienvenue sur mon vide-dressing, n'hésitez pas à me contacter si vous avez des questions ;)ide-dressing, n'hésitez pas à me contacter si vous avez des questions ;ide-dressing, n'hésitez pas à me contacter si vous avez des questions ;</Desc>
                    </Flex>
                    <Flex percentage="auto">
                        <Location>
                            <FontAwesomeIcon icon="map-marker-alt" size="lg" color="#f7cc2f"/> Lausanne 
                        </Location>
                    </Flex>
                </FlexDesc>           
            </Flex>
        </>
    )
};

const Image = Styled.img`
    width:90%;
`;

const FlexButtons = Styled(Flex)`
    margin-top:1em;
    margin-bottom:1em;
`;

const FlexStars = Styled(Flex)`
`;

const FlexDesc = Styled(Flex)`
    padding-left: 2.5%;
    border-left: 0.1px solid #bbb;
`;

const ButtonProfile = Styled(Button)`
    width:45%;
    padding:0.4rem;
`;

const Desc = Styled.p`
    font-weight: lighter;
    font-size:1.2rem;
    text-align:justify;
`;

const Location = Styled.span`
    font-weight: lighter;
    font-size:1.2rem;
`;