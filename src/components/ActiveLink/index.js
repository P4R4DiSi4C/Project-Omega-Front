// libs
import React from 'react';
import Styled from 'styled-components';
import { usePath, Link } from 'raviger';

export default ({ className, children, href, exact }) => {
  const path = usePath();
  const active = exact ? path === href : path.includes(href);

  return (
    <ActiveLink className={className} href={href} is_active={active ? 1 : 0}>{children}</ActiveLink>
  );
};

const ActiveLink = Styled(Link)`
    text-decoration: none;
    color: ${props => props.is_active ? props.theme.main : 'black'};
    font-weight: 550;

    &:hover{
        opacity:0.7;
    }
`;