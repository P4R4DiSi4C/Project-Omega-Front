import React from 'react';

// libs
import Styled from 'styled-components';
import Flex from '../../Flex';

// icons
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

// components
import H3 from '../../H3';

export default ({src, data, display_store_name}) => {
    return (
        <Flex percentage="20%" mobile="45%" align="flex-start" align_items="flex-start" direction="column">
            {display_store_name &&
                <H3>
                    <FontAwesomeIcon icon="store" color="#f7cc2f"/> {data.author_store_name}
                </H3>       
            }
            <Image src={src} />
            <Table className="tableprod">
                <tbody>
                    <tr>
                        <Td>{data.price} CHF</Td>
                        <Td className="text-right">Porté {data.wear}x</Td>
                    </tr>
                    <tr>
                        <Td>{data.size}</Td>
                        <Td className="text-right">{data.store}</Td>
                    </tr>
                </tbody>
            </Table>
        </Flex>
    )
};

const Image = Styled.img`
    width:100%;
`;

const Table = Styled.table`
    width: 100%;
    font-size:1rem;
    font-weight:lighter;
    margin-top:1em;
    
    @media (max-width: 768px) {
        margin-top:0em;
    }
`;

const Td = Styled.td`
    border: 1px solid black;    
`;