import React from 'react';

// libs
import Styled from 'styled-components';
import Flex from '../../Flex';

// icons
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

// components
import H3 from '../../H3';
import H4 from '../../H4';

export default ({src, data, display_store_name, items_nb}) => {
    let percentage = "21%";
    if(items_nb === "5")
        percentage = "18%";

    let multi_infos = true;
    if(data.type && data.type !== "0")
        multi_infos = false;

    return (
        <Flex percentage={percentage} mobile="45%" align="flex-start" align_items="flex-start" direction="column">
            {display_store_name &&
                <H3>
                    <FontAwesomeIcon icon="store" color="#f7cc2f"/> {data.author_store_name}
                </H3>       
            }
            <FlexImg percentage="100%">
                <Image src={src} />
            </FlexImg>
            <FlexPrice percentage="100%" align="center">
                <H4>{data.price} CHF</H4>
            </FlexPrice>
            <Flex percentage="100%" align={multi_infos ? 'space-between' : 'center'}>
                {multi_infos ?
                    <>
                        <H4>{data.size}</H4>
                        <H4>{data.store}</H4>
                    </>
                : <H4>{data.product}</H4>
                }
            </Flex>
        </Flex>
    )
};

const Image = Styled.img`
    width:100%;
    min-height: 100%;
    max-height: 100%;
    object-fit: cover;
`;

const FlexImg = Styled(Flex)`
    height: 27vw;
    @media (max-width: 768px) {
        height: 58vw;
    }
`;

const FlexPrice = Styled(Flex)`
    border-bottom:0.1px solid #bbb;
`;