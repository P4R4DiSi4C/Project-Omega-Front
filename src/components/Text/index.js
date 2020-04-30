// libs
import Styled from 'styled-components';

export default Styled.span`
  font-family: ${props => props.fontFamily || props.theme.fontFamily};
  font-size: ${props => props.fontSize || props.theme.fontSize};
`;