import React from 'react';

// libs
import Styled from 'styled-components';
import Flex from '../../Flex';

export default ({src, data}) => {
    return (
        <Flex percentage="20%" align="flex-start">
            <Flex percentage="100%" align="flex-start" direction="column">
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
        </Flex>
    )
};



const Image = Styled.img`
    width:100%;
`;

const Table = Styled.table`
    width: 100%;
    margin-top:1em;
    font-size:1.3vw;
    font-weight:lighter;
`;

const Td = Styled.td`
    border: 1px solid black;    
`;