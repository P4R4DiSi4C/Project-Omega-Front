import React from 'react';

// libs
import Styled from 'styled-components';
import {navigate} from 'hookrouter';

// icons
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { SRLWrapper } from "simple-react-lightbox";

// components
import Flex from '../../Flex';
import H2 from '../../H2';
import Stars from '../../Profile/UserCard/stars';
import Button from '../../Button';

export default ({store_name}) => {

    return (
        <>
            <Flex percentage="100%" align="space-between" align_items="space-between" mobile_align="center" wrap="wrap">
                <FlexCard percentage="20%" mobile="100%" align="flex-start" direction="column" onClick={() => navigate("/profile/1")}>
                    <ProfileImg percentage="70%" mobile="70%">
                        <Image src="/img/profile.jpg" />
                    </ProfileImg>
                    <Feedback>
                        <H2>
                            AliceMerveille
                        </H2>
                        <Stars stars_nb={4} />
                    </Feedback>
                </FlexCard>

                <FlexImgViewer percentage="80%" align="space-between" align_items="flex-start" mobile_items="center" direction="column">
                    <SRLWrapper>
                        <Flex percentage="100%" align="space-between" align_items="flex-start" wrap="wrap">
                            <ProductImg percentage="30%" mobile="50%">
                                <Image src="/img/test.jpeg" />
                            </ProductImg>
                            <ProductImg percentage="30%" mobile="50%">
                                <Image src="/img/test2.jpeg" />
                            </ProductImg>
                            <ProductImg percentage="30%" mobile="50%">
                                <Image src="/img/test2.jpeg" />
                            </ProductImg>
                        </Flex>
                    </SRLWrapper>
                </FlexImgViewer>           
            </Flex>
        </>
    )
};

const FlexCard = Styled(Flex)`
    &:hover{
        cursor:pointer;
    }
`;

const Feedback = Styled.div``;

const FlexImgViewer = Styled(Flex)`
    padding-left: 2.5%;
    border-left: 0.1px solid #bbb;
`;

const Image = Styled.img`
    width:100%;
    min-height: 100%;
    max-height: 100%;
    object-fit: cover;
`;

const ProfileImg = Styled(Flex)`
    height: 12vw;

    @media (max-width: 768px) {
        height: 60vw;
    }
`;

const ProductImg = Styled(Flex)`
    height: 27vw;
    
    @media (max-width: 768px) {
        height: 58vw;
    }
`;