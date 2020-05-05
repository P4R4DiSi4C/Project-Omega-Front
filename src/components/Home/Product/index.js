import React from 'react';

// libs
import Styled from 'styled-components';
import Flex from '../../Flex';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faStore } from '@fortawesome/free-solid-svg-icons'

export default ({src, data, display_store_name}) => {
    return (
        <Flex percentage="20%" mobile="45%" align="flex-start" direction="column">
            {display_store_name &&
                <P>
                    <FontAwesomeIcon icon={faStore} color="#f7cc2f"/> {data.author_store_name}
                </P>       
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

const P = Styled.p`
    font-size:20px;
    font-weight:lighter;
    margin:0em;
    width:100%;
`;

const Image = Styled.img`
    width:100%;
`;

const Table = Styled.table`
    width: 100%;
    margin-top:1em;
    font-size:16px;
    font-weight:lighter;
`;

const Td = Styled.td`
    border: 1px solid black;    
`;